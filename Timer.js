"use strict";
exports.__esModule = true;
var Timer = /** @class */ (function () {
    function Timer(timer) {
        this.run = false;
        this.timer = timer;
        this.funcs = [];
    }
    Timer.prototype.start = function () {
        var _this = this;
        this.run = true;
        setTimeout(function () {
            for (var _i = 0, _a = _this.funcs; _i < _a.length; _i++) {
                var func = _a[_i];
                func();
            }
            if (_this.run) {
                _this.start();
            }
        }, this.timer);
    };
    Timer.prototype.tick = function (func) {
        this.funcs.push(func);
    };
    Timer.prototype.stop = function () {
        this.run = false;
    };
    return Timer;
}());
exports.Timer = Timer;
