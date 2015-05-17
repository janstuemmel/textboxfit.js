(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    var textboxfit = function($nodes, options) {

        return $nodes.each(function(){

            var settings = {
                maxFontSize: 48,
                minFontSize: 12,
                fixSize: false
            };

            $.extend(settings, options);

            var node = $(this);

            var orgText = node.html();
            var fontSize = settings.minFontSize;

            $(this).css('fontSize', fontSize);

            var height = (parseInt(node.css('min-height')) != 0) ? parseInt(node.css('min-height')) : node.height();
            var width = (parseInt(node.css('min-width')) != 0) ? parseInt(node.css('min-width')) : node.width();

            $(this).html("<span>"+orgText+"</span>");

            var heightSpan = $(this).find('span').height();
            var widthSpan = $(this).find('span').width();

            if(heightSpan < height) {
                while(fontSize <= settings.maxFontSize && widthSpan < width && heightSpan < height) {

                    widthSpan = node.find('span').width();
                    heightSpan = node.find('span').height();
                    node.css('font-size', fontSize++);
                }
                if(settings.fixSize) node.css({'height': heightSpan, 'min-height': heightSpan });
            }
        });
    };

    $.fn.textboxfit = function(options) {
        return textboxfit(this, options);
    };
}));



