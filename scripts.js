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