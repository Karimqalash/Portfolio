$(function() {
    "use strict";
    var t = $(window);
    var typed = new Typed(".wow .typed", {
    	strings: ["Front-end Web Developer.", "React Developer."],
  		typeSpeed: 50,
  		backDelay: 3000,
  		backSpeed: 20,
  		smartBackspace: true,
  		loop: true,
  		loopCount: Infinity,
    });
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json');

    $("#submit").on("click",function() {
        var data = {
            service_id: 'gmail',
            template_id: 'template_Kg30FEPm',
            user_id: 'user_G1LxTijTUItTX0b9uLjCG',
            template_params: {
                'to_name':'Karim',
                'name': $("#form_name").val(),
                'email': $("#form_email").val(),
                'subject': $("#form_subject").val(),
                'message': $("#form_message").val()
            }
        };
 
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });

    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -80
    }), $(".navbar-nav .nav-link").on("click", function() {
        $(".navbar-collapse.show").removeClass("show")
    }), t.on("scroll", function() {
        var t = $(".button-top");
        $(this).scrollTop() >= 700 ? t.show() : t.hide()
    }), t.on("scroll", function() {
        $(".skill-progress span").each(function() {
            var t = $(this).offset().top + $(this).outerHeight(),
                o = $(window).scrollTop() + $(window).height(),
                a = $(this).attr("data-value");
            o > t && $(this).css({
                width: a
            })
        })
    }), $(".portfolio .gallery").magnificPopup({
        delegate: ".popup-img",
        type: "image",
        gallery: {
            enabled: !0
        }
    })
}), $(window).on("load", function() {
    $(".loading").fadeOut(500);
    var t = $(".gallery").isotope({
        itemSelector: ".item"
    });
    $(".filtering").on("click", "span", function() {
        var o = $(this).attr("data-filter");
        t.isotope({
            filter: o
        })
    }), $(".filtering").on("click", "span", function() {
        $(this).addClass("active").siblings().removeClass("active")
    })
});