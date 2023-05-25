// A $( document ).ready() block.
$( document ).ready(function(){
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });
  });

// Icecream flavor 

$('#icecream-button').click(function(){
  
        let icecreamOptions = [
          'vanilla cream',
          'strawberry swirl',
          'chocolate swirl',
          'cookies & cream delight'
        ]
      
        let icecreamSuggestion = icecreamOptions[Math.floor(Math.random()*icecreamOptions.length)];
      
        $('#icecream-suggestion').text('You should try ' + icecreamSuggestion + ' today!');
      
      });

      
// Popup Gallery

lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
        
    });
    
lightGallery(document.getElementById('lightgallery-2'), {
        speed: 500,
        download: false
        
    });