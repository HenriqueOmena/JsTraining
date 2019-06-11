//==================EXERCICIO 7==================
/* const nome = 'Diego'
const idade = 23
const usuario = { nome: nome, idade: idade, cidade: 'Rio   do   Sul', }

const user = {
    nome,
    idade,
    cidadde: "Rio do sul"
}
console.log(user); */


//==================EXERCICIO 6==================

//Converta   o   seguinte   trecho   de   código   utilizando   Template   Literals:
const usuario = 'Diego';
const idade = 23;
console.log( 'O   usuário   ' + usuario + '   possui   ' + idade + '   anos' );
console.log(`O usuario ${usuario} possui ${idade} anos`)


//==================EXERCICIO 5==================
// 5.1   Rest A   partir   do   array:  const   arr   =   [1,   2,   3,   4,   5,   6] ,   defina   uma   variável  x   que   recebe   a   primeira posição   do   vetor   e   outra   variável  y  que   recebe   todo   restante   dos   dados.

/* arr = [ 1, 2, 3, 4, 5, 6 ]

const [x,a,...y] = arr;

console.log(x); // 1
console.log(a); // 2
console.log(y); // [2, 3, 4, 5, 6]
 */

//Crie   uma   função   que   recebe   inúmeros   parâmetros   e   retorna   a   soma   de   todos   eles:

/* const summAll = (...numbers) => numbers.reduce((x, y ) => x + y);
console.log(summAll(5, 6, 8)); */

//A   partir   do   objeto   e   utilizando   o   operador   spread:

/* const usuario = { nome: 'Diego', idade: 23, endereco: { cidade: 'Rio   do   Sul', uf: 'SC', pais: 'Brasil', } };

const usuario2 = {...usuario, nome: "Gabriel"}
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade:"Lonttras"}}

console.log(usuario3); */
//==================EXERCICIO 4==================

//4.1   Desestruturação   simples
//A   partir   do   seguinte   objeto:
/* const empresa = { nome: 'Rocketseat', endereco: { cidade: 'Rio   do   Sul', estado: 'SC', } };

const { nome, endereco, endereco:{cidade, estado} } = empresa
console.log(nome);
console.log(cidade);
console.log(estado);

//4.2   Desestruturação   em   parâmetros Na   seguinte   função:
// function   mostraInfo(usuario)   {
//      return   `${usuario.nome}   tem   ${usuario.idade}   anos.`;
//     }

const mostrarInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

mostraInfo({   nome:   'Diego',  idade:   23   })  */

//==================EXERCICIO 3==================
/* //Converta   as   funções   nos   seguintes   trechos   de   código   em   Arrow   Functions:

//  3.1
// const arr = [ 1, 2, 3, 4, 5 ]; arr.map( function ( item ) { return item + 10; } );
// const teste = arr.map( item => item +10);
// console.log(teste);

//  3.2
//  Dica:   Utilize   uma   constante   pra   function
const usuario = { nome: 'Diego', idade: 23 };
//function mostraIdade( usuario ) { return usuario.idade; } mostraIdade( usuario );

const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));

//  3.3
//  Dica:   Utilize   uma   constante   pra   function
const nome = "Diego";
const idade = 23;
//function mostraUsuario( nome = 'Diego', idade = 18 ) { return { nome, idade }; }
const mostraUsuario = ( nome = 'Diego', idade = 18 ) => { return nome, idade} ;
//console.log(mostraUsuario( nome, idade ));
//console.log(mostraUsuario( nome ));

//  3.4
const promise = function () { return new Promise( function ( resolve, reject ) { return resolve(); } ) }

const promise1 = () => new Promise((resolve, reject) => resolve());

console.log(promise1);
 */

//==================EXERCICIO 2==================
/*
const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" }
];
//2.4 Multiplique   a   idade   de   todos   usuários   por   dois   e   depois   realize   um   filtro   nos   usuários   que   possuem no   máximo   50   anos:

let = max50YearsOld = usuarios.map(user => user.idade * 2)
//.filter(user => user.idade <= 50)
console.log(max50YearsOld);

// este eu havia errado o correto era
// Pois esta trazendo todos os elementos de usuario e manipulando apenas a idade manteno assim //um objeto como retorno do MAP
// e depois filtrando novamente, meu problema era q estava vindo em array apenas
//
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

 */

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
