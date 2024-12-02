// 数学 日期
// Math对象 Date对象

// Math对象
// 计算一个半径为r的圆的周长?
function get_CircleLength(r) {
  return 2 * Math.PI * r
}
console.log(get_CircleLength(10));
// 计算一个半径为r的圆的周长?
function getCircleArea(r) {
  return Math.PI * Math.pow(r, 2)
}
console.log(getCircleArea(10));

// 产生随机数
let r1 = Math.random()//[0,1)
console.log(r1);
// 产生一个随机颜色
function createRandomColor() {
  let randomNumber = Math.random()
  return '#' + (randomNumber + '').slice(2, 8)
}
console.log(createRandomColor());

// 模仿一个中年人的年龄（30-50）
function generateAge30to50(start, end) {
  // 卫编程 利用的是return关键字可以终止函数的执行
  if (typeof start !== 'number' || typeof end !== 'number' || start >= end) return
  let randomAge = Math.random() * (end - start) + start
  return Math.floor(randomAge)
}
console.log(generateAge30to50(30, 50));  //正常的随机年龄
console.log(generateAge30to50(130, 50));  //undefined
console.log(generateAge30to50(undefined, null));  //undefined


let s1 = 'hello,world!'  //length
console.log(s1.slice(6, -1));

function isTriangle(line1, line2, line3) {
  // if (arguments.length < 3) throw new Error('参数至少需要3个')
  if (arguments.length < 3) return console.error('参数至少需要3个')
  for (let i = 0; i < 3; i++) {
    if (typeof arguments[i] !== 'number') throw new Error('参数必须是数字')
  }
  // 随机取边[0,1,2]
  let indexMap = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 2, 0]
  ]
  let randomIndex = Math.floor(Math.random() * 3)
  let linesIndex = indexMap[randomIndex]
  let condition1 = arguments[linesIndex[0]] + arguments[linesIndex[1]] > arguments[linesIndex[3]]
  let condition2 = Math.abs(arguments[linesIndex[0]] - arguments[linesIndex[1]] < arguments[linesIndex[3]])
  if (condition1 && condition2) {
    return true
  } else {
    return false
  }
}
console.log(isTriangle(3, 4, 5));


// 求一个纯数字数组的最大值/最小值
function getArrayMaxValue(arr) {
  // 特征检查法,只有数组才有push,其他元素.push都等于undefined
  if (typeof arr.push !== 'undefined') return
  if (arr.length === 0) return
  if (typeof arr[0] !== 'number') return
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return
    // if (arr[i] > maxValue) {
    //   maxValue = arr[i]
    // }
    maxValue = Math.max(arr[i], maxValue)
  }
  return maxValue
}

// 日期对象
// 当前时间
let date = new Date()
console.log(date);
// xxxx年xx月xx日  xx:xx:xx
function formatCurrentTime(template) {
  let _date = new Date()
  // 获取年
  let year = _date.getFullYear()
  let month = _date.getMonth() + 1 < 10 ? '0' + _date.getMonth() + 1 : _date.getMonth() + 1  //一月是0，所以要+1
  let date = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate()
  let hour = _date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours()
  let minute = _date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes()
  let seconds = _date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds()
  // console.log(year + '年' + month + '月' + date + '日' + hour + ':' + minute + ':' + seconds);
  return year + template.slice(4, 5) + month + template.slice(7, 8) + date + template.slice(10, 11) + hour + template.slice(14, 15)

}
console.log(formatCurrentTime('xxxx年xx月xx日 xx时'));


// 自己查资料  学习字符串的replace
// 数字时间（距离1970.01.01 00:00:00.000）  0毫秒
// let date1 = new Date()
// console.log(date1.getTime());
// let countHour = date1 / (365 * 24 * 60 * 60 * 1000)
// console.log(countHour);



// 从现在开始后的8976500分钟，是几年几月几日
let currentTime = Date.now()
let ms = 8976500 * 60 * 1000
let d6 = new Date(currentTime + ms)
console.log(d6);




