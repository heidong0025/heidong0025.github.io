---
title: chrome浏览器看抖音评论区出现花屏现象解决办法
date: 2025-09-16 16:39:12
tags: 教程
cover: https://s21.ax1x.com/2025/09/16/pVf4RfI.md.png
---

今天！！！！！解决了一个超级大问题，网上从来没有找到过相关解决办法，只是一味的让我取消硬件加速，但是取消后观看高分辨率，高码率的视频cpu占用极高，所以我个人是不希望关闭硬件加速的，今天忍无可忍，已经严重影响学习进度了，所以选择问豆包，没想到啊，真的给出了解决办法。

> 调整 ANGLE 图形后端
>
> >1. 打开 Chrome 浏览器，在地址栏输入 `chrome://flags` 并回车，进入实验性功能页面。
> >2. 在搜索框中输入 “Choose ANGLE graphics backend”，找到该选项。
> >3. 点击下拉菜单，选择 “D3D9” ，如果选择 “D3D9” 无效，再尝试选择 “D3D11on12”。
> >4. 选择好后，点击页面底部出现的 “Relaunch” 按钮，重启 Chrome 浏览器，之后再打开豆包网页版查看是否还会花屏。

我改为D3D9后真的解决了，完美解决，抖音已经不会出现局部花屏了

[![pVf4h1P.md.png](https://s21.ax1x.com/2025/09/16/pVf4h1P.md.png)](https://imgse.com/i/pVf4h1P)
[![pVf4RfI.md.png](https://s21.ax1x.com/2025/09/16/pVf4RfI.md.png)](https://imgse.com/i/pVf4RfI)
[![pVf4fpt.md.png](https://s21.ax1x.com/2025/09/16/pVf4fpt.md.png)](https://imgse.com/i/pVf4fpt)

直接就是完美解决~~~
