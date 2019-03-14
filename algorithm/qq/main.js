//数组是最廉价的数据结构
let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4], qq = []; //真正的qq
//第一个数移除
head = 0;   //队首指针，要移除的元素位置
tail = 9;   //队尾指针，要加入的元素位置
// 第一个数移除
let i = 0;
while (head < tail) {
  qq.push(enc_qq[head]);

  head++;
  // enc_qq.shift();
  enc_qq[tail] = enc_qq[head];
  tail++;
  head++;
  i++;
  console.log(typeof qq);
  // console.log(enc_qq);
}

console.log(i);
//字符串是字符集合
// console.log(enc_qq.length,enc_qq[0]);
// enc_qq.shift();
//在开头插入一个元素
// enc_qq.unshift(0);
//会自动删掉最后一个数字
// enc_qq.pop();
//  console.log(enc_qq);
 //在数组最后添加一个元素
// enc_qq.push(0);
// console.log(enc_qq);
