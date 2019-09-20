var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Backgroud = /** @class */ (function (_super) {
        __extends(Backgroud, _super);
        // Constructors
        function Backgroud(assetManager) {
            var _this = _super.call(this, assetManager.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        // Functions
        // Initializing our variables with default values
        Backgroud.prototype.Start = function () {
            this.speedY = 5;
            this.Reset();
        };
        // Updated 60 times per seconds (60FPS)
        Backgroud.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        // Reset the Postion of the object
        Backgroud.prototype.Reset = function () {
            this.y = -124;
        };
        // Move the object
        Backgroud.prototype.Move = function () {
            this.y += this.speedY;
        };
        // Collision Detection
        Backgroud.prototype.CheckBound = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return Backgroud;
    }(createjs.Bitmap));
    objects.Backgroud = Backgroud;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map