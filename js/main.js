

var button = document.getElementById('Button')
var input = document.getElementById('Input')
var remove = document.getElementById('remove')
var edit = document.getElementById('edit')
var listArr = [
    {
      id: 1,
      todo: 'Kitob oqish',
      time: '29-11-2021 11:41',
      isDone: false
    },
    {
      id: 2,
      todo: 'Mashinani yuvish',
      time: '29-11-2021 11:41',
      isDone: false
    },
]

function createToDoList() {
    if(input.value == '') {
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
        list.appendChild(editBtn)
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
    console.log(e.srcElement.parentElement);
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
