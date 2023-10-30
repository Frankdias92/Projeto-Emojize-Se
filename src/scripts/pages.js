$(document).ready(function () {
  $('#trocarPagina').click(function () {
    $( '.page1' ).addClass( 'move-from-top-saida' )
    .css( 'opacity', '0' )
    
   

   setTimeout( function () {
    $( '.page1' ).removeClass( 'move-from-top-entrada' )
    .css( 'opacity', '1' );
    $( '.page1' ).css( 'z-index', '0' );
    $( '.page2' ).addClass( 'move-from-top-saida' )
    .css( 'opacity', '1' );
    $( '.page1').css( 'opacity', '0' );

   },700)

  });

});


$(document).ready(function(){
  $('#dropDown').mouseover(function(){
    $('.drop-down').addClass('drop-down--active');
  });
  $('.drop-down').click(function(){
    $('.drop-down').removeClass('drop-down--active');
  });
});