// immediate Invoked Anonymous Function
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickableButton;
    function Init() {
        console.log("Initialization Start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Freqeuncy of checks
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        helloLabel.rotation += 5;
    }
    function clickableButtonMouseClick() {
        helloLabel.text = "Clicked";
        console.log("AHHHHH");
    }
    function Main() {
        console.log("Game start...");
        /*helloLabel=new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x=100;
        helloLabel.y=100; */
        helloLabel = new object.Label("hello World", "40 px", "Consolas", "#000000", 500, 240, true);
        stage.addChild(helloLabel); // Add the label to stage
        //Button Initialization
        clickableButton = new object.Button("./Assets/ClickMeButton.png", 320, 240);
        clickableButton.regX = 95;
        clickableButton.regY = 24.5;
        clickableButton.on("click", clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=name.js.map