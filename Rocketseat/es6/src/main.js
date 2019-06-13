import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository')
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepitory(event)
    }
    async addRepitory(event) {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0)
        return

        const response = await api.get(`/users/${repoInput}`)

        const { name, description, html_url,  avatar_url, login  } = response.data
        console.log(response);
        this.repositories.push({
            name,
            description: login,
            avatar_url,
            html_url,
        })

        this.render()
        console.log(this.repositories);
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', 'blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl)

        })
    }
}

new App();


/* import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try{
            const response = await axios.get('https://api.github.com/users/'+username)
            console.log(response);
        } catch(err){
            console.warn('Error na API');
        }
    }
}

Api.getUserInfo('henriqueomena') */


/* const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});

//Uma forma sem es6
minhaPromise()
.then(response => {
    console.log(response);
})
.catch( err => {
    console.log(err);
})

// Com es6/es8 a mesma coisa
 async function executaPromise(){ ///async vira promisse
     const response = await minhaPromise()
     console.log(response);
 }
 */


//import {soma} from './funcoes';
// import * as wtf from '../funcoes';
// console.log(wtf);
// console.log(wtf.soma(1,2));
/* class List {
    constructor() {
        this.data =  [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList  extends List{
    constructor() {
        super();
        this.user = "Henrique"

    }

    showUser() {
        console.log(this.user);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add("Novo ToDo")
    MinhaLista.showUser();
} */

