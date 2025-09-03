var n = localStorage.getItem('on_load_counter');
if (n == null) {
    n=0;
}
n++;
localStorage.setItem("on_load_counter", n);

var a = [
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Pure Virtue Signalling</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >DOOR STUCK! DOOR STUCK!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >the perfectionist in me vehemently hates this website</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Always know where your towel is</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Think it! Dream it! Do it!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >I can fix him...</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >unabashed twilight fan</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Stay Noided</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >ravioli ravioli what\'s in the pocketoli</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >Wrists are for girls, I\'m slitting my throat</h2></a>', 
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >literally 1984</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >LEEEEENNNNYYYYYY MAH BOY</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >bulimia is for wimps, normalize hacking off body parts with an axe</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >uh oh! bad decision, mark!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >i love backdoors! thank you intel very cool!</h2></a>',
'<a href="index.html"><h2 style="color:rgb(252,152,103);text-decoration: none;" >You look lonely.  I can fix that.</h2></a>',
];
// var x = Math.floor(Math.random() * 17);
if (n > a.length) {
    n = Math.floor(Math.random()*a.length+1);
}
console.log(n);
var string = a[n-1];
document.getElementById("splash").innerHTML = string;