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
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
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
            // CONDITION VAR
            this.isSpinBegun = false;
            this.isSpinOn = false;
            this.MINregY = 117; // minimum regY of fruitSheet, for animation
            this.MAXregY = 669; // maxmum regY of fruitSheet, for animation
        }
        // --------------------------------------------------- PUBLIC METHODS------------------------------------------------------
        // --------------------------------------------------- start() ------------------------------------------------------
        Game.prototype.start = function () {
            document.getElementById('header').style.display = "none";
            // fruit window / reel
            this.fruits1 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 241, 240, null, 200, 3, 759, false, false, 23);
            this.addChild(this.fruits1);
            this.fruits2 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 320, 240, null, 400, 3, 690, false, false, 23);
            this.addChild(this.fruits2);
            this.fruits3 = new objects.Tile("../../Assets/images/fruitsSheet69x759.png", 396, 240, null, 600, 3, 205, false, false, 23);
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
            // resetButton , resetButtonRing
            this.resetButton = new objects.BlinkButton("../../Assets/images/ResetButton.png", 200, 50, 40, 40, 1, 1);
            this.resetButtonRing = new objects.BlinkButton("../../Assets/images/ResetButtonRing.png", 200, 50, 40, 40, 1, 0.1);
            this.resetButton.on("mouseover", function () {
                this.resetButtonRing.alpha = this.resetButtonRing.alphaOver;
            }, this);
            this.resetButton.on("mouseout", function () {
                this.resetButtonRing.alpha = this.resetButtonRing.alphaOut;
            }, this);
            this.resetButton.on("click", function () {
                this.resetAll();
            }, this);
            this.resetButtonRing.on("click", function () {
                this.resetAll();
            }, this);
            this.addChild(this.resetButton);
            this.addChild(this.resetButtonRing);
            // exitButton, exitButtonLight
            this.exitButton = new objects.BlinkButton("../../Assets/images/ExitButton.png", 430, 50, 40, 40, 1, 1);
            this.exitButtonLight = new objects.BlinkButton("../../Assets/images/ExitButtonLight.png", 430, 50, 40, 40, 1, 0.1);
            this.exitButton.on("mouseover", function () {
                this.exitButtonLight.alpha = this.exitButtonLight.alphaOver;
            }, this);
            this.exitButton.on("mouseout", function () {
                this.exitButtonLight.alpha = this.exitButtonLight.alphaOut;
            }, this);
            this.exitButton.on("click", function () {
                window.close();
            }, this);
            this.exitButtonLight.on("click", function () {
                window.close();
            }, this);
            this.addChild(this.exitButton);
            this.addChild(this.exitButtonLight);
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
            // final
            stage.addChild(this);
        };
        // --------------------------------------------------- Update()------------------------------------------------------
        Game.prototype.update = function () {
            // go spin 
            if (this.isSpinBegun) {
                if (!this.fruits1.hasEnded) {
                    this.spinning(this.fruits1);
                }
                if (!this.fruits2.hasEnded) {
                    this.spinning(this.fruits2);
                }
                if (!this.fruits3.hasEnded) {
                    this.spinning(this.fruits3);
                }
            }
            // wait entil all spins stop
            if (this.fruits1.hasBegun && this.fruits1.hasEnded && this.fruits2.hasBegun && this.fruits2.hasEnded && this.fruits3.hasBegun && this.fruits3.hasEnded) {
                this.isSpinOn = false;
                this.checkJackPot();
                this.applyResult(this.result); // from result to set this.credits ... 
                this.resetData();
            }
        }; // end of update()
        // --------------------------------------------------- PRIVATE METHODS------------------------------------------------------
        Game.prototype.clickSpinButton = function (event) {
            this.checkPlayable(); // set this.isPlayable
            if (this.isPlayable) {
                this.messageLabel.text = "On going...";
                this.messageLabel.color = "#000";
                this.fruits1.hasBegun = true;
                this.fruits2.hasBegun = true;
                this.fruits3.hasBegun = true;
                this.isSpinBegun = true;
                this.isSpinOn = true;
                // get fruits for result
                this.betLine = this.Reels(); // from Math.random() to generate betLine(), and set this.blank ... for determinWinnings();
                this.fruits1.goal = this.getGoalByFruit(this.betLine[0]); // from betLine() to get goal for "this.fruits1"
                this.fruits2.goal = this.getGoalByFruit(this.betLine[1]);
                this.fruits3.goal = this.getGoalByFruit(this.betLine[2]);
                // get result from fruits
                this.result = this.determineWinnings(); // from values of this.blanks ... to get result, not yet apply result here but somewhere else
                console.log("goals: " + this.betLine[0] + "|" + this.fruits1.goal + ", " + this.betLine[1] + "|" + this.fruits2.goal + ", " + this.betLine[2] + "|" + this.fruits3.goal + " @result: " + this.result);
            }
        }; // end of clickSpinButton
        // spin animation
        Game.prototype.spinning = function (fruitsX) {
            if (fruitsX.hasBegun && !fruitsX.hasEnded) {
                if (this.isSpinBegun) {
                    // get step
                    if (fruitsX.value > 0) {
                        if (fruitsX.value > 2) {
                            fruitsX.step = 23;
                        }
                        else {
                            fruitsX.step = 12;
                        }
                        fruitsX.regY -= fruitsX.step;
                        if (fruitsX.regY <= this.MINregY) {
                            fruitsX.regY = this.MAXregY - (fruitsX.step + this.MINregY - fruitsX.regY); // from 669 to 117, this 117 should not exist and set to 669 immediately
                            fruitsX.value--;
                        }
                        console.log("#" + fruitsX.id + " regY: " + fruitsX.regY + " go to " + fruitsX.goal);
                    }
                    else {
                        fruitsX.step = 3;
                        if (fruitsX.regY <= fruitsX.goal + fruitsX.step + 1 && fruitsX.regY >= fruitsX.goal - fruitsX.step - 1) {
                            fruitsX.hasEnded = true;
                        }
                        else {
                            if (fruitsX.regY <= this.MINregY + fruitsX.step) {
                                fruitsX.regY = this.MAXregY - fruitsX.step + (fruitsX.regY - this.MINregY); // just to make animation smoothy at MINregY
                                fruitsX.value--;
                            }
                            else {
                                fruitsX.regY -= fruitsX.step;
                            }
                        }
                        console.log("In Else block: #" + fruitsX.id + " regY: " + fruitsX.regY + " go to " + fruitsX.goal);
                    }
                }
            }
        }; // end of spinning()
        Game.prototype.checkPlayable = function () {
            if (!this.isSpinOn && this.bet > 0 && this.credits >= this.bet && !this.fruits1.hasBegun && !this.fruits2.hasBegun && !this.fruits3.hasBegun && !this.isSpinBegun) {
                this.spinButton.mouseEnabled = true;
                this.spinButton.alpha = 1;
                this.isPlayable = true;
                this.betLabel.text = this.normalize(this.bet, 3);
            }
            else {
                this.isPlayable = false;
                this.spinButton.mouseEnabled = false;
                this.spinButton.alpha = 0.3;
                if (this.credits < this.bet) {
                    this.messageLabel.text = "Not enough\n\ncredits!";
                    this.messageLabel.color = "#f00";
                    this.bet = 0;
                    this.betLabel.text = this.normalize(this.bet, 3);
                }
                if (this.bet = 0) {
                    this.messageLabel.text = "Not enough\n\ncredits!";
                    this.messageLabel.color = "#f00";
                    this.bet = 0;
                    this.betLabel.text = this.normalize(this.bet, 3);
                }
            }
        }; // end of checkPlayable()
        // get goal(actually the regY in fruitSheet) by fruit from Real()
        Game.prototype.getGoalByFruit = function (fruit) {
            var goal;
            switch (fruit) {
                case "Banana":
                    goal = 186;
                    break;
                case "Bar":
                    goal = 255;
                    break;
                case "Bell":
                    goal = 324;
                    break;
                case "Cherry":
                    goal = 393;
                    break;
                case "Grapes":
                    goal = 462;
                    break;
                case "Orange":
                    goal = 531;
                    break;
                case "Seven":
                    goal = 600;
                    break;
                case "blank":
                    goal = 669;
                    break;
            }
            return goal;
        }; // getGoalByFruit()
        Game.prototype.checkJackPot = function () {
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this.jackpot + " Jackpot!!");
                this.credits += this.jackpot;
                this.jackpot = 1000;
            }
        }; // end of checkJackPot()
        Game.prototype.resetData = function () {
            this.bananas = 0;
            this.bars = 0;
            this.bells = 0;
            this.cherries = 0;
            this.grapes = 0;
            this.oranges = 0;
            this.sevens = 0;
            this.blanks = 0;
            this.fruits1.value = 3;
            this.fruits1.step = 23;
            this.fruits1.hasEnded = false;
            this.fruits1.hasBegun = false;
            this.fruits2.value = 3;
            this.fruits2.step = 23;
            this.fruits2.hasEnded = false;
            this.fruits2.hasBegun = false;
            this.fruits3.value = 3;
            this.fruits3.step = 23;
            this.fruits3.hasEnded = false;
            this.fruits3.hasBegun = false;
            this.isSpinBegun = false;
            this.isSpinOn = false;
            this.isPlayable = false;
        }; // end of resetData()
        Game.prototype.resetAll = function () {
            this.resetData();
            this.jackpot = 5000;
            this.bet = 0;
            this.credits = 1000;
            this.winnings = 0;
            this.jackpotLabel.text = this.normalize(this.jackpot, 6);
            this.betLabel.text = this.normalize(this.bet, 3);
            this.creditsLabel.text = this.normalize(this.credits, 6);
            this.winningsLabel.text = this.normalize(this.winnings, 6);
            this.messageLabel.text = "Welcome!";
            this.messageLabel.color = "#00f";
        }; // end of resetAll()
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
            return result;
        }; // end of determineWinnings()
        Game.prototype.applyResult = function (result) {
            this.credits += result;
            this.creditsLabel.text = this.normalize(this.credits, null);
            this.winnings = result > 0 ? result : 0;
            this.winningsLabel.text = this.normalize(this.winnings, null);
            this.messageLabel.text = this.result > 0 ? ("You won:\n\n" + this.result) : ("You lost:\n\n" + (-this.result));
            this.messageLabel.color = this.result > 0 ? "#00f" : "#f00";
            this.jackpotLabel.text = this.normalize(this.jackpot, null);
        }; // end of applyResult()
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
        }; // end of normalize()
        Game.prototype.checkRange = function (value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            }
            else {
                return !value;
            }
        }; // end of checkRange()
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
        }; // end of Reels()
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map