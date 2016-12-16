;$(function () {

    $('#viewModel').width($(window).width() - 160);

//    切换当前选中标签

    $(document).on('click', '.top-menu-ul li', function () {
        $(this).addClass('current').siblings().removeClass('current');
    })

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

    $('body').on('click', '.sidebar a', function() {
        var _leftSrc = $(this).attr('data-src');
        if($(this).attr('data-exist') === "false") {
            $(this).attr('data-exist', 'true');
            $(getIframeContent('viewModel')).find('.top-menu-ul li').removeClass('current');
            $(getIframeContent('viewModel')).find('.top-menu-ul').append('<li class="current" data-src="' + $(this).attr('data-src') + '"> <a href="javascript:;">' + $(this).text() +'</a> <i class="icon-close"></i> </li>');
            $(getIframeContent('viewModel')).find('.main-area iframe').hide();
            $(getIframeContent('viewModel')).find('.main-area').append('<iframe src="' + $(this).attr('data-src') + '" id="contentModel" name="content" frameborder="0" width="100%" height="100%"></iframe>');
            $(getIframeContent('viewModel')).find('.top-menu-ul li').last().trigger('click');
            $(getIframeContent('viewModel')).find('.top-logo').removeClass('current');
        } else {
            $(getIframeContent('viewModel')).find('.top-menu-ul li').each(function (i) {
                if($(this).attr('data-src') == _leftSrc) {
                    $(this).trigger('click');
                }
            })
        }
    });

    //滚动条美化
    //$('body').niceScroll({
    //    cursorcolor:"#e4e4ea",
    //    cursoropacitymin:1,
    //    cursoropacitymax:1,
    //    touchbehavior:false,
    //    cursorwidth:"10px",
    //    cursorborder:"1px solid #d9d9de",
    //    cursorborderradius:"0"
    //});

    // 	左侧展开收起
    var unfold = $('.unfold');
    unfold.click(function(){
        if($(this).hasClass('active')){
            $('.sidebar').animate({'left': '0'},300);
            $(getIframeContent('viewModel')).find('.right-area').animate({left:'160px'},300);
            $(this).animate({left:'127px'},300).removeClass('active');
        }else{
            $('.sidebar').animate({'left': '-160px'},300);
            $(getIframeContent('viewModel')).find('.right-area').animate({left:0},300);
            $(this).animate({left:0},300).addClass('active');
        }
    });

//    左侧导航伸展方向
    var bodyHeight = $('body').height();
    $('.sidebar-menu>li').each(function() {
            if($(this).offset().top / bodyHeight > 0.666 ) {
                $(this).find('.sidebar-second, .sidebar-third').css({
                    'top': 'auto',
                    'bottom': 0
                });
            }
    });
//    左侧导航高度
    $('.sidebar-menu').hover(function () {
        $('.sidebar').css("z-index", 999);
    }, function () {
        $('.sidebar').css("z-index", 99);
    })
    var h =$(window).height() - 234;
    $('#Default').height(h);

    $(window).on('resize', function () {
        var h =$(window).height() - 234;
        $('#Default').height(h);
    })
})
