$(document).ready(function() {

  $('.icon').hover(function() {
    if ($('.sidebar').hasClass('sidebarNone')) {
      $('.sidebar').removeClass('sidebarNone').addClass('sidebarMin');
      $('.maintext').addClass('maintextMin');
    } else {
      $('.sidebar').removeClass('sidebarFull').addClass('sidebarLess');
      $('.maintext').removeClass('maintextFull').addClass('maintextLess');
      $('.list').css('opacity', '.7');
    }
  }, function() {
    if ($('.sidebar').hasClass('sidebarMin')) {
      $('.sidebar').removeClass('sidebarMin').addClass('sidebarNone');
      $('.maintext').removeClass('maintextMin');
    } else {
      $('.sidebar').removeClass('sidebarLess').addClass('sidebarFull');
      $('.maintext').removeClass('maintextLess').addClass('maintextFull');
      $('.list').css('opacity', '1');
    }
  });

  $('.icon').on('click', function() {
    $('.top').toggleClass('topAlt');
    $('.center').toggleClass('centerAlt');
    $('.bottom').toggleClass('bottomAlt');
    if ($('.sidebar').hasClass('sidebarMin')) {
      $('.sidebar').removeClass('sidebarMin').addClass('sidebarLess');
      $('.maintext').removeClass('maintextMin').addClass('maintextLess');
      $('.list').css('opacity', '1');
    } else {
      $('.sidebar').removeClass('sidebarLess').addClass('sidebarMin');
      $('.maintext').removeClass('maintextLess').addClass('maintextMin');
      $('.list').css('opacity', '0');
    }
  });

});
