$(document).ready(function () {
    // toggler btn
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleclassName('change');
    });

    // sticky navbar
    // $(window).scroll(function () {
    //     let position = $(this).scrollTop();

    //     if (position >= 718) {
    //         $('.navbar').addclassName('navbar-background');
    //         $('.navbar').addclassName('fixed-top');
    //     }
    //     else {
    //         $('.navbar').removeclassName('navbar-background');
    //         $('.navbar').removeclassName('fixed-top');
    //     }
    // });

    // back to top
    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('#back-to-top').addclassName('scrollTop');
           
        }
        else {
            $('#back-to-top').removeclassName('scrollTop');
        }
    });

    //ripples
    $("#header, .info").ripples({
        dropRadius: 20,
        perturbance: 0.03,

    });
    // magnific popup //
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enebled: true
        }
        // other options
    });
});