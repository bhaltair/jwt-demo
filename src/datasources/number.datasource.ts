import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'numberDS',
  connector: 'soap',
  url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
  wsdl: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL',
  remotingEnabled: true,
  operations: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class NumberDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'numberDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.numberDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
