$(function () {
  // 소재별 품목|용도별 품목 버튼을 누르면 색상만 변경
  $(".choiceBtn button").click(function () {
    $(this).addClass("ClickBlueBtn");
    $(".choiceBtn button").not($(this)).removeClass("ClickBlueBtn");
  });

  // 소재별 품목 버튼을 클릭한 경우
  $(".choiceBtn button")
    .eq(0)
    .click(function () {
      // 용도별 메뉴를 감춘다
      $(".classify.classifyHide").hide();
      // 소재별 메뉴를 보여준다
      $(".classify.classifyShow").css("display", "flex");

      $(".firstDepth > li > a").eq(0).trigger("mouseover");
      $(".secoudDepth li a").eq(0).trigger("mouseover");

      // selectProductBox 박스안의 첫번째 항목을 보여준다
      $("#secoundDepthKing0").css("display", "flex");
    });

  // 용도별 품목 버튼을 클릭한 경우
  $(".choiceBtn button")
    .eq(1)
    .click(function () {
      // 소재별 메뉴를 감춘다
      $(".classify.classifyShow").hide();
      // 용도별 메뉴를 보여준다
      $(".classify.classifyHide").css("display", "flex");

      $(".firstDepth > li > a").eq(5).trigger("mouseover");
      $(".classify.classifyHide.secoudDepth li a").eq(0).trigger("mouseover");

      // selectProductBox 박스안의 첫번째 항목을 보여준다
      $("#secoundDepthKing5").css("display", "flex");
    });

  // 소재별|용도별 첫번째 메뉴에 오버시
  $(".firstDepth > li > a").on("mouseover", function () {
    $(this).next(".secoudDepth").show();
    $(".firstDepth > li > a").not(this).next(".secoudDepth").hide();
    $(this).addClass("selected");
    $(".firstDepth > li > a").not(this).removeClass("selected");
  });

  $(".secoudDepth li a").mouseover(function () {
    $(this).addClass("select");
    $(".secoudDepth li a").not(this).removeClass("select");
  });

  for (let i = 0; i < 9; i++) {
    $("#titleClick" + i).mouseover(function () {
      $(".productBox").hide();
      $(".secoudDepth li a").removeClass("select");
      $(this).next().find("li").eq(0).find("a").addClass("select");
      $("#secoundDepthKing" + i).css("display", "flex");
      $("#secoundDepthKing" + i)
        .find(".productPhoto")
        .eq(0)
        .trigger("click");
      $("#secoundDepthKing" + i)
        .find(".clickColor")
        .eq(0)
        .trigger("mouseover");
    });
  }

  $(".classifyShow .secoudDepth a").mouseover(function (event) {
    event.preventDefault();

    $(this).addClass("select");

    const secoudDepth = $(this).closest(".secoudDepth");
    const secoudDepthIndex = $(".classifyShow .secoudDepth").index(secoudDepth);
    let linkIndex = secoudDepth.find("a").index(this);

    $(".productBox").hide();

    if (secoudDepthIndex > 0) {
      for (let i = 0; i < secoudDepthIndex; i++) {
        linkIndex += $(".classifyShow .secoudDepth").eq(i).find("li").length;
      }
    }

    if ($(".classifyShow .productBox").eq(linkIndex).length) {
      $(".classifyShow .productBox").eq(linkIndex).css("display", "flex");
      $(".classifyShow .productBox")
        .eq(linkIndex)
        .find(".productPhoto")
        .eq(0)
        .trigger("click");
      $(".classifyShow .productBox")
        .find(".clickColor")
        .eq(linkIndex)
        .trigger("mouseover");
    }
  });
  $(".classifyHide .secoudDepth a").mouseover(function (event) {
    event.preventDefault();

    $(this).addClass("select");

    const secoudDepth = $(this).closest(".secoudDepth");
    const secoudDepthIndex = $(".classifyHide .secoudDepth").index(secoudDepth);
    let linkIndex = secoudDepth.find("a").index(this);

    $(".productBox").hide();

    if (secoudDepthIndex > 0) {
      for (let i = 0; i < secoudDepthIndex; i++) {
        linkIndex += $(".classifyHide .secoudDepth").eq(i).find("li").length;
      }
    }

    if ($(".classifyHide .productBox").eq(linkIndex).length) {
      $(".classifyHide .productBox").eq(linkIndex).css("display", "flex");
      $(".classifyHide .productBox")
        .eq(linkIndex)
        .find(".productPhoto")
        .eq(0)
        .trigger("click");
      $(".classifyHide .productBox")
        .find(".clickColor")
        .eq(linkIndex)
        .trigger("mouseover");
    }
  });

  $(".secoudDepth").eq(0).show();
  $("#secoundDepthKing0").css("display", "flex");
  $("#secoundDepthKing0").find(".clickColor").eq(0).addClass("selectColor");

  $(".productsBtmHide").hide();
  $(".selectItem > ul > li").mouseover(function () {
    $(this).find("a").addClass("selectColor");

    // 다른 항목의 'selected' 클래스 제거 및 하위 메뉴 숨기기
    $(this).siblings().find("a").removeClass("selectColor");
  });
  $(".productPhoto1 ").addClass("productPtClick");

  //유사상풒 마우스 오버시 대체상품 사라짐
  $(".selectItem > ul > li > .clickColor").mouseover(function () {
    $(".productsBtmHide").hide();
    $(".productsBtmShow").show();
  });

  //대체상품 마우스 오버시 유사상풒 사라짐
  $(".selectItem > ul > li > .productShow").mouseover(function () {
    $(".productsBtmHide").show();
    $(".productsBtmShow").hide();
  });

  $(".productPhoto").click(function () {
    $(this).addClass("productPtClick");
    $(".productPhoto").not($(this)).removeClass("productPtClick");
  });

  $(".rightButton").click(function () {
    $(".estimate").show();
  });

  closeBtn = $(".estimateTit .closeBtn");

  closeBtn.click(function () {
    $(".estimate").hide();
  });

  let addressAlertShown = false;

  $(".requestBtn").click(function () {
    if ($("#address").val() == "" && !addressAlertShown) {
      alert("주소를 입력해주세요");
      addressAlertShown = true;

      $(".lineHeight").show();
      $(".estimate").css("height", "885px");
      $(".estimateTitPadding input").addClass("inputBox");
      $(".estimateTitPadding input").addClass("inputBoxMarginL");
    } else {
      if ($(".login a").attr("id") == "login") {
        alert("로그인을 해주세요.");
        location.href = "login.html";
      } else {
        location.href = "estimate.html";
      }
    }
  });

  $(".margin, .add").click(function () {
    alert("견적 추가가 완료되었습니다.");
  });

  $(".expense").click(function () {
    if ($(".paddingT input").val() == "") {
      alert("주소를 먼저 입력해 주세요");
    } else {
      $(".inlineBlock").show();
      $(this).addClass("expenseColor");
    }
  });

  $(".print").click(function () {
    location.href = "print.html";
  });

  $(".tabWrap button").eq(0).addClass("tabClick");
  $(".tabWrap button").click(function () {
    $(this).addClass("tabClick");
    $(".tabWrap button").not($(this)).removeClass("tabClick");
  });

  $(".tableWrap").hide();
  $(".tableWrap").eq(0).show();

  $(".tabWrap button")
    .eq(0)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(0).show();
    });

  $(".tabWrap button")
    .eq(1)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(1).show();
    });
  $(".tabWrap button")
    .eq(2)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(2).show();
    });
  $(".tabWrap button")
    .eq(3)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(3).show();
    });
  $(".tabWrap button")
    .eq(4)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(4).show();
    });
  $(".tabWrap button")
    .eq(5)
    .click(function () {
      $(".tableWrap").hide();
      $(".tableWrap").eq(5).show();
    });

  $(".colorGrayBtn").click(function () {
    $(this).parents(".toggle").next(".colorGrayClick").toggle();
    $(this).toggleClass("colorGrayChange");
  });
});
