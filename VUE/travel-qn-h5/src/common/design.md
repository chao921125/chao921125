<!--
 * @Author: zi.yang
 * @Date: 2021-04-06 08:09:07
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-04-06 08:20:16
 * @Description: In User Settings Edit
 * @FilePath: \vue-travel\src\common\design.md
-->

# common 组件与 business 组件的设计与思考

## 文件层级设计

1. business 组件的设计

> business 组件分为 pages 和 components 两部分
>
> pages 使用子组件的页面，components 是各个子组件的实现与设计
>
> 如此拆分可以减少文件的层级，从而更好的去维护
>
> 再者因为 pages 可以尽量不去操作业务逻辑，所以可以将业务逻辑全部在 components 中实现

2. common 组件的设计

> common 组件将子组件和视图组件全部存在统一目录下
>
> common - commonComponent - component - component-extends
>
> 为了 common 组件可以方便的迁移至各个系统
>
> 所以通过存放同一目录的方式减少迁移的复杂度
