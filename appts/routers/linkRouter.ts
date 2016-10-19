import { Router } from '~express/lib/express';

export interface LinkRouter {
    router: Router;
    link: string;
}
