// FabricJS
export default {
  path: '/fabric',
  name: 'Fabric',
  component: () => import('@/views/FabricJS/index.vue'),
  meta: {
    navState: true,
    navName: 'FabricJS',
    icon: 'el-icon-cherry'
  },
  children: [
    {
      path: 'fabric-basic',
      name: 'FabricBasic',
      component: () => import('@/views/FabricJS/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'fabric-stated',
          name: 'FabricStated',
          component: () => import('@/views/FabricJS/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'fabric-setCanvasWH',
          name: 'FabricSetCanvasWH',
          component: () => import('@/views/FabricJS/Basic/pages/SetCanvasWH/SetCanvasWH.vue'),
          meta: {
            navState: true,
            navName: '设置画布宽高'
          }
        },
        {
          path: 'fabric-basic-graph',
          name: 'FabricBasicGraph',
          component: () => import('@/views/FabricJS/Basic/pages/BasicGraph/BasicGraph.vue'),
          meta: {
            navState: true,
            navName: '基础图形'
          }
        },
        {
          path: 'fabric-removeObj',
          name: 'FabricRemoveObj',
          component: () => import('@/views/FabricJS/Basic/pages/RemoveObj/RemoveObj.vue'),
          meta: {
            navState: true,
            navName: '删除元素(对象)'
          }
        },
        {
          path: 'fabric-straightenObject',
          name: 'FabricStraightenObject',
          component: () => import('@/views/FabricJS/Basic/pages/StraightenObject/StraightenObject.vue'),
          meta: {
            navState: true,
            navName: '摆正元素(对象)'
          }
        },
        {
          path: 'fabric-centerObject',
          name: 'FabricCenterObject',
          component: () => import('@/views/FabricJS/Basic/pages/CenterObject/CenterObject.vue'),
          meta: {
            navState: true,
            navName: '居中元素(对象)'
          }
        },
        {
          path: 'fabric-use-image',
          name: 'FabricUseImage',
          component: () => import('@/views/FabricJS/Basic/pages/UseImage/UseImage.vue'),
          meta: {
            navState: true,
            navName: '使用图片'
          }
        },
        {
          path: 'fabric-draw-path',
          name: 'DrawPath',
          component: () => import('@/views/FabricJS/Basic/pages/DrawPath/DrawPath.vue'),
          meta: {
            navState: true,
            navName: '绘制路径'
          }
        },
        {
          path: 'fabric-animation',
          name: 'Animation',
          component: () => import('@/views/FabricJS/Basic/pages/Animation/Animation.vue'),
          meta: {
            navState: true,
            navName: '动画'
          }
        },
        {
          path: 'fabric-filter',
          name: 'Filter',
          component: () => import('@/views/FabricJS/Basic/pages/Filter/Filter.vue'),
          meta: {
            navState: true,
            navName: '滤镜'
          }
        },
        {
          path: 'fabric-gradient',
          name: 'Gradient',
          component: () => import('@/views/FabricJS/Basic/pages/Gradient/Gradient.vue'),
          meta: {
            navState: true,
            navName: '渐变'
          }
        },
        {
          path: 'fabric-color',
          name: 'Color',
          component: () => import('@/views/FabricJS/Basic/pages/Color/Color.vue'),
          meta: {
            navState: true,
            navName: '颜色转换/颜色叠加'
          }
        },
        {
          path: 'fabric-text',
          name: 'Text',
          component: () => import('@/views/FabricJS/Basic/pages/Text/Text.vue'),
          meta: {
            navState: true,
            navName: '文本'
          }
        },
        {
          path: 'fabric-i-text',
          name: 'IText',
          component: () => import('@/views/FabricJS/Basic/pages/IText/IText.vue'),
          meta: {
            navState: true,
            navName: '可编辑文本'
          }
        },
        {
          path: 'fabric-text-box',
          name: 'Textbox',
          component: () => import('@/views/FabricJS/Basic/pages/Textbox/Textbox.vue'),
          meta: {
            navState: true,
            navName: '文本框'
          }
        },
        {
          path: 'fabric-event',
          name: 'Event',
          component: () => import('@/views/FabricJS/Basic/pages/Event/Event.vue'),
          meta: {
            navState: true,
            navName: '事件'
          }
        },
        {
          path: 'fabric-mousePoint',
          name: 'MousePoint',
          component: () => import('@/views/FabricJS/Basic/pages/MousePoint/MousePoint.vue'),
          meta: {
            navState: true,
            navName: '鼠标位置'
          }
        },
        {
          path: 'fabric-groups',
          name: 'Groups',
          component: () => import('@/views/FabricJS/Basic/pages/Groups/Groups.vue'),
          meta: {
            navState: true,
            navName: '分组'
          }
        },
        {
          path: 'fabric-free-drawing',
          name: 'FreeDrawing',
          component: () => import('@/views/FabricJS/Basic/pages/FreeDrawing/FreeDrawing.vue'),
          meta: {
            navState: true,
            navName: '自由绘画'
          }
        },
        {
          path: 'fabric-locking',
          name: 'Locking',
          component: () => import('@/views/FabricJS/Basic/pages/Locking/Locking.vue'),
          meta: {
            navState: true,
            navName: '锁定'
          }
        },
        {
          path: 'fabric-changing-borders-corners',
          name: 'ChangingBordersCorners',
          component: () => import('@/views/FabricJS/Basic/pages/ChangingBordersCorners/ChangingBordersCorners.vue'),
          meta: {
            navState: true,
            navName: '修改边角状态'
          }
        },
        {
          path: 'fabric-selected-style',
          name: 'SelectedStyle',
          component: () => import('@/views/FabricJS/Basic/pages/SelectedStyle/SelectedStyle.vue'),
          meta: {
            navState: true,
            navName: '选中状态的样式'
          }
        },
        {
          path: 'fabric-zoom-and-panning',
          name: 'ZoomAndPanning',
          component: () => import('@/views/FabricJS/Basic/pages/ZoomAndPanning/ZoomAndPanning.vue'),
          meta: {
            navState: true,
            navName: '缩放和平移'
          }
        },
        {
          path: 'fabric-absolutePan',
          name: 'AbsolutePan',
          component: () => import('@/views/FabricJS/Basic/pages/AbsolutePan/AbsolutePan.vue'),
          meta: {
            navState: true,
            navName: '平移画布'
          }
        },
        {
          path: 'fabric-moveTo',
          name: 'MoveTo',
          component: () => import('@/views/FabricJS/Basic/pages/MoveTo/MoveTo.vue'),
          meta: {
            navState: true,
            navName: '图层层级操作'
          }
        },
        {
          path: 'fabric-clip-path',
          name: 'ClipPath',
          component: () => import('@/views/FabricJS/Basic/pages/ClipPath/ClipPath.vue'),
          meta: {
            navState: true,
            navName: '路径裁剪'
          }
        },
        {
          path: 'fabric-serialization',
          name: 'Serialization',
          component: () => import('@/views/FabricJS/Basic/pages/Serialization/Serialization.vue'),
          meta: {
            navState: true,
            navName: '序列化'
          }
        },
        {
          path: 'fabric-deserialization',
          name: 'Deserialization',
          component: () => import('@/views/FabricJS/Basic/pages/Deserialization/Deserialization.vue'),
          meta: {
            navState: true,
            navName: '反序列化'
          }
        }
      ]
    },
    {
      path: 'fabric-demo',
      name: 'FabricDemo',
      component: () => import('@/views/FabricJS/Demo/index.vue'),
      meta: {
        navState: true,
        navName: '模板',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'fabric-custom-control-render',
          name: 'FabricCustomControlRender',
          component: () => import('@/views/FabricJS/Demo/pages/CustomControlRender/CustomControlRender.vue'),
          meta: {
            navState: true,
            navName: '自定义控件'
          }
        },
        {
          path: 'fabric-manage-selection',
          name: 'FabricManageSelection',
          component: () => import('@/views/FabricJS/Demo/pages/ManageSelection/ManageSelection.vue'),
          meta: {
            navState: true,
            navName: '框选管理'
          }
        },
        {
          path: 'fabric-copy-paste',
          name: 'FabricCopyPaste',
          component: () => import('@/views/FabricJS/Demo/pages/CopyPaste/CopyPaste.vue'),
          meta: {
            navState: true,
            navName: '复制粘贴'
          }
        },
        {
          path: 'fabric-animation-easing',
          name: 'FabricAnimationEasing',
          component: () => import('@/views/FabricJS/Demo/pages/AnimationEasing/AnimationEasing.vue'),
          meta: {
            navState: true,
            navName: '动画集'
          }
        },
        {
          path: 'fabric-hovering',
          name: 'FabricHovering',
          component: () => import('@/views/FabricJS/Demo/pages/Hovering/Hovering.vue'),
          meta: {
            navState: true,
            navName: '鼠标经过时'
          }
        },
        {
          path: 'fabric-customization',
          name: 'FabricCustomization',
          component: () => import('@/views/FabricJS/Demo/pages/Customization/Customization.vue'),
          meta: {
            navState: true,
            navName: '自定义对象操作方式'
          }
        },
        {
          path: 'fabric-context-menu',
          name: 'FabricContextMenu',
          component: () => import('@/views/FabricJS/Demo/pages/ContextMenu/ContextMenu.vue'),
          meta: {
            navState: true,
            navName: '右键菜单'
          }
        },
        {
          path: 'fabric-changeImage',
          name: 'FabricChangeImage',
          component: () => import('@/views/FabricJS/Demo/pages/ChangeImage/ChangeImage.vue'),
          meta: {
            navState: true,
            navName: '修改图片'
          }
        },
        {
          path: 'fabric-uploadImg',
          name: 'FabricUploadImg',
          component: () => import('@/views/FabricJS/Demo/pages/UploadImg/UploadImg.vue'),
          meta: {
            navState: true,
            navName: '上传背景图'
          }
        },
        {
          path: 'fabric-createRect',
          name: 'FabricCreateRect',
          component: () => import('@/views/FabricJS/Demo/pages/CreateRect/CreateRect.vue'),
          meta: {
            navState: true,
            navName: '自由绘制矩形'
          }
        },
        {
          path: 'fabric-createCircle',
          name: 'FabricCreateCircle',
          component: () => import('@/views/FabricJS/Demo/pages/CreateCircle/CreateCircle.vue'),
          meta: {
            navState: true,
            navName: '自由绘制圆形'
          }
        },
        {
          path: 'fabric-createEllipse',
          name: 'FabricCreateEllipse',
          component: () => import('@/views/FabricJS/Demo/pages/CreateEllipse/CreateEllipse.vue'),
          meta: {
            navState: true,
            navName: '自由绘制椭圆形'
          }
        },
        {
          path: 'fabric-createTriangle',
          name: 'FabricCreateTriangle',
          component: () => import('@/views/FabricJS/Demo/pages/CreateTriangle/CreateTriangle.vue'),
          meta: {
            navState: true,
            navName: '自由绘制三角形'
          }
        },
        {
          path: 'fabric-createLine',
          name: 'FabricCreateLine',
          component: () => import('@/views/FabricJS/Demo/pages/CreateLine/CreateLine.vue'),
          meta: {
            navState: true,
            navName: '自由绘制线段'
          }
        },
        {
          path: 'fabric-createPolyline',
          name: 'FabricCreatePolyline',
          component: () => import('@/views/FabricJS/Demo/pages/CreatePolyline/CreatePolyline.vue'),
          meta: {
            navState: true,
            navName: '自由绘制折线'
          }
        },
        {
          path: 'fabric-createPolygon',
          name: 'FabricCreatePolygon',
          component: () => import('@/views/FabricJS/Demo/pages/CreatePolygon/CreatePolygon.vue'),
          meta: {
            navState: true,
            navName: '自由绘制多边形'
          }
        }
      ]
    }
  ]
}