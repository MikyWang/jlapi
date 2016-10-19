import { KanaManager } from '../dataManagers/kanaManager';
import { NextFunction, Router } from '~express/lib/express';
import { Request } from '~express/lib/request';
import { Response } from '~express/lib/response';
import * as express from 'express';
import { LinkRouter } from '../routers/LinkRouter';

export class KanaRouter implements LinkRouter {
    public router = express.Router();
    public link: string = '/';
    constructor() {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.send('hello boy');
        });
        this.router.get('/kanas', (req: Request, res: Response, next: NextFunction) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            var kanamanager = new KanaManager();
            kanamanager.selectAll(req, res);
        })
    }
}