/*
 * Protoytpe example
 */

//This example illustrates prototype


function Person(name){
	this.lastname = name;
}


Person.prototype.father = function(name){
	this.fathername = name;
	console.log("Family name: "+this.lastname+" Father name: "+this.fathername);
}


var dad = new Person("dabbr");
dad.father("vs");