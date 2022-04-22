const addbtn = document.getElementById("add-btn")
const todolist = document.getElementById("todo-list")
//Model
let table 
const savetable = JSON.parse(localStorage.getItem("table"))
if(savetable){
    table = savetable
    render()
}else{
    table = []
}
//add item
function createitem(item,id){
    table.push({
        name:item,
        id:id
    })
    savetodo()
}
//remove item
function removeitem(idtoDelete){
    table = table.filter(e=>{
        if(e.id === idtoDelete){
            return false
        }else{
            return true
        }
    })
    savetodo()
}

function savetodo(){
    localStorage.setItem("table",JSON.stringify(table))
}

//Controller
addbtn.addEventListener("click",()=>{
    add()
})

function add(){
    const inputtext = document.getElementById("input-text")
    const item = inputtext.value;
    const id= ''+new Date().getTime()
    createitem(item,id)
    render()
    
}
function deletetodo(e){
    const deletebutton = e.target;
    const idtoDelete = deletebutton.id;
    removeitem(idtoDelete)
    render()
}

//View
function render(){
    document.getElementById("todo-list").innerHTML = ''
    table.forEach(e=>{
        const element = document.createElement("div");
        element.innerText = e.name;

        const deletebtn = document.createElement('button');
        deletebtn.innerText = "Delete"
        deletebtn.style = 'margin-left: 15px'
        deletebtn.onclick = deletetodo
        deletebtn.id = e.id
        element.appendChild(deletebtn)

        const todolist = document.getElementById("todo-list")
        todolist.appendChild(element);
    })
}