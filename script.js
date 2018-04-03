var john ={
    name :'aniket',
    age:23,
    year:1983,
    job:'Software Engineer'
};

//function constructor 

var Person = function(name,year,job,age){
    this.name = name; // this
    this.job = job;
    this.age = age;
    this.year = year;
    this.calculateAge = function(){
        console.log(2018 - this.year);
    }
}

var john = new Person('aniket', 1995, 'Yahoo', 55);

//console.log (john.calculateAge());
john.calculateAge() ;


console.log(john);