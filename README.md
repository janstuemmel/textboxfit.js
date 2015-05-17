# textboxfit.js

A tiny jquery plugin for google keep like textfitting.
It's AMD ready for use with requirejs.

## Install

Install textboxfit with bower

```
bower install textboxfit
```

...or just download it.

## Demo

http://janstuemmel.github.io/textboxfit.js/demo.html

##Usage

```html
<html>
<head>
    <title>Textboxfit</title>
    <script src="bower_components/textboxfit/dist/textboxfit.js"></script>
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

## Todo

* Bind resize for responsive boxes
* allow width orientation
* provide min package
