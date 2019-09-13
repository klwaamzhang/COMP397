module scenes {
    export class PlayScene extends objects.Scene {

        private playLabel: objects.Label;
        private nextButton: objects.Button;
        private backButton: objects.Button;

        constructor(assetsManager: createjs.LoadQueue) {
            super(assetsManager);
            this.Start();
        }

        public Start(): void {
            this.playLabel = new objects.Label(
                "Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this.nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this.backButton = new objects.Button(this.assetManager, "backButton", 100, 340);
            this.Main();
        }

        public Update():void{}

        private nextButtonClick():void{
            objects.Game.currentScene=config.Scene.OVER;
        }

        private backButtonClick():void{
            objects.Game.currentScene=config.Scene.START;
        }

        public Main():void{
            this.addChild(this.playLabel);
            this.addChild(this.nextButton);
            this.addChild(this.backButton);

            //Define event handlers for the buttons
            this.nextButton.on("click",this.nextButtonClick);
            this.backButton.on("click",this.backButtonClick);
        }
    }
}