const todoInput = document.querySelector('#inputbox')
const body = document.querySelector('body')
const add = document.querySelector('.enter')



const newItem = (todo, intrash, id) => {
    //If the item is in trash, don't display
    if(intrash) {
        return;
    } 
    //if the input box is empty, return
    //if (todoInput.value === "") {return;}
        const lists = document.querySelector("ul")
        const li = document.createElement('li')
        li.setAttribute('id', id)
        li.innerHTML = todo
        lists.appendChild(li)
        todoInput.value = ""
        li.addEventListener('dblclick', removeItem)
        li.addEventListener('click', strike)
};
//Remove an Item from the list
function removeItem (e){
    let element = e.target
    element.remove()
    data[element.id].intrash = true
    localStorage.setItem('storagekey', JSON.stringify(data))
}
//Strikethrough an item 
const strike = (e) => {
    e.target.style.textDecoration = 'line-through'
}
//Load the data on page-load
function loadData(array){
    array.forEach(function(todo){
        newItem(todo.name, todo.intrash, todo.id);
    });
}
//Backend --- Using Local storage to store data
var storage = localStorage.getItem('storagekey')
if(storage !== null) {
    var data = JSON.parse(storage)
    loadData(data)
    var id = data.length
    } else {
        id = 0
        data = []
    }


body.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        let todo = todoInput.value
        newItem(todo, false, id)
        data.push({
            name: todo,
            intrash : false,
            id: id
        })
        localStorage.setItem('storagekey', JSON.stringify(data))
        id++
    }
});

add.addEventListener('click', () => {
    let todo = todoInput.value
        newItem(todo, false, id)
        data.push({
            name: todo,
            intrash : false,
            id: id
        })
        localStorage.setItem('storagekey', JSON.stringify(data))
        id++
})