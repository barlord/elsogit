console.log('R+L by barlord')
let sky1 ={
    photo: '/img/sky1.jpg',
    title: 'Ez egy cím',
    description: 'Ez itt pedig a  hosszú és unalmas leírás',
};
let ship=  {
    photo: '/img/ship.jpg',
    title: 'Berlini hajó',
    description: 'Philippel voltunk egy nagyon menő expoon',
}
let Cphoto = 0
let osszes = [sky1, ship]

let load= function(Cphoto) {
    $("#photo").attr('src', osszes[Cphoto].photo);
$('#title').text(osszes[Cphoto].title)
$('#description').text(osszes[Cphoto].description)
}
load(Cphoto)
$('.balnyil').click(function () {
    if (Cphoto>0) { Cphoto=Cphoto-1}
    else {Cphoto=osszes.length}
    load(Cphoto)
   
    
})
$('.jobbnyil').click(function () {
   if (Cphoto<osszes.length){ Cphoto=Cphoto+1}
   else {Cphoto=0}
    load(Cphoto)
    
})
