var rightClick = false;
$(function() {


    $(".scrollNav ul li").click(function() {
        let index = $(this).index();
        $(this).toggleClass('.active');
        let targetElement = $(".productsName").eq(index);
        $("html, body").animate({
            scrollTop: targetElement.offset().top
        }, 800); 
        $('.nav').hide();
    });

    /* $(".scrollNav ul li").hover(function() {
       
        $(this).find('a').css('color','#004ea2')
    }); */

    $(".btnWrap button").click(function() {
        let index = $(this).index();
        $(this).toggleClass('.active');
        let targetElement = $(".productsName").eq(index);
        $("html, body").animate({
            scrollTop: targetElement.offset().top
        }, 800); 
    });
    



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



    /* var activePositionAb = null;

    $('.nav > .innerWraper > ul > li > a').mouseover(function() {

        var clickedLi = $(this).closest('li'); 
        var positionAb = $(this).next('.positionAb');
        $('.nav > .innerWraper > ul > li').not(clickedLi).removeClass('navClick');
        $('.positionAb').hide();

        if (activePositionAb !== positionAb.get(0)) {
            clickedLi.addClass('navClick');
            if (positionAb.length > 0) {
                positionAb.show();
                activePositionAb = positionAb.get(0);
            }
        } else {
            activePositionAb = null;
        }
    });

    var activePositionAbs = null;

    $('.positionAb > li > a').mouseover(function() {

        var clickedLi = $(this).closest('li');
        var positionAbs = $(this).next('.positionAbs');

        $('.positionAb > li').not(clickedLi).removeClass('navClick');
        $('.positionAbs').hide();

        if (activePositionAbs !== positionAbs.get(0)) {
            clickedLi.addClass('navClick');
            if (positionAbs.length > 0) {
                positionAbs.show();
                activePositionAbs = positionAbs.get(0);
            }
        } else {
            activePositionAbs = null;
        }
    });
    $('.positionAbs li a').mouseover(function(){
    
        // 이미 'navClick' 클래스가 있는 요소들로부터 해당 클래스 제거
        $('.positionAbs li.navClick').removeClass('navClick');
    
        // 클릭한 링크의 부모 'li' 요소에 'navClick' 클래스 추가
        $(this).closest('li').addClass('navClick');
    });


    var isNavHovered = false;  // nav 요소 위에 마우스가 있는지 여부를 나타내는 플래그
    
    // nav 요소에 마우스가 올라갔을 때와 벗어났을 때의 이벤트 처리
    $('.navHide').mouseover(function() {
        isNavHovered = true;
        $('.navHide').show();
    }).mouseleave(function() {
        isNavHovered = false;
        $('.navHide').hide();
    });
    $('.navShow').mouseover(function() {
        isNavHovered = true;
        $('.navShow').show();
    }).mouseleave(function() {
        isNavHovered = false;
        $('.navShow').hide();
    });
    

    $('#overflow').mouseover(function() {
        $('.positionAbLeft').show();
        $('#scrollMenu0').show();
    })


    
   
    // .scrollNav ul a 요소에 마우스가 올라갔을 때의 이벤트 처리
    $('.scrollNav .firstShow li').mouseover(function() {
        $('.scrollNav .firstShow li').removeClass('scrollHeaderA');
        $(this).addClass('scrollHeaderA');
        $('.navHide').show();
    });
    $('.scrollNav .secoundShow li').mouseover(function() {
        $('.navShow').show();
    });
    $('#scrollNavigation0').mouseover(function(){
        
        $('#scrollMenu1').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu0').show();
    })
    $('#scrollNavigation1').mouseover(function(){
        $('#scrollMenu0').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu1').show();
    })
    $('#scrollNavigation2').mouseover(function(){
        $('#scrollMenu0').hide();
        $('#scrollMenu2').show();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').hide();
        $('#scrollMenu1').hide();
    })
    $('#scrollNavigation3').mouseover(function(){
        $('#scrollMenu0').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').show();
        $('#scrollMenu4').hide();
        $('#scrollMenu1').hide();
    })
    $('#scrollNavigation4').mouseover(function(){
        $('#scrollMenu0').hide();
        $('#scrollMenu2').hide();
        $('#scrollMenu3').hide();
        $('#scrollMenu4').show();
        $('#scrollMenu1').hide();
    })
    $('#scrollNavigation5').mouseover(function(){
        $('#scrollMenu5').show();
        $('#scrollMenu6').hide();
        $('#scrollMenu7').hide();
        $('#scrollMenu8').hide();
    })
    $('#scrollNavigation6').mouseover(function(){
        $('#scrollMenu5').hide();
        $('#scrollMenu6').show();
        $('#scrollMenu7').hide();
        $('#scrollMenu8').hide();
    })
    $('#scrollNavigation7').mouseover(function(){
        $('#scrollMenu5').hide();
        $('#scrollMenu6').hide();
        $('#scrollMenu7').show();
        $('#scrollMenu8').hide();
    })
    $('#scrollNavigation8').mouseover(function(){
        $('#scrollMenu5').hide();
        $('#scrollMenu6').hide();
        $('#scrollMenu7').hide();
        $('#scrollMenu8').show();
    })

    // .scrollNav ul a 요소에서 마우스가 벗어났을 때의 이벤트 처리
    $('.scrollNav ul a').mouseleave(function() {
        if (!isNavHovered) {
            $('.nav').hide();
        }
    }); */

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

    

    $('.innerWrap > ul > li').click(function() {
        $(this).find('.positionAb').css('display', 'flex');
        $('.innerWrap > ul > li').not(this).find('.positionAb').hide();
    });


    $('.positionAb > li').click(function() {
        if ($(this).find(".positionAbs").length > 0) {
            $('.positionAb > li').siblings('.positionAb > li').not(this).hide();
            $(this).find(".positionAbs").css('display', 'flex');
        }
    });
    
    $('#scrollNavigation0').mouseover(function() {
        $('.nav.navHide').show();
        $('#scrollMenu0').css('display', 'flex');
    });
    
   
});






