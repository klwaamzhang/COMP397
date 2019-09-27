module objects {
    export class Enemy extends objects.GameObject {
        //variables
        //constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "enemy");
            this.Start();
        }

        // Methods
        public Start(): void {
            // set the initial position
            this.y = -50;
            this.x = 320;
        }
        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { }
        public Move(): void {
            this.y += 0.5;
        }
        public CheckBound(): void {
            if (this.y >= 900) {
                this.y = -50;
            }
        }
    }
}