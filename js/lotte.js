$(document).ready(function () {
    $('.gnb_W .gnb_1').each(function (e) {
       $(this).mouseenter(function (e) {
                e.preventDefault();
                $('.gnb_2').hide()
                $(this).parent().find('.gnb_2').show();
                $(this).parents('header').find('.nav_back').fadeIn();

            })

            $(this).parent().parent().mouseleave(function (e) {
                e.preventDefault();
                $(this).parent().find('.gnb_2').fadeOut();
                $(this).parents('header').find('.nav_back').fadeOut();

            })
    })
    
    $('.chart_btn a').click(function(e){
        e.preventDefault();
        $('.chart_btn a').removeClass('on');
        $(this).addClass('on')
        
        var num=$(this).index();
        
        $('.section_W').animate({
            left:-1410 * num
        },1000)
    })
    
    var num=0;
    
    $('.left_btn').click(function(e){
        e.preventDefault();
        num--
        if(num<0)num=1;
        animation()
    })
    
    $('.right_btn').click(function(e){
        e.preventDefault();
        num++
        if(num>1)num=0;
        animation()
    })
    
    function animation(){
        $('.chart_btn a').removeClass('on');
        $('.chart_btn a:eq('+num+')').addClass('on')
        
        $('.section_W').animate({
            left:-1410 * num
        },1000)
    }

})
