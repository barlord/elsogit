console.log('js ready and loaded made by barlord')
console.log(1+1)

let valtozo= false
if (valtozo===true) {
   console.log('az állítás igaz')
}
let a=7
if (a<5) {
    console.log(a/2)
} else {
    console.log(a/7+"   osztó")
}
let number = 11
for (let i= 1; i < number; i++) {
  console.log(i + "  loop")
}
let numbereven=21
for (let g= 0; g < numbereven  ; g=g + 2) {
    console.log(g + "  loopeven")
  }
let  add= ( a, b) => {
    return a+b
}
console.log(add(1,2));

let pn=(n) => {
    for (let i= 1; i < n; i++) {
        console.log(i + "  n")
      }
}
console.log(pn( 21 ));
console.log(pn( 16 ));
let greeting=(nev) => {
    return "Greetings   " + nev
}
greeting('Mark');  
console.log(greeting('Mark'));

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

console.log(printValues([0, 3, 6, 7, 9]))
let pvalue=(array) => {
    array.forEach((value)=>{
        console.log(value)
    })
    }
console.log(pvalue([2, 3, 4, 5]))
let mynumbers= [31, 12, 23]
mynumbers.forEach((number) => {
    console.log(number)
})
$('#title').text("my new title");
$('#e1').text("Macrotis");
$('#e2').css('border', '1px solid purple')
$(".elso").css('background', 'yellow')

let color='purple'
let number3= 10
let word='cool'
/*if (color === "purple") {
  $('.north').css('background', 'purple')
}
if (number3>100) {
  $('.east').text("whoah, that's a big number.")
  
}else {
  $('.east').text("just a regular number, please.")
}*/
if (color === "purple") {
  $(".north").css("background", "purple");
}

if (number > 100) {
  $(".east").text("whoah, that's a big number.");
} else {
  $(".east").text("just a regular number, please.");
}
if (word === "cool") {
  $(".south").text("Power of DOM");
} else {
  $(".west").text("Power of DOM");
}

$('body').append(
  '<h1>Hello World!</h1>'
);
let names= ['Marci', 'Józsi' , "Béla"]
names.forEach((names) => {
  $('ul').append(['<li>'+names ])
})
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('body').append(
  ['<h1>'+additionalBlock.title+'</h1>' ,
    '<p>'+additionalBlock.text
]);