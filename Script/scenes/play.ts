module scenes {
    export class PlayScene extends objects.Scene {

        // Variables
        private background:objects.Backgroud;
        private player:objects.Player;
        private enemy:objects.Enemy;

        constructor(assetsManager: createjs.LoadQueue) {
            super(assetsManager);
            this.Start();
        }

        public Start(): void {
            this.background=new objects.Backgroud(this.assetManager);
            this.player=new objects.Player(this.assetManager);
            this.enemy=new objects.Enemy(this.assetManager);
            this.Main();
        }

        public Update():void{
            this.background.Update();
            this.player.Update();
            this.enemy.Update();
        }

        public Main():void{
            // Order matters when adding game objects
            this.addChild(this.background);
            this.addChild(this.player);
            this.addChild(this.enemy);
        }
    }
}