;$(function () {

    var getIframeDocument = function(element) {
        return  element.contentDocument || element.contentWindow.document;
    };

    function topLocation(src) {
        contentModel.src = src;
    }

    //删除标签
    $('body').on('click', '.icon-close', function() {
        var _src = $(this).parents('li')[0].attributes['data-src'].textContent;
        $(this).parents('li').remove();
        var parentLi = $(parent.document).find('.sidebar a');
        for(i=0;i<parentLi.length;i++) {
            if(parentLi[i].attributes['data-src']) {
                if(parentLi[i].attributes['data-src'].textContent == _src) {
                    parentLi[i].attributes['data-exist'].textContent = 'false';
                }
            }
        }
        $('#contentModel')[0].src = 'content.html';
        $('.top-logo').addClass('current');
    });

    $('body').on('dblclick', '.top-menu-ul li', function() {
        var _src = $(this).attr('data-src');
        $(this).remove();
        var parentLi = $(parent.document).find('.sidebar a');
        for(i=0;i<parentLi.length;i++) {
            if(parentLi[i].attributes['data-src']) {
                if(parentLi[i].attributes['data-src'].textContent == _src) {
                    parentLi[i].attributes['data-exist'].textContent = 'false';
                }
            }
        }
        $('#contentModel')[0].src = 'content.html';
        $('.top-logo').addClass('current');
    });

//    切换当前选中标签

    $(document).on('click', '.top-menu-ul li', function () {
        $('.top-logo').removeClass('current');
        $(this).addClass('current').siblings().removeClass('current');
        $('#contentModel')[0].src = $(this).attr('data-src');
        labelScroll();
    });

//    统计时间标签选择
    $('.em-time').click(function () {
        $('.em-time').removeClass('current');
        $(this).addClass('current');
    });

    //头部logo事件
    $('body').on('click', '.top-logo', function () {
        $(this).addClass('current');
        $('.top-menu-ul li').removeClass('current');
        $('#contentModel')[0].src = 'content.html';
    })


    //标签列表长度
    function getlabelLength() {
        var topulLength = 0;
        $('.top-menu-ul li').each(function (i) {
            topulLength += ($(this).width() + 2);
        });
        return topulLength;
    }

    //标签列表超长显示/隐藏
    function labelScroll() {
        var containerWidth = $('.top-bar').width() - $('.top-logo').width();
        $('.top-menu').width(containerWidth);
        $('.top-menu-ul').width(getlabelLength());

        if(containerWidth < getlabelLength()) {
            $('.menu-ctr').unbind('click');
            $('.menu-ctr').show();
        } else {
            $('.menu-ctr').unbind('click');
            $('.menu-ctr').hide();
            $('.top-menu-ul').animate({left: 0});
        }

    }

    $('body').on('click', '.menu-ctr-left', function () {
        var _left = parseInt($('.top-menu-ul').css("left")) - 200 + "px";
        console.log(_left);
        $('.top-menu-ul').animate({left: _left});
    });
    $('body').on('click', '.menu-ctr-right', function () {
        var _left = parseInt($('.top-menu-ul').css("left")) + 200 + "px";
        if(parseInt($('.top-menu-ul').css("left")) < 0 ) {
            $('.top-menu-ul').animate({left: _left});
        }

    });
    console.log($('body'));

    $(window).resize(function () {
        labelScroll();
    })

    //select 美化
    $('select').select2({
        minimumResultsForSearch: Infinity
    });

    //滚动条美化
    $('body').niceScroll({
        cursorcolor:"#e4e4ea",
        cursoropacitymin:1,
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"10px",
        cursorborder:"1px solid #d9d9de",
        cursorborderradius:"0"
    });

})
