
function setup() {
    createCanvas(600, 400);
    background(0);
    let button = createButton('Click me');
    let changeBackground = () => background(random(255))

    button.mousePressed(changeBackground)

}

class Counter {
    constructor() {
        this.count = 0;
        this.p = createP('');
    }

    countIt(){
        this.count++;
        this.p.html(this.count)   ;
    }
}


