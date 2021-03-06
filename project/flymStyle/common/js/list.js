;(function() {
    //    数据统计菜单切换
    $('body').on('click', '.tj-item-page li', function () {
        var index = $(this).index();
        $('.tj-item-page li').removeClass('current');
        $(this).addClass('current');
        $('.tj-item').hide();
        $('.tj-item').eq(index).show();
    });

    //checkbox处理
    $('body').on('click', '.checkbox-label input', function () {
        if($(this).parents('.checkbox-label').is('#selectAlltd')) {
            if(!$(this).parents('.checkbox-label').hasClass('checked')) {
                $(this).parents('.checkbox-label').addClass('checked');
                $(this).parents('.checkbox-label').find('span').text('取消全选');
                $('.list-table .checkbox-label').addClass('checked');
                $('.list-table .checkbox-label input').attr('checked', true);
            } else {
                $(this).parents('.checkbox-label').removeClass('checked');
                $(this).parents('.checkbox-label').find('span').text('全选');
                $('.list-table .checkbox-label').removeClass('checked');
                $('.list-table .checkbox-label input').attr('checked', false);
            }
        } else {
            $(this).parents('.checkbox-label').toggleClass('checked');
        }

    });

    //    统计时间标签选择
    $('.em-time').click(function () {
        $('.em-time').removeClass('current');
        $(this).addClass('current');
    });

    //拓展搜索选项
    var _expandHeight = $('.expand-query-box').height();

    $('.expand-query').toggle(function () {
        $(this).find('.icon-arrow').addClass('active');
        $('.expand-query-box').stop(true,true).slideDown();
        console.log(_expandHeight);
        $('.list-table-hd').stop(true,true).animate({"margin-top": _expandHeight + 52 + "px"});
        $('.list-table-scroll').stop(true,true).animate({"top": _expandHeight + 158 + "px"});
    },  function () {
        $(this).find('.icon-arrow').removeClass('active');
        $('.expand-query-box').stop(true,true).slideUp();
        $('.list-table-hd').stop(true,true).animate({"margin-top": "20px"});
        $('.list-table-scroll').stop(true,true).animate({"top": "126px"});
    });

    // $('body').click(function (e) {
    //     var e = e || event;
    //     if(e.target.className != 'expand-query'
    //
    //     ) {
    //         $('.expand-query').find('.icon-arrow').removeClass('active');
    //         $('.expand-query-box').stop(true,true).fadeOut(1000);
    //     }
    // });

    //select 美化
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.page-totalnum select').select2({
        //minimumResultsForSearch: Infinity
    });

    //滚动条美化
    $('.list-table-scroll').niceScroll({
        cursorcolor:"#e4e4ea",
        cursoropacitymin:0.6,
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"10px",
        cursorborder:"1px solid #d9d9de",
        cursorborderradius:"0"
    });
    $('.content-body').niceScroll({
        cursorcolor:"#e4e4ea",
        cursoropacitymin:1,
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"10px",
        cursorborder:"1px solid #d9d9de",
        cursorborderradius:"0"
    });

//    tip
    $('table [title]').qtip({
        style: {
            classes: 'qtip-dark'
        },
        position: {
            my: 'bottom center',  // Position my top left...
            at: 'top center' // at the bottom right of...
        }
    });

//    datepicker
    $.datetimepicker.setLocale('ch');//设置中文
    $('.date-picker').datetimepicker({
        lang:"ch",           //语言选择中文
        format:"Y-m-d",      //格式化日期
        timepicker:false,    //关闭时间选项
        yearStart:2000,     //设置最小年份
        yearEnd:2050,        //设置最大年份
    });
    $('#btn-add').click(function(){
        layer.open({
            type:2,
            title:'添加用户',
            area:['632px', '447px'],
            fixed:true,
            skin: 'pop-add',
            maxmin: true,
            shadeClose: true,
            content: '../pop.html'
        });
    });

//    表头箭头切换
    var clickTime = 0;
    $('.list-table th').click(function (event) {
        var e = event || window.event;
        if(e.target.nodeName.toLowerCase() != 'span') {
            $('.list-table .arrow').hide();
            $(this).find('.arrow').hide().eq(clickTime % 2).show();
            clickTime++;
        }
    });

    //表格横向滚动处理

    $('.list-table-scroll').scroll(function() {
        $('.list-table-container').scrollLeft($('.list-table-scroll').scrollLeft());
    });

    var tableRow = $('.list-table-hd th:visible').length;
    var tableWidth = tableRow * 10 + "%";
    $('.list-table table').width(tableWidth);
    console.log(tableRow);

})();
