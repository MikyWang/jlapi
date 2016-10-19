import * as file from 'fs';
import * as mysql from 'mysql';
import { Request } from '~express/lib/request';
import { Response } from '~express/lib/response';
interface IConfig {
    connectionLimit: number;
    host: string;
    user: string;
    password: string;
    database: string;
}
export class DBManagerBase {
    private config: IConfig;
    protected pool: mysql.IPool;
    protected name: string;
    constructor() {
        this.config = JSON.parse(file.readFileSync('dbconfig.json', 'utf-8'));
        this.pool = mysql.createPool(this.config);
    }
    private handleDatabase(req: Request, res: Response, callback: Function) {
        this.pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            }
            connection.on('error', function (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            });
            callback(connection, res);
        })
    }

    public selectAll(req: Request, res: Response) {
        this.handleDatabase(req, res, (connection, res) => {
            connection.query(`select * from ${this.name}`, function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });
        })
    }
}