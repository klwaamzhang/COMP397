// immediate Invoked Anonymous Function

(function(){

    let canvas=document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:object.Label;
    let clickableButton:object.Button;

    function Init(){
        console.log("Initialization Start");
        Start();       
    }

    function Start(){
        console.log("Starting Application...");

        //Initialize CreateJS
        stage=new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Freqeuncy of checks
        createjs.Ticker.framerate=60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update(){
        stage.update();
        helloLabel.rotation += 5;
    }

    function clickableButtonMouseClick():void{
        helloLabel.text="Clicked";
        console.log("AHHHHH");

    }

    function Main(){
        console.log("Game start...");

        /*helloLabel=new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x=100;
        helloLabel.y=100; */

        helloLabel=new object.Label("hello World", "40 px","Consolas","#000000", 500,240,true);

        stage.addChild(helloLabel);// Add the label to stage

        //Button Initialization
        clickableButton=new object.Button("./Assets/ClickMeButton.png", 320, 240);
        clickableButton.regX=95;
        clickableButton.regY=24.5;

        clickableButton.on("click",clickableButtonMouseClick);
        stage.addChild(clickableButton);
    }

    window.onload=Init;
})();