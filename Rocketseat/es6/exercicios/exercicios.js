
const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" }
];
//2.4 Multiplique   a   idade   de   todos   usuários   por   dois   e   depois   realize   um   filtro   nos   usuários   que   possuem no   máximo   50   anos:

let = max50YearsOld = usuarios.map(user => user.idade * 2)
//.filter(user => user.idade <= 50)
console.log(max50YearsOld);

/* este eu havia errado o correto era
    Pois esta trazendo todos os elementos de usuario e manipulando apenas a idade manteno assim um objeto como retorno do MAP
    e depois filtrando novamente, meu problema era q estava vindo em array apenas
*/
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);






//2.3
let workingGoogle = usuarios.find( user => user.empresa == 'Google')
//console.log(workingGoogle);
//2.2
let maiorDe18 = usuarios.filter( user => user.idade > 18)
//console.log(maiorDe18);

//2.1
let age = usuarios.map(age => age.idade)

//console.log(age);



/*
==================EXERCICIO 1==================
class User{
    constructor(mail, pass){
        this.mail = mail;
        this.pass = pass;
        console.log(this.admin); // Pessoal pq este console log n sai?
    }
    isAdmin(){
        return this.admin === true; //
    }


}

class Admin extends User{
    constructor(mail, pass) {
       super(mail, pass);
       this.admin = true;  //
    }
}

const User1 = new User('tes@teste.com', 'mypass')
const Admin1 = new Admin('asd@asd.com', 'senhaaqui')

// console.log(User1.isAdmin());
// console.log(Admin1.isAdmin());

// console.log(User1);
// console.log(Admin1);

 */
