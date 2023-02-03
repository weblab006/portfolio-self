//* Skills part

var lang = {
  "html": "100%",
  "css": "90%",
  "bootstrap": "90%"
  "javascript": "70%",
  "react": "60%",
  "php": "60%",
  
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});