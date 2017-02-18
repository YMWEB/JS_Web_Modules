require.config({
    baseUrl: '../../scripts',
    paths: {
        jquery: 'lib/jquery-1.12.0.min'
    }
})

define(["lib/jquery.validate.min"], function () {
    var _init= function() {
        var _section = $('section').filter('.user').attr('data-user-section');
        var navgroups = $('.user-center').find('li.list-group-item').find('a');
        $.each(navgroups, function (i, item) {
            var $item = $(item);
            if ($item.attr('href').indexOf(_section) < 0) return;
            $item.css({
                'border-bottom': '1px solid black'
            })
        })
    }
    return {
        _init: _init
    }
})
