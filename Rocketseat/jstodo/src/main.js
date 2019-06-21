var listEl = document.querySelector('#app ul');
var inputEl = document.querySelector('#app input');
var btnEl = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar comunidade de Devs'
];

const renderTodos = () => {
        listEl.innerHTML = '';

        for (todo of todos) {
            var todoElement = document.createElement('li');
            var todoText = document.createTextNode(todo);

            todoElement.appendChild(todoText);
            listEl.appendChild(todoElement);
        }
}

renderTodos();


// const renderTodos = todos.map((el, inde) => {
//     //console.log(el);
// })

const addTodo = () =>{
    var todoText = inputEl.value;

    todos.push(todoText);

    inputEl.value = '';
    renderTodos();
}

btnEl.onclick = addTodo;
