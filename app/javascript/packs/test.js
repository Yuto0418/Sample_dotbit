document.addEventListener('turbolinks:load', () => {
  $(function(){
    $(".nav__item").hover(function(){
      $(this).children(".guide_items").stop().slideToggle();
    });
  });
})
