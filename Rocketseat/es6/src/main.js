import axios from 'axios'

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

Api.getUserInfo('henriqueomena')


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

