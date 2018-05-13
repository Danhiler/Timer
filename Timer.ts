class Timer {

    constructor(timer){
        this.run =false;
        this.timer = timer;
        this.funcs = [];

     }

    start() {
        this.run=true;
        setTimeout(()=>{
            for(const func of this.funcs){
                func();
            }
            if(this.run) {
                this.start()
            }
        },this.timer)
    }

    tick(func) {
        this.funcs.push(func)

    }
    stop() {
        this.run=false;

    }

}
export Timer;
