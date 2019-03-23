边距折叠
##  BFC
block Formatting Context(块级格式化上下文)

## BFC 的渲染原理
1. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝的空间，碗面的元素不会影响BFC里面的元素，反之，里面的元素也不会影响外面的元素。
2. BFC的区域不会与浮动的box重叠
3. 垂直方向的外边距会发生边距折叠，（包括父子元素，兄弟元素） 水平方向上的边距不存在折叠


## BFC的创建条件
1. overflow的值不为visible
2. 根元素或其它包含它的元素；
3. 浮动 (元素的float不为none)；
4. 绝对定位元素 (元素的position为absolute或fixed)；
5. 行内块inline-blocks(元素的 display: inline-block)；
5. 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；只要是display带table

overflow的值不为visible的元素；

