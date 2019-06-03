function setup()  {
   noCanvas();
   //console.log(this);
   const counter1 = new Counter(100, 500);
   counter1.start();
   const counter2 = new Counter(300, 1000);
   counter2.start();
   const counter3 = new Counter(400, 800);
   counter3.start();
}

function draw()  {
    //counter1.countIt();
}


class Counter {
    constructor(start, wait) {
        this.count = start;
        this.wait = wait;
        this.p = createP('');
    }
    start (){
        // if put a normal function de this will refers to Window GLOBAL THIS
        setInterval(() => this.countIt(), this.wait);
    }

    countIt() {
        this.count++;
        this.p.html(this.count)  ;
    }



}


