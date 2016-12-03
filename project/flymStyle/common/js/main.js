;$(function () {

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
    $('.top-menu-ul li').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
    });

//    统计时间标签选择
    $('.em-time').click(function () {
        $('.em-time').removeClass('current');
        $(this).addClass('current');
    });

})
