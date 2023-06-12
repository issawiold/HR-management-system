
// function Employee(id,name,department,level,imgurl) {
//     this.employeeId=id;
//     this.fulName=name;
//     this.department=department;
//     this.level=level;
//     this.imgurl=imgurl;
// }
// Employee.prototype.salary=function(){
//     let min;
//     let max;
// switch (this.level) {
//     case "Junior":
//         min=500;
//         max=1000;
//         break;
//     case "Mid-Senior":
//         min=1000;
//         max=1500;
//         break;
//     case "Senior":
//         min=1500;
//         max=2000;
//         break;
// }    
//     return (Math.floor((Math.random() * (max-min) + min+1)*(1-.075)));
// };
// Employee.prototype.render=function(){
//     document.write(`<p>employee's name: ${this.fulName}, salary: ${this.salary()}</p>`)
// };
// let employees=[[1000,"Ghazi Samer","Administration","Senior"],[1001,"Lana Ali","Finance","Senior"],[1002,"Tamara Ayoub","Marketing","Senior"],[1003,"Safi Walid","Administration","Mid-Senior"],[1004,"Omar Zaid","Development","Senior"],[1005,"Rana Saleh","Development","Junior"],[1006,"Hadi Ahmad","Finance","Mid-Senior"]]
// function employeeInput (arr) {
//     for (let i = 0; i < arr.length; i++) {
//     let newEmployee=new Employee(...arr[i],"")  
//     newEmployee.render()
// };
// };
// employeeInput(employees)
//     select the main
// let mainSelector=document.querySelector("main");
//     //create a form and append it
// let form=document.createElement("form")
// form.id='form'
// mainSelector.appendChild(form)
//     //select form
// let formSelector=mainSelector.childNodes[2]
// function entireHTMLformJS()
// {
//     creating the inputs setting attributes and appending them
// let nameLabel=document.createElement("label")
// formSelector.appendChild(nameLabel)
// nameLabel.innerText='Full name'
// let labelSelector=formSelector.childNodes[0]
// let inputName=document.createElement("input")
// inputName.id='inputName'
// inputName.setAttribute('placeHolder','full name')
// formSelector.appendChild(inputName)
// inputName.setAttribute('type','text')
// selectDeplabel=document.createElement("label")
// formSelector.appendChild(selectDeplabel)
// selectDeplabel.innerText='Please, select your department'
// selectDep=document.createElement("select")
// selectDep.id='selectDep'
// formSelector.appendChild(selectDep)
// let depAdmin=document.createElement("option")
// let depMarketing=document.createElement("option")
// let depDev=document.createElement("option")
// let depFinance=document.createElement("option")
// selectDep.appendChild(depAdmin)
// selectDep.appendChild(depMarketing)
// selectDep.appendChild(depDev)
// selectDep.appendChild(depFinance)
// depAdmin.innerText='Administration'
// depMarketing.innerText='Marketing'
// depDev.innerText='Development'
// depFinance.innerText='Finance'
// let selectLevelLabel=document.createElement('label')
// formSelector.appendChild(selectLevelLabel)
// selectLevelLabel.innerText='please, select your level'
// let selectLevel=document.createElement('select')
// formSelector.appendChild(selectLevel)
// selectLevel.id='selectLevel'
// let lvlJunior=document.createElement("option")
// let lvlMidSenior=document.createElement("option")
// let lvlSenior=document.createElement("option")
// selectLevel.appendChild(lvlJunior)
// selectLevel.appendChild(lvlMidSenior)
// selectLevel.appendChild(lvlSenior)
// lvlJunior.innerText ='Junior'
// lvlMidSenior.innerText='Mid-Senior'
// lvlSenior.innerText='Senior'
// let imgLabel=document.createElement("label")
// formSelector.appendChild(imgLabel)
// imgLabel.innerText='Please, input a link to your image'
// let img=document.createElement("input")
// img.setAttribute('placeHolder','a url that links to your image')
// img.setAttribute("type",'img')
// img.id='img'
// formSelector.appendChild(img)
// let submitButton=document.createElement("button")
// formSelector.appendChild(submitButton)
// submitButton.innerText='submit'
// submitButton.id='submitButton'
// }
// entireHTMLformJS()
let form=document.getElementById('form')
let submitButton=document.getElementById('submit')
function styleformJS(){

form.style.display="flex"
form.style.justifyContent="center"
form.style.flexDirection="column"
form.style.marginLeft="50px"
form.style.marginRight="850px"
submitButton.style.width="100px"
}
styleformJS()
let takenNumbers=[]
function uniqueNumber (arr) {
function randomNumber (){
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
}
let uniqueNumber1=randomNumber()
while(arr.includes(uniqueNumber1)) {
    uniqueNumber1=randomNumber()
}
arr.push(uniqueNumber1)
return uniqueNumber1
}

form.addEventListener("submit",renderAndSort)

// function fourSections(){
// let administration=document.createElement('section')
// formSelector.appendChild(administration)
// let marketing=document.createElement('section')
// formSelector.appendChild(marketing)
// let development=document.createElement('section')
// formSelector.appendChild(development)
// let finance=document.createElement('section')
// formSelector.appendChild(finance)}
function renderAndSort(event){
    event.preventDefault()
    console.log(event)
    //create the four sections
    //fourSections()
    //catching the data
    selectDeps=""
    let administration=document.getElementById('admin')
    let marketing=document.getElementById('marketing')
    let development=document.getElementById('dev')
    let finance=document.getElementById('finance')
    fullNames=event.target.fullName.value;
    selectDeps=event.target.selectDep.value;
    selectLvls=event.target.selectLvl.value;
    imgs=event.target.img.value
    let employeeData=[fullNames,selectDeps,selectLvls,imgs];
    ids=uniqueNumber(takenNumbers)
    let employeeCard=document.createElement('div')
    employeeCard.id='card'
    switch (selectDeps) {
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
    cardSelector=document.querySelector('#card')
    let employeeImg=document.createElement("img")
    employeeImg.setAttribute('src',imgs)
    cardSelector.appendChild(employeeImg)
    let employeeNameAndId=document.createElement("p")
    cardSelector.appendChild(employeeNameAndId)
    employeeNameAndId.innerText=`name:${fullNames}-ID:${ids}`
    let employeeDepAndLvl=document.createElement('p')
    cardSelector.appendChild(employeeDepAndLvl)
    employeeDepAndLvl.innerText=`Department:${selectDeps}-Level:${selectLvls}`
    employeeImg.id='img'
    employeeDepAndLvl.di='text1'
    employeeNameAndId.id='text2'
    employeeImg.style.borderRadius="50%" 
    employeeImg.style.width="150px"
    employeeImg.style.height="150px"
    employeeImg.style.marginLeft="50px"
    employeeImg.style.marginRight="50px"
    employeeImg.style.marginTop="25px"
    employeeImg.style.marginBottom="15px"
    
    card=document.getElementById('card')
    card.style.width="250px"
    card.style.height="350px"
    card.style.display= "inline"
    // card.style.flexDirection="row"
    // card.style.flexWrap="wrap" 
    // card.style.justifyContent="flexStart"
    // card.style.alignContent="flexStart"
    // card.style.backgroundColor="blue"
    
}
allSections=document.querySelectorAll('section')
for (let i = 0; i < allSections.length; i++) {
    allSections[i].style.display="flex"
    allSections[i].style.alignItems="flexStart"
    allSections[i].style.flexDirection="row"
    allSections[i].style.flexWrap="wrap" 
    allSections[i].style.justifyContent="flexStart"
    allSections[i].style.alignContent="flexStart"
    console.log(allSections);
    
    
}


