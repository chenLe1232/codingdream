1. 类型 typerof
   复杂数据类型检测 object
   array 是可以被遍历的对象
   function  是可运行的对象
   JSON object 对象字面量是可被枚举的对象  for(key in)

   typeof 半吊子， typeof [] 咩有办法跟json 区分开来
      可以区分函数类型
      但是难以区分 [] {} （数组与对象字面量）难以区分的开
    
有一个方法可以区分Array JSON object
## 立即执行函数
   ( function(){…} )()和( function (){…} () )，一个是一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号，另一个是一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中，这两种写法是等价的。要想立即执行函数能做到立即执行，要注意两点，一是函数体后面要有小括号()，二是函数体必须是函数表达式而不能是函数声明。
   ## 立即执行函数是闭包的温床
   Object.prototype.toString()
    作为对象的方法别调用

1. 用对象字面量来做面向对象， 区别原型式的，他没有被实例化的需要 Type，将在程序中就做类型检测
 var Type = {} 组织代码
 2. for 来一次性的加完  （注意同步异步的问题） 方法调用时异步的，在函数被调用的时候，for循环早已经执行完了 就会出现type 的值为undefind
     使用闭包来讲type 作用域封闭起来，立即执行函数，同步执行，类型检测函数的定义，因为函数嵌套，形成了闭包，当函数再被调用时（异步）,找到定义时刻的type
3. Object.prototype.toString.call(obj)
    Object? 祖先， 顶级对象   
##   函数才有prototype属性
    原型上有这样的toSting方法，解决typeof的尴尬问题 "[object object]"会在第二个object返回正确的类型值  
##    方法的执行方式可以被改变 Object.prototype.toString。call() 判断this指向的类型 去判断该类型为什么类型