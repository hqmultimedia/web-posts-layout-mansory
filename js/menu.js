function show_scroll_content() {
    // $('.sidebar-link').click(function() {
    $('.scroll_title').click(function() {


        $(this).toggleClass('selected');
        $(this).next('.scroll_content').toggleClass('scroll_content_selected');



    });

    // menu cấp 3 small
    $('.link-scroll').click(function() {


        $(this).toggleClass('selected');
        $(this).next('.scroll_content_2').toggleClass('scroll_content_2_selected');



    });
    // menu dropdown full
    $('.scroll_title').click(function() {


        $(this).toggleClass('selected');
        $(this).children('.icon-dropdown').toggleClass('selected');
        $(this).next('.scroll_content').toggleClass('remove-display');



    });
    // menu cấp 3 của dropdown full
    $('.link-scroll').click(function() {


        $(this).toggleClass('selected');

        $(this).next('.product-highlight').toggleClass('remove-display');
        // dành cho theme cv dòng này chỉ dùng cho cv
        $(this).next('.owl-carousel').toggleClass('remove-display');



    });



    // phần box search
    $('.show_box_search').click(function() {


        $('.box-menu-search').addClass('show');


    });
    $('.close_box_search').click(function() {


        $('.box-menu-search').removeClass('show');


    });

    //End phần box search
    $('body').append("<div class='background-box'></div>");
    $('.background-box').append("<i class='fa-solid fa-circle-xmark' style='opacity:0;'></i>");

    $('body').append("<div class='background-box-2'></div>");
    $('.background-box-2').append("<i class='fa-solid fa-circle-xmark' style='opacity:0;'></i>");


    // show box heart
    $('.show_box_heart').click(function() {


        $('.background-box').addClass('show');
        $('.box-heart').addClass('show');


    });
    // End show box heart
    // close box heart
    $('.close_box_heart,.background-box').click(function() {


        $('.background-box').removeClass('show');
        $('.box-heart').removeClass('show');


    });
    // End close box heart
    // Show box contact
    $('.show_box_contact').click(function() {


        $('.translate_Class').addClass('translate-left animated');
        $('.box-contact').addClass('show');
        $('.background-box-2').addClass('show');


    });
    // End show box contact
    // Close box contact
    $('.icon-close-box-contact, .background-box-2 ').click(function() {

        $('.translate_Class').addClass('translate-initial animated');
        $('.box-contact').removeClass('show');
        $('.box-contact').removeClass('show');
        $('.background-box-2').removeClass('show');

        var header = $('.translate_Class');

        setTimeout(function() {
            header.removeClass('translate-left animated');
        }, 900);
        var header_2 = $('.translate_Class');

        setTimeout(function() {
            header_2.removeClass('translate-initial animated');
        }, 900);
    });
    // End close box contact


}