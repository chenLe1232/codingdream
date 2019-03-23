##    css预编译语言 stylus  (基于NODE.JS)
写的是stylus  后缀是.styl  在浏览器端运行的是.css  
前段工作流发生改变
界面开发工作被重新定义了，从小米加步枪变生产线
stylus mian.styl - o main.css
stylus起到编译功能     编译 -o 输出
stylus 提供了css不具备的变量定义，
模块化：模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。
函数 编写快捷          新的语法
-w watch 监听文件修改，同时编译

1.  可以定义变量
2. 减少输入 ｛｝ ： ；
3. 函数
4. 嵌套
    .book-bought 购买模块
        .label
            img
    & 运算符引用上一级的层次雷鸣同时可以缩进，省去重复上一次的选词    
          &:fist-child

flex 是css 在移动时代最爽的布局方案，手机端  子元素们对齐方式 ， 水平 主轴(justify-content)  纵轴方向上（align-items center）
  传统方案是 img + 兄弟节点  vertivcal-align: middle

  flex 的考点 自适应
     1 flex: 1 比例划分， 只给一个元素设置，占据其他元素的所有
2. 父元素与多个子元素之间的关系
    水平对齐   justify-content
    垂直对齐  align-items  (听老师说你很厉害 我要好好注意学习下 flex)
3. 剩余空间  flex-grow:1

  