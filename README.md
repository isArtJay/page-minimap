# page-minimap

网页的迷你地图。

[在线Demo](/Demo/page-minimap)

# 用法示例

引入 page-minimap-0.3.12.min.js ：

```javascript
<script src="page-minimap-0.3.12.min.js"></script>
```

在你的 HTML 页面中添加 canvas 标签：

```html
<canvas id='map'></canvas>
```

修改一下它在屏幕中的位置：

```css
#map {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 100;
}
```

初始化并给它添加样式：

```js
<script>
    pagemap(document.querySelector('#map'), {
        viewport: null,
        styles: {
            'header,footer,section,article': rgba(0,0,0,0.08),
            'h1,a': rgba(0,0,0,0.10),
            'h2,h3,h4': rgba(0,0,0,0.08)
        },
        back: rgba(0,0,0,0.02),
        view: rgba(0,0,0,0.05),
        drag: rgba(0,0,0,0.10),
        interval: null
    });
</script>
```

