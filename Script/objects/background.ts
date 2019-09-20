module objects {
    export class Backgroud extends createjs.Bitmap {
        // Variables
        private speedY: number;// Speed of background scrolling on Y-axis

        // Constructors
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("background"));

            this.Start();
        }
        // Functions
        // Initializing our variables with default values
        public Start(): void {
            this.speedY = 0.5;
            this.Reset();
        }

        // Updated 60 times per seconds (60FPS)
        public Update(): void {
            this.Move();
            this.CheckBound();
        }

        // Reset the Postion of the object
        public Reset(): void {
            this.y = -124;
        }

        // Move the object
        public Move(): void {
            this.y += this.speedY;
        }

        // Collision Detection
        public CheckBound(): void {
            if (this.y >= 0) {
                this.Reset();
            }
        }
    }
}