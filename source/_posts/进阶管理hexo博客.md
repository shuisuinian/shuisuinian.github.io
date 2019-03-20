---
title: 进阶管理hexo博客
tags:
  - hexo博客
categories:
  - hexo
abbrlink: 2002852375
date: 2019-03-16 16:24:05
---
## 进阶管理hexo博客
这几天，重新安装windows系统，好多东西都要重新来过，太麻烦了，所以网上查找了一些解决方案并记录下来
### 解决方案：
1. 在你的github上新建一个repository，然后把你的blog文件夹上传，进行备份，这个比较简单
2. 在现有的shuisuinian.guthub.io的repository下创建一个分支来管理，具体操作步骤如下：
* * *
<!-- more -->
### 具体操作：

* 按本地磁盘（任意位置下，右键打开Git bash,将你的项目文件克隆到本地：
```
git clone git@github.com:shuisuinian/shuisuinian.github.io.git
```
* 这时该目录下出现一个shuisuinian.github.io的文件夹，进入该文件夹，删除文件夹中除了.git的其他所有文件夹
* 把你的blog文件夹内的所有文件全部复制到shuisuinian.github.io/下
* 此时，应有一个名.gitignore的文件，如果没有则自己创建，内容如下：
```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```
>说明：.gitignore文件就是为了指定哪些文件上传的时候可以忽略，因为blog/的文件并不全部都需要

* 用git命令创建一个叫hexo（任意命名）的分支，并切换到此分支：
```
git checkout -b hexo
```
* 以此输入以下命令
```
git add --all
git commit -m "注释"
git push --set-upstream origin hexo
```
### 后续：发表更新博客及源文件
* git 提交三部曲
```
// 更新源文件
git add . #添加所有文件到暂存区
git commit -m "提交一篇博客"  #提交
git push origin hexo 推送hexo分支到github
// 更新博客
hexo g
hexo d
```
* 利用hexo把本地文章部署到了网站上，网站更新==shuisuinian.github.io下的master分支更新==blog/public/下文件更新，然后通过git三部曲把本地变更过的blog文件也备份到了shuisuinian.github.io下的hexo分支

### 今后换电脑或者重装系统后，安装基本软件环境后，cnpm安装依赖
```
git clone -b hexo git@github.com:shuisuinian/shuisuinian.github.io.git
```
