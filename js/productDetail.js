$(function(){
    $('select').niceSelect();
    
    $('#checkbox1').click(function(){
        $('.mainPhoto').css("background-image", "url('../img/productDetails10.jpg')");
    })
    $('#checkbox2').click(function(){
        $('.mainPhoto').css("background-image", "url('../img/productDetails11.jpg')");
    })
    $('#checkbox3').click(function(){
        $('.mainPhoto').css("background-image", "url('../img/productDetails12.jpg')");
    })
    $('#checkbox4').click(function(){
        $('.mainPhoto').css("background-image", "url('../img/productDetails13.jpg')");
    })
    $(".color-checkbox").click(function() {
        $(".color-checkbox").not(this).prop("checked", false);
        $(".viewDetailsImgBox").removeClass('viewDetailsImgBoxBorder')
    });
    $('#checkbox0').click(function(){
        $('.mainPhoto').css("background-image", "url('../img/productDetails5.png')");
        $(".viewDetailsImgBox1").addClass('viewDetailsImgBoxBorder')
    })
    $(".viewDetailsImgBox").click(function() {
        $(".color-checkbox").prop("checked", false);
        $('#checkbox0').prop("checked", true);
    });
    $("#checkbox0").prop("checked", true);
    
})