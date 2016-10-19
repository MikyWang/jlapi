import { Response } from '~express/lib/response';
import { Request } from '~express/lib/request';
import * as console from 'console';
import * as mysql from 'mysql';
export class DBManager {
    private pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'japanesedb'
    });
    private database: string = 'japanesedb';
    private kanaTable: string = 'tb.kana';
    public handleDatabase(req: Request) {
        let result;
        this.pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                result = { "code": 100, "status": "Error in connection database" };
            }
            connection.query("select * from kana", function (err, rows) {
                connection.release();
                if (!err) {
                    result = rows;
                }
            });
            connection.on('error', function (err) {
                result = { "code": 100, "status": "Error in connection database" };
            });
        })
        return result;
    }
}