import { Response } from '~express/lib/response';
import { Request } from '~express/lib/request';
import * as console from 'console';
import * as mysql from 'mysql';
import * as file from 'fs'
import { DBManagerBase } from './dataManagerBase';

export class KanaManager extends DBManagerBase {
    constructor() {
        super();
        this.name = 'kana';
    }
}