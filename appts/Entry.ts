import { KanaRouter } from './routers/kanaRouter';
import { DBManagerBase } from "./dataManagers/dataManagerBase";
import { LinkRouter } from './routers/linkRouter';
import { MyClassDecorator } from './Decorator';
const RouterType = [KanaRouter];

@MyClassDecorator()
class Entry {
    private static _entry: Entry;
    public static get entry() {
        return this._entry = this._entry || new Entry();
    }
    private _routers: LinkRouter<DBManagerBase>[] = [];
    public get routers(): LinkRouter<DBManagerBase>[] {
        this.InitRouters(RouterType);
        return this._routers;
    }
    public InitRouters(routers) {
        routers.forEach(router => {
            this._routers.push(new router);
        });
    }
}




exports.routers = Entry.entry.routers;