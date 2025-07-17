# 常用布局

> 打包的应用开发不推荐使用 flex 布局，有些底层对 flex 的支持不好，`bui-box`跟 flex 类似，移动端兼容性更好。底下示例展示加了圆角和背景颜色，实际代码是无色无圆角的，且不要学直接加 style 属性的做法。

## 弹性布局

弹性布局，不管子集有多少元素，都会在一行展示。

### 弹性布局-等比 `bui-box`

_例子: 把整行分成 4 份，4=span1+span2+span1，子集可以是 span1-span12_

<div class="bui-box">
    <div class="span1 round primary">
        1/4大小
    </div>
    <div class="span2 round warning">
        2/4大小
    </div>
    <div class="span1 round primary">
        1/4大小
    </div>
</div>

```html
<div class="bui-box">
  <div class="span1">1/4大小</div>
  <div class="span2">2/4大小</div>
  <div class="span1">1/4大小</div>
</div>
```

### 弹性布局-自适应 `bui-box`

_例子: span1 的宽度 = 整行宽度 - 100px, `span1`称之自适应_

<div class="bui-box">
    <div class="round primary" style="width:100px;">宽度100px</div>
    <div class="span1 round warning">
        // 自适应内容
    </div>
</div>

```html
<div class="bui-box">
  <div style="width:100px;">宽度100px</div>
  <div class="span1">// 自适应内容</div>
</div>
```

### 弹性布局-垂直 `bui-box-vertical`

_例子: span1 的高度 = 整行高度 100px - 30px_

<div class="bui-box-vertical" style="height:100px;">
    <div class="round primary" style="height:30px;">高度30px</div>
    <div class="round warning span1">
        // 自适应内容
    </div>
</div>

```html
<div class="bui-box-vertical" style="height:100px;">
  <div style="height:30px;">高度30px</div>
  <div class="span1">// 自适应内容</div>
</div>
```

### 弹性布局-反序 `bui-box-reverse`

_例子: 宽度 100px 的 div，在右边展示_

<div class="bui-box-reverse">
    <div class="round primary" style="width:100px;">宽度100px</div>
    <div class="round warning span1">
        // 自适应内容
    </div>
</div>

```html
<div class="bui-box-reverse">
  <div style="width:100px;">宽度100px</div>
  <div class="span1">// 自适应内容</div>
</div>
```

## 弹性布局-对齐

#### 弹性布局-绝对居中 `bui-box-center`

_例子:_

<div class="bui-box-center primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-center" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-水平居中 `bui-box-align-center`

_例子:_

<div class="bui-box-align-center primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-center" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-水平居左 `bui-box-align-left`

_例子:_

<div class="bui-box-align-left primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-left" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-水平居右 `bui-box-align-right`

_例子:_

<div class="bui-box-align-right primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-right" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-垂直居中 `bui-box-align-middle`

_例子:_

<div class="bui-box-align-middle primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-middle" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-顶部对齐 `bui-box-align-top`

_例子:_

<div class="bui-box-align-top primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-top" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-底部对齐 `bui-box-align-bottom`

_例子:_

<div class="bui-box-align-bottom primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px,<br>高度50px</div>
</div>

```html
<div class="bui-box-align-bottom" style="height:100px;">
  <div style="width:100px;height:50px;">宽度100px,<br />高度50px</div>
</div>
```

#### 弹性布局-两端对齐 `bui-box-align-justify`

_例子:_

<div class="bui-box-align-justify primary" style="height:100px;">
    <div class="round warning" style="width:100px;height:50px;">宽度100px</div>
    <div class="round warning" style="width:100px;height:50px;">宽度100px</div>
</div>

```html
<div class="bui-box-align-justify" style="height:100px;">
  <div style="width:100px;">宽度100px</div>
  <div style="width:100px;">宽度100px</div>
</div>
```

#### 弹性布局-子集等高 `bui-box-align-stretch`

_例子:_

<div class="bui-box-align-stretch primary" style="height:100px;">
    <div class="round danger" style="width:100px;">内容自适应高度内容自适应高度内容自适应高度</div>
    <div class="round warning" style="width:100px;">文字的高度</div>
</div>

```html
<div class="bui-box-align-stretch" style="height:100px;">
  <div style="width:100px;">根据内容高度等高展示</div>
  <div style="width:100px;">文字的高度</div>
</div>
```

## 流式 12 列布局

> 流式布局把一行分为 12 列,后面的数字加起来等于 12 则一行,大于 12 则另起一行.

<div class="bui-fluid">
    <div class="span2 round primary">2/12</div>
    <div class="span4 round warning">4/12</div>
    <div class="span4 round primary">4/12</div>
    <div class="span2 round warning">2/12</div>
    <div class="span4 round primary">4/12</div>
    <div class="span4 round warning">4/12</div>
    <div class="span4 round primary">4/12</div>
</div>

```html
<div class="bui-fluid">
  <!-- 第1行 自由比例 -->
  <div class="span2">2/12</div>
  <div class="span4">4/12</div>
  <div class="span4">4/12</div>
  <div class="span2">2/12</div>
  <!-- 第2行 3等分-->
  <div class="span4">4/12</div>
  <div class="span4">4/12</div>
  <div class="span4">4/12</div>
</div>
```

## 流式等列布局

> 流式等列布局认为子元素全部是等分的,由父层数字决定子集占比,最多 12 列.

<ul class="bui-fluid-2">
    <li class="round primary">
        1/2大小
    </li>
    <li class="round warning">
        1/2大小
    </li>
</ul>

```html
<ul class="bui-fluid-2">
  <li>1/2大小</li>
  <li>1/2大小</li>
</ul>
```

## 间隙布局

> 每种布局都有一种带间隔的布局, 只需在后面加上`-space`

### 流式间隙 `bui-fluid-space`

_例子:_

<div class="bui-fluid-space">
    <div class="span6 round primary">
        1/2大小
    </div>
    <div class="span6 round warning">
        1/2大小
    </div>
</div>

```html
<div class="bui-fluid-space">
  <div class="span6">1/2大小</div>
  <div class="span6">1/2大小</div>
</div>
```

### 流式等比间隙 `bui-fluid-space-2`

_例子:_

<div class="bui-fluid-space-2">
    <div class="span1 round primary">
        1/2大小
    </div>
    <div class="span1 round warning">
        1/2大小
    </div>
</div>

```html
<div class="bui-fluid-space-2">
  <div class="span1">1/2大小</div>
  <div class="span1">1/2大小</div>
</div>
```

### 弹性间隙 `bui-box-space`

_例子:_

<div class="bui-box-space">
    <div class="span1 round primary">
        1/2大小
    </div>
    <div class="span1 round warning">
        1/2大小
    </div>
</div>

```html
<div class="bui-box-space">
  <div class="span1">1/2大小</div>
  <div class="span1">1/2大小</div>
</div>
```

## 嵌套布局

> 几种布局之间可以嵌套自身,也可以相互嵌套,实现更复杂的布局.

_例子: 流式等列布局,嵌套弹性布局及流式布局_

<ul class="bui-fluid-space-2">
    <li class="primary">
        <div class="bui-box">
            <div class="span1 round danger">1/4</div>
            <div class="span1 round warning">1/4</div>
        </div>
    </li>
    <li class="primary">
        <div class="bui-fluid">
            <div class="span6 round danger">1/4</div>
            <div class="span6 round warning">1/4</div>
        </div>
    </li>
</ul>

```html
<ul class="bui-fluid-2">
  <li>
    <div class="bui-box">
      <div class="span1">1/4</div>
      <div class="span1">1/4</div>
    </div>
  </li>
  <li>
    <div class="bui-fluid">
      <div class="span6">1/4</div>
      <div class="span6">1/4</div>
    </div>
  </li>
</ul>
```

_例子: 弹性布局,嵌套流式等列布局及流式布局_

<div class="bui-box">
    <div class="span1 primary">
        <ul class="bui-fluid-2">
            <li class="round danger">1/4</li>
            <li class="round warning">1/4</li>
        </ul>
    </div>
    <div class="span1 primary">
        <div class="bui-fluid">
            <div class="span6 round danger">1/4</div>
            <div class="span6 round warning">1/4</div>
        </div>
    </div>
</div>

```html
<div class="bui-box">
  <div class="span1">
    <ul class="bui-fluid-2">
      <li>1/4</li>
      <li>1/4</li>
    </ul>
  </div>
  <div class="span1">
    <div class="bui-fluid">
      <div class="span6">1/4</div>
      <div class="span6">1/4</div>
    </div>
  </div>
</div>
```
