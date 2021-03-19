import { RootService } from "./servicehub";

export class CountService{    
    name = 0;
    increase(){
        this.name = this.name + 1;
    }
    constructor(root:RootService){

    }
}