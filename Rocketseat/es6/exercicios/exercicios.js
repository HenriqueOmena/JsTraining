
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

/* console.log(User1.isAdmin());
console.log(Admin1.isAdmin()); */

console.log(User1);
console.log(Admin1);
