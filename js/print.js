$(function(){
    window.print();

    
    $(window).on("afterprint", function() {
        // 인쇄 후에 수행할 작업을 여기에 추가
        location.href = 'check.html';
    });

})