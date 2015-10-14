var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(fullPath, x, y, regX, regY) {
            _super.call(this, fullPath);
            this.x = x;
            this.y = y;
            this.width = 69;
            this.height = 690;
            if (regX == null || regX == undefined) {
                this.regX = this.width * .5;
            }
            else {
                this.regX = regX;
            }
            if (regY == null || regY == undefined) {
                this.regY = this.height * .7;
            }
            else {
                this.regY = regY;
            }
        }
        return Tile;
    })(createjs.Bitmap);
    objects.Tile = Tile;
})(objects || (objects = {}));
//# sourceMappingURL=tile.js.map