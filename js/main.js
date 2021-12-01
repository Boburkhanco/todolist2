

var button = document.getElementById('Button')
var input = document.getElementById('Input')
var remove = document.getElementById('remove')
var edit = document.getElementById('edit')
var listArr = new Array()

function createToDoList() {
    if(input.value == '') {
        return
    } else if(input.value.length < 4) {
        return
    } else {
        var list = document.createElement('li')
        list.setAttribute('class' , 'task')

        var checkBox = document.createElement('input')
        checkBox.setAttribute('class', 'form-check-input')
        checkBox.setAttribute('type', 'checkbox')
        
        var taskInfo = document.createElement('span')
        taskInfo.setAttribute('class', 'task-info ms-2 me-2')
        taskInfo.textContent = input.value

        var removeBtn = document.createElement('button')
        removeBtn.setAttribute('class', 'btn btn-danger')


        tasksUl.appendChild(list)
        list.appendChild(checkBox)
        list.appendChild(taskInfo)
        list.appendChild(removeBtn)
        input.value = ''
        input.focus()
    }
}

button.addEventListener('click' , e =>{
    e.preventDefault()
    createToDoList()
});
 

 
tasksUl.addEventListener('click' , e => {
    var targetedElement = e.target
    var taskInfo = e.srcElement.parentElement
    if (targetedElement.matches('input')) {
        taskInfo.classList.toggle('task-overline')
        }  
    }
)

tasksUl.addEventListener('click', e => {
    var targetedElement = e.target
    var task = e.srcElement.parentElement
    if (targetedElement.matches('button')) {
        task.remove()
        }  
    }
)

input.addEventListener('keyup' , (e) => {
    if(e.which === 13) {
        createToDoList();
    }
});
