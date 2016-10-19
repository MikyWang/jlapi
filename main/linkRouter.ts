import { Router } from '~express/lib/express';
import { TestRouter } from './test';
export interface LinkRouter {
    router: Router;
    link: string;
}
export class EntryRouters {
    private static _routers: LinkRouter[] = [];
    public static get routers(): LinkRouter[] {
        this.InitRouters([TestRouter]);
        return this._routers;
    }
    public static InitRouters(routers) {
        routers.forEach(router => {
            this._routers.push(new router);
        });
    }
}