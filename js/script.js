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
    })
    $('#twoButtonToggle1').click(function(){
        console.log('hi')
        $('.firstShow').hide();
        $('.secoundShow').css('display', 'flex');
    })



// *********************** 도면보기 click *********************** //
    $('.drawingShow').click(function() {
        var $closestBestPrdWidth = $(this).closest('.bestPrdWidth');
        
        var isDrawingVisible = $closestBestPrdWidth.find('.drawing:visible').length > 0;
        
      
        $('.drawing:visible').hide();
        
        
        if (!isDrawingVisible || !$closestBestPrdWidth.is('.drawingShow')) {
            $closestBestPrdWidth.find('.drawing').show();
        }
    });
    
    $('.drawingHide').click(function() {
        $(this).closest('.drawing').hide();
    });









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
$('.innerWrap > ul > li').click(function() {
    // 숨겨져 있던 positionAb 표시
    $(this).find('.positionAb').css('display', 'flex');
    // 다른 모든 positionAb 숨김
    $('.innerWrap > ul > li').not(this).find('.positionAb').hide();

    $(this).addClass('backgroundBlue');
    $('.innerWrap > ul > li').not(this).removeClass('backgroundBlue');
});

// 3. 다른 innerWrap > ul > li를 클릭했을 때 기존에 열려있는 positionAb를 숨기고 새로 클릭한 요소의 positionAb만 표시되도록 코드 수정
$('.positionAb > li').click(function() {
    if ($(this).find(".positionAbs").length > 0) {
        // 기존에 열려있던 positionAb 숨김
        $(this).closest('.innerWrap > ul > li').find('.positionAb').hide();
        // 새로 클릭한 요소의 positionAb 표시
        $(this).find(".positionAbs").css('display', 'flex');
    }
});
    
    $('#scrollNavigation0').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').css('display', 'flex');
        $('#scrollMenu1').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
    });
    $('#scrollNavigation1').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').hide();
        $('#scrollMenu1').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
    });
    $('#scrollNavigation2').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').hide();
        $('#scrollMenu2').css('display', 'flex');
        $('#scrollMenu1').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
    });
    $('#scrollNavigation3').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').hide();
        $('#scrollMenu3').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu1').hide();
        $('#scrollMenu4').hide();
    });
    $('#scrollNavigation4').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').hide();
        $('#scrollMenu4').css('display', 'flex');
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu1').hide();
    });
    
    $('.arrow').click(function (event) {
        event.stopPropagation();
        $(this).closest('.positionAbs').hide();
        $('.positionAb > li').show();
    });
});






