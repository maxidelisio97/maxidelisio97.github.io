$(function(){
    $("a[href*=\\#]").click(function() {
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"")
    && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
    var targetOffset = $target.offset().top;
    $('html,body').animate({scrollTop: targetOffset}, 1000);
    }
    }
    });
    });

    ScrollReveal().reveal('#primero',{delay : 300});
    ScrollReveal().reveal('#segundo',{delay : 350});
    ScrollReveal().reveal('#slider',{delay : 380});
    ScrollReveal().reveal('#cuarto',{delay : 400});
    ScrollReveal().reveal('#footer',{delay : 420});