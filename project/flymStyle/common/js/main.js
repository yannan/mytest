;$(function () {

//    切换当前选中标签

    $(document).on('click', '.top-menu-ul li', function () {
        $(this).addClass('current').siblings().removeClass('current');
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

    //左菜单点击
    var getIframeDocument = function(element) {
        return  element.contentDocument || element.contentWindow.document;
    };
    var viewModel = window.parent.frames["viewModel"];

    function getIframeContent(frameId){
        var frameObj = document.getElementById(frameId);
        return frameObj.contentWindow.document;
    }

    $('body').on('click', '.sidebar-third a', function() {
        if($(this).attr('data-exist') === "false") {
            $(this).attr('data-exist', 'true');
            $(getIframeContent('viewModel')).find('.top-menu-ul li').removeClass('current');
            $(getIframeContent('viewModel')).find('.top-menu-ul').append('<li class="current" data-src="' + $(this).attr('data-src') + '"> <a href="javascript:;">' + $(this).text() +'</a> <i class="icon-close"></i> </li>');
            $(getIframeContent('viewModel')).find('.top-menu-ul li').last().trigger('click');
            $(getIframeContent('viewModel')).find('.top-logo').removeClass('current');
        }
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

    // 	左侧展开收起
    var unfold = $('.unfold');
    unfold.click(function(){
        if($(this).hasClass('active')){
            $('.sidebar').animate({opacity:1},300);
            $(getIframeContent('viewModel')).find('.right-area').animate({left:'160px'},300);
            $(this).animate({left:'127px'},300).removeClass('active');
        }else{
            $('.sidebar').animate({opacity:0,left:0},300);
            $(getIframeContent('viewModel')).find('.right-area').animate({left:0},300);
            $(this).animate({left:0},300).addClass('active');
        }
    });

})
