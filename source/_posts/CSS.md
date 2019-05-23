---
title: CSS
tags:
  - html
  - css
categories:
  - jee学习之路
abbrlink: 3999917138
date: 2019-05-22 19:47:01
---
### css
#### css的作用
1. 美化网页
2. 设置字体的大小
3. 设置容器的位置，大小
4. 设置图片

<!--more-->

#### 写css样式的方法
1. 内部样式
    在head标签里面加上
    ```
    <style type="text/css">
    </style>
    ```
    
2. 行内样式
    在标签里面加上style=""
3. 外部样式
    连接一个专门的css文件

#### css基本语法
 选择器(即要修饰的对象){
    css属性1:属性值1;
    css属性2:属性值2;
 }
 >例如：
 ```
 p{ 
     border-radius: 2.5em;    
     background-color: rgba(255, 169, 88, 0.12);    
     text-align: center;    
     font-size: 13px;/*改变字体大小*/    
     color: red;/*改变字体颜色*/
 }
 ```

##### 选择器的分类
1. 标签选择器
2. 类选择器
    给标签取个class名字
    css用
    .class名{
    }
>例如：
 ```
 .li1{    
 font-size: 20px;    
 color: #000;    
 font-family: 华文宋体;
 }
 ```
3. id选择器
    给标签取个唯一id
    css用
    #id{
    }
>例如：
 ```
#li1{    
text-decoration: overline;    
font-size: 16px;    
letter-spacing: 15px;
}
 ```
 
4. 后代选择器
    选择该元素的所有后代,无论第几代
5. 子代选择器
    只选择第一代
6. 兄弟选择器
    查找id=li1的元素后面的
所有兄弟元
7. 相邻兄弟选择器
    查找id=li1的元素后面的第一个为li标签的兄弟元
###### 优先级
id>class>子代>后代

#### css属性

##### 文本属性
>font-family:字体
Font-size:字体大小
Font-weight:是否加粗
color设置颜色
Text-indent:首行缩进
text-align：center/left/right对齐
Line-height:最主要的作用是设置文字相对容器垂直居中如果line-height等于height，文字就会垂直居中
white-space: pre;/*保留空白字符*/
white-space: normal;/*忽略空白字符*/


##### 背景属性
>Background-color:背景颜色
Background-image:url("图片地址")背景图片
Background-repeat:（背景重复方式）
repeat（重复，默认）
no-repeat(不重复)
Repeat-x（x轴上重复）
Repeat-y（y轴上重复）
Background-positionn: -20px  10px (控制背景图片的位置，将背景图片向左偏移20px，向下偏移10px)

##### 其他属性
>text-decoration：（加下划线）
underline下划线
line-through 删除线
overline 上划线
none 不需要线
letter-spacing:（设置文字之间的间距）数字px;

>list-style：none；（去掉li前的圆心）
square;(改为矩形矩形)
circle；（空心圆）
disc；（实心圆，默认）


#### 盒子模型
一个盒子（容器）是由4部分组成的：
1. 里面的内容（元素内容）
2. 內边距（容器与内容之间的距离）
    padding设置
    * padding-left:
    * padding-top:
    * padding-right:
    * padding-bottom:
    * 缩写形式1：padding：10px,10px,10px,10px;(上右下左)
    * 缩写形式2：padding：10px,20px;(上下10，左右20)
    
3. 外边距（容器与外部的距离）
    margin设置
    * margin-left:
    * margin-top:
    * margin-right:
    * margin-bottom:
    * 缩写形式：margin：10px,10px,10px,10px;(上右下左)
    * 缩写形式2：margin：10px,20px;(上下10，左右20)
4. 边框（边框线）
    border设置
    
>例：
```
.box{    
    width: 300px;    
    height: 200px;    
    border: 1px solid red;    
    padding-left: 20px;    
    padding-top: 20px;    
    margin-top: 30px;
}
```
>常用水平居中的方法：（容器相对于外部容器）
```
.box{    
    width: 300px;    
    height: 200px;    
    margin: 0px auto;
}
```

>容器的实际宽高=css设置的宽高+边框的大小+padding
