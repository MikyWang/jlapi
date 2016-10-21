import { KanaManager } from '../dataManagers/kanaManager';
import { NextFunction, Router } from '~express/lib/express';
import { Request } from '~express/lib/request';
import { Response } from '~express/lib/response';
import { LinkRouter } from '../routers/LinkRouter';

export class KanaRouter extends LinkRouter<KanaManager> {
    constructor() {
        super();
        this.link = '/';
        this.manager = this.createInstance(KanaManager);
        this.initPath();
    }
    private initPath() {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.json('ss');
        });
        this.router.get('/kanas', (req: Request, res: Response, next: NextFunction) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            this.manager.selectAll(req, res);
        })
    }
}