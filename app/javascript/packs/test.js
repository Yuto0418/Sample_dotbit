document.addEventListener('turbolinks:load', () => {
  $(function(){
    $(".nav__item").hover(function(){
      $(this).children(".guide_items").stop().slideToggle();
    });
  });

  $(function() {
    $('.toggle-pass').on('click', function() {
      $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $(this).prev('input');
      if (input.attr('type') == 'text') {
        input.attr('type','password');
      } else {
        input.attr('type','text');
      }
    });
  });
})
