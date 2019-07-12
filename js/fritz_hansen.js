$(document).ready(function () {
    
    var st = setInterval(auto, 3000)
    var num = 0

    function auto() {
        num++
        if (num > 4) num = 1

        $('.back').css({
            'background': 'url(images/img_' + num + '.jpg)',
            'background-size': 'cover',
            'transition': 'all 2s'
        })
    }


    //-------------------------


    $('.gnbW > .gnb > .gnb1').each(function () {
        $(this).mouseenter(function (e) {
            e.preventDefault();
            $('.gnb_deth2').hide()
            $(this).find('.gnb_deth2').show();
            $(this).parents('.gnbW').find('.gnb_B').show();

        })

        $(this).parent().parent().mouseleave(function (e) {
            e.preventDefault();
            $(this).find('.gnb_deth2').hide();
            $(this).find('.gnb_B').hide();

        })


    })

    //-------------------------

    $('.gnb_sub > .gnb_s > .gnb1').each(function () {

        $(this).mouseenter(function (e) {
            e.preventDefault();
            $('.gnb_deth2').hide()
            $(this).find('.gnb_deth2').show();
            $(this).parents('.gnb_sub').find('.gnb_B').show();

        })

        $(this).parent().parent().mouseleave(function (e) {
            e.preventDefault();
            $(this).find('.gnb_deth2').hide();
            $(this).find('.gnb_B').hide();

        })


    })

    //----------------------------


    var subnavOffset = $('.header_sub').offset().top;

    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        //console.log(scrollpos)

        if (scrollpos >= subnavOffset) {
            $('.header_sub').css({
                'position': 'fixed',
                'z-index': '998',
                'background-color': 'rgba(255,255,255,0.8)'
            })
        } else {
            $('.header_sub').css({
                'position': 'absolute',
                'z-index': '998'
            })

        }
    })


    //----------------------------

    $('.pro_btn a').click(function (e) {
        e.preventDefault();

        $('.pro_btn a').removeClass('on');
        $(this).addClass('on');

        var num = $(this).index();
        // console.log(num) 0 1 2 3 4

        $('.product_txtW li').removeClass('on');
        $('.product_txtW li').eq(num).addClass('on')
        //console.log($(this).eq(num))

        $('.product_imgW > img').prop({
            src: 'images/con3Product_' + ($(this).index() + 1) + '.png'
        })

        $('.product_imgW > img').hide().fadeIn(1000)
        $('product_txtW li').hide().fadeIn(2000)
    })

    $('.color > p').click(function (e) {
        e.preventDefault();
        $('.color > p.on').removeClass('on');
        $(this).addClass('on')
    })


    $('.container_sub1 section .txt p.more').click(function (e) {
        e.preventDefault();
        $(this).fadeOut();
    })


    //---------------------------------------


    $('.product_btnW a').click(function (e) {
        e.preventDefault();

        $('.product_btnW a').removeClass('on');
        $(this).addClass('on');

        var num = $(this).index();
        // console.log(num)

        $('.product_W').animate({
            top: -350 * num
        }, 500)
    })

    var ids = 0;

    $('.leftBtn').click(function (e) {
        e.preventDefault();
        ids--
        if (ids < 0) ids = 2;
        animation()
    })


    $('.rightBtn').click(function (e) {
        e.preventDefault();
        ids++
        if (ids > 2) ids = 0;
        animation()
    })

    function animation() {
        $('.product_btnW a').removeClass('on');
        $('.product_btnW a:eq(' + ids + ')').addClass('on')

        //console.log('.product_btnW a:eq(' + ids + ')')

        $('.product_W').animate({
            top: -350 * ids
        }, 500)
    }

    //----------------------------
 
          var sid;
        
        function cycleMenu(){//첫번째 보이고 나머지 순서 나의 인덱스값찾는 작업
            $('.sec1imgW li:gt(0)').hide();
            
            $('.con4btn > a').click(function(e){
                e.preventDefault();
                
                if($(this).hasClass('on')==false){//나를클릭했을 때 또 반복되는 것을 막기 휘해
                    if($('.btn_stop').hasClass('pause')==true){
                        clearInterval(sid);
                        sid=setInterval(cycleAutoPlay,3000);//정지 후 실행해 animate와 click이 혼란되지 않기 위해
                    }
                    changeItem($(this).index())
                 }
            })
            
            $('.btn_stop').click(function(e){
                e.preventDefault();
                if($(this).hasClass('pause')==true){
                    clearInterval(sid);
                    $(this).removeClass('pause');
                    $(this).addClass('play');
                }else{
                    sid=setInterval(cycleAutoPlay,3000);
                    $(this).removeClass('play');
                    $(this).addClass('pause');
                }
            })
            
            sid=setInterval(cycleAutoPlay,3000);
        }
    
    
    
     function changeItem(idx){//동그라미 버튼 바꾸고 이미지 바꾸기 ->변경되는 부분들 담은 함수  클릭했을때 동작
            if($('.sec1imgW li.on').is(':animated')==false){//animate되고 있는 상황이면 넣고 아니면 넣지마(여러번 눌렀을떄 여러번 반응 하는 것을 막기 위한 작업)
          
                $('.con4btn a.on').removeClass('on');
                $('.con4btn a:eq('+idx+')').addClass('on');

                var menuWidth=parseInt($('.section1').css('height')); //px 자르고 숫자값만 가져오기 parseInt

                $('.sec1imgW li:eq('+idx+')').css({
                    'top':menuWidth+'px','display':'block'
                })

                $('.sec1imgW li.on').animate({
                    'top':-menuWidth+'px'
                },1000,function(){
                    $(this).removeClass('on');
                    $(this).hide()
                })

                $('.sec1imgW li:eq('+idx+')').animate({
                    'top':0+'px'
                },1000,function(){
                    $(this).addClass('on');
            })
            }
         }  
        
        function cycleAutoPlay(){
            var temp=$('.con4btn a.on').index()+1;
            if(temp>$('.con4btn a').length-1){
               temp=0;
            }
            changeItem(temp)
        }
        
        $(document).ready(function(){
            cycleMenu(); //이 함수를 불러와
            
        })   
    
})
