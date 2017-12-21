$(function() {
    var s, e, a, o = $(window),
    t = ($(document), $("html")),
    n = $("body"),
    l = "is-loaded",
    r = "is-active",
    d = "is-noscroll";
    
    loadCompleted();
    togglePopup2();
    tar();
    showAnchorNav();
    tooggleGnav();


    // 加载页边四条边框线
    function loadCompleted() {
        t.addClass(l);
    };
    // 点击对应的弹出框弹出对应的层
    function togglePopup2() {
        $(".js-toggle-popup2").each(function() {
            var s = $(this),
            e = s.find($(".js-toggle-popup2__trigger")),
            a = s.find($(".js-toggle-popup2__target"));
            e.on("click",
            function() {

                var s = $(this),
                o = s.hasClass(r),
                i = s.data("popup-trigger");
                o ? (e.removeClass(r), a.removeClass(r), $("html").removeClass(d)) : (e.addClass(r), s.addClass(r), $("html").addClass(d)),
                a.each(function() {
                    function s() {
                        c.removeClass(r)
                    }
                    var n = $(this),
                    l = n.data("popup-target");
                    if (i == l) {
                        if (n.hasClass("is-guide")) {
                            var c = $(".popup-guide");
                            c.addClass(r),
                            setTimeout(s, 2e3)
                        }
                        o ? (e.removeClass(r), a.removeClass(r), $("html").removeClass(d)) : (e.addClass(r), n.addClass(r), $("html").addClass(d))
                    }
                });
                console.log(t);

            })

        })
    };

    // sp.html移动端页面的顶部导航显示隐藏
    function showAnchorNav() {
        o.scroll(function() {
            var s = $(this).scrollTop();
            e = $(".js-anchor-nav__trigger"),
                a = $(".js-anchor-nav__target"),
                t = e.offset().top;
            s > t ? a.addClass(r) : a.removeClass(r);
        });
    }


    // 锚点链接缓动效果
    function tar() {
        // var s = $("a[href*='#']");
        var s = $("a[href*='#']");
        s.each(function() {
            $(this).on('click', function() {
                $('html,body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
        })
    }
    // menu导航，点击显示ul列表
    function tooggleGnav() {
        $(".js-toggle-menu").each(function() {
            menu = $(this).find($(".js-toggle-menu__trigger"));
            menuTarget = $(this).find($(".js-toggle-menu__target"));
            menu.on("click", function() {
                menuTarget.hasClass(r) ? (menu.removeClass(r), menuTarget.removeClass(r)) : (menu.addClass(r), menuTarget.addClass(r))
            })
        })
    }

    // slickjs轮播图初始化设置
    $('.draggable').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'li',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false
    });

    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});