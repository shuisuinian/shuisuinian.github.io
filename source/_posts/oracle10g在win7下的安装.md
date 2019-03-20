---
title: oracle10g在win7下的安装
tags:
  - 数据库
  - oracle
categories:
  - 数据库
abbrlink: 2261899728
date: 2019-03-16 20:00:31
---
## oracle10g在win7x64下的安装
>最近学oracle数据库，教的是10g版的，先试着安装

<!-- more -->

* 下载合适的版本，官网上10g版本现在是找不到下载的，大家可以自行百度（这里给些链接）

  [http://download.oracle.com/otn/nt/oracle10g/10201/102010_win64_x64_database.zip](http://download.oracle.com/otn/nt/oracle10g/10201/102010_win64_x64_database.zip) 
  
  如果是win7 64位,可能上面的版本还是无法安装，需要下载下面的这个版本:  [http://download.oracle.com/otn/nt/oracle10g/10204/10204_vista_w2k8_x64_production_db.zip](http://download.oracle.com/otn/nt/oracle10g/10204/10204_vista_w2k8_x64_production_db.zip)
* 下载之后，如果直接安装还是会出问题的，所以在安装之前需要修改一些文件
  1. 解压安装包，进入安装包目录
  2. 进入 安装包/database/install/ 路径下
  3. 修改oraparam.ini文件，找到 Windows=5.0,5.1,5.2,6.0  
  修改如下：
  ```
    CERTIFIED_VERSION_FAILURE_MESSAGE
    Windows=5.0,5.1,5.2,6.0,6.1
  ```
 4. 在安装包搜索 refhost.xml 文件，搜索到两个文件，都需要修改，如下:
    ```
    <!--Microsoft Windows Vista-->
    <OPERATING_SYSTEM>
      <VERSION VALUE="6.0"/>
    </OPERATING_SYSTEM>
    <OPERATING_SYSTEM>
      <VERSION VALUE="6.1"/>
    </OPERATING_SYSTEM>
    ```
  >说明：6.1表示windows的内核版本，Windows 7的内核版本号为6.1
    
* 修改完成后 ，再去安装基本不会出问题。
不过我安装的时候，报错：启动 Database Control 时出错，导致OracleDBConsoleorcl（数据库控制台服务）没有开启，使用时发现OEM无法使用，只能用iSQLplus和SQLplus工具
以前安装12c的时候按照网上教程倒没有什么问题，不知道哪里还需要修改的。
emmm...先这样吧。。
