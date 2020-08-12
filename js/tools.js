export default class Tool{ // start of class tool.
    constructor(){
        this.r = Math.random(); // random numbers.
        this.listNum = [];  // list of random numbers.
    }

    random(start,end,step=1){ // start of random.
        if (start === end || start > end  || step === 0){
            return null;
        }
        else{
            for (let index = start; index < end+1; index+=step) {
                this.listNum.push(index);
            }
            this.f = Math.floor(this.r*this.listNum.length);
            return this.listNum[this.f];
        }
    } // the end of random.



}// the end of class tool.

    
