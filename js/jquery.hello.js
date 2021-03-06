;(function($, window, document, undefined) {
    $.fn.helloWorld = function(options) {
        var textToChange = $(this);
        var opts = $.extend({}, $.fn.helloWorld.defaults, options);

        textToChange.text("Hello, World!");
        textToChange.css('color', opts.color);
        textToChange.css('font-size', opts.size);

        return this;
    };

    $.fn.helloWorld.defaults = {
        color: '#000',
        size: '36px'
    };
})(jQuery, window, document);
