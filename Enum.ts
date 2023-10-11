// enum is set of constant values
enum Roles  { ANALYST,  MANAGER, DEVELOPER, TESTER };
const Person ={
    id:2,
    name:"Syed",
    roles: Roles.ANALYST
};

if(Person.roles === Roles.ANALYST){
    console.log("is Present");
}