var a = ['<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Wrists are for girls, I\'m slitting my throat</h2></a>', 
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Minecraft!</h2></a>', 
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Think it! Dream it! Do it!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Undefined...</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >l33t!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Music by C418!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Pure Virtue Signalling</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >I\'d cut off all my fingers just to touch you</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >uh oh! bad decision, mark!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >ravioli ravioli what\'s in the pocketoli</h2></a>',

];
var x = Math.floor(Math.random() * 10);
var string = a[x];
document.getElementById("string").innerHTML = string;