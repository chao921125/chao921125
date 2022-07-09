/*
* authot:liaolunling
* data: 2017/11/23
* */

var config = {
    isDraw: false,
    canvasWidth: window.innerWidth - 50,
    canvasHeight: window.innerHeight - 120,
    brushSize: 12,
    brushColor: "red",
    brushCap: "round",
    brushJoin: "round",
}

console.log('config:', config)

//函数库
lyin = {

    init: function (canvas, context) {
        if (canvas.nodeType === 1) {
            this.ndCanvas = canvas;
        }
        context ? this.context = context : this.context = canvas.getContext("2d");
        canvas.width = config.canvasWidth;
        canvas.height = config.canvasHeight;
    },

    //adjust change from config
    adjust:function () {

        this.ndCanvasLeft = this.ndCanvas.offsetLeft;
        this.ndCanvasTop = this.ndCanvas.offsetTop;

        this.context.lineCap = config.brushCap;
        this.context.lineJoin = config.brushJoin;
        this.context.lineWidth = config.brushSize;
        this.context.strokeStyle = config.brushColor;
    },

    //绘制函数
    draw: function (context) {
        var _this = this;
        this.ndCanvas.addEventListener("mousedown", function (event) {
            console.log(_this.context)
            config.isDraw = true;
            lyin.adjust();
            var pageX = event.pageX;
            var pageY = event.pageY;
            _this.context.beginPath()
            _this.context.moveTo(pageX - this.ndCanvasLeft, pageY - this.ndCanvasTop);
        }.bind(this))

        this.ndCanvas.addEventListener("mousemove", function (event) {
            if (config.isDraw) {
                var pageX = event.pageX;
                var pageY = event.pageY;
                _this.context.lineTo(pageX - this.ndCanvasLeft, pageY - this.ndCanvasTop);
                _this.context.stroke()
            }
        }.bind(this))

        this.ndCanvas.addEventListener("mouseup", function (event) {
            config.isDraw = false;
        })
    },

    //change brush color
    changeBrushColor: function (color) {
        if (typeof color === "string")
            config.brushColor = color;
    },

    //change brush size
    changeBrushSizde(size){
        if(typeof  size === "number")
            config.brushSize = size;
    }

}


window.onload = function () {
    var ndCanvas = document.getElementById("canvas");
    // var context = canvas.getContext("2d");

    //init
    lyin.init(ndCanvas)
    lyin.draw()

    //change brush
    var brush = document.querySelectorAll(".brush-container .brush");

    for (var i = 0, brushLen = brush.length; i < brushLen; i++) {
        (function (i) {
            var currBrush = brush[i];
            var currBurshColor = currBrush.getAttribute("data-color");
            currBrush.style.backgroundColor = currBurshColor;
            currBrush.onclick = function () {
                $(this).addClass("active").siblings().removeClass("active");
                lyin.changeBrushColor(currBurshColor)
            }
        })(i)
    }

    var ndBrushSizeBtn = $(".brush-size .size-btn");
    var ndBrushSizeItem = $(".brush-size .brush-size-item");

    ndBrushSizeBtn.click(function() {
        $('.brush-size').toggleClass('shrink')
    })

    ndBrushSizeItem.click(function () {
        var className = $(this).attr("class");
        var size = className.match(/\d+/g)>>>0;
        lyin.changeBrushSizde(size)
        ndBrushSizeBtn.text(`${size}px`)
    })

}
