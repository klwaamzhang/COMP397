module object{
    export class Button extends createjs.Bitmap{
        constructor(imagePath:string,x:number=0,y:number=0){
            super(imagePath);

            this.x=x;
            this.y=y;

            this.on("mouseover",this.mouseOver);
            this.on("mouseout",this.mouseOut);

            
        }

        //Methods
        private mouseOver():void {
                this.alpha=0.7;
                
        }

        private mouseOut():void {
            this.alpha=1.0;
            
    }
    }
}