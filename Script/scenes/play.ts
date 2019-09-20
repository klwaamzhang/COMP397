module scenes {
    export class PlayScene extends objects.Scene {

        // Variables
        private background:objects.Backgroud;

        constructor(assetsManager: createjs.LoadQueue) {
            super(assetsManager);
            this.Start();
        }

        public Start(): void {
            this.background=new objects.Backgroud(this.assetManager);
            this.Main();
        }

        public Update():void{
            this.background.Update();
        }

        public Main():void{
            this.addChild(this.background);
        }
    }
}