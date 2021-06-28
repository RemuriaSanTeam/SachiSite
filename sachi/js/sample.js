$(document).on('ready', function () {
    $(".sVisual").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
    $('.flickty-wrapper').flickity({
        freeScroll: true,
        draggable: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
    });

    footer();
    $(window).resize(function () {
        footer();
    });
    function footer() {
        var siteContent = $('.site-content');
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();

        var footer = $('.site-footer');
        var siteFooterHeight = footer.height();
        var siteFooterWidth = footer.width();

        console.log('Content Height = ' + siteContentHeight + 'px');
        console.log('Content Width = ' + siteContentWidth + 'px');
        console.log('Footer Height = ' + siteFooterHeight + 'px');
        console.log('Footer Width = ' + siteFooterWidth + 'px');

        siteContent.css({
            "margin-bottom": siteFooterHeight
        });
    };
    $(function () {
        $('.contact-button').on('click', function () {
            $('.contact-model').fadeIn();
            return false;
        });
        $('.contact-model-close').on('click', function () {
            $('.contact-model').fadeOut();
            return false;
        });
    });
    const btn=document.querySelector('.btn-menu');
    const nav=document.querySelector('.main-nav');

    btn.addEventListener('click',()=>{
        nav.classList.toggle('open-menu');
        if(btn.innerHTML==='メニュー'){
            btn.innerHTML='閉じる';
        }else{
            btn.innerHTML='メニュー';
        }
    });
});