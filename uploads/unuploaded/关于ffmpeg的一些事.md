---
title: 关于ffmpeg的一些事
date: 2025-04-20 09:15:28
tags: ffmpeg
---

前几天一直在搞ffmpeg的脚本，我自己写的版本最新的以及是是~~2.2版~~2.3版了，但仍然有挺多问题的，我第一次了解到ffmpeg是在去年，但是由于他的使用方法是命令行，当时给我的感受就是很复杂，现在看来是对的。deepseek出来的时候是很震惊我的，国产AI大模型已经可以媲美chat-GPT了，之后我就用ds来帮我写bat脚本，但是偶尔还是会有bug，整体满意。但是有些视频是8bit，有些是10bit，这两种类型的视频到现在我还是没有办法在一个脚本中实现压缩功能，所以就出现了8bit版和10bit版。不过我的很多视频都是远古视频，23年，24年的特别多，直接压缩，用各种软件都是会改变元数据的，时间戳就对不上了，后续查找困难，就没采用。

```bat
    for /f "usebackq delims=" %%a in (`powershell -Command "(Get-Item -LiteralPath '!input_file!').CreationTime.ToString('yyyy-MM-dd HH:mm:ss')"`) do set "creation=%%a"
    for /f "usebackq delims=" %%b in (`powershell -Command "(Get-Item -LiteralPath '!input_file!').LastWriteTime.ToString('yyyy-MM-dd HH:mm:ss')"`) do set "modification=%%b"
      if exist "!output_file!" (
        powershell -Command "$file = Get-Item -LiteralPath '!output_file!'; $creationDate = [DateTime]::ParseExact('!creation!', 'yyyy-MM-dd HH:mm:ss', $null); $file.CreationTime = $creationDate; $modificationDate = [DateTime]::ParseExact('!modification!', 'yyyy-MM-dd HH:mm:ss', $null); $file.LastWriteTime = $modificationDate;"
    )
)
```

用了这些语句来复制时间戳信息，但是呢，这样子就只有时间戳信息了，GPS，设备信息都没有了，相册地图就会缺少很多视频内容。

再后来我了解到`-map_metadata 0 ^`这个命令，可以保留视频元数据，使用后发现确实如此，比直接复制时间戳好，至少GPS信息会得到保留，但是拍摄设备的信息任然缺失。而且哪怕是最新的版本在压缩视频的时候也会有丢帧，甚至使用cpu也是如此，简直不能理解，这也是我在开头说ffmpeg很复杂的原因，我甚至找不到原因（其实就是不想找，太花费时间精力了）。随后我便打算采用小丸工具箱压缩，市面上的工具几乎都是采用cpu压缩的，我想可能有这几个原因吧，第一就是cpu压缩不需要考虑硬件加速的问题，第二就是cpu压缩效率高。我现在正在用小丸工具箱压缩视频，打算后续在去修改视频元数据。小丸工具箱以及完全吃满cpu了，我单烤fpu的功耗也就100瓦出头，用他压缩的功耗也是100瓦出头，确实是完全榨干cpu性能了。至少的现在为止没发现小丸工具箱有丢帧情况，目前良好。
