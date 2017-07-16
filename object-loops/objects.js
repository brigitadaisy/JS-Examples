var some_var = true; 


// Object Definition
function Human(arg1, arg2, arg3){
    // prop of the object
    this.first_name = arg1;
	this.last_name = arg2; 
	this.eye_color = arg3;
		  
	// a function or method of the object
	this.get_full_name = function getName(){
	     return this.first_name+" "+this.last_name;
	}
}

// Object instance 
var some_person = new Human("Oscar", "Parra", "Brown");
var some_other_person = new Human("Bridget", "Daisy","Sky-Blue")
var some_kevin = new Human("Kevin", "Silva", "Brown");




/* alert(some_person.get_full_name());
   alert(some_other_person.get_full_name());
   alert(some_kevin.get_full_name());
*/
var humanArr = [];
humanArr[1] = some_person;
humanArr[2] = some_other_person;
humanArr[3] = some_kevin;

//alert(humanArr[1].get_full_name());

for(var i = 1; i < 4; i++){
	humanArr[i] = some_other_person;
    alert("The value of i is: "+ i +" "+humanArr[i].get_full_name());
}

						  

