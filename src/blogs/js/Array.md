# 数组

## 结构解析赋值

- 结构解析赋值要保证两侧的数据类型要一样

```ts
let arr = ["wc", "xq", "jj"];

// 需要保证 = 两侧的数据类型要一样
// arr是一个数组  =左侧也需要写一个数组
// 在[]，就可以写一个变量，变量的值就是解构出来的数组元素
let [name1, name2, name3] = arr;
console.log(name1, name2, name3);
```

```ts
let arr = [
    {
        userName: 'zs',
        age: 18
    },
    [1, 3],
    6
];

let [
    {
        userName,
        age
    },
    [num1, num2],
    num3
] = arr;
console.log(userName, age, num1, num2, num3);
```

- 如果解构不成功，对应的值是und

```ts
// 问：und都在哪些地方出现过？
// 答：
//      1)声明的变量，没有赋值
//      2)访问一个对象中不存在的属性
//      3)函数没有返回值，默认也是返回und
//      4)形参没有赋值，也是und
//      5)访问数组中不存在的索引，对应的元素也是und
//      6)解析不成功的，得到的也是und
let [num1, num2] = [666];
console.log(num1, num2);
```

- 如果解析不成功,可以指定默认值
```ts
const [a = 5, b = 4, c, d = 88] = [66, 77]
//a:66 b:77 c:und d:88
```

## 数组去重

### ES6 Set([...new Set(arr)])

```js
function unique(arr) {
    return Array.from(new Set(arr))
}

//这种方法还无法去掉 {} 空对象，后面的高阶方法会添加去掉重复 {} 的方法。
```

### 循环嵌套,splice(es 常用)

```js
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
```

```js
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

### indexOf includes

> 新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则 push 进数组。

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1 /* !array.includes( arr[i]) */) {
            array.push(arr[i])
        }
    }
    return array;
}
```

### filter

```js
function unique(arr) {
    return arr.filter(function (item, index, arr) {
        //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
        return arr.indexOf(item, 0) === index;
    });
}
```

### reduce+includes

```js
function unique(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}
```

## 对象数组去重

先把数组对象序列化,再用set装一遍,再放回数组中,再把元素反序列化

```js
//const uniqueArr = Array.from(new Set(arr.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
function uniqueArr(arr) {
    return [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item))
}
```

## 对象数组排序

- sort方法

```js
const a = [{name: 'wgh', age: 18}, {name: 'lw', age: 19}]
a.sort((m, n) => n.age - m.age)//后减前降序  [{name:'lw',age:19},{name:'wgh',age:18}]
```

## 查找递归对象中指定下标系列的对象

```js
function modifyPropertyByIndices(obj, arrProperty, indices, callBack) {
    indices.reduce((acc, cur, idx) => {
        if (idx === indices.length - 1) {
            callBack(acc, cur)
        } else {
            return acc
        }
    }, obj[arrProperty])
}
```

## Array.from

数组的form方法+mockJs造模拟数据贼方便

```js
import {mock, Random} from 'mockJs';

Array.from({length: 50}, () => ({
    name: mock('@cname'),
    age: Random.integer(18, 24)
}))
// 这表示随机生成了50条,含有name(mock随机生成名字)、年龄(18 - 24)的数据,每次刷新都不一样
```

## 数组去空

```js
test.filter(item => item && item.trim()); // 支持去除只含空格的字符串,但是数组只能包含字符串,null, undefined,不然会报错
test.filter(item => item); // 不会去除只含空格的字符串,空数组、空对象,会去除0,false,null,undefined
```

## 能改变原数组的方法可视化

- push 尾部追加元素
<SArray method='push' />
- pop 尾部删除元素
<SArray method='pop' />
- unshift 头部添加元素
<SArray method='unshift' />
- shift 头部删除元素
<SArray method='shift' />
- reverse 翻转数组
<SArray method='reverse' />
- sort 数组的元素进行排序
  - 升序
  <SArray method='sort' :value='(a,b) => a.value - b.value' />
  - sort 降序
  <SArray method='sort' :value='(a,b) => b.value - a.value' />
- splice 移除或者替换已存在的元素
  - 数组从2号位每次移除一个元素
  <SArray method='splice' :value='[1,1]' />
  - 从数组2号位每次新增一个元素
  <SArray method='splice' :value="[1,0,{value: 10,color: mock.mock('@color')}]" />
## 常用方法


## 部分常用方法底层实现

<script setup lang="ts">
    import mock from 'mockjs';
    import SArray from '/components/js/array/Array.vue';
</script>

<git-talk />
