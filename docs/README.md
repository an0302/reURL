# 快速开始

## 下载

RE-URL (当前版本 v1.0.0) 文件下载地址

> [ https://github.com/ailewl/reURL/access/](https://github.com/ailewl/reURL/access/)


> 集成包内包含开发版及生产版

# 介绍

## RE-URL 是什么

<p class="tip">
    Re-url.js是一个纯原生js的url解析插件，不依赖任何库运行。
</p>

## 作用

<p class="warn">
    解析本网页url及来源url的各种参数。
</p>

# 起步

## 基本模板

###  引入

<p class="tip">
    我们推荐在开发时使用开发版本(<code>Re-url.js</code>)，在发布时使用压缩版本(<code> Re-url.min.js </code>)
</p>

```html
        <!--引入插件js文件-->
        <script src="scripts/Re-url.min.js" type="text/javascript" charset="utf-8"></script>
```

### 创建对象


```javascript

      var url = new URLRes();
      console.log(url)

```
<p class="tip">
    可以在控制台输出进行查看详细参数。
</p>

## 数据

### myUrl

本页面url解析的各种参数，下边有参数详解

### FromUrl

来源页面url解析的各种参数，下边有参数详解

## 参数

<p class="tip">
    `myUrl`与`FromUrl`的各项参数是一样的，当来源网址为空时，`myUrl==FromUrl`
</p>

```text

    本实例以以下url作为解析参考：
    https://www.baidu.com/ss/index.html?ie=UTF-8&wd=reurl#comment

```
### url

输出url整体：
>   https://www.baidu.com/ss/index.html?ie=UTF-8&wd=reurl#comment

### hostname

输出域名：
>   www.baidu.com

### path

输出路径
>   /ss/index.html

### hash

输出哈希
>   #comment

### query

输出请求参数
>   ?ie=UTF-8&wd=reurl

### params

以json格式输出请求参数

```javascript
{
    ie:'UTF-8',
    wd:'reurl'
}

```