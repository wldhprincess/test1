
$(function(){


    $('.choiceBtn button').eq(0).addClass('ClickBlueBtn')
    $('.choiceBtn button').click(function(){
        $(this).addClass('ClickBlueBtn');
        $('.choiceBtn button').not($(this)).removeClass('ClickBlueBtn');
    })


    $('.tabWrap button').eq(0).addClass('tabClick')
    $('.tabWrap button').click(function(){
        $(this).addClass('tabClick');
        $('.tabWrap button').not($(this)).removeClass('tabClick');
    })

    var oneDepthIndex = 0;

    $('.secoudDepth.selected').show().siblings('a').addClass('selected');
    $('.firstDepth > li > a').mouseover(function() {
        $(this).addClass('selected');
        $(this).parent().find('.secoudDepth').show();
        
        // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
        $('.firstDepth > li > a').not($(this)).removeClass('selected');
        $('.firstDepth > li > a').not($(this)).parent().find('.secoudDepth').hide();

        //현재 인덱스 
        oneDepthIndex = $(this).index();
    });
    $('.productsBtmHide').hide();
    $('.selectItem > ul > li').mouseover(function() {
        $(this).find('a').addClass('selectColor');
        
        // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
        $(this).siblings().find('a').removeClass('selectColor');
    });

    $('.productPhoto1 ').addClass('productPtClick');
    $('.selectItem > ul > li > .clickColor').mouseover(function() {
        $('.productsBtmHide').hide();
        $('.productsBtmShow').show();
    });
    $('.selectItem > ul > li > .productShow').mouseover(function() {
        $('.productsBtmHide').show();
        $('.productsBtmShow').hide();
    });

    $('.colorGrayBtn').click(function(){
        $(this).parents('.toggle').next('.colorGrayClick').toggle();
        $(this).toggleClass('colorGrayChange');
    });

    $('.productPhoto').click(function(){
        $(this).toggleClass('productPtClick');
        $('.productPhoto').not(this).removeClass('productPtClick');
    })
  



//********************** 대분류 제목을 hover할 경우 ***********************//
    for(let i =0; i< 5; i++){
        $('#titleClick'+ i).mouseover(function(){
        $('.productBox').hide();
        $('.secoudDepth li a').removeClass('select');
        $(this).next().find('li').eq(0).find('a').addClass('select')
        $('#secoundDepthKing' + i).css('display','flex');
        })
    }

  
 


  







    $('.firstSelect').addClass('select');
    $('.clickColor').addClass('selectColor');

    $('#initialProductBox').css('display','flex');




    $('.secoudDepth a').mouseover(function(event) {
        event.preventDefault();
        
        $('.secoudDepth a').not(this).removeClass('select');
        
        $(this).addClass('select');
        
        const secoudDepth = $(this).closest('.secoudDepth');
        let linkIndex = secoudDepth.find('a').index(this);

        $('.productBox').hide();




        // 첫번째 방법(무식한 방법) 
        if(oneDepthIndex == 1){
            linkIndex += 9; 
        }else if(oneDepthIndex == 2){
            linkIndex += 9 + 8; 
        }else if(oneDepthIndex == 3){
            linkIndex += 9 + 8 + 6; 
        }else if(oneDepthIndex == 4){
            linkIndex += 9 + 8 + 6 + 3;
        }else if(oneDepthIndex == 5){
            linkIndex += 9 + 8 + 6 + 3 + 8; 
        }

        // 두번째 방법(반복문을 이용하는 방법(최적화))
        /* var total = 0;
        for (var i = 0; i < oneDepthIndex; i++) {
            var count = $(".secoudDepth").eq(i).find("li").length;
            total += count;
            console.log("총total " + total);
        } */

        if ($('.productBox').eq(linkIndex)) {
        $('.productBox').eq(linkIndex).css("display","flex");
        }
    
    });
  




    $('.rightButton').click(function(){
        $('.estimate').show();
    })

    closeBtn = $('.estimateTit .closeBtn');
        
    closeBtn.click(function(){
        $('.estimate').hide();
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


    $('.margin, .add').click(function(){
        alert('견적 추가가 완료되었습니다.')
    })

    $('.expense').click(function(){
        if($('.paddingT input').val() == ''){
            alert("주소를 먼저 입력해 주세요");
        }else{
            $('.inlineBlock').show();
            $(this).addClass('expenseColor');
        }
    })

    $('.print').click(function(){
        location.href = 'print.html'
    })







})