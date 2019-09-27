module objects {
    export class Player extends objects.GameObject {
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = 700;
            this.x = 320;
        }
        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { }
        public Move(): void {
            // We reference the stage object and get mouse position
            this.x = objects.Game.stage.mouseX;
            // this is evetually replaced with keyboard input
            // Maybe xbox controller
        }
        public CheckBound(): void { }
    }
}