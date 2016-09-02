$.ajax('http://tushuo.baidu.com/certification/status', {
    method: 'get',
    data: {
        u: window.location.href,
        _: (new Date()).getTime()
    },
    success: function(data) {
        var data = $.parseJSON(data);
        if (data.status !== 0) {
            return ;
        }

        data = data.data;

        if (data.isGuest) {
            $('<a>').attr('href', data.loginUrl)
                .html('µÇÂ¼')
                .appendTo('.dtm-user-info');
        }
        else {
            $('.dtm-user-info').html(
                '<a href="/wave">' + data.uname + '</a> | <a href="' + data.logoutUrl + '">ÍË³ö</a>'
            );
        }

        $('.dtm-user-info').css('color', '#f0f0f0').css('font-size', '12px');
    }
});