// First thing we want is a generic obejct with generic functions

class Object {
    constructor(id, x, y, dir, speed){
        this.id = id;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = speed;
    }

    // update(dt){
    //     // this.x = I'll have to come back to this beccause yeah I would do cos()
    // }

    distanceTo(object){
        dx = this.x - object.x;
        dy = this.y = object.y;
        return Math.sqrt(dx*dx+dy*dy);
    }

    setDirection(dir){
        this.dir = dir;
    }

    serializeForUpdate(){
        return {
            id:this.id,
            x:this.x,
            y:this.y,
        };
    }


}
module.exports = Object;