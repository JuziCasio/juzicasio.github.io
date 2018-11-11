var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
var slideNow2 = 1;
var slideCount2 = $('#slidewrapper2').children().length;
var slideInterval2 = 3000;
var navBtnId2 = 0;
var translateWidth2 = 0;

$(document).ready(function() {
    var switchInterval2 = setInterval(nextSlide2, slideInterval2);

    $('#viewport2').hover(function() {
        clearInterval(switchInterval2);
    }, function() {
        switchInterval2 = setInterval(nextSlide2, slideInterval2);
    });
    $('.slide-nav-btn2').click(function() {
        navBtnId2 = $(this).index();

        if (navBtnId2 + 1 != slideNow2) {
            translateWidth2 = -$('#viewport2').width() * (navBtnId2);
            $('#slidewrapper2').css({
                'transform': 'translate(' + translateWidth2 + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
            });
            slideNow2 = navBtnId2 + 1;
        }
    });
});
function nextSlide2() {
    if (slideNow2 == slideCount2 || slideNow2 <= 0 || slideNow2 > slideCount2) {
        $('#slidewrapper2').css('transform', 'translate(0, 0)');
        slideNow2 = 1;
    } else {
        translateWidth2 = -$('#viewport2').width() * (slideNow2);
        $('#slidewrappe2r').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2++;
    }
}
function prevSlide2() {
    if (slideNow2 == 1 || slideNow2 <= 0 || slideNow2 > slideCount2) {
        translateWidth2 = -$('#viewport2').width() * (slideCount2 - 1);
        $('#slidewrapper2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2 = slideCount2;
    } else {
        translateWidth2 = -$('#viewport2').width() * (slideNow2 - 2);
        $('#slidewrapper2').css({
            'transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth2 + 'px, 0)',
        });
        slideNow2--;
    }
}