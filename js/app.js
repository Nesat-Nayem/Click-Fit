
$(document).ready(function () {


  $(window).on('load', function () {
    $('.preloader').addClass('complete')
  });

  // data fetch 

  $(document).ready(function () {


    function fetchData() {
      $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
          if (response && response.text) {
            $('.dataFromApi').text(response.text);
          } else {
            $('.dataFromApi').text('No data available');
          }
        },
        error: function () {
          $('.dataFromApi').text('An error occurred while fetching data');
        }
      });
    }


    fetchData();


    $('.refatchData').click(function () {
      fetchData();
    });
  });

  // text animation 

  var wobbleElements = document.querySelectorAll('.wobble');

  wobbleElements.forEach(function (el) {
    el.addEventListener('mouseover', function () {

      if (!el.classList.contains('animating') && !el.classList.contains('mouseover')) {

        el.classList.add('animating', 'mouseover');

        var letters = el.innerText.split('');

        setTimeout(function () { el.classList.remove('animating'); }, (letters.length + 1) * 50);

        var animationName = el.dataset.animation;
        if (!animationName) { animationName = "jump"; }

        el.innerText = '';

        letters.forEach(function (letter) {
          if (letter == " ") {
            letter = "&nbsp;";
          }
          el.innerHTML += '<span class="letter">' + letter + '</span>';
        });

        var letterElements = el.querySelectorAll('.letter');
        letterElements.forEach(function (letter, i) {
          setTimeout(function () {
            letter.classList.add(animationName);
          }, 50 * i);
        });

      }

    });

    el.addEventListener('mouseout', function () {
      el.classList.remove('mouseover');
    });
  });



  // image upload 

  $(document).ready(function () {
    $("#upload-button").click(function (e) {
      e.preventDefault();

      var formData = new FormData($('#image-form')[0]);

      $.ajax({
        url: 'http://localhost:7000/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
          console.log(data);


          $('#display-image').show().attr('src', data.imageUrl);
        },
        error: function (error) {
          console.error(error);
        }
      });
    });
  });


  // scrool animation 

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });


  var $child = $('.way-fade-up').children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(function () {
      self.addClass('animated fadeInUp');
    }, { offset: '90%' });
  });

  var $child = $('.way-fade-left').children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(function () {
      self.addClass('animated fadeInLeft');
    }, { offset: '90%' });
  });

  var $child = $('.way-fade-right').children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(function () {
      self.addClass('animated fadeInRight');
    }, { offset: '90%' });
  });

  $('.owl-carousel').owlCarousel({
    loop: true,

    nav: false,

    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
    // animateOut : "fadeOut",
    animateIn: "fadeInRight"

  });


  var filterizd = $('.filter-container').filterizr({
    animationDuration: .5,

  });

  $('.img-loaded').imagesLoaded()
    .done(function (instance) {
      var filterizd = $('.filter-container').filterizr({
        animationDuration: .5,

      });
    });


  $('a').smoothScroll({

    speed: 2000,
  });

});


