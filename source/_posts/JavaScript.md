---
title: JavaScript
tags:
  - js
categories:
  - jee学习之路
abbrlink: 3424359953
date: 2019-05-27 20:01:01
---
# JavaScript

## 什么是JavaScript（js）
1. js是浏览器客户端的一种语言（浏览器是js程序的运行时的环境）
2. js主要的作用就是用来操作html、css
3. 网页中的特效代码都是用js实现的

<!--more-->
>例如：
>悬浮广告
>轮播图

## JavaScript的组成
1. ecmascript
    js的基本语法：for，while，dowhile循环
    if语句，数组，变量，数据类型
2. document操作
    html，css的操作
3. bom
    浏览器窗口的一些操作
    回到上一页，下一页
    弹窗

## js脚本的使用方式
1. 在html的文件内部的任意地方加入
```
<script type="text/javascript">
        //代码部分
</script>

```

2. 链接外部js文件
```
<script src="外部js文件" type="text/javascript"></script>

```


3. 简短缩写方式
```
<a href="javascript:js代码">a的js应用</a>

```

## JavaScript 能够以不同方式“显示”数据
1. 使用 window.alert() 写入警告框
2. 使用 document.write() 写入 HTML 输出
3. 使用 console.log() 写入浏览器控制台
4. 使用 innerHTML 写入 HTML 元素

## 变量的使用和声明

### js中定义变量
1. 统一用关键字var
2. 或者直接使用变量，无需定义

### js中变量的声明和赋值
1. 只定义没有赋值
```
var width，height;
width=5;//之后单独赋值
height=10;
```

2. 定义并且同时赋值
```
var width=5,height=10;
```
3. 不定义直接赋值
```
height = 999 ;
```

## js的几种数据类型
1. undefined 未定义
    一个变量没有赋值
2. boolean 
    只有true/false两种值
3. number 数字类型（整数或小数）
4. string 字符串类型
    一般情况string都是用双引号或者单引号括起来
5. object 对象类型

>typeof() 可以检测变量数据类型 
>以下例子：
```
var a;//没有赋值，undefined类型
var b = 12.2;//number类型
var c = "12.2";//string类型
var is = true;//boolean类型
var n = null;//object类型
document.write(typeof(a));//检测a的数据类型类型
```

### 字符串的 双引号问题

>在一个双引号字符串之间如果要加入双引号
>有三种方法：
>1：不加双引号：没有严重的影响(不推荐)
>2：用单引号代替
>3：用转义字符-> \"
>>例1：

```
//用转义字符
var str = "<div style=\"width:"+a+"px\"></div>";
//用单引号代替
var str2 = "<div style='width:"+a+"px'></div>";
```
>>例2:
```
var a = 100;
var str = "<div style=\""+
        "width:" + a + "px;"+
        "height: 100px;" +
        "border: 1px solid red;"+
        "\"></div>";
document.write(str);
```

>>例2效果：

## javascript运算符


| 算数运算符 |+ |- |* |/ |% |++|--|
| --- | --- | --- | --- | --- | --- | --- | --- |
| 赋值运算符 |= |||||||
| 比较运算符 |< |>|<=|>=|==|!=|===|
| 逻辑运算符 |&& | &#124;  &#124; |!||||||
在一个js的运算表达式中，如果都是number类型，则整个结果也是number类型
表达式是从左到右开始运算，一旦遇到字符串，则后面的运算全部是字符串连接

>例1

```
var x = 3;
var y = 5;
var z = 10;
var ch = "字符";
document.write(x + z + ch + x + z+"<br/>");
var n = null;
n = z/x;
document.write("n="+n+":"+typeof(n)+"<br/>");
//除法 10/3会得到小数  而不是 3
```

>例1结果：后面的x+z 变为了字符连接。如下图

![](https://i.loli.net/2019/05/27/5cebd5fbb494021584.png)
>例2
>关于 表达式简写 下面以 + 为例（+ - * / % 用法一样）

```
var z = 10;
var n = 1;
n = n + 1;
document.write("n="+ n + "," +"<br/>");
var n = 1;
n += 1;
document.write("n="+ n + "," +"<br/>");
```

>例2结果：

![](https://i.loli.net/2019/05/27/5cebd5fbd20d942789.png)

>例3
>自增运算符：++ （自减运算符：--，用法一样）

```
n = z++;//先把z的值赋值给n，再自己加1
document.write(n + "," + z +"<br/>");
n = ++z;//z先加1，再赋值给n
document.write(n + "," + z +"<br/>");
```

>例3结果：

![](https://i.loli.net/2019/05/27/5cebd5fc8adb643338.png)

>例4
>js中对于 == 和 ===的区别

```
var i=2;
var ch = "2"
document.write(i==ch);//显示true
document.write("<br/>");//换个行
document.write(i === ch);//显示false
//===会先判断类型是否相等
```

>例4结果:
![](https://i.loli.net/2019/05/27/5cebd5fbb48f662653.png)

### 逻辑运算符
1. && 逻辑与
    true && true 表达式返回true
    两边都为真 返回真
2. || 逻辑或
    false && true 表达式返回true
    只要一边为真 返回真
3. ！逻辑非
    !true 返回假
    !false 返回真
    真变成假
    假变成真
