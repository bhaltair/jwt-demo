import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {NumberDsDataSource} from '../datasources';

export interface NumberService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class NumberServiceProvider implements Provider<NumberService> {
  constructor(
    // numberDS must match the name property in the datasource json file
    @inject('datasources.numberDS')
    protected dataSource: NumberDsDataSource = new NumberDsDataSource(),
  ) {}

  value(): Promise<NumberService> {
    return getService(this.dataSource);
  }
}
