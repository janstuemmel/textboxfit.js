# textboxfit.js

A tiny jquery plugin for google keep like textfitting

## Install

Install textboxfit with bower

```
npm install bower -g
bower install textboxfit
```

##Usage

```html
<!-- index.html -->

<html>
<head><title>Textboxfit</title></head>
<body>
    <div class="box">A text</div>
    <div class="box">foo</div>
    <div class="box">Lorem Ipsum</div>
</body>
</html>
```

```css
/* style.css */
.box{
    width: 300px
    min-height: 200px
}
```

```javascript
// main.js
S(document).ready(function(){
    $('.box').textboxfit({
        minFontSize: 48,
        maxFontSize: 14,
        fixSize: false
    });
});
```
