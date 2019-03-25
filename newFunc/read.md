new js 关键字 
运算符  创建一个用户定义的对象类型的实例
1. 构造函数上有 prototype 属性，值为对象
2. 类  构造函数 + prototype原型对象 
3. typerof 类型   instanceof 实例  判断某个对象是否是某个具体的实例

   理解js底层内容
   new 结果是返回一个新的对象，具有构造函数对象的属性
   2. 对象要有原型对象，指向构造函数的原型对象
   

   1. 空对象来了 new Object()
   2. 如何将构造函数里的属性交给空对象
        constructor 本身就是为他人服务的实例服务？ 还是为任何对象服务，都可以
        函数内部的this  是有函数运行时的方式决定的
        new Otaku ()
        Otaku.call(obj,.....); //作为普通函数来运行
        call,apply 可以指定函数运行时this,手动指向obj   参考学习网站 https://www.cnblogs.com/qiaojie/p/5746688.html

        
##     语法 	定 义   	说明
## call(thisObj，Object)	调用一个对象的一个方法，以另一个对象替换当前对象。	call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象.如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj
## apply(thisObj，[argArray])	应用某一对象的一个方法，用另一个对象替换当前对象。	如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数

    3. Constructor 构造函数 拥有 prototype 属性，在上面添加属性和方式， 天生的可以被实例引用到。对象上有__proto__属性 这个对象的原型对象是谁？
    对象也可以拿到原乡对象上的属性或方法

    js的面向对象是基于原型的

    对象？ 属性和方法的集合
    构造函数可以给些属性
    其它的通过原型对象来拿到

    obj.__proto__ = Otaku.prototype   借给obj空对象一些 指向一个对象          object顶端 









































































































