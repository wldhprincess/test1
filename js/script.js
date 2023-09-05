// TODO : 검토 후 삭제
// var rightClick = false;
$(function() {

    var scrollHeader = $('.scrollHeader');
    var scrollPosition = scrollHeader.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= scrollPosition) {
            scrollHeader.addClass('fixed');
            scrollHeader.css('border-bottom', '1px solid #c9c9c9')
        } else {
            scrollHeader.removeClass('fixed');
            scrollHeader.css('border-bottom', '0')
        }
    });

    $(".scrollNav ul li").click(function() {
        let index = $(this).index();
        $(this).find('a').addClass('active');
        $(".scrollNav ul li").not(this).find('a').removeClass('active');
        let targetElement = $(".productsName").eq(index);
        $("html, body").animate({
            scrollTop: targetElement.offset().top
        }, 800); 
        $('.nav').hide();
    });

    $(".scrollNav ul li").mouseover(function(){
        $(this).find('a').addClass('active');
        $(".scrollNav ul li").not(this).find('a').removeClass('active');
    })
    



    

    // 메인메뉴 소재별품목|용도별품목 스위칭
    $('button[data-kt-btn-selectCategory]').click(function() {
        let currentCategoryName = $(this).attr("data-kt-btn-selectCategory");
        $(this).addClass('buttonBlue').siblings().removeClass('buttonBlue');
        $("ul[data-kt-btn-showCategoryMenuMain="+currentCategoryName+"]").css('display','flex').siblings().hide();
        $('[data-kt-btn-showcategorymenufirst]').hide();

        // load html
        $('#mainProductGroup')
            .load(
                'indexMainProduct'
                +(currentCategoryName.charAt(0).toUpperCase() 
                + currentCategoryName.slice(1))
                + '.html'
                , callback_fn_aside);
    });
    // 메인메뉴 마우스오버시 First 메뉴 처리
    $('ul[data-kt-btn-showCategoryMenuMain]').each(function(idx) {
        $('a', this).each(function(idx) {
            // 현재 카테고리 이름 가져오기
            let currentCategoryName = 
                $(this).parents('ul[data-kt-btn-showCategoryMenuMain]')
                .first()
                .attr("data-kt-btn-showCategoryMenuMain");

            // 각 메인메뉴 마우스오버 UI 처리
            $(this).on('mouseover', function(e) {
                // 현재 메인메뉴의 first 영역
                $("div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").show()
                    .siblings('[data-kt-btn-showCategoryMenuFirst]').hide();


                // 현재 메인메뉴에 마우스오버시 첫번째 항목 초기값 설정
                $('div > ul', "div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").eq(idx)
                .find('li:eq(0)').addClass('backgroundBlue').siblings().removeClass('backgroundBlue')
                .end()
                .find('.positionAb:eq(0)').css('display', 'flex')
                .end().siblings().find('.positionAb').hide()
                ;

                // 현재 메인메뉴의 First 내의 메뉴
                $('div > ul', "div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").eq(idx)
                .css('display', 'flex')
                .siblings().hide()
                ;
            });

            // 
            $('div > ul', "div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").eq(idx)
            .children().on('mouseover', function() {
                $(this).addClass('backgroundBlue').siblings().removeClass('backgroundBlue');
                $(this).find('.positionAb').css('display', 'flex')
                    .end().siblings().find('.positionAb').hide();
            });

            // 상태
            $('.positionAb li a', "div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").on('click', function() {
                var positionAbs = $(this).parent().find('.positionAbs');
                
                if (positionAbs.length > 0) {
                    positionAbs.css('display', 'flex');
                    $(this).parent().siblings().hide();
                }
            });
            
            // 이벤트
            $('button.arrow', "div[data-kt-btn-showCategoryMenuFirst="+currentCategoryName+"]").on('click', function() {
                var positionAbs = $(this).parents('.positionAbs');
                
                if (positionAbs.length > 0) {
                    positionAbs.hide();
                    $(this).parents('.positionAb li').siblings().show();
                }
            });

        });
    });

    // a-side 메뉴 마우스 호버 처리
    const callback_fn_aside = function() {
        $('aside li').on('mouseover', function(e) {
            // 
            $(this).addClass('listHover')
                .siblings().removeClass('listHover');
            //
            $(this).find('a').addClass('listHoverA')
                .end().siblings().find('a').removeClass('listHoverA');

        }).on('click', function() {
            let currentAsideName = $(this).children().attr("data-kt-aside-path");
            let productWrapBox   = $(this).parent().parent().parent().find('div[data-kt-productWrapBox]');
            let productWrapBoxIdx = productWrapBox.attr('data-kt-productWrapBox');

            productWrapBox.load(
                'main_aside/'
                + currentAsideName
                + '.html'
                // a-side 메뉴 클릭 후 제품 리스트 이벤트
                , function() {
                    $('button[data-kt-btn-product-detail]', productWrapBox).on('click', function() {
                        let attr = $(this).attr('data-kt-btn-product-detail');
                        if (attr == 'drawing' || attr == 'sigong') {
                            if ($('.drawing:visible').length) $('.drawing:visible').hide();
                            if ($('.sigong:visible').length) $('.sigong:visible').hide();
                            $(this).closest('.bestPrdWidth').find('.'+attr).show();
                        }
                        else if (attr == 'list') {
                            location.href='product.html';
                        }
                    });
                    $('button.drawingHide, button.sigongHide', productWrapBox).on( "click", function(){
                        $(this).closest('.drawing, .sigong').hide();
                    });
                }
            );
        });

        // 최초 로딩시 기본값
        $('aside').each(function(idx) {
            $('li:eq(0)', $(this)).trigger('click');
        });
    };

    // initialize
    $('button[data-kt-btn-selectCategory=material]').trigger('click');


    
    $('.purchase, .add').click(function(){
        $('.estimate').show();
    })
    $('.requestBtn').click(function(){
        
        if($('#address').val() == ''){
            alert('주소를 입력해주세요')
            $('.lineHeight').show();
            $('.estimate').css("height", ('885px'));
            $('.estimateTitPadding input').addClass('inputBox');
            $('.estimateTitPadding input').addClass('inputBoxMarginL');
            return false;
        } 
        
        if ($('.login a').attr('id') == "login") {
            alert('로그인을 해주세요.');
            return false;
        }else if($('.login a').attr('id') !== "login"){
            location.href = 'estimate.html'
        }
    })

    

    //로그인 메인 페이지 재구매

    


    closeBtn = $('.estimateTit .closeBtn');
        
    closeBtn.click(function(){
        $('.estimate').hide();
    })

    $('.print').click(function(){
        location.href = 'print.html'
    })
    $('.expense').click(function(){
        if($('.paddingT input').val() == ''){
            alert("주소를 먼저 입력해 주세요");
        }else{
            $('.inlineBlock').show();
            $(this).addClass('expenseColor');
        }
    })

    $('#checkbox0').click(function() {
        // 다른 체크박스들의 상태를 checkbox0와 동일하게 설정
        $('input[type="checkbox"]').not(this).prop('checked', this.checked);
    });

    $('input[type="checkbox"]').not('#checkbox0').click(function() {
        // 모든 체크박스가 선택되었는지 확인
        var allChecked = true;
        $('input[type="checkbox"]').not('#checkbox0').each(function() {
            if (!$(this).prop('checked')) {
                allChecked = false;
                return false; // 반복문 종료
            }
        });
        
        // 첫 번째 체크박스의 상태를 모든 체크박스가 선택되었는지 여부에 따라 설정
        $('#checkbox0').prop('checked', allChecked);
    });

    

});






