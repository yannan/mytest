;(function() {
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

    //select 美化
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.page-totalnum select').select2({
        //minimumResultsForSearch: Infinity
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

})();
