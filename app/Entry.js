"use strict";
var kanaRouter_1 = require("./routers/kanaRouter");
var Entry = (function () {
    function Entry() {
        this._routers = [];
    }
    Object.defineProperty(Entry, "entry", {
        get: function () {
            return this._entry || new Entry();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "routers", {
        get: function () {
            this.InitRouters([kanaRouter_1.KanaRouter]);
            return this._routers;
        },
        enumerable: true,
        configurable: true
    });
    Entry.prototype.InitRouters = function (routers) {
        var _this = this;
        routers.forEach(function (router) {
            _this._routers.push(new router);
        });
    };
    return Entry;
}());
exports.routers = Entry.entry.routers;
//# sourceMappingURL=Entry.js.map