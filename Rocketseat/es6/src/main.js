class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepitory(event)
    }
    addRepitory(event) {
        event.preventDefault();

        this.repositories.push({
            name: "Henrique Omena",
            description: "Working hard!",
            avatar_url: "https://avatars3.githubusercontent.com/u/35804326?s=460&v=4",
            html_url: "https://api.github.com/users/henriqueomena"
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

