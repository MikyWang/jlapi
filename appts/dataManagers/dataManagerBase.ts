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
interface IQuery {
    query: string;
    callback: Function;
}
export class DBManagerBase {
    private config: IConfig;
    protected pool: mysql.IPool;
    protected name: string;
    constructor() {
        this.config = JSON.parse(file.readFileSync('dbconfig.json', 'utf-8'));
        this.pool = mysql.createPool(this.config);
    }

    /**
     * select all data from table.
     */
    public selectAll(req: Request, res: Response) {
        let query: IQuery = {
            query: `select * from ${this.name}`,
            callback: (rows) => {
                res.json(rows);
            }
        }
        this.handleDatabase(req, res, query);
    }

    private handleDatabase(req: Request, res: Response, query: IQuery) {
        this.pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            }
            connection.query(query.query, (err, rows) => {
                connection.release();
                if (!err) {
                    query.callback(rows);
                }
            });
            connection.on('error', err => {
                connection.release();
                res.json({ "code": 100, "status": "Error in connection database" });
            });
        })
    }
}