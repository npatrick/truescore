$( document ).ready(function() {

// get two comparisons at page load
 $.get('/nextBattlePairs', function(data){
   $('#divA').append(data[0]);
   $('#divB').append(data[1]);
 });


  $('#buttonA').on('click', function(){
    //post results to server
    $.post('resultOfBattle', {results: [{left:1}, {right: -1}]} );

    //update rank list
    $.get('/getRankList', function(data){
      $('#currentRank').html("");
      $('#currentRank').append(JSON.stringify(data));
    });

    // clear existing text
    $('#divA').html("");
    $('#divB').html("");

    // request new battle and populate
    $.get('/nextBattlePairs', function(data){
      $('#divA').append(data[0]);
      $('#divB').append(data[1]);
    });
  });



  $('#buttonB').on('click', function(){
    //post results to server
    $.post('resultOfBattle', {results: [{left:-1}, {right: 1}]} );

    //update rank list
    $.get('/getRankList', function(data){
      $('#currentRank').html("");
      $('#currentRank').append(JSON.stringify(data));
    });

    // clear existing text
    $('#divA').html("");
    $('#divB').html("");

    // request new battle and populate
    $.get('/nextBattlePairs', function(data){
      $('#divA').append(data[0]);
      $('#divB').append(data[1]);
    });
});

});
