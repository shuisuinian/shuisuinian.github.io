title: hexo创建
tags:
  - hexo博客
categories:
  - Hello World
date: 2019-03-09 09:01:00
---
## hexo 静态博客 
#### 1、 安装node.js
管理员身份进入cmd
首先验证是否安装成功 
```
node -v
npm -v
```
#### 2、更换源（改为淘宝源）
 `npm install -g cnpm --registry=https://registry.npm.taobao.org`键入命令后回车
`cnpm -v`  进行验证
#### 3、使用cnpm 来安装hexo博客框架
`cnpm install -g hexo-cli`
`hexo -v`   进行验证
#### 4、新建文件夹blog进入该文件夹，再执行命令
`mkdir blog`
`cd blog`
`hexo init`
等待一段时间安装 出现`Start blogging with Hwxo!`表示安装成功
#### 5、启动博客
`hexo s`
浏览器进入 `localhost:4000` 发现有一个默认创建的文章
#### 6、新建博文
`hexo n "我的第一篇hexo文章”`
#### 7、部署到github上
在github里新建一个repostory命名  ！！！！
你的用户名.github.io
#### 8、安装插件
还是在管理员下 cmd 进入blog目录下
`cnpm install --save hexo-deployer-git`
 安装时有个 peerDependencies WARNING  不用管
 设置_config.yml 文件
 
```
 # Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
 type: git
 repo: https://github.com/shuisuinian/shuisuinian.github.io.git
 banch: maste
```
 推送到github   `hexo d`
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
 #### 10、排除错误
 
缺失模块。
1、请确保node版本大于6.2
2、在博客根目录（注意不是yilia根目录）执行以下命令：
cnpm i hexo-generator-json-content --save
3、在根目录_config.yml里添加配置：  jsonContent:
    meta: false
    pages: false
    posts:
      title: true
      date: true
      path: true
      text: false
      raw: false
      content: false
      slug: false
      updated: false
      comments: false
      link: false
      permalink: false
      excerpt: false
      categories: false
      tags: true