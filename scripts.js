// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
    });

// Icecream flavor 

    $('#icecream-button').click(function(){
  
        let icecreamOptions = [
          'Italian',
          'Chinese',
          'Japanese',
          'Australian',
          'French'
        ]
      
        let icecreamSuggestion = icecreamOptions[Math.floor(Math.random()*icecreamOptions.length)];
      
        $('#icecream-suggestion').text('You should try ' + icecreamSuggestion + ' today!');
      
      });