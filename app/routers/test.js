"use strict";
var kanaManager_1 = require("../dataManagers/kanaManager");
var express = require("express");
var TestRouter = (function () {
    function TestRouter() {
        this.router = express.Router();
        this.link = '/';
        this.router.get('/', function (req, res, next) {
            res.send('hello boy');
        });
        this.router.get('/kanas', function (req, res, next) {
            var kanamanager = new kanaManager_1.KanaManager();
            kanamanager.selectAll(req, res);
        });
    }
    return TestRouter;
}());
exports.TestRouter = TestRouter;
//# sourceMappingURL=test.js.map