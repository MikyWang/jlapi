import { KanaRouter } from './routers/kanaRouter';
import { LinkRouter } from './routers/linkRouter';
class Entry {
    private static _entry;
    public static get entry() {
        return this._entry || new Entry();
    }
    private _routers: LinkRouter[] = [];
    public get routers(): LinkRouter[] {
        this.InitRouters([KanaRouter]);
        return this._routers;
    }
    public InitRouters(routers) {
        routers.forEach(router => {
            this._routers.push(new router);
        });
    }
}
exports.routers = Entry.entry.routers;