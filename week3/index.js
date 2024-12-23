function EmployeeInfo(name, salary){
    console.log("Welcome " + name+ "Your monthly Salary is "+ salary) 
}

console.log("This is my first program")

var Emp_Name = "John"
var Emp_Salary = 5000

EmployeeInfo(Emp_Name,Emp_Salary)

const EmpSkills= (skills)=> { 
    console.log("Expert in "+ skills) 
  } 
  EmpSkills("java") 
  
const student= require('./StudentInfo') 
const person = require('./Person')  

console.log("Student Name:" +student.getName())  
console.log(student.Location())  
console.log(student.dob)  

console.log(student.Studentgrade()) 
console.log("grade is "+student.Studentgrade(60) ) 
person1= new person("Ken","Germany","ken.g@gmail.com") 
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 