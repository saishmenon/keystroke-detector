// $("button.blue").click(function(){
//     $("h1").css("color", "blue");
// });

// $("button.red").click(function(){
//     $("h1").css("color", "red");
// });

$(document).keypress(function(event){
    $("h1").html(event.key);
    $("h1").css("color", "black");
});