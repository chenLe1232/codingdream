  # 语言精粹  读书笔记之对象
  看书记笔记，学习方式  要高效，有自觉，认真。

  chapter3 对象：
  1. JavaScript中的对象是可变的键控集合，数组是对象，函数是对象，正则表达式是对象，对象自然也是对象。  
  2. 对象是属性的容器，其中每个属性都拥有名字和值，属性的名字可以使包括空字符串在内的任意字符串。
  3. 六种基本数据类型 number string Boolean nullundefined object  (基本数据类型不可改)  json object 复杂对象，修改他的值 ，不能变类型
     object{ 函数，array date etc...}
     严格等于 "==="  类型相同  值相等
     “==”   一是类型相同 同“===”
          二是类型不同（对象转换为基本类型在进行比较）  尝试类型转换和比较
  4. 类型检测 【typeof,instance of，object。prototype.tostring,constructor(可被修改)，duck type]
      watch out 不同Windows或iframe间的对象类型检测不能使用 instance of

  chapter 4 函数：
  1. 函数对象  JavaScript中函数就是对象。对象是“名和值”的集合 并拥有一个连接到原型对象的隐藏连接。
        对象字面量产生的对象连接到object.prototype。
        函数对象连接到function。prototype（该原型对象连接到object.prototype）
  2. 函数自变量 
      1关键字function
      2函数名，函数可以调用自己的名字，递归。无名是匿名函数anonymous
      3形式参数，多个用逗号隔开
      4包含在花括号中的一组语句，即函数主体。
      函数可以被定义在其他函数之中，一个内部函数，除了可以访问自己的参数和变量，还可以访问，嵌套它的函数的参数和变量。
    