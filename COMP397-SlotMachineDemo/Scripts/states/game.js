var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        //winNumber: number = 0;
        //lossNumber: number = 0;
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
            this.spinCount1 = 3;
            this.spinCount2 = 5;
            this.spinCount3 = 5;
            this.spinDoneCount = 0;
            this.isSpinClicked = false;
            this.isPlayable = false;
            this.bet = 0;
            this.credits = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.grapes = 0;
            this.bananas = 0;
            this.oranges = 0;
            this.cherries = 0;
            this.bars = 0;
            this.bells = 0;
            this.sevens = 0;
            this.blanks = 0;
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            // fruit window
            this.fruits1 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 241, 330, null, 208, 5, 759);
            this.addChild(this.fruits1);
            this.fruits2 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 320, 330, null, null, 5, 690);
            this.addChild(this.fruits2);
            this.fruits3 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 396, 330, null, 766, 5, 205);
            this.addChild(this.fruits3);
            // background
            this.background = new objects.Background("../../Assets/images/Background.png", 320, 240);
            this.addChild(this.background);
            // labels
            this.messageLabel = new objects.Label("Welcome!", "15px Consolas", "#00f", 600, 150);
            this.messageLabel.textAlign = "center";
            this.jackpotLabel = new objects.Label(this.normalize(this.jackpot, 6), "26px Consolas", "#f00", (190 + (640 - 375) * .5), 60);
            this.creditsLabel = new objects.Label(this.normalize(this.credits, 6), "26px Consolas", "#f00", (93 + (640 - 375) * .5), 343);
            this.betLabel = new objects.Label(this.normalize(this.bet, 3), "26px Consolas", "#f00", (167 + (640 - 375) * .5), 343);
            this.winningsLabel = new objects.Label(this.normalize(this.winnings, 6), "26px Consolas", "#f00", (282 + (640 - 375) * .5), 343);
            this.addChild(this.messageLabel);
            this.addChild(this.jackpotLabel);
            this.addChild(this.creditsLabel);
            this.addChild(this.betLabel);
            this.addChild(this.winningsLabel);
            // bet1Button
            this.bet1Button = new objects.BetButton("../../Assets/images/Bet1Button.png", (53 + (640 - 375) * .5), 416, 60, 60, 1);
            this.bet1Button.on("click", function () {
                this.bet = this.bet1Button.value;
                this.checkPlayable();
            }, this);
            this.addChild(this.bet1Button);
            // bet10Button
            this.bet10Button = new objects.BetButton("../../Assets/images/Bet10Button.png", (118 + (640 - 375) * .5), 416, 60, 60, 10);
            this.bet10Button.on("click", function () {
                this.bet = this.bet10Button.value;
                this.checkPlayable();
            }, this);
            this.addChild(this.bet10Button);
            // bet100Button
            this.bet100Button = new objects.BetButton("../../Assets/images/Bet100Button.png", (183 + (640 - 375) * .5), 416, 60, 60, 100);
            this.bet100Button.on("click", function () {
                this.bet = this.bet100Button.value;
                this.checkPlayable();
            }, this);
            this.addChild(this.bet100Button);
            // betMaxButton
            this.betMaxButton = new objects.BetButton("../../Assets/images/BetMaxButton.png", (248 + (640 - 375) * .5), 416, 60, 60, 999);
            this.betMaxButton.on("click", function () {
                this.bet = this.betMaxButton.value;
                this.checkPlayable();
            }, this);
            this.addChild(this.betMaxButton);
            // spinButton
            this.spinButton = new objects.BetButton("../../Assets/images/SpinButton.png", (319 + (640 - 375) * .5), 416, 60, 60, 0);
            this.spinButton.on("click", this.clickSpinButton, this);
            this.addChild(this.spinButton);
            this.horizontalLine = new createjs.Rectangle(320, 240, 320, 3);
            // final
            stage.addChild(this);
            alert(this.isSpinClicked);
        };
        Game.prototype.update = function () {
            // go spin
            if (this.isSpinClicked) {
                this.spinning(this.fruits1);
                this.spinning(this.fruits2);
                this.spinning(this.fruits3);
            }
            if (this.spinDoneCount >= 3) {
                this.resetFruits();
            }
        };
        // --------------------------------------------------- PRIVATE METHODS------------------------------------------------------
        Game.prototype.clickSpinButton = function (event) {
            if (!this.isPlayable && this.bet != 0 && this.isSpinClicked == false) {
                // get fruits so for result
                var betLine = this.Reels(); // from Math.random() to generate betLine(), and set this.blank ... for determinWinnings();
                this.fruits1.goal = this.setGoalByFruit(betLine[0]); // from betLine() to get goal for "this.fruits1"
                this.fruits2.goal = this.setGoalByFruit(betLine[1]);
                this.fruits3.goal = this.setGoalByFruit(betLine[2]);
                // get result from fruits
                var result = this.determineWinnings(); // from values of this.blanks ... to get result
                // wait entil spin stop
                if (this.spinDoneCount >= 3) {
                    this.applyResult(result); // from result to set this.credits ... 
                    this.messageLabel.text = result > 0 ? ("You win:\n\n" + result) : ("You lose:\n\n" + (-result));
                    this.messageLabel.color = result > 0 ? "#00f" : "#f00";
                    if (this.credits < this.bet) {
                        this.isPlayable = true;
                        this.messageLabel.text = 'Not enough\n\ncredits!';
                        this.messageLabel.color = "#f00";
                    }
                }
            }
            //this.resetFruits();       
        };
        Game.prototype.checkPlayable = function () {
            if (this.credits < this.bet) {
                this.isPlayable = true;
                this.messageLabel.text = "Not enough\n\ncredits!";
                this.messageLabel.color = "#f00";
                this.bet = 0;
                this.betLabel.text = this.normalize(this.bet, 3);
            }
            else {
                this.isPlayable = false;
                this.betLabel.text = this.normalize(this.bet, 3);
            }
        };
        Game.prototype.setGoalByFruit = function (fruit) {
            var goal;
            switch (fruit) {
                case "Banana":
                    goal = 759;
                    break;
                case "Bar":
                    goal = 276;
                    break;
                case "Bell":
                    goal = 345;
                    break;
                case "Cherry":
                    goal = 414;
                    break;
                case "Grapes":
                    goal = 483;
                    break;
                case "Orange":
                    goal = 552;
                    break;
                case "Seven":
                    goal = 621;
                    break;
                case "blank":
                    goal = 690;
                    break;
            }
            return goal;
        };
        Game.prototype.resetFruits = function () {
            this.bananas = 0; //1
            this.bars = 0; // 2
            this.bells = 0; // 3
            this.cherries = 0; //4
            this.grapes = 0; // 5            
            this.oranges = 0; // 6          
            this.sevens = 0; //7
            this.blanks = 0; //8
            this.spinDoneCount = 0;
            this.isSpinClicked = false;
        };
        Game.prototype.resetAll = function () {
            this.credits = 1000;
            this.winnings = 0;
            this.jackpot = 5000; // what to do with jackpot ??
            //turn = 0;
            this.bet = 0;
            //winNumber = 0;
            //lossNumber = 0;
            //winRatio = 0;
            this.spinDoneCount = 0;
            this.isSpinClicked = false;
        };
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Game.prototype.determineWinnings = function () {
            var result = 0;
            if (this.blanks == 0) {
                if (this.grapes == 3) {
                    result = this.bet * 10;
                }
                else if (this.bananas == 3) {
                    result = this.bet * 20;
                }
                else if (this.oranges == 3) {
                    result = this.bet * 30;
                }
                else if (this.cherries == 3) {
                    result = this.bet * 40;
                }
                else if (this.bars == 3) {
                    result = this.bet * 50;
                }
                else if (this.bells == 3) {
                    result = this.bet * 75;
                }
                else if (this.sevens == 3) {
                    result = this.bet * 100;
                }
                else if (this.grapes == 2) {
                    result = this.bet * 2;
                }
                else if (this.bananas == 2) {
                    result = this.bet * 2;
                }
                else if (this.oranges == 2) {
                    result = this.bet * 3;
                }
                else if (this.cherries == 2) {
                    result = this.bet * 4;
                }
                else if (this.bars == 2) {
                    result = this.bet * 5;
                }
                else if (this.bells == 2) {
                    result = this.bet * 10;
                }
                else if (this.sevens == 2) {
                    result = this.bet * 20;
                }
                else if (this.sevens == 1) {
                    result = this.bet * 5;
                }
                else {
                    result = this.bet * 1;
                }
            }
            else {
                result = -this.bet;
            }
            return result; //$ 
        }; // end of this.determineWinnings = function(): void 
        Game.prototype.applyResult = function (result) {
            this.credits += result;
            this.creditsLabel.text = this.normalize(this.credits, null);
            this.winnings = result > 0 ? result : 0;
            this.winningsLabel.text = this.normalize(this.winnings, null);
        };
        Game.prototype.normalize = function (num, length) {
            var output = "";
            var length = (length != null && length > 0) ? length : 6;
            switch (num.toString().length) {
                case 1:
                    output = "     " + num;
                    break;
                case 2:
                    output = "    " + num;
                    break;
                case 3:
                    output = "   " + num;
                    break;
                case 4:
                    output = "  " + num;
                    break;
                case 5:
                    output = " " + num;
                    break;
                case 6:
                    output = "" + num;
                    break;
            }
            return output;
        };
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Game.prototype.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }; // end of this.checkRange = function (value: number, lowerBounds: number, upperBounds: number): any
        Game.prototype.Reels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var i = 0; i < 3; i++) {
                outCome[i] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[i]) {
                    case this.checkRange(outCome[i], 1, 27):
                        betLine[i] = "blank";
                        this.blanks++;
                        break;
                    case this.checkRange(outCome[i], 28, 37):
                        betLine[i] = "Grapes";
                        this.grapes++;
                        break;
                    case this.checkRange(outCome[i], 38, 46):
                        betLine[i] = "Banana";
                        this.bananas++;
                        break;
                    case this.checkRange(outCome[i], 47, 54):
                        betLine[i] = "Orange";
                        this.oranges++;
                        break;
                    case this.checkRange(outCome[i], 55, 59):
                        betLine[i] = "Cherry";
                        this.cherries++;
                        break;
                    case this.checkRange(outCome[i], 60, 62):
                        betLine[i] = "Bar";
                        this.bars++;
                        break;
                    case this.checkRange(outCome[i], 63, 64):
                        betLine[i] = "Bell";
                        this.bells++;
                        break;
                    case this.checkRange(outCome[i], 65, 65):
                        betLine[i] = "Seven";
                        this.sevens++;
                        break;
                }
            }
            return betLine;
        }; // end of this.Reels = function (): any
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
        Game.prototype.spinning = function (fruitsX) {
            // get step
            var step = 3;
            if (fruitsX.value >= 2) {
                step = 23;
            }
            else if (fruitsX.value >= 1 && fruitsX.value < 2) {
                step = 12;
            }
            else if (fruitsX.value >= 0 && fruitsX.value < 1) {
                step = 3;
            }
            if (fruitsX.regY <= 207 - step) {
                fruitsX.regY = 759; // 207 is equal to 759,  then go to 759, but it cause one tick?
                fruitsX.value--;
            }
            // keep going
            if (!(fruitsX.value == 0 && fruitsX.regY <= fruitsX.goal + step * 2 && fruitsX.regY >= fruitsX.goal - step * 2)) {
                fruitsX.regY -= step;
            }
            else {
                this.spinDoneCount++;
            }
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map