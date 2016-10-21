import * as express from 'express';
import { Router } from '~express/lib/express';
import { DBManagerBase } from "./../dataManagers/dataManagerBase";

export class LinkRouter<T extends DBManagerBase>  {
    protected router = express.Router();
    protected link: string;
    protected manager: T;
    protected createInstance<T>(manager: { new (): T; }): T {
        return new manager();
    }
}
