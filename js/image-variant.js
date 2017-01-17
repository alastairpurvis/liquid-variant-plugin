function variantImageSelectorRefresh(variant, firstload, newresize) {

    // Filter images
    if (newresize) {
        var currentslideno = newresize;
    } else {
        var currentslideno = $('.product-single').slick('slickCurrentSlide');
    }
    if (firstload == false) {
        var fadeLoad = 0.82;
    } else {
        var fadeLoad = 1;
    }

    var filtername = variant;
    filtername = filtername.toString().toLowerCase().replace(/\s/g, '').replace("'", '').replace(",", '');

    if (filtername.indexOf("-") >= 0) {
        var filternamearr = filtername.split("-");
        filtername = filternamearr[1];
    }
    filtername = 'filter-' + filtername;
    $('.product-single').slick('slickUnfilter');

    $('.product-single').slick('slickFilter', function() {
        var that = $(this);
        return that.hasClass(filtername) || that.hasClass('filter-all');
    });
    $('.imgswitcher').each(function() {
        $(this).css("display", "none");
    });
    $(".imgswitcher").filter(function() {
        var that = $(this);
        return that.hasClass(filtername) || that.hasClass('filter-all');
    }).css("display", "block");

    $('.product-single').slick('slickGoTo', currentslideno, false).fadeTo('medium', fadeLoad).fadeTo('medium', 1.0);
    var getIndex = $('.product-single').slick('slickCurrentSlide');
    $(".imgswitcher").find('.product-thumbnail__image').removeClass("activeIMG");
    $(".imgswitcher").filter(':not(:hidden):eq(' + getIndex + ')').find('.product-thumbnail__image').addClass("activeIMG");

}

function imgswitcherActive(thisID) {

    $(".imgswitcher").find('.product-thumbnail__image').removeClass("activeIMG");
    thisID = thisID.find('.product-thumbnail__image');
    $(thisID).addClass("activeIMG");
}