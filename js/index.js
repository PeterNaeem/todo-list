//<===================== start global var =====================> 

let hideDiv = document.getElementsByClassName("hideDiv")[0];

let plusIcon = document.getElementById("plusIcon");

let opt = document.getElementById("opt");

let replacing = document.getElementById("replacing");


alert ("double click to add or delete or update")

//<===================== start global var =====================> 

//<===================== start date =====================> 
let dayToday = document.getElementById("dayToday")

let today = new Date();

let date = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear() + " | " + today.getHours() + ":" + today.getMinutes();

// console.log(date)

dayToday.innerHTML = date

var dayWeek = ["السبت", "أحد", "الاثنين", "الثلاثاء", "الاربع", "الخميس", "الجمعة"]

for (dayy of dayWeek) {
    console.log("hii");
    const d = new Date();
    let day =  d.getDay()+1;
    console.log();
    let Todayys = document.getElementById("Todayys")
    Todayys.innerHTML = (dayWeek[day])
    console.log();

}
//<===================== end date =======================>

//<===================== start read data =======================> 

let tasks = []

function readStorge (){
let retriveStorge =  JSON.parse(localStorage.getItem("tasks"))
 
//    if (tasks == null){
//     tasks = []
//    }else{
//     tasks= retriveStorge 
//    }

// short cut //
tasks= retriveStorge ?? []


}
readStorge ()

function read() {
    document.getElementById("tasks").innerHTML = ""
    for (task of tasks) {

        console.log("heloo New tasks");

        let read =
        //task.isDone ? "":"" ==>>> condition ? ifTrue : ifFalse;
            `
            <li class="task py-1 px-2 text-center ${task.isDone ? "done":" "}">
            <div class="iconTodo  d-flex justify-content-between align-items-center">
                <div class="iconTodo w-100  d-flex justify-content-between  justify-content-between">
                    <i onclick="delet()"  class="one fa-sharp fa-solid fa-trash"> </i>
                    ${task.isDone ? `  <i  onclick="togleTasks()" id="replacing" class="two fa-solid text-danger fa-circle-xmark"></i> `:
                    
                    `
                    <i  onclick="togleTasks()" id="replacing" class="two text-success fa-solid fa-circle-check"></i>
                    
                    `}

                    
                    <i onclick="update()" class="update fa-solid fa-pen-to-square"></i>
                </div>

                <div class="headTitle w-50 ">

                    <div class="headTitleDiv ">

                        <h3>${task.title}</h3>

                        <div class="dateicon d-flex justify-content-center align-items-center">
                            <span id="date" class="fs-6 me-2"><span id="dateColor"
                                    class="text-primary "></span>${task.taskDate}</span>
                            <i class="fa-regular fa-rectangle-list"></i>
                        </div>
                    </div>

                </div>
                <!-- <i class="fa-solid fa-circle-xmark"></i>  //-->

            </div>
            </li>
            <hr>
            `

        document.getElementById("tasks").innerHTML += read
        saveStorge()
    }

}

read()

//<===================== end read data =====================>

//<===================== start creat data =====================>

plusIcon.addEventListener("click", function (){
   
     console.log("hello  in plus icon");
    
    let hidedev =   hideDiv.classList.remove('visually-hidden');
    
})

opt.addEventListener("click",function(){
    let addToList = document.getElementById("addToList")
  // console.log(addToList.value);
        let theDATENow = Date() 
        let newOPJ = {
            title: addToList.value,
            taskDate: date,
            isDone: false

        }
        tasks.push(newOPJ)
        // console.log(tasks);
        saveStorge()
        
       addToList.value = " ";
          read()
     
})

//<===================== end creat data =====================>

//<===================== start update data =====================>

function update() {

    let update = document.getElementsByClassName("update")

    for (let i = 0; i < update.length; i++) {

        update[i].addEventListener("click", function () {
           
            console.log(i);
            let taskay = tasks[i]
            let newTaskName = prompt("enter your new task name",tasks[i].title)
          
            if( newTaskName != "" ){
                
            console.log(taskay);
            taskay.title = newTaskName 
            saveStorge()
            read()
            }
           
       

        }


        )
    }
}
//<===================== end update data =====================>

//<===================== start delet data =====================>

function delet() {

    let one = document.getElementsByClassName("one");
    for (let i = 0; i < one.length; i++) {

        one[i].addEventListener("click", function () {
            console.log(i);
       
            let con = confirm(`هل انت متاكد من حذف المهمة `)

            if (con == true) {
                tasks.splice(i, 1)
                saveStorge()
                read()
            }

        })

    }
}

let del = document.getElementById("dellAll")

del.addEventListener("click",function(){
    let dellConfirm =confirm("هل انت متأكد من حذف جميع المهام")
    if (dellConfirm == true) {
        tasks.splice(tasks)
        saveStorge()
        read()
    }
})

//<===================== end delete data =====================>

//<===================== start ending tasks =====================>

function togleTasks() {
    let two = document.getElementsByClassName ("two")

    for (let i = 0; i < two.length; i++) {
    two[i].addEventListener("click",function(){
    let taskay = tasks[i]
    tasks[i].isDone =  !tasks[i].isDone 

    saveStorge()
    read()
    })

    }
}

//<===================== end ending tasks =====================>

//<===================== start save in storge =====================>

function saveStorge(){
    let taskToString = JSON.stringify(tasks);
    let store= localStorage.setItem("tasks",taskToString);
    // console.log(taskToString)
}
saveStorge()
//<===================== end save in storge =====================>

function closeing() {
    let close = document.getElementById("close");
hideDiv.classList.add("visually-hidden") 
 
}
