module objects {
    export class GameObject extends createjs.Bitmap {
        protected speedX: number;
        protected speedY: number;

        public width: number;
        public height: number;
        public halfW: number; // Half-width; Useful for collision detection
        public halfH: number; // Half-height

        constructor(assetManager: createjs.LoadQueue, imageString: string) {
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }

        // Methods
        private Init(): void {
            // initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            // registration points
            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public Start():void{}
        public Update():void{}
        public Reset():void{}
        public Move():void{}
        public CheckBound():void{}

    }
}