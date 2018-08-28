import { Stop } from './stop';
import { Time } from './time';

export interface Route {
    id: number;
    revId: number;
    direction: number;
    name: string;
    type: string;
    number: string;
    stopId: [number];
    stops: [Stop];
    times: [Time];
}