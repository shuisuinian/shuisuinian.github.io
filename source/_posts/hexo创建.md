---
title: hexo创建
tags:
  - hexo博客
categories:
  - hexo
abbrlink: 469202525
date: 2019-03-09 09:01:00
---
## hexo 静态博客 
#### 1、 安装node.js
直接在[官网](http://nodejs.cn/)下载 ，安装
首先验证是否安装成功 
进入cmd（快捷键 win+R，输入cmd），或者git bash

*****
<!-- more -->
![](https://i.loli.net/2019/03/19/5c90367ccd898.png)
```
node -v
npm -v
```
![](https://i.loli.net/2019/03/19/5c903f67abd7a.png)
出现版本号XXX 就是安装没有问题（一般也不会出现问题的）
#### 2、更换源（改为淘宝源）
> 直接npm比较慢，所以安装cnpm，这样会快些
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
键入命令后回车
`cnpm -v`  进行验证 ,和上面验证一个意思，就不截图了
#### 3、现在使用cnpm 来安装hexo博客框架
```
cnpm install -g hexo-cli
```
`hexo -v`   进行验证
#### 4、新建一个文件夹blog进入该文件夹，再执行命令
```
mkdir blog  //新建文件夹blog 文件夹名自己随意就好
cd blog     //进入该文件夹
hexo init   //在这个文件夹建立hexo博客
```
等待一段时间安装 出现`Start blogging with Hwxo!`表示安装成功
之后就算出现什么问题，直接删掉这个文件夹，重来就好

> 后面的操作都是在这个新建的blog目录下，就算出现什么问题，直接删掉这个文件夹，重来就好

#### 5、启动博客
`hexo s` 
![](https://i.loli.net/2019/03/19/5c903f67a0b8e.png)
浏览器进入 `localhost:4000` 发现有一个默认创建的文章
(我这里目录不一样，是在之后做了修改)
#### 6、新建博文
```
hexo n "我的第一篇hexo文章”
```
可以发现在目录/blog/source/\_psots文件夹下 多出一个
"我的第一篇hexo文章.md" 的文件，这里是markdown格式的，大家可以花个几分钟去学习一下语法，比较简单。
#### 7、部署到github上
在github里新建一个repostory命名  ！！！！
你的用户名.github.io
```
# 例如我的
shuisuinian.github.io
```

#### 8、安装插件，并修改_config.yml文件
还是 cmd 进入blog目录下
`cnpm install --save hexo-deployer-git`
 安装时有个 peerDependencies WARNING  不用管
 设置_config.yml 文件（这个文件就在blog根目录下的）
 找到这一段
```
 # Deployment
## Docs: https://hexo.io/docs/deployment.html
```
修改：
```
 # Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
 type: git
 repo: https://github.com/你的用户名/你的用户名.github.io.git
 banch: master
```
 设置完成后推送到github，依次执行
 ```
 hexo g
 hexo d
 ```
> 这里可能会出现的问题是：你以前安装完git，没有配置信息等一些问题，如果有问题，大家可以百度一下


 #### 9、更换主题
  `git clone https://github.com/litten/hexo-theme-yilia.git. themes/yilia`
  修改 之前的_config.yml
  找到  theme 这行 修改为`theme: yilia`
  执行以下命令 
```
 hexo clean
 hexo g
 hexo s
 hexo d
```