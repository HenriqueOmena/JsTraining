


var listEl = document.querySelector('#app ul');
var inputEl = document.querySelector('#app input');
var btnEl = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar comunidade de Devs'
];

const renderTodos = todos.map((el, inde) => {
    console.log(el);
})
