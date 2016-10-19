import { DBManager } from './testdb';
import { NextFunction, Router } from '~express/lib/express';
import { Request } from '~express/lib/request';
import { Response } from '~express/lib/response';
import * as express from 'express';
import { LinkRouter } from './LinkRouter';

export class TestRouter implements LinkRouter {
    public router = express.Router();
    public link: string = '/';
    constructor() {
        this.router.get('/', function (req: Request, res: Response, next: NextFunction) {
            var dbmanager = new DBManager();
            res.json(dbmanager.handleDatabase(req, res));
        });
    }
}