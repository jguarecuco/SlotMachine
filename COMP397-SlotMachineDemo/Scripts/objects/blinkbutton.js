var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var BlinkButton = (function (_super) {
        __extends(BlinkButton, _super);
        function BlinkButton(fullPath, x, y, width, height, alphaOver, alphaOut) {
            _super.call(this, fullPath);
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.regX = width * .5;
            this.regY = height * .5;
            this.alphaOver = alphaOver ? alphaOver : 1;
            this.alphaOut = alphaOut ? alphaOut : 0;
            this.alpha = alphaOut ? alphaOut : 1;
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        BlinkButton.prototype.overButton = function (event) {
            event.currentTarget.alpha = this.alphaOver;
        };
        BlinkButton.prototype.outButton = function (event) {
            event.currentTarget.alpha = this.alphaOut;
        };
        return BlinkButton;
    })(createjs.Bitmap);
    objects.BlinkButton = BlinkButton;
})(objects || (objects = {}));
//# sourceMappingURL=blinkbutton.js.map