console.log("Welcome to javaScript");


var presonName = 'Aniket';
var age= 12; 
var color = 'Pink';
var city = 'Baltimore';
var country ='USA' ;

presonName = "BigBoss";

presonName = "Yahooooo";

console.log (presonName + ' ' + age+ '  '+color+ ' '+city+' '+country);

// var lastName= prompt("Please Enter Last Name");

// alert(lastName); 

// Operator In Java Script 

var birthYear = 2016 - 26;

console.log(birthYear);

var ageJohn = 30 ;
var ageCraig = 30 ;

ageJohn ++ ;

ageJohn *=3;

ageCraig = ageJohn - 40 ;
console.log(ageJohn);
console.log('This is craig Age '  +ageCraig);

if ( ageJohn > ageCraig){
    console.log("Yahoooo " +ageJohn);
}else{
    console.log("No Yahooo " +ageCraig);
}

if(ageCraig === 53){
    console.log("Yessss");
}

 
var age = 25  ;
if(age > 26 || age < 30){
    console.log('Yahoooooo');
}else{
    console.log('Google'); 
}

var job = prompt ('Please Enter Job');

switch(job){
    case 'teacher':
    alert('Yesss');
    break;
    case 'Markter':
    alert('Noo Marker');
    break;
    case 'Young teacher':
    alert('Young Yesss');
    break;
    case 'Marktered':
    alert('Markered');
break ;
default:
alert("No Match choice");
}
