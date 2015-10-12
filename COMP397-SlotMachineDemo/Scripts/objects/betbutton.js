var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var BetButton = (function (_super) {
        __extends(BetButton, _super);
        function BetButton(fullPath, x, y, width, height, value) {
            _super.call(this, fullPath);
            this.value = value;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.regX = width * .5;
            this.regY = height * .5;
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        BetButton.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        BetButton.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return BetButton;
    })(createjs.Bitmap);
    objects.BetButton = BetButton;
})(objects || (objects = {}));
//# sourceMappingURL=betbutton.js.map