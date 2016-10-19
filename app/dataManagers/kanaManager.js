"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dataManagerBase_1 = require("./dataManagerBase");
var KanaManager = (function (_super) {
    __extends(KanaManager, _super);
    function KanaManager() {
        var _this = _super.call(this) || this;
        _this.name = 'kana';
        return _this;
    }
    return KanaManager;
}(dataManagerBase_1.DBManagerBase));
exports.KanaManager = KanaManager;
//# sourceMappingURL=kanaManager.js.map