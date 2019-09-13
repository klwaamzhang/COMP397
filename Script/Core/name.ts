// immediate Invoked Anonymous Function

(function () {

    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;

    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];

    let currentScene: objects.Scene;
    let currentState: number;

    assetManifest = [
        { id: "backButton", src: "./Assets/BackButton.png" },
        { id: "nextButton", src: "./Assets/NextButton.png" }
    ]

    function Init() {
        console.log("Initialization Start");
        //Start();

        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        // Freqeuncy of checks
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);

        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START; // default state

        Main();
    }

    function Update() {
        // has my state changed since the lsdt check
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    function clickableButtonMouseClick(): void {
        console.log("AHHHHH");

    }

    function Main() {
        console.log("Game start...");

        //finite state machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }

        currentState=objects.Game.currentScene;
    }

    window.onload = Init;
})();