function back2Top() {
    $("body,html").animate({scrollTop:0},1000);
    return false;
}

if (document.location.href.indexOf('local') == -1) {
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F65632e2f0cea0f5ca6ce9ec7feb4fb03' type='text/javascript'%3E%3C/script%3E"));

    var ie = /msie (\d+\.\d+)/i.test(navigator.userAgent)
        ? (document.documentMode || + RegExp['\x241']) : undefined;
    if (ie < 9) {
        var mark = document.createElement('div');
        mark.style.cssText = 'position:absolute;z-index:10000;left:0;top:0;width:100%;text-align:center;'
            + 'filter:alpha(opacity=90);background-color:#ccc;'
            + 'height:' + document.documentElement.clientHeight + 'px;'
            + 'padding-top:' + (document.documentElement.clientHeight / 2 - 100) + 'px';
        mark.innerHTML = '<img src="/homepage/asset/img/no2ie678.jpg" />';
        document.body.appendChild(mark);
    }
}

(function() {
    $('.banner img').animate({
        'marginLeft': '0'
    });

    setTimeout(function() {
        $('.enter').animate({'top': '417px'});
    }, 5000);
})();

(function() {
    $('#footer')[0].innerHTML =
        '<div class="container">'
        + '<div class="content">'
        + '<div class="feature">'
        + '<p>友情链接</p>'
        + '<ul>'
        + '<li><a href="http://efe.baidu.com" target="_blank">Baidu EFE</a></li>'
        + '<li><a href="http://echarts.baidu.com" target="_blank">ECharts</a></li>'
        + '<li><a href="http://ecomfe.github.io/zrender/index.html" target="_blank">ZRender</a></li>'
        + '</ul>'
        + '</div>'
        + '<div class="feature">'
        + '<p>更多</p>'
        + '<ul>'
        + '<li><a href="./duty" target="_blank">用户条款</a></li>'
        + '<li></li>'
        + '</ul>'
        + '</div>'
        + '<div class="feature">'
        + '<p>联系我们</p>'
        + '<ul>'
        + '<li><a href="mailto:echarts(a)baidu.com">echarts(a)baidu.com</a></li>'
        + '<li><a href="http://weibo.com/echarts" target="_blank">Weibo</a></li>'
        + '</ul>'
        + '</div>'
        + '<p class="pull-right"><a href="javascript:void(0)" onclick="back2Top()" >Back to top</a></p>'
        + '<p>&copy; 2014 <a href="http://www.baidu.com/" target="_blank">Baidu</a></p>'
        + '</div>';
    + '</div>'
})();
