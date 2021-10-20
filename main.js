let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // This is used to set a timer for how long it should take for the action to complete .A string or number determining how long the animation will run.
          duration: 4000,
          // This determines how the animations should be completed, ease-in, ease-out or other options that effect the animation.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the change  value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  

  
  let navbar = $(".navbar");
  
  $(window).scroll(function () {
    // get the complete hight of window
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      navbar.addClass("sticky");
    } else {
      navbar.removeClass("sticky");
    }
  });