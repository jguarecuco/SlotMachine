var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(fullPath, x, y, regX, regY, value, goal, hasBegun, hasEnded, step) {
            _super.call(this, fullPath); //Assets.getResult(pathString)  -> image with white background which is not wanted
            this.hasBegun = false;
            this.hasEnded = false;
            this.x = x;
            this.y = y;
            this.width = 69;
            this.height = 759;
            this.regX = regX ? regX : this.width * .5;
            this.regY = regY ? regY : this.height * .5;
            this.value = value ? value : 0;
            this.goal = goal ? goal : 186; // goal should be between 214 and 766(not included cause it will be set to 214) according to current canvas size, fruitsSheet size and their positions
            this.hasBegun = hasBegun ? hasBegun : false;
            this.hasEnded = hasEnded ? hasEnded : false;
            this.step = step ? step : 3;
        }
        return Tile;
    })(createjs.Bitmap);
    objects.Tile = Tile;
})(objects || (objects = {}));
//# sourceMappingURL=tile.js.map