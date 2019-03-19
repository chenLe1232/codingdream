html结构及不顾
 从上到下，从左到右，语义化和功能性   盒子   结构
 1. 套路  content>H3 —+p
 2. 盒子
 3. a  作为盒子，在移动端是很正常的， 一上来就应该  display:block（行内转换为块级元素）盒子是块级元素
 4. 盒子模型
    文字 line-height  padding margin 
 5. 文字截断
    tmall  商铺信息是有商家填的，它的高度，不被限制，
    display:-webkit-box; 新的盒子模型，像flex 来划分父元素的空间。
    overflow:hidden；
    -webkit-line-clamp  行数
    -webkit-box-orient:vertical(水平方向上)

     .feed-item .author  与.author的区别
     a.feed-item>(.feed-content>.cover+h3+p)+.author>span.name  自动补充span 快捷输入语句命令
      a.feed-item>(div.feed-content>div.cover+h3+p)+div.author>span.name

6. 浮动 float：left | right
    离开文档流
    在一个盒子里，将要浮动的元素写在最前面，后面的元素感觉不到前面元素的存在，左右布局 
    在flex（弹性布局)布局之前，我们一般借助于float来布局
    图片的宽高？宽度用百分比，自适应的需求。
    高度怎么做？  div padding-top"自身的高度来
    做比例100% 正方形
    自适应设备里盒子的等比例设置 width 百分比，
    高度用padding-top