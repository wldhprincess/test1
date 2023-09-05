var rightClick = false;
$(function() {




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



   

    $('#twoButtonToggle0').addClass('buttonBlue')
    $('.twoButton button').click(function(){
        $(this).addClass('buttonBlue');
        $('.twoButton button').not($(this)).removeClass('buttonBlue')
    })

    $('#twoButtonToggle0').click(function(){
        console.log('hi')
        $('.secoundShow').hide();
        $('.firstShow').css('display', 'flex');
        $('#mainProductGroup').load('indexMainProductMaterial.html');
        // #case1
        $("#mainProductGroup").on( "click", "button[data-kt-product-view]", function() {
            var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
            var isDrawingVisible = $closestBestPrdWidth.find('.drawing:visible').length > 0;
            
            $('.drawing:visible').hide();
            
            if (!isDrawingVisible || !$closestBestPrdWidth.is('.drawingShow')) {
                $closestBestPrdWidth.find('.drawing').show();
            }
        });

    })
    $('#twoButtonToggle1').click(function(){
        console.log('hi')
        $('.firstShow').hide();
        $('.secoundShow').css('display', 'flex');
        $('#mainProductGroup').load('indexMainProductUsage.html');
        $("#mainProductGroup").on( "click", "button[data-kt-product-view]", function() {
            
        });
    })


    $('#twoButtonToggle0').trigger('click');;

    const data_kt_product_view = function() {
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        var isDrawingVisible = $closestBestPrdWidth.find('.drawing:visible').length > 0;
        
        $('.drawing:visible').hide();
        
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.drawingShow')) {
            $closestBestPrdWidth.find('.drawing').show();
        }

    }


// *********************** 도면보기 click *********************** //
/*
    $('.drawingShow').on( "click", function() {
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        
        var isDrawingVisible = $closestBestPrdWidth.find('.drawing:visible').length > 0;
        
      
        $('.drawing:visible').hide();
        
        
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.drawingShow')) {
            $closestBestPrdWidth.find('.drawing').show();
        }
    });
    
    $('.drawingHide').on( "click", function(){
        $(this).closest('.drawing').hide();
    });
*/









// *********************** 시공사진보기 click *********************** //
    $('.sigongShow').click(function() {

        console.log('hi');
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        
        var isDrawingVisible = $closestBestPrdWidth.find('.sigong:visible').length > 0;
        

        
        $('.sigong:visible').hide();
        
       
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.sigongShow')) {
            $closestBestPrdWidth.find('.sigong').show();
        }
    });
    
    $('.sigongHide').click(function() {
        $(this).closest('.sigong').hide();
    });







   

    $('.marginN').click(function(){
        if($('.login a').attr('id') == "login"){
            location.href = 'product.html'
        } else if($('.login a').attr('id') == "logout"){
            location.href = 'productLog.html'
        }
    })

    $('.imgBox').click(function(){
        if($('.login a').attr('id') == "login"){
            location.href = 'productDetails.html'
        } else if($('.login a').attr('id') == "logout"){
            location.href = 'productDetailsLog.html'
        }
    })



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

    

    $('.positionAb').hide();

    // 2. .innerWrap > ul > li를 클릭했을 때 positionAb가 나타나도록 코드 수정
    $('.nav .innerWrap > ul > li').mouseover(function() {
        // 숨겨져 있던 positionAb 표시
        $(this).find('.positionAb').css('display', 'flex');
        // 다른 모든 positionAb 숨김
        $('.nav .innerWrap > ul > li').not(this).find('.positionAb').hide();

        $(this).addClass('backgroundBlue');
        $('.nav .innerWrap > ul > li').not(this).removeClass('backgroundBlue');

    });

    // 3. 다른 innerWrap > ul > li를 클릭했을 때 기존에 열려있는 positionAb를 숨기고 새로 클릭한 요소의 positionAb만 표시되도록 코드 수정
    $('.positionAb > li').click(function() {
        if ($(this).find(".positionAbs").length > 0) {
            // 기존에 열려있던 positionAb 숨김
            // $(this).closest('.innerWrap > ul > li').find('.positionAb').hide();
            // 새로 클릭한 요소의 positionAb 표시
            $(this).find(".positionAbs").css('display', 'flex');
        }
    });

    $('.nav > .innerWrap').mouseenter(function() {
        $(this).parents('.nav').show();
    })
    $('.nav > .innerWrap').mouseleave(function() {
        $(this).parents('.nav').hide();
        $('.scrollNav ul li a').removeClass('active')
    })


    
    $('#scrollNavigation0').mouseover(function() {
        $('.nav.navHide').show();
        $('.nav.navShow').hide();
        $('#scrollMenu0').css('display', 'flex');
        $('#scrollMenu1').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide(); 
        $('#scrollMenu0 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu0 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu0 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu0 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation1').mouseover(function() {
        $('.nav.navHide').show();
        $('.nav.navShow').hide();
        $('#scrollMenu0').hide();
        $('#scrollMenu1').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu1 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu1 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu1 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu1 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation2').mouseover(function() {
        $('.nav.navHide').show();
        $('.nav.navShow').hide();
        $('#scrollMenu0').hide();
        $('#scrollMenu2').css('display', 'flex');
        $('#scrollMenu1').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu2 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu2 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu2 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu2 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation3').mouseover(function() {
        $('.nav.navHide').show();
        $('.nav.navShow').hide();
        $('#scrollMenu0').hide();
        $('#scrollMenu3').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu1').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu3 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu3 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu3 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu3 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation4').mouseover(function() {
        $('.nav.navHide').show();
        $('.nav.navShow').hide();
        $('#scrollMenu0').hide();
        $('#scrollMenu4').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu1').hide();
        $('#scrollMenu4 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu4 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu4 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu4 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation5').mouseover(function() {
        $('.nav.navShow').show();
        $('.nav.navHide').hide();
        $('#scrollMenu5').css('display', 'flex');
        $('#scrollMenu6').hide();
        $('#scrollMenu7').hide();
        $('#scrollMenu8').hide();
        $('#scrollMenu5 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu5 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu5 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu5 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation6').mouseover(function() {
        $('.nav.navShow').show();
        $('.nav.navHide').hide();
        $('#scrollMenu6').css('display', 'flex');
        $('#scrollMenu5').hide();
        $('#scrollMenu7').hide();
        $('#scrollMenu8').hide();
        $('#scrollMenu6 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu6 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu6 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu6 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation7').mouseover(function() {
        $('.nav.navShow').show();
        $('.nav.navHide').hide();
        $('#scrollMenu7').css('display', 'flex');
        $('#scrollMenu6').hide();
        $('#scrollMenu5').hide();
        $('#scrollMenu8').hide();
        $('#scrollMenu7 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu7 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu7 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu7 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    $('#scrollNavigation8').mouseover(function() {
        $('.nav.navShow').show();
        $('.nav.navHide').hide();
        $('#scrollMenu8').css('display', 'flex');
        $('#scrollMenu6').hide();
        $('#scrollMenu7').hide();
        $('#scrollMenu5').hide();
        $('#scrollMenu8 .positionAb').eq(0).css('display', 'flex');
        $('#scrollMenu8 .positionAb').not(':eq(0)').hide();
        $('#scrollMenu8 li').eq(0).addClass('backgroundBlue');
        $('#scrollMenu8 li').not(':eq(0)').removeClass('backgroundBlue');
    });
    
    $('.arrow').click(function (event) {
        event.stopPropagation();
        $(this).closest('.positionAbs').hide();
        $('.positionAb > li').show();
    });


    // $('.firstListHover').addClass('listHover');
    // $('.firstListHover').find('a').addClass('listHoverA');

    
    $('aside li').mouseover(function(){
        $(this).addClass('listHover');
        $(this).find('a').addClass('listHoverA');
        $('aside li').not(this).removeClass('listHover');
        $('aside li').not(this).find('a').removeClass('listHoverA');
    });




    $('.productWrapBox .productWrap').hide();
    $('.productWrapBox .productWrap').eq(0).show();

    $('aside li').eq(1).mouseover(function(){
        $('.productWrap1').show();
    })





   





});






