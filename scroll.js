$(document).ready(function(){
  var scrollToHash = function(event){
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
          window.location.hash = hash;
        });
      }
    }

  $('.navbar a').on('click', scrollToHash);
  $('.jumbotron-text button a').on('click', scrollToHash);
  });
