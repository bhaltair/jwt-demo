import { Provider } from '@loopback/core';
import { GeocoderDataSource } from '../datasources';
export interface GeoPoint {
    /**
     * latitude
     */
    y: number;
    /**
     * longitude
     */
    x: number;
}
export interface Geocoder {
    geocode(address: string): Promise<GeoPoint[]>;
}
export declare class GeocoderProvider implements Provider<Geocoder> {
    protected dataSource: GeocoderDataSource;
    constructor(dataSource?: GeocoderDataSource);
    value(): Promise<Geocoder>;
}
