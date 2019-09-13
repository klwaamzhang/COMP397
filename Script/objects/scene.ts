module objects{
    export class Scene extends createjs.Container{
        public assetManager:createjs.LoadQueue;

        constructor(assetManager:createjs.LoadQueue){
            super();

            this.assetManager=assetManager;
        }

        public Start():void{}
        public Update():void{}
        public Main():void{}
    }
}