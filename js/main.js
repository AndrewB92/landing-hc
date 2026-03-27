$(document).ready(function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  var $links = $(".haircuts__wrap a");
  var $button = $(".js-more");

  $links.slice(9).hide();

  $button.click(function (e) {
    e.preventDefault();
    $links.show();
    $(this).hide();
  });

  function closeMenu() {
    $(".js-open-menu").removeClass("active");
    $("body").removeClass("b-hidden");
    $(".mobile-menu").removeClass("active");
  }

  $(".js-anchor").click(function (e) {
    e.preventDefault();
    closeMenu();
    const headerHeight = $(".header").height();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - headerHeight - 20,
      },
      800
    );
  });

  $(".js-open-menu").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("html, body").animate({ scrollTop: 0 }, "fast");
    $("body").toggleClass("b-hidden");
    $(".mobile-menu").toggleClass("active");
  });

  $('.contacts__form').on('submit', function (event) {
    event.preventDefault();

    const form = $(this);
    const nameField = $('#name');
    const emailField = $('#email');
    const city = $('#city').val();

    let isValid = true;

    $('.contacts__error').hide();

    if (nameField.length) {
      const name = $.trim(nameField.val());
      if (!name || name.length < 2) {
        $('.js-error-name').show();
        isValid = false;
      }
    }

    if (emailField.length) {
      const email = $.trim(emailField.val());
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailPattern.test(email)) {
        $('.js-error-email').show();
        isValid = false;
      }
    }

    if (!city || city === '-1') {
      $('.js-error-city').show();
      isValid = false;
    }

    if (!isValid) return;

    const formData = form.serialize();
    const baseurl = 'https://happycurls.as.me/';
    const redirectUrl = `${baseurl}${city}${formData ? '?' + formData : ''}`;

    window.location.href = redirectUrl;
  });

  
  $(".faq__item").on("click", function () {
    $(this).find(".faq__answer").slideToggle(300);
    $(this).toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $("header").addClass("white");
    } else {
      $("header").removeClass("white");
    }
  });
});