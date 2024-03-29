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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        function PlayScene(assetsManager) {
            var _this = _super.call(this, assetsManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            this.background = new objects.Backgroud(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.enemy=new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            // Order matters when adding game objects
            this.addChild(this.background);
            this.addChild(this.player);
            //this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map