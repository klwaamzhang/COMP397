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
            //this.y = -50;
            //this.x = 320;
            this.Reset();
        }
        public Update(): void {
            this.Move();
            this.CheckBound(); // <-- Check collisions
        }
        public Reset(): void { 
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        }
        public Move(): void {
            this.y += 3;
        }
        public CheckBound(): void {
            if (this.y >= 900 + this.halfH + 5) {
                this.Reset();
            }
        }
    }
}