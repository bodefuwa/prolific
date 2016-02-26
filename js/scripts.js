var Slides = {
  totalSlides : '',
  container : $( "#slides" ),

  init() { ... },
  loadContent() { ... };

  init : function( totalSlides ) {
    // If nothing was passed to this function, the action will not continue
    if ( !totalSlides ) throw new Error('Please pass the total number of slides to the init method');
    Slides.totalSlides = totalSlides;

    // Load the slides
    Slides.loadContent();
  },

  loadContent : function() {
    for ( var 1 = 0; i < Slides.totalSlides; i++ ) {
      $('<div id="#slide-' + i + '""></div>')
        .load('slides/' + i + '.html')
        .appendTo( $('#slides') );
    }
  }
}

// Total expected slides
Slides.init( 10 );
