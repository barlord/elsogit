console.log('R+L by barlord')
let ticknumber=0

$('#addtodo').click(() =>{
    let todo= document.getElementById("todo").value
    console.log("he?")
    $('ul').append(
        `<li >${todo}  
        <img src="/img/pipa.svg" alt="tick" class='done' >
        <img src="/img/iconfinder_25_2135797.svg" alt="tick" class='delete' class="alap" >`)
    $('#todo').val('')
   
  
        
      

})

$('.todos-container').on('click', '.done', (event) => {
    $(event.target).parent().toggleClass('completed')
    console.log("jó?")
    
  });

  $('.todos-container').on('click', '.delete', (event) => {
    $(event.target).parent().toggleClass('deleted')
    console.log("nem")
    
  });
