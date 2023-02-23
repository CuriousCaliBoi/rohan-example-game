// Why is this deprecate
// const nanoid = require('nanoid');
// shortid works but nanoid doesnt
const ObjectClass = require('./object.js');
const shortid = require('shortid');
// Speed constant and constaant class needed
console.log(shortid());

class Bullet extends ObjectClass {
    constructor(parentid,x,y,dir){
        super(shortid(),x,y,dir,speed)
        this.parentid = parentid;
    }

    update(dt){
        return this.x <0 || this.x > Map.Size() || y 
        // get your constants
    }


}

