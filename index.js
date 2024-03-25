
var a = ['<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Wrists are for girls, I\'m slitting my throat</h2></a>', 
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Minecraft!</h2></a>', 
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Think it! Dream it! Do it!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Undefined...</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >l33t!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Music by C418!</h2></a>',

];
var x = Math.floor(Math.random() * 6);
var string = a[x];
document.getElementById("string").innerHTML = string;