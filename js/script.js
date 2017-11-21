$(document).ready(function(){
  $('.col-1').toggle();
  $('.col-2').toggle();
  $(".cat1").click(function(){
    $(".col-1 ").slideToggle(300);
  });
});

$(document).ready(function(){
  $(".cat2").click(function(){
    $(".col-2 ").slideToggle(300);
  });
});

$(document).ready(function(){
  $(".cat3").click(function(){
    $(".col-3 ").slideToggle(300);
  });
});


function counter($el, n, location) {
    (function loop() {
       $el.html(n);
       if (n == 0){
           	window.location = `/app/${location}`;
           }
       if (n--) {
           setTimeout(loop, 1000);
       }
    })();
}

  let hasToggled = false;
        $( ".start_knop_quiz" ).click(function() {
          if(hasToggled === false) {
            $( ".friend_1" ).addClass( "friend_2" );
            $( ".friend_2" ).removeClass( "friend_1" );
          }
          
        }); 


function wrongButton(wrongbut, url) {
  console.log(wrongbut)
  wrongbut[0].style.borderColor = "#F20C0C";
  window.location = `http://ijsjes.tk/app/${url}`;
}
function rightButton(goodbut, url) {
  console.log(goodbut)
  goodbut[0].style.borderColor = "#68DA44";
  window.location = `http://ijsjes.tk/app/${url}`;
}

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function() {
    }, function() {});
  } else {
    console.error('Ur browser does not support ServiceWorkers :( performance might be hurt');
  }


