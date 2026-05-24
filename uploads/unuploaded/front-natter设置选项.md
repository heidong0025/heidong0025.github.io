---
title: front-natter设置选项
date: 2025-09-13 15:03:14
tags: 教程
---

## 一、front-matter包含的内容

**参数描述默认值**

基础

`title`标题

`date`建立日期文件建立日期

`tags`标签（不适用于分页）

`categories`分类（不适用于分页）

进阶

` 1subtitle`副标题，通常显示在标题下方，用于补充标题信息（如主题、子话题）

`layout`布局

`author`作者名字

`updated`更新日期文件更新日期

`comments`开启文章的评论功能true

`permalink`覆盖文章网址

`keywords`仅用于 meta 标签和 Open Graph 的关键词（不推荐使用）

`summary`自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要

`img`文章的显示的时候的背景

`coverimg` `cover`文章的封面图

`password`设置密码

`mathjax`渲染LaTex格式的数学公式

`top`设置置顶

## 二、什么是front-matter

1. 就是.md文件最上面的这部分内容
2. -–
   title: tags
   date: 2019-08-13 09:39:50
   type: tags
   layout: tag
   -–

## 三、标签详解（只讲解官方文档中说的模糊的）

1. **layout**：

- 作用：指定要使用的模版样式
- 例如我上面的例子中使用的`tag`模版
- 如果不指定这个将会使用`根目录/_config.yml`中的默认配置`default_layout: post`

1. **tags**：

- 作用：给文章添加标签，使其能在标签页中显示
- 如何使用：
- tags:
  \- PS3
  \- Games
- 也可以[Github,Git,node.js]
- 如上所示一篇文章可以设置多个标签

1. **categories**：

- 整体内容基本与 `tags` 一致
- 区别在于在进行分类管理的时候此标签下的内容是`有严格的顺序和层次`的，tags没有
- categories:
  \- Diary
  因为hexo的分类具有层次关系，同一文章不能同时存在两个同级分类中，所以下面这种方式
  categories:
  \- Diary
  \- Life
  会使分类Life成为Diary的子分类，而不是并列分类。因此，有必要为您的文章选择尽可能准确的分类。

1. **permalink**：

- 直白的说就是静态文件的存放地址
- 如果不指定这个将会使用`根目录/_config.yml`中的默认配置`permalink: :year/:month/:day/:title/`
- 如果指定的文件夹不存在就会创建一个
- 你如何设置最后在页面中使用的连接地址就会是什么样的，例如上面这种方式最终生成的文章的连接地址就是`xxx.github.io/2019/08/11/：title/`

1. **keywords**

- 用于SEO优化
- 你这篇文章包含哪些关键词
- 人家百度这些关键词的时候可能就会显示你的页面
