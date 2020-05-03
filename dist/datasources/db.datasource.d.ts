import { juggler } from '@loopback/repository';
export declare class DbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        localStorage: string;
        file: string;
    };
    constructor(dsConfig?: object);
}
