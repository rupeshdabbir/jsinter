/** 
*	Problem: Can we create Classes in Javascript.
*	In javascript there's no classes like in Java, what we actually call a class is in reality a function simulating a class behaviour. 
*	For being so flexible, there are many ways to create a class in javascript, below you'll find 3 ways of doing that.
*/


// Method1 - Using Constructor.

function Person(name){
	this.name = name;
}

var person = new Person("rk");
person.name; //will print rk


//Method2 - Using Object Literal notation (Class Literal Notation)

person = {
	var name = "",
	function setName: function(name){
		this.name = name;
	}
}

person.setName("rk");
person.name; //rk



//Method 3 - Using Singleton using function

var person = new function(){
	this.setName = function(name){
		this.name = name;
	}

	this.displayName = function(){
		console.log("Name is: "+this.name);
	}
}

person.setName("rk");
person.displayName();