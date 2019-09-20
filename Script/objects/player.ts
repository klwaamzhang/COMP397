module objects{
    export class Player extends objects.GameObject{
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"player");
            this.Start();
        }

        public Start():void{}
        public Update():void{}
        public Reset():void{}
        public Move():void{
            // re reference the stage objects and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // this
        }
        public CheckBound():void{}
    }
}