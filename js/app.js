let allEmployees = []
let salaryAndNumber=[]


function Employee(id, name, department, level, imgurl) {
    this.employeeId = id;
    this.fulName = name;
    this.department = department;
    this.level = level;
    this.imgurl = imgurl;
    allEmployees.push(this)
}
Employee.prototype.salary = function () {
    let min;
    let max;
    switch (this.level) {
        case "Junior":
            min = 500;
            max = 1000;
            break;
        case "Mid-Senior":
            min = 1000;
            max = 1500;
            break;
        case "Senior":
            min = 1500;
            max = 2000;
            break;
    }
    return (Math.floor((Math.random() * (max - min) + min + 1) * (1 - .075)));
};
let takenNumbers = []
function uniqueNumber(arr) {
    function randomNumber() {
        return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
    }
    let uniqueNumber1 = randomNumber()
    while (arr.includes(uniqueNumber1)) {
        uniqueNumber1 = randomNumber()
    }
    arr.push(uniqueNumber1)
    return uniqueNumber1
}
ids = uniqueNumber(takenNumbers)
function saveDataLocally(data) {
    let stringArr = JSON.stringify(data);
    localStorage.setItem('employeezs', stringArr);
}
let employees = [[ids, "Ghazi Samer", "Administration", "Senior"], [ids, "Lana Ali", "Finance", "Senior"], [ids, "Tamara Ayoub", "Marketing", "Senior"], [ids, "Safi Walid", "Administration", "Mid-Senior"], [ids, "Omar Zaid", "Development", "Senior"], [ids, "Rana Saleh", "Development", "Junior"], [ids, "Hadi Ahmad", "Finance", "Mid-Senior"]]

 Employee.prototype.renderAndSort= function(event) {
    console.log(event)
    selectDeps = ""
    let administration = document.getElementById('admin')
    let marketing = document.getElementById('marketing')
    let development = document.getElementById('dev')
    let finance = document.getElementById('finance')
    fullNames = document.getElementById("fullName").value;
    selectDeps = document.getElementById("selectDep").value;
    selectLvls = document.getElementById("selectLvl").value;
    imgs = document.getElementById("img").value
    let employeeData = [fullNames, selectDeps, selectLvls, imgs];
    ids = uniqueNumber(takenNumbers)
    let employeeCard = document.createElement('article')
    employeeCard.id = 'card'
    switch (this.department) {
        case "Administration":
            administration.appendChild(employeeCard)
            break;
        case "Marketing":
            marketing.appendChild(employeeCard)
            break;
        case "Development":
            development.appendChild(employeeCard)
            break;
        case "Finance":
            finance.appendChild(employeeCard)
            break;
    }
    cardSelector = document.querySelector('#card')
    let employeeImg = document.createElement("img")
    employeeImg.setAttribute('src', this.imgurl)
    cardSelector.appendChild(employeeImg)
    let employeeNameAndId = document.createElement("p")
    cardSelector.appendChild(employeeNameAndId)
    employeeNameAndId.innerText = `name:${this.fulName}-ID:${ids}`
    let employeeDepAndLvl = document.createElement('p')
    cardSelector.appendChild(employeeDepAndLvl)
    employeeDepAndLvl.innerText = `Department:${this.department}-Level:${this.level}`
    employeeImg.id = 'img'
    employeeDepAndLvl.di = 'text1'
    employeeNameAndId.id = 'text2'
    employeeImg.style.borderRadius = "50%"
    employeeImg.style.width = "150px"
    employeeImg.style.height = "150px"
    employeeImg.style.marginLeft = "50px"
    employeeImg.style.marginRight = "50px"
    employeeImg.style.marginTop = "25px"
    employeeImg.style.marginBottom = "15px"
    card = document.getElementById('card')
    card.style.width = "250px"
    card.style.height = "350px"
    saveDataLocally(allEmployees)

}
function employeeInput(arr) {
    for (let i = 0; i < arr.length; i++) {
        let newEmployee = new Employee(...arr[i], "")
    }
    renderAll()
}
employeeInput(employees)
allSections = document.querySelectorAll('section')
for (let i = 0; i < allSections.length; i++) {
    allSections[i].style.display = "flex"
    allSections[i].style.alignItems = "flexStart"
    allSections[i].style.flexDirection = "row"
    allSections[i].style.flexWrap = "wrap"
    allSections[i].style.justifyContent = "flexStart"
    allSections[i].style.alignContent = "flexStart"
    console.log(allSections);


}
function getDataFromLocal(){
    let getarr=localStorage.getItem("employeezs")
    let parsearr=JSON.parse(getarr)
    parsearr.forEach(element => {
        new Employee(element.id, element.name, element.department, element.level, element.imgurl)
    });
}
getDataFromLocal()
function renderAll(){
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].renderAndSort() 
    }
}
submit.addEventListener("submit",function(){renderAndSort})
function saveNumberAndSalary(){
    let salaryAndNumber=[]
    let getarr=localStorage.getItem("employeezs")
    let parsearr=JSON.parse(getarr)
    parsearr.forEach(element => {
        newEmployee=new Employee(element.id, element.name, element.department, element.level, element.imgurl)
        salaryAndNumber.push([newEmployee.salary(),newEmployee.department]);
    })
    console.log(salaryAndNumber)
    let stringArr1 = JSON.stringify(salaryAndNumber);
    localStorage.setItem('salaryAndNumber', stringArr1);


}
saveNumberAndSalary()
