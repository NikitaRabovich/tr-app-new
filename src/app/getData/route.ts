import { Stop } from './stop';

export interface Route {
    id: number;
    revId: number;
    direction: number;
    name: string;
    type: string;
    number: string;
    stopId: [number];
    stops: [Stop];
}