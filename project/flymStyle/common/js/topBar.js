;$(function () {

    var getIframeDocument = function(element) {
        return  element.contentDocument || element.contentWindow.document;
    };

    // var viewModel = window.parent.frames["contentModel"];
    // var contentModel = window.parent.frames["conetntModel"];

    // console.log(contentModel.id);

    function topLocation(src) {
        contentModel.src = src;
    }

    //删除标签
    $('.icon-close').click(function () {
        $(this).parents('li').remove();
        if($(this).parents('li').hasClass('current')) {
            $('.top-menu-ul li').eq(0).addClass('current');
        }
    });
    $('.top-menu-ul li').dblclick(function () {
        $(this).remove();
        if($(this).hasClass('current')) {
            $('.top-menu-ul li').eq(0).addClass('current');
        }
    });

//    切换当前选中标签

    $(document).on('click', '.top-menu-ul li', function () {
        $(this).addClass('current').siblings().removeClass('current');
        topLocation('content/' + $(this).attr('data-src'));
    })

//    统计时间标签选择
    $('.em-time').click(function () {
        $('.em-time').removeClass('current');
        $(this).addClass('current');
    });
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
