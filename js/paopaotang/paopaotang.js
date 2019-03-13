//   玩家1  玩家2 ····· 联想到的是object  json object 难以完成此job
// 玩家类 es5 以前没有class 关键字
// 大写首字母的函数 来构建一个类  构造函数
// 一个函数首字母大写约束，区别于普通函数   运行方式 new， 此函数可被称之为构造函数

function Player (name){
    // js 函数跟其他语言不一样，函数一定会存在一个this，指针，总会指向点什么,常在，答应，函数是js 里的一等对象，
    // js除了基本基本数据类型之外，都是object,函数是可以被运行的对象
    // this 指向实例化后的对象
    console.log(this);
    this.name = name;
    this.enemy = null;
}
//  给我们的类添加属性定义
Player.prototype.win = function(){
    console.log(this.name + "win");
}
Player.prototype.lose = function(){
    console.log(this.name + "lose");
}
// player();
//将类实例化  类是一个抽象的概念， 对象可以new 出来
// 函数可以用来构建类
// 孕育爱情的一种过程 关于new
// 用户上线过程
var player1 = new Player("皮蛋");
 console.log(player1.name  + "上线了" );
var player2 = new Player("小乖");
console.log(player2.name  + "上线了" );
// 游戏过程  游戏结果  成为对手的过程 来一把
player1.enemy = player2;
player2.enemy = player1;
player1.win();
player2.lose();
// console.log(palyer1.name);

// console.log (player2.name);