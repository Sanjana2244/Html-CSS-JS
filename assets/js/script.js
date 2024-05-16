
  $("#menu-toggle").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".mobile-nav").stop(true, true).slideDown();
    } else {
      $(".mobile-nav").stop(true, true).slideUp();
    }
  });
  $(".mobile-menu li span.arrow").on("click", function () {
    $(this).parent().find("> ul").stop(true, true).slideToggle();
    $(this).toggleClass("active");
  });


//   $(document).click(function(){
//     debugger;    
//     if ($("#menu-toggle")[0].className == 'active'){
//  $("#menu-toggle").click();}
// });
// $("#menu-toggle").click(function(e){
//   e.stopPropagation();
// });


$(document).ready(function(){
  $(document).mouseup(function(e){
     var menu = $('#menu-toggle');
    //  debugger;
     if (!menu.is(e.target) // The target of the click isn't the container.
     && menu.has(e.target).length === 0) // Nor a child element of the container
     {  
        if (e.target.innerText == "Our Services " || e.target.innerText == "HR Transformation "){
          return;
        }
        else{
          menu.click();
        }
        
     }
  });
});