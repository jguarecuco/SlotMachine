var objects;
(function (objects) {
    var GoSpin = (function () {
        function GoSpin(playerBet, blanks, grapes, bananas, oranges, cherries, bars, bells, sevens) {
            this.result = 0;
            if (blanks == 0) {
                if (grapes == 3) {
                    this.result = playerBet * 10;
                }
                else if (bananas == 3) {
                    this.result = playerBet * 20;
                }
                else if (oranges == 3) {
                    this.result = playerBet * 30;
                }
                else if (cherries == 3) {
                    this.result = playerBet * 40;
                }
                else if (bars == 3) {
                    this.result = playerBet * 50;
                }
                else if (bells == 3) {
                    this.result = playerBet * 75;
                }
                else if (sevens == 3) {
                    this.result = playerBet * 100;
                }
                else if (grapes == 2) {
                    this.result = playerBet * 2;
                }
                else if (bananas == 2) {
                    this.result = playerBet * 2;
                }
                else if (oranges == 2) {
                    this.result = playerBet * 3;
                }
                else if (cherries == 2) {
                    this.result = playerBet * 4;
                }
                else if (bars == 2) {
                    this.result = playerBet * 5;
                }
                else if (bells == 2) {
                    this.result = playerBet * 10;
                }
                else if (sevens == 2) {
                    this.result = playerBet * 20;
                }
                else if (sevens == 1) {
                    this.result = playerBet * 5;
                }
                else {
                    this.result = playerBet * 1;
                }
            }
            else {
                this.result = -playerBet;
            }
        }
        return GoSpin;
    })();
    objects.GoSpin = GoSpin;
})(objects || (objects = {}));
//# sourceMappingURL=gospin.js.map