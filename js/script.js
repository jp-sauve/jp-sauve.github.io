    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
$( ".fa-4x" ).hover(function() {
  $( this ).effect( "shake", { distance: 2}, { times:1 }, 5000 );
});
