interface IPerson { 
    fName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
  
 var customer:IPerson = { 
    fName:"Lakshmi",
  
    lastName:"Priya", 
    sayHi: ():string =>{return "Hi there"} 
 } 
  
 console.log("Customer Object ") 
 console.log(customer.fName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
  
 var employee:IPerson = { 
    fName:"Lachu",
    lastName:"Lachu", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.fName);
 console.log(employee.lastName);