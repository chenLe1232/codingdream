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
    