$(function () {
  $("#okBtn").click(function () {
    $(".estimate").show();
  });

  let addressFilled = false;

  closeBtn = $(".estimateTit .closeBtn");

  closeBtn.click(function () {
    $(".estimate").hide();
  });

  $(".minitxtWrap").hide();
  $(".AdditionalProduct strong")
    .mouseover(function () {
      $(".minitxtWrap").show();
    })
    .mouseout(function () {
      $(".minitxtWrap").hide();
    });

  $(".viewDetailsImgBox1").addClass("viewDetailsImgBoxBorder");
  $(".viewDetailsImgBox").click(function () {
    $(this).toggleClass("viewDetailsImgBoxBorder");
    $(".viewDetailsImgBox").not(this).removeClass("viewDetailsImgBoxBorder");

    var img_url = $(this)
      .css("background-image")
      .replace(/^url\(['"](.+)['"]\)/, "$1");
    var img_urls = $(".mainPhoto")
      .css("background-image")
      .replace(/^url\(['"](.+)['"]\)/, "$1");

    if (img_url !== img_urls) {
      $(".mainPhoto").css({
        background: "url(" + img_url + ") no-repeat center",
        "background-size": "cover",
      });
    }
  });

  $(".blackBtnS").addClass("blackBtn");
  $(".DetailSigongBtn button").click(function () {
    $(this).toggleClass("blackBtn");
    $(".DetailSigongBtn button").not(this).removeClass("blackBtn");
  });

  $(".SigongPhoto").click(function () {
    var smallimg_url = $(this)
      .css("background-image")
      .replace(/^url\(['"](.+)['"]\)/, "$1");
    var bigimg_url = $(".DetailSigongPhotoR")
      .css("background-image")
      .replace(/^url\(['"](.+)['"]\)/, "$1");

    if (smallimg_url !== bigimg_url) {
      $(".DetailSigongPhotoR").css({
        background: "url(" + smallimg_url + ") no-repeat center",
        "background-size": "cover",
      });

      if (smallimg_url !== "none") {
        $(this).css({
          background: "url(" + bigimg_url + ") no-repeat center",
          "background-size": "cover",
        });
      } else {
        alert("선택한 사진에는 배경 이미지가 없습니다.");
        $(".DetailSigongPhotoR").css({
          background: "url(" + bigimg_url + ") no-repeat center ",
          "background-size": "cover",
        });
      }
    }
  });
});
