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
<head>
    <title>Textboxfit</title>
    <script src="bower_components/textboxfit/textboxfit.js"></script>
    <style>
        .box{
            /* both required*/
            width: 300px;
            min-height: 200px;
        }
    </style>
    <script>
        S(document).ready(function(){
            $('.box').textboxfit({
                // default options
                minFontSize: 48,
                maxFontSize: 12,
                fixSize: false
            });
        });
    </script>
</head>
<body>
    <div class="box">A text</div>
    <div class="box">foo</div>
    <div class="box">Lorem Ipsum</div>
</body>
</html>
```
