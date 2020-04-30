console.log("siker");
$('h1').html('this is done by <br> jv!');
$("h2").toggleClass("blue")
let name ="Marci"
let age='18'

function myFunction() {
    if($('p').length <5) {
        $("main").append("<p>a p is added</p>")
    }else {console.log("max reached")
    }
    $('p').css('border', '1px solid orange');
$("p").css('padding', "10px")
}

let colors = ["orange" , "yellow" , "black" , "lime" , "purple"]
colors.forEach (function(color){
    $("#box-container").append('<div class="box"></div>');
    $('.box:last-child').css('background', color);  
})
/*
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$("#box-container").append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);
*/

/*colors.forEach(function  (color) {
$("box-container").append("<div> class='box'></div>")
$(".box:last-child").css("background", color)
})
*/
for(let i =0; i < 100; i++){
console.log(i)
}

$("#add").click(myFunction);
$("#remove").click(function (){
    $("p:last-child").remove()
});

/*
if (condition that is true/false) {
    if true
}
else {
    if false
}
*/
//single line comment
/*c
ctöbb sorban
c
c
*/