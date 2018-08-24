import { Route } from './route';

export interface Stop {
    id: number;
    location: [number];
    revId: number;
    direction: number;
    type: [string];
    name: string;
    routes: [Route];
}