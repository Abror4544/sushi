$(function () {
  let btns = document.querySelectorAll(
    ".good_item .button_good, .brand_item .button_good, .good_pop_item .button_good"
  );
  let added = 0;
  let cart_icon = document.querySelector(".cart-icon_block");
  let quantity = document.querySelector(".good_quantity");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      $(cart_icon).fadeIn(500);
      added++;
      quantity.innerHTML = added;
      $(".big_circle svg").addClass("shake");
      $(".added_info").fadeIn();
      setTimeout(() => {
        $(".big_circle svg").removeClass("shake");
      }, 400);
      setTimeout(() => {
        $(".added_info").fadeOut(500);
      }, 2000);
    });
  }

  let closeBtn = document.querySelectorAll(".first .close");
  let order = document.querySelectorAll(".first .order");
  let plus = document.querySelectorAll(".order .plus");
  let minus = document.querySelectorAll(".order .minus");
  let number = document.querySelectorAll(".order .number");

  for (let i = 0; i < order.length; i++) {
    closeBtn[i].addEventListener("click", function () {
      $(order[i]).slideUp(500);
    });
  }

  for (let j = 0; j < number.length; j++) {
    let quantity = number[j].innerText;
    plus[j].addEventListener("click", function () {
      quantity++;
      number[j].innerText = quantity;
    });
    minus[j].addEventListener("click", function () {
      if (quantity !== 0) {
        quantity--;
        number[j].innerText = quantity;
      }
    });
  }

  $(".button_good.first").click(function () {
    $(".breadcrumb .two").removeClass("disabled");
    $(".cart_content.first").hide();
    $(".cart_content.second").show();
  });

  $(".second .actions .button_good").click(function () {
    $(".breadcrumb .three").removeClass("disabled");
    $(".cart_content.second").hide();
    $(".cart_content.third").show();
  });

  $(".tab_form .button_action").click(function () {
    $(".tab_form .button_action")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  $(".delivery_tab").click(function () {
    $(".delivery_form, .common .withoutSale").show();
    $(".pickup_form, .common .withSale, .common .sale").hide();
  });

  $(".pickup_tab").click(function () {
    $(".delivery_form, .common .withoutSale").hide();
    $(".pickup_form, .common .withSale,  .common .sale").show();
  });
  $(".delivery_info .text svg").mouseenter(function () {
    $(".del_info_pop").fadeIn(200);
  });
  $(".delivery_info .text svg").mouseleave(function () {
    $(".del_info_pop").fadeOut(200);
  });

  $(".good_pop_item .good_info").mouseover(function () {
    $(".good_info_hover").fadeIn(0);
  });
  $(".good_pop_item .good_info").mouseout(function () {
    $(".good_info_hover").fadeOut(0);
  });

  $(".good_pop_item .button_good").click(function () {
    $.fancybox.close({
      href: "javascript:;",
      src: "#set_pop",
    });
  });

  
  var swiper2 = new Swiper(".brandsSwiper", {
    spaceBetween: 60,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3.5,
        slidesPerGroup: 1,
      },
    },
  });
});
