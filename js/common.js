
$(document).ready(function(){
  $(".open_menu").hide();
  $(".mobile_menu li").click(function () {

  if ($(".open_menu").is(":hidden")) {
      $(".open_menu").show();
      $(".close_menu").hide();
    } 
    else {
      $(".open_menu").hide();
      $(".close_menu").show();
    }
  return false;
  });
});


$(document).ready(function(){
  $(".dropdown").hide();
  $(".mobile_menu li").click(function () {
    
    if ($(".dropdown").is(":hidden")) {
      $(".dropdown").show("slow");
    } 
    else {
      $(".dropdown").hide("slow");
    }
  return false;
  });
});

// ============ stance ===============

$(document).ready(function(){
    $(".ch-btn-karta").click(function(){
        $(".otziv-wrap").hide('slow');
        $(".karta-wrap").show('slow');
    });
    $(".ch-btn-otziv").click(function(){
        $(".otziv-wrap").show('slow');
        $(".karta-wrap").hide('slow');
    });
});

$(document).ready(function(){
    $(".view-popup").click(function(){
        $(".b-popup").show(300);
    });
    $(".b-popup").click(function(){
        $(".b-popup").hide('slow');
    });
});


// ============ stance ===============