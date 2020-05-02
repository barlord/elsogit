console.log('R+L by barlord')
$('button').click(() => {
    console.log('Yeah, you clicked me')
})
$('#gomb1').click(() => {
    $('#gomb').text('megnyomtad')
})
let color = 'blue'
$('#gomb2').click(() => {
    let color = document.getElementById("szin").value
    $('button').css('background', color)
})
console.log(color)
let number=0
$('#inc').click(() =>{
        number=number+1
        $('#Counter').text(number)  
})
console.log(number)
$('#dec').click(() =>{
    number=number-1
    $('#Counter').text(number)  
})