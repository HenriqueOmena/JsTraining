class List {
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
}

