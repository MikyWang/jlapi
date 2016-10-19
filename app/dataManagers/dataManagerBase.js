"use strict";
var file = require("fs");
var mysql = require("mysql");
var DBManagerBase = (function () {
    function DBManagerBase() {
        this.config = JSON.parse(file.readFileSync('dbconfig.json', 'utf-8'));
        this.pool = mysql.createPool(this.config);
    }
    DBManagerBase.prototype.handleDatabase = function (req, res, callback) {
        this.pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            }
            connection.on('error', function (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            });
            callback(connection, res);
        });
    };
    DBManagerBase.prototype.selectAll = function (req, res) {
        var _this = this;
        this.handleDatabase(req, res, function (connection, res) {
            connection.query("select * from " + _this.name, function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        });
    };
    return DBManagerBase;
}());
exports.DBManagerBase = DBManagerBase;
//# sourceMappingURL=dataManagerBase.js.map