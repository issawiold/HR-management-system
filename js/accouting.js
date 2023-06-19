let admin=0
let finance=0
let mark=0
let devel=0
let adminSalary=0
let financeSalary=0
let markSalary=0
let develSalary=0
let avadmin=0
let avfin=0
let avmark=0
let avdevel=0
function getDataFromLocal(){
    let getarr1=localStorage.getItem("salaryAndNumber")
    let parsearr=JSON.parse(getarr1)
    parsearr.forEach(element => {
        switch(element[1]){
            case "Administration":
                admin+=1
                adminSalary+=element[0]
            break;
            case "Marketing":
                mark+=1
                markSalary+=element[0]
            break;
            case "Development":
                devel+=1
                develSalary+=element[0]
            break;
            case "Finance" :
                finance+=1
                financeSalary+=element[0]
            break
        }       
});
avadmin=adminSalary/admin;
avfin=financeSalary/finance;
avdevel=develSalary/devel;
avmark=markSalary/mark;
let totalNum=getarr1.length
let totalSalary=adminSalary+financeSalary+develSalary+markSalary
let avtotal=totalSalary/totalNum
return ['Administration',admin,avadmin,adminSalary,"Marketing",mark,avmark, markSalary,"Finance",finance,avfin, financeSalary,"Development",devel,avdevel, develSalary,'Total',totalNum,avtotal, totalSalary]
}
function tableRender(arr){
    tr=document.querySelectorAll("tr")
    console.log(tr)
    for (let i = 1; i < tr.length; i++) {
        let k=0
        while(k<3){
        tr[i].appendChild(document.createElement("td"))
        k++
    }}
    tableELements=document.querySelectorAll("td")
    console.log(tableELements)
    for (let i = 0; i < tableELements.length; i++) {
        tableELements[i].innerText=arr[i]        
    }
}
tableRender(getDataFromLocal())