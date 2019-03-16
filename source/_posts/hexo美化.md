---
title: hexo+Next主题
date: 2019-03-16 16:57:35
tags:
  - hexo博客
categories:
  - hexo
---
#### 安装next主题
```
git clone https://github.com/theme-next/hexo-theme-next themes/next
```
#### 启用主题
修改博客根目录下的配置文件_config.yml:
<!-- more -->
```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next
```
#### 主题设定
修改Next目录下的配置文件_config.yml:
搜索字段：Scheme 可找到以下内容：
* Muse - 默认 Scheme，这是 NexT 最初的版本，黑白主调，大量留白
* Mist - Muse 的紧凑版本，整洁有序的单栏外观
* Pisces - 双栏 Scheme，小家碧玉似的清新
* Gemini - 左侧网站信息及目录，块+片段结构布局

Scheme 的切换通过更改 主题配置文件，搜索 scheme 关键字。 你会看到有四行 scheme 的配置，将你需用启用的 scheme 前面注释 # 去除即可。

