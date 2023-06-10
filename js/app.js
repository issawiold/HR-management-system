function Employee(id,name,department,level,imgurl) {
    this.employeeId=id;
    this.fulName=name;
    this.department=department;
    this.level=level;
    this.imgurl=imgurl;
}
Employee.prototype.salary=function(){
    let min;
    let max;
switch (this.level) {
    case "Junior":
        min=500;
        max=1000;
        break;
    case "Mid-Senior":
        min=1000;
        max=1500;
        break;
    case "Senior":
        min=1500;
        max=2000;
        break;
}    
    return (Math.floor((Math.random() * (max-min) + min+1)*(1-.075)));
};
Employee.prototype.render=function(){
    document.write(`<p>employee's name: ${this.fulName}, salary: ${this.salary()}</p>`)
};
let employees=[[1000,"Ghazi Samer","Administration","Senior"],[1001,"Lana Ali","Finance","Senior"],[1002,"Tamara Ayoub","Marketing","Senior"],[1003,"Safi Walid","Administration","Mid-Senior"],[1004,"Omar Zaid","Development","Senior"],[1005,"Rana Saleh","Development","Junior"],[1006,"Hadi Ahmad","Finance","Mid-Senior"]]
function employeeInput (arr) {
    for (let i = 0; i < arr.length; i++) {
    let newEmployee=new Employee(...arr[i],"")  
    newEmployee.render()
};
};
employeeInput(employees)
