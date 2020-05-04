console.log('R+L by barlord')
let ticknumber=0
$('#addtodo').click(() =>{
    let todo= document.getElementById("todo").value
    $('ul').append('<li id="test">'+todo + '<img src="/img/iconfinder_success_1646004.png" alt="tick"  id="pipa">')
    $('#todo').val('')
    ticknumber=ticknumber+1
})
