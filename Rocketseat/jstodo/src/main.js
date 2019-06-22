const listEl = document.querySelector('#app ul');
const inputEl = document.querySelector('#app input');
const btnEl = document.querySelector('#app button');
const infoEl = document.querySelector('#app div.info')

const todos =  JSON.parse(localStorage.getItem('list_todos')) || [];

inputEl.addEventListener('keyup', event => event.keyCode === 13 ? btnEl.click() : '')

const renderTodos = () => {
        listEl.innerHTML = '';

        for (todo of todos) {
            const todoEl = document.createElement('li');
            const todoText = document.createTextNode(todo);

            const linkEl = document.createElement('a')
            linkEl.setAttribute('href', '#');
            linkEl.setAttribute('style', 'margin-left:15px;');

            const pos = todos.indexOf(todo)

            //linkEl.setAttribute('data-position', pos)
            linkEl.setAttribute('onclick', 'deleteTodo('+pos+')'); //not working, why ?! :S
            const linkText = document.createTextNode('Excluir')

            linkEl.appendChild(linkText)

            todoEl.appendChild(todoText);
            todoEl.appendChild(linkEl);

            listEl.appendChild(todoEl);
        }
}


renderTodos();

const addTodo = () => {
    const todoText = inputEl.value;

    if (!inputEl.value) {
        infoEl.innerHTML = 'Prencha alguma informação'
        inputEl.focus()
        setTimeout(() => {
            infoEl.innerHTML = ''
        }, 4000)
        return
    }

    todos.push(todoText);

    inputEl.value = '';
    renderTodos();
    saveToStorage()
}

btnEl.onclick = addTodo;

const deleteTodo = pos => {
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}


const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}
