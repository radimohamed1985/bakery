$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

  });
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });

//  function z(){
//    var i = 0 ;
//    for( var i = 0; i<10;i++){
//    console.log(i);
//    }
//  }
//  z();
//  var x= setInterval(z,10);


// let x = 0;

// setInterval(() => {
// x++;document.querySelector('.contr').innerHTML=x;

// }, 10);

// for(let x=0;x<100;x++){
//   setInterval(function(){x++;document.querySelector('.contr').innerHTML=x;},10)
// }