module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        private _gameLabel: objects.Label;
        private _authorLabel: objects.Label;
        private _modifiedByLabel: objects.Label;
        private _modifiedDateLabel: objects.Label;
        private _descriptonLabel: objects.Label;
        private _revisionLabel: objects.Label;
        private _functionsLabel: objects.Label;
        private _classesLabel: objects.Label;

        private _startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            this._gameLabel = new objects.Label("SLOT MACHINE", "40px Engravers MT", "#f00", 320, 35);
            this._authorLabel = new objects.Label("Author: Yun Kui Pan\nLast Modified by: Yun Kui Pan\nLast Modified Date: 2015-10-16", "16px Consolas", "#000", 450, 80);
            this._authorLabel.lineHeight = 20;
            this._authorLabel.textAlign = "center";
            
            this._revisionLabel = new objects.Label("Revision History: https://github.com/y-pan/SlotMachine", "16px Consolas", "#000", 20, 130);
            this._revisionLabel.regX = 0;

            this._descriptonLabel = new objects.Label("Description:\n  This canvas game developed with TypeScript, createjs and stats.js.\n  To play game, click start button below to load the game. \n  Then click bet button to bet and click spin to play.", "16px Consolas", "#000", 20, 170);
            this._descriptonLabel.lineHeight = 20;
            this._descriptonLabel.regX = 0;

            this._functionsLabel = new objects.Label("Functions:\n  start(), checkPlayable(), update(), checkJackPot(), resetData(),\n  resetAll(), clickSpinButton(), Reels(), getGoalByFruit(),\n  determineWinnings(), spinning(), applyResult(), normalize(),\n  checkRange()", "16px Consolas", "#000", 20, 260);
            this._functionsLabel.lineHeight = 20;
            this._functionsLabel.regX = 0;

            this._classesLabel = new objects.Label("Classes:\n  Objects.background, Objects.betButton, Objects.blinkButton,\n  Objects.button, Objects.label, Objects.scene, Objects.tile", "16px Consolas", "#000", 20, 355);
            this._classesLabel.lineHeight = 20;
            this._classesLabel.regX = 0;         
            

            this.addChild(this._gameLabel);
            this.addChild(this._authorLabel);

            this.addChild(this._descriptonLabel);
            this.addChild(this._revisionLabel);
            this.addChild(this._functionsLabel);
            this.addChild(this._classesLabel);


            // start button
            this._startButton = new objects.Button("StartButton", 320, 430);
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("yay"); // activate static class play 
            changeState(config.PLAY_STATE);
        }

    }


}