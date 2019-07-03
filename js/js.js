$(document).ready(function() {
  $(".btn-scroll").on("click", function(e) {
    e.preventDefault();
  });

  $("#home_example_slide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: $(".home-example-slide-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 2
        }
      }
    ]
  });

  $(".btn-scroll").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#home_step").offset().top
      },
      "slow"
    );
  });
});

$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  if (st > 100) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
});
