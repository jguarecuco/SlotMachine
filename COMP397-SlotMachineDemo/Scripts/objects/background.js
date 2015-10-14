var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        //CONSTRUCTOR
        function Background(fullPath, x, y) {
            _super.call(this, fullPath);
            this.x = x;
            this.y = y;
            this.width = 375;
            this.height = 480;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //this.on("mouseover", this.overButton, this);
            //this.on("mouseout", this.outButton, this);
        }
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map