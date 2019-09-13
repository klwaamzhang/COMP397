module scenes{
    export class StartScene extends objects.Scene{
        private welcomeLabel:objects.Label;
        private startButton:objects.Button;

        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Start():void{
            this.welcomeLabel=new objects.Label("Welcome to School!", "60px", "Consolas","#000000",320,240,true);
            this.startButton=new objects.Button(this.assetManager,"nextButton",320,300);
            this.Main();
        }

        public Update():void{

        }

        private startButtonClick():void{
            objects.Game.currentScene=config.Scene.GAME;
        }

        public Main():void{
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click",this.startButtonClick);
        }
    }
}