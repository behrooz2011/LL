var css=document.querySelector("h3");
var c1=document.querySelector(".c1");
var c2=document.querySelector(".c2");
var body=document.querySelector("body");

console.log(" good jobe dude!");
console.log(css);
console.log(c2);
console.log(c1);
console.log(body)

// to check things are working well!
c1.addEventListener("input",function( ){

console.log(c1.value)
body.style.background="linear-gradient(to right, "+c1.value+","+c2.value+")";

}
	)



c2.addEventListener("input",function( ){

console.log(c2.value)
body.style.background="linear-gradient(to right, "+c1.value+","+c2.value+")";

}
	)
