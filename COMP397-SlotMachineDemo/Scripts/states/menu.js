var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // MENU CLASS
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Menu.prototype.start = function () {
            createjs.Sound.registerSound("../../Assets/audio/ignition.mp3", "ignition");
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
        };
        Menu.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        Menu.prototype._clickStartButton = function (event) {
            //createjs.Sound.play("yay"); // activate static class play 
            createjs.Sound.play("ignition");
            changeState(config.PLAY_STATE);
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map