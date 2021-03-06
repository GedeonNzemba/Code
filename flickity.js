var carousel = document.querySelectorAll(".main-carousel");
    for (let index = 0; index < carousel.length; index++) {

      var flkty = new Flickity(carousel[index], {
        imagesLoaded: true,
        percentPosition: false,
        draggable: true,
        wrapAround: true,
        autoPlay: true,
        initialIndex: 2,
        accessibility: true,
      });
      var imgs = carousel[index].querySelectorAll(".carousel-cell img");
      // get transform property
      var docStyle = document.documentElement.style;
      var transformProp =
        typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";
  
      flkty.on("scroll", function () {
        flkty.slides.forEach(function (slide, i) {
          var img = imgs[i];
          var x = ((slide.target + flkty.x) * -1) / 3;
          img.style[transformProp] = "translateX(" + x + "px)";
        });
      });
    };
