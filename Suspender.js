class Suspender{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.Suspender.bodyB.position;

            //stroke(0);
            strokeWeight (1)
            var ropeAx = pointA.x
            var ropeAy = pointA.y
            
            var ropeBx = pointB.x+this.offsetX
            var ropeBy = pointB.y+this.offsetY
            line (ropeAx,ropeAy,ropeBx,ropeBy);
        }
        
}
