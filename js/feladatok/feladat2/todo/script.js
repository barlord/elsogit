console.log('R+L by barlord')
$('#addtodo').click(() =>{
    let todo= document.getElementById("todo").value
    $('ul').append('<li>'+todo)
    $('#todo').val('')
})
