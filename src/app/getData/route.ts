import { Stop } from './stop';
import { Time } from './time';

export interface Route {
    id: number;
    revId: number;
    direction: number;
    color: string;
    lat: [number];
    lng: [number];
    name: string;
    type: string;
    number: string;
    stopId: [number];
    stops: [Stop];
    times: [Time];
}