var contentSections = document.getElementsByClassName('content-wrapper');
var areaSelectors = $('.brand-area-selectors').children().children();
var prismSides = $('.side');
var currentPrismSide;
var highlightColor = '#4A90E2';

function initOverlay() {
  $('.content-overlay').css('display', 'block');
  setTimeout(function() {
    $('.content-overlay').css({
      'opacity': '1'
    });
  }, 100);
}

$('.side').hover(function() {
    currentPrismSide = $('.side').index(this);
    $(areaSelectors[currentPrismSide]).css({'text-decoration':'underline',
  'color':highlightColor});
    $(this).find('.logotype').removeClass('svg-visible');
    $(this).find('.catagory-names').addClass('svg-visible');

  },
  function() {
    $(areaSelectors).css({'text-decoration':'none',
  'color':'black'});
    $(this).find('.logotype').addClass('svg-visible');
    $(this).find('.catagory-names').removeClass('svg-visible');
  });

  $('.brand-area-selectors ul li').hover(function() {

      currentPrismSide = $('.brand-area-selectors ul li').index(this);
      $(prismSides[currentPrismSide]).find('.logotype').removeClass('svg-visible');
      $(prismSides[currentPrismSide]).find('.catagory-names').addClass('svg-visible');

      $(this).css({
        'color': highlightColor,
      'text-decoration': 'underline',
    'cursor':'pointer'});
    },
    function() {
      $(this).css({'text-decoration': 'none',
    'color': 'black',});
    $(prismSides[currentPrismSide]).find('.logotype').addClass('svg-visible');
    $(prismSides[currentPrismSide]).find('.catagory-names').removeClass('svg-visible');
    });

$('.side').click(function() {
  $(contentSections[currentPrismSide + 1]).removeClass('content-wrapper--close');
  $(contentSections[currentPrismSide + 1]).addClass('content-wrapper--active');
  initOverlay();
});

$(".brand-area-selectors ul li span, #information-btn").click(function() {
  $(this).addClass('btn--active');
  for (var i = 0; i < contentSections.length; i++) {
    if (this.innerHTML.toUpperCase() === contentSections[i].childNodes[1].innerHTML.toUpperCase()) {
      $(contentSections[i]).removeClass('content-wrapper--close');
      $(contentSections[i]).addClass('content-wrapper--active');
    }
  }
  initOverlay();
});

$("#close-icon, .content-overlay").click(function() {
  $(".brand-area-selectors ul li span, #information-btn").removeClass('btn--active');
  $('.content-overlay').css('opacity', '0');
  $('.content-wrapper--active').addClass('content-wrapper--close');
  $('.content-wrapper--active').removeClass('content-wrapper--active');

  setTimeout(function() {
    $('.content-overlay').css('display', 'none');
  }, 1000);
});
