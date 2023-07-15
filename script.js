$(document).ready(function(){
   $('.slider').slick({
    arrows:true,
    dots:true,
   });

   $('.slide1').click(function(event) {
      $('.slider').slick('goTo',0)
   });

   $('.slide2').click(function(event) {
      $('.slider').slick('goTo',1)
   });

   $('.slide3').click(function(event) {
      $('.slider').slick('goTo',2)
   });
});