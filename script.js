var john ={
    name :'aniket',
    age:23,
    year:1983,
    job:'Software Engineer'
};

//function constructor to create object blueprint 

var Person = function(name,year,job,age){
    this.name = name; // this
    this.job = job;
    this.age = age;
    this.year = year;    
}

var john = new Person('aniket', 1995, 'Yahoo', 55);
var johny = new Person('aniket', 1965, 'Google', 55);

//console.log (john.calculateAge());

console.log(john);

// inheritances 
Person.prototype.calculateAge = function(){
    console.log(2018 - this.year);
}

john.calculateAge();
johny.calculateAge() ;

//Object. create method 

var personProto = {
    calculateAge : function(){
        console.log(2018 - this.year);
    }
};

var john = Object.create (personProto);

var jop = Object.create(personProto ,{

    name:{value:'bunny'},
    year:{value:1955}
});

john.name ='aniket';
john.year =1985;

console.log(john);