$(function () {
  $(document).mouseup(function (e) {
    var div = $(".menu_ul, .lines");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".menu_ul").removeClass("active");
      document.getElementById("menu-bar").checked = false;
      document.getElementById("menu-active").checked = false;
    }
  });

  $(".lines").on("click", function () {
    if (
      document.getElementById("menu-bar").checked ||
      document.getElementById("menu-active").checked
    ) {
      $(".menu_ul").removeClass("active");
    } else {
      $(".menu_ul").addClass("active");
    }
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

  $(window).scroll(function () {
    let offset = $(window).scrollTop();
    $(".menu").toggleClass("fixed", offset > 100);
    $(".top .lines").toggleClass("fixed", offset > 100);
  });

  var swiper = new Swiper(".headerSwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
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

  let link = $(".menu_ul li a, .footer__menu ul li a");
  let menu_link = $(".menu_ul li a");

  link.on("click", function (e) {
    link.removeClass("active");
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);

    $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    menu_link.each(function () {
      let selector = $(this).attr("href");
      let target = $(selector);
      if (target.offset()) {
        if (scroll >= target.offset().top - 200) {
          menu_link.removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });

  $(".good_pop_item .button_good").click(function () {
    $.fancybox.close({
      href: "javascript:;",
      src: "#set_pop",
    });
  });

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
});
