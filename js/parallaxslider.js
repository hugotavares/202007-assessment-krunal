(function($) {
    var wh = window.innerHeight,
        $back_img1 = $('.back_img1'),
        $front_img1 = $('.front_img1'),
        $heading1 = $('.heading1'),
        $detail1 = $('.detail1'),
        $back_img2 = $('.back_img2'),
        $front_img2 = $('.front_img2'),
        $heading2 = $('.heading2'),
        $detail2 = $('.detail2'),
        $back_img3 = $('.back_img3'),
        $front_img3 = $('.front_img3'),
        $heading3 = $('.heading3'),
        $detail3 = $('.detail3');


    // Parallax Slider Initialization 
    var parallax_slider = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // Slide 1 scene 
    new ScrollMagic.Scene({
            duration: '100%',
            offset: 1
        })
        .setPin(".scrollContainer .slide1")
        .addTo(parallax_slider);

    // Slide 2 scene
    new ScrollMagic.Scene({
            duration: '100%',
            offset: 350
        })
        .setPin(".scrollContainer .slide2")
        .addTo(parallax_slider);

    // Slide 3 scene
    new ScrollMagic.Scene({
            duration: '100%',
            offset: 750
        })
        .setPin(".scrollContainer .slide3")
        .addTo(parallax_slider);



    var slide1 = new TimelineMax();
    slide1
        .fromTo($back_img1, 2, {
            yPercent: 0,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: -190,
            ease: Linear.easeInOut
        }, '3')
        .fromTo($front_img1, 2, {
            yPercent: 0,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: -190,
            ease: Linear.easeInOut
        }, '3')
        .fromTo($heading1, 1, {
            yPercent: 150,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: 90,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '0')
        .fromTo($detail1, 1, {
            yPercent: -20,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: -20,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '0');

    new ScrollMagic.Scene({
            offset: wh * 0.1,
            triggerElement: $('body')[0],
            duration: '200%'
        })
        .setTween(slide1)
        .addTo(parallax_slider);

    var slide2 = new TimelineMax();
    slide2
        .fromTo($back_img2, 2, {
            yPercent: 200,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: 98,
            ease: Linear.easeInOut
        }, '5')
        .fromTo($front_img2, 2, {
            yPercent: 200,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: 98,
            ease: Linear.easeInOut
        }, '5')
        .fromTo($heading2, 1, {
            yPercent: -320,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: -420,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '9')
        .fromTo($detail2, 1, {
            yPercent: 50,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: -20,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '9');

    new ScrollMagic.Scene({
            offset: wh * 0.1,
            triggerElement: $('body')[1],
            duration: '200%'
        })
        .setTween(slide2)
        .addTo(parallax_slider);


    var slide3 = new TimelineMax();
    slide3
        .fromTo($back_img3, 2, {
            yPercent: 400,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: 193,
            ease: Linear.easeInOut
        }, '17')
        .fromTo($front_img3, 2, {
            yPercent: 400,
            scale: 1,
            ease: Linear.easeInOut
        }, {
            yPercent: 193,
            ease: Linear.easeInOut
        }, '17')
        .fromTo($heading3, 1, {
            yPercent: -550,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: -679,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '20')
        .fromTo($detail3, 1, {
            yPercent: 50,
            autoAlpha: 0,
            scale: 1
        }, {
            yPercent: -20,
            autoAlpha: 1,
            scale: 1,
            ease: Linear.easeInOut
        }, '20');

    new ScrollMagic.Scene({
            offset: wh * 0.1,
            triggerElement: $('body')[2],
            duration: '300%'
        })
        .setTween(slide3)
        .addTo(parallax_slider);



})(jQuery);