$(function() {
    "use strict";

    var projectModal = $('#projectModal');
    var projectCarousel = $('#projectCarousel');

    $('.view-project-btn').on('click', function() {
        var project = $(this).closest('.project');
        var title = project.find('h4').text();
        var desc = project.find('.project-text').html();
        var imagesData = project.attr('data-images');
        
        // If no data-images attribute, use the main image
        var images = imagesData ? imagesData.split(',') : [project.find('img').attr('src')];

        $('#projectTitle').text(title);
        $('#projectDesc').html(desc);

        // Destroy existing carousel if it exists
        if (projectCarousel.hasClass('owl-loaded')) {
            projectCarousel.trigger('destroy.owl.carousel');
            projectCarousel.removeClass('owl-loaded');
            projectCarousel.find('.owl-stage-outer').children().unwrap();
            projectCarousel.empty();
        }

        // Add new images
        images.forEach(function(src) {
            projectCarousel.append('<div class="item"><img src="' + src + '" alt="Project Image"></div>');
        });

        // Initialize Owl Carousel
        projectCarousel.owlCarousel({
            items: 1,
            loop: images.length > 1,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>']
        });

        projectModal.fadeIn();
        $('body').addClass('modal-open');
    });

    $('.close-project, .project-modal').on('click', function(e) {
        if (e.target !== this && !$(e.target).hasClass('close-project')) return;
        projectModal.fadeOut();
        $('body').removeClass('modal-open');
    });

    $('.project-modal-box').on('click', function(e) {
        e.stopPropagation();
    });
});
