let zoomLimit = [0.1, 2];
let zoomCurrent = 1;
let zoomTimes = 200;

const dragEnum = {
  IDLE: 0,
  DRAG_START: 1,
  DRAGGING: 12,
  MOVE_START: 2,
  MOVING: 21,
};

let canvasTarget = {
  // 清除画布
  clear: 1000,
  // 全局标记是否拖拽
  isDragFlag: false,
  // 缩放倍数 默认 1
  scale: 1,
  // 缩放步长 默认 1
  scaleStep: 0.1,
  scaleStepNum: 5,
  // 缩放倍数 最大
  scaleMax: 2,
  // 缩放倍数 最小
  scaleMin: 0.5,
  // 缩放 偏移量
  scaleOffset: {
    x: 0,
    y: 0,
  },
  // 拖拽对象的数据
  dragData: [],
  // 拖拽对象是否开始拖拽
  dragStatus: dragEnum.IDLE,
  // 拖拽对象
  dragTarget: null,
  // 拖拽对象 最后一次拖拽的位置
  dragLastPosition: null,
  // 拖拽对象的偏移量
  dragOffsetPosition: null,
};

;(() => {
  resizeWindow();
  window.onresize = () => {
    resizeWindow();
  };
})(window);

function resizeWindow() {
  // 固定容易的大小
  // const configWindow = {
  //   maxWidth: 4000,
  //   maxHeight: 2000,
  //   minWidth: 2000,
  //   minHeight: 1000,
  // }

  // let divWidth = document.body.clientWidth;
  // let divHeight = document.body.clientHeight;

  let cWidth = document.body.clientWidth;
  // if (cWidth > configWindow.maxWidth) cWidth = configWindow.maxWidth;
  // if (cWidth < configWindow.minWidth) cWidth = configWindow.minWidth;

  let cHeight = document.body.clientHeight;
  // if (cHeight > configWindow.maxHeight) cHeight = configWindow.maxHeight;
  // if (cHeight < configWindow.minHeight) cHeight = configWindow.minHeight;

  document.querySelector("#mapBox").setAttribute("width", cWidth.toString());
  document.querySelector("#mapBox").setAttribute("height", cHeight.toString());
  document.querySelector("#canvas").setAttribute("width", cWidth.toString());
  document.querySelector("#canvas").setAttribute("height", cHeight.toString());
  initDraw();
}

function initDraw() {
  //获得画板
  let canvas = document.getElementById('canvas');
  if(!canvas.getContext) return false;
  //获得绘画环境
  let ctx = canvas.getContext('2d');
  ctx.save();

  drawDragImg(canvas, ctx, 200, 200, 20);
  canvasTarget.dragData.push({
    x: 200,
    y: 200,
    r: 20
  });
  drawImg(canvas, ctx);
  // drawCanvasGrid(canvas, ctx);

  canvasEvent(canvas, ctx);
}

// 绘画容器的背景
function drawCanvasGrid(canvas, ctx) {
  // 网格部分参数
  const gridOptions = {
    left: 100,
    top: 100,
    // 正方形
    size: 1100,
    // 非正方形
    width: 550,
    height: 550,
    // 正方形
    step: 5,
    // 非正方形
    stepX: 5,
    stepY: 5,
    colorLine: "#1D1C2D",
    lineWidth: 0.1,
  }

  ctx.fillStyle = gridOptions.colorLine;
  ctx.lineWidth = gridOptions.lineWidth;

  ctx.beginPath();
  ctx.strokeRect(gridOptions.left, gridOptions.top, gridOptions.size, gridOptions.size);
  // row
  for (let i = gridOptions.step + gridOptions.lineWidth; i < gridOptions.size; i += gridOptions.step) {
    ctx.beginPath();
    ctx.moveTo(gridOptions.left, i + gridOptions.top);
    ctx.lineTo(gridOptions.size + gridOptions.left, i + gridOptions.top);
    ctx.closePath();
    ctx.stroke();
  }
  // column
  for (let i = gridOptions.step + gridOptions.lineWidth; i < gridOptions.size; i += gridOptions.step) {
    // 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
    ctx.beginPath();
    // 把画笔移动到指定的坐标
    ctx.moveTo(i + gridOptions.left, gridOptions.top);
    // 绘制一条从当前位置到指定坐标(200, 50)的直线.
    ctx.lineTo(i + gridOptions.left, gridOptions.size + gridOptions.top);
    //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
    ctx.closePath();
    // 绘制路径。
    ctx.stroke();
  }
}

// 绘画 不可拖动图形
function drawImg(canvas, ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(222, 222, 20, 20);
  ctx.fillStyle = "blue";
  ctx.fillRect(262, 222, 40, 40);
}

// 绘画 可拖动图形
function drawDragImg(canvas, ctx, cx, cy, r) {
  ctx.save();
  ctx.beginPath();
  // if (canvasTarget.dragTarget) {
  //   ctx.clearRect(canvasTarget.dragLastPosition.x, canvasTarget.dragLastPosition.y, cx, cy);
  // }
  ctx.strokeStyle = "blue";
  ctx.arc(cx, cy, r, 0, Math.PI * 3);
  ctx.stroke();

  ctx.closePath();
  ctx.restore();
}

// 注册事件
function canvasEvent(canvas, ctx) {
  canvas.onmousedown = (event) => {
    canvas.style.cursor = "pointer";
    canvasTarget.isDragFlag = false;
    // canvasDrag(canvas, ctx);
    // 拖拽指定对象
    const canvasPosition = getCanvasPosition(event, canvasTarget.scaleOffset, canvasTarget.scale);
    const dragImgRef = isDrag(canvasPosition, canvasTarget.dragData);
    if (dragImgRef && canvasTarget.dragStatus === dragEnum.IDLE) {
      canvasTarget.dragTarget = dragImgRef;
      canvasTarget.dragStatus = dragEnum.DRAG_START;
      canvasTarget.dragLastPosition = canvasPosition;
      canvasTarget.dragOffsetPosition = canvasPosition;
    } else if (!dragImgRef) {
      canvasTarget.dragStatus = dragEnum.MOVE_START;
      canvasTarget.dragLastPosition = canvasPosition;
      canvasTarget.dragOffsetPosition = canvasPosition;
    }
  }
  canvas.onmousemove = (event) => {
    canvasTarget.isDragFlag = true;
    const canvasPosition = getCanvasPosition(event, canvasTarget.scaleOffset, canvasTarget.scale);
    if (isDrag(canvasPosition, canvasTarget.dragData)) {
      canvas.style.cursor = "all-scroll";
    } else {
      canvas.style.cursor = "default";
    }
    if (canvasTarget.dragStatus === dragEnum.DRAG_START && getDistance(canvasPosition, canvasTarget.dragLastPosition) > canvasTarget.scaleStepNum) {
      canvasTarget.dragStatus = dragEnum.DRAGGING;
      canvasTarget.dragOffsetPosition = canvasPosition;
    } else if (canvasTarget.dragStatus === dragEnum.DRAGGING) {
      canvasTarget.dragTarget.x += canvasPosition.x - canvasTarget.dragOffsetPosition.x;
      canvasTarget.dragTarget.y += canvasPosition.y - canvasTarget.dragOffsetPosition.y;
      ctx.clearRect(0, 0, canvas.width * canvasTarget.clear * canvasTarget.scale, canvas.height * canvasTarget.clear * canvasTarget.scale);
      drawDragImg(canvas, ctx, canvasTarget.dragTarget.x, canvasTarget.dragTarget.y, canvasTarget.dragTarget.r);
      canvasTarget.dragOffsetPosition = canvasPosition;
      drawImg(canvas, ctx);
    } else if (canvasTarget.dragStatus === dragEnum.MOVE_START && getDistance(canvasPosition, canvasTarget.dragLastPosition) > canvasTarget.scaleStepNum) {
      canvasTarget.dragStatus = dragEnum.MOVING;
      canvasTarget.dragOffsetPosition = canvasPosition;
    } else if (canvasTarget.dragStatus === dragEnum.MOVING) {
      canvasTarget.scaleOffset.x += canvasPosition.x - canvasTarget.dragOffsetPosition.x;
      canvasTarget.scaleOffset.y += canvasPosition.y - canvasTarget.dragOffsetPosition.y;

      ctx.setTransform(canvasTarget.scale, 0, 0, canvasTarget.scale, canvasTarget.scaleOffset.x, canvasTarget.scaleOffset.y);

      ctx.clearRect(0, 0, canvas.width * canvasTarget.clear * canvasTarget.scale, canvas.height * canvasTarget.clear * canvasTarget.scale);
      canvasTarget.dragData.forEach((item) => {drawDragImg(canvas, ctx, item.x, item.x, item.r);});
      canvasTarget.dragOffsetPosition = canvasPosition;

      drawImg(canvas, ctx);
    }
  }
  canvas.onmouseup = (event) => {
    canvas.style.cursor = "default";
    if (canvasTarget.dragStatus === dragEnum.DRAG_START || canvasTarget.dragStatus === dragEnum.DRAGGING
      || canvasTarget.dragStatus === dragEnum.MOVE_START || canvasTarget.dragStatus === dragEnum.MOVING
    ) {
      canvasTarget.dragStatus = dragEnum.IDLE;
      canvasTarget.dragTarget = null;
      canvasTarget.dragLastPosition = null;
      canvasTarget.dragOffsetPosition = null;
    }
    if (canvasTarget.isDragFlag) {
      console.log("drag");
    } else {
      console.log("no drag");
    }
  }
  canvas.onmousewheel = (event) => {
    // console.log("onmousewheel", event.offsetX, event.offsetY);
    // let zoom = event.deltaY > 0 ? -0.01 : 0.01;
    // zoomCurrent += zoom;
    // if (zoomCurrent > zoomLimit[0] && zoomCurrent < zoomLimit[1]) {
    //   canvasZoom(canvas, ctx, event.offsetX, event.offsetY, zoom);
    // } else if (zoomCurrent < zoomLimit[0]) {
    //   zoomCurrent = zoomLimit[0];
    // } else if (zoomCurrent > zoomLimit[1]) {
    //   zoomCurrent = zoomLimit[1];
    // }
  }
  canvas.onwheel = (event) => {
    const canvasPosition = getCanvasPosition(event, canvasTarget.scaleOffset, canvasTarget.scale);

    const dealX = canvasPosition.x / canvasTarget.scale * canvasTarget.scaleStep;
    const dealY = canvasPosition.y / canvasTarget.scale * canvasTarget.scaleStep;
    if (event.wheelDelta > 0 && canvasTarget.scale < canvasTarget.scaleMax) {
      canvasTarget.scaleOffset.x -= dealX;
      canvasTarget.scaleOffset.y -= dealY;
      canvasTarget.scale += canvasTarget.scaleStep;
    } else if (event.wheelDelta <= 0 && canvasTarget.scale > canvasTarget.scaleMin) {
      canvasTarget.scaleOffset.x += dealX;
      canvasTarget.scaleOffset.y += dealY;
      canvasTarget.scale -= canvasTarget.scaleStep;
    }
    ctx.setTransform(canvasTarget.scale, 0, 0, canvasTarget.scale, canvasTarget.scaleOffset.x, canvasTarget.scaleOffset.y);

    ctx.clearRect(0, 0, canvas.width * canvasTarget.clear * canvasTarget.scale, canvas.height * canvasTarget.clear * canvasTarget.scale);
    canvasTarget.dragData.forEach((item) => {drawDragImg(canvas, ctx, item.x, item.x, item.r);});
    canvasTarget.dragOffsetPosition = canvasPosition;

    drawImg(canvas, ctx);
  }
  // 区分出来点击事件和拖拽事件
  canvas.onclick = () => {
    canvas.style.cursor = "default";
  }
  // 双击放大不做
  canvas.ondblclick = () => {
    canvas.style.cursor = "default";
  }
}

// 缩放
function canvasZoom(canvas, ctx, offsetX, offsetY, zoom) {
  let obj = {
    fontX: 0,
    fontY: 0,
    fontZoom: 1,
    curZoom: 1,
    translateX: 0,
    translateY: 0,
  }
  obj.curZoom = obj.fontZoom + zoom;
  obj.translateX = offsetX - (offsetX - obj.translateX) * obj.curZoom / obj.fontZoom;
  obj.translateY = offsetY - (offsetY - obj.translateY) * obj.curZoom / obj.fontZoom;

  // 不使用 translate + scale 个缩放 会存在某些问题。
  ctx.translate(obj.translateX, obj.translateY);
  ctx.scale(obj.curZoom, obj.curZoom);
  ctx.clearRect(0, 0, canvas.width * zoomTimes, canvas.height * zoomTimes);
  // 绘画网格
  drawDragImg(canvas, ctx, 200, 200, 20);
  drawImg(canvas, ctx);
  // drawCanvasGrid(canvas, ctx);
  ctx.restore();
  obj.fontY = offsetY;
  obj.fontX = offsetX;
  obj.fontZoom = obj.curZoom;
}

// 拖拽 开始
function canvasDragStart(canvas, ctx) {
  
}
// 拖拽 中
function canvasDragIng(canvas, ctx) {

}
// 拖拽 结束
function canvasDragEnd(canvas, ctx) {

}

// 获取鼠标点击的位置
function getCanvasPosition(event, offset = { x: 0, y: 0}, scale = 1) {
  return {
    x: (event.offsetX - offset.x) / scale,
    y: (event.offsetY - offset.y) / scale,
  }
}

// 计算距离
function getDistance(pStart, pEnd) {
  return Math.sqrt((pStart.x - pEnd.x) ** 2 + (pStart.y - pEnd.y) ** 2);
}

// 判断当前鼠标活动位置是否是图形还是画布
function isDrag(position, data) {
  if (data) {
    // 计算当前鼠标活动点与目标点的距离
    for (let o of data) {
      if (getDistance(o, position) < o.r) return o;
    }
    return false;
  } else {}
}
