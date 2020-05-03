import { Provider } from '@loopback/core';
import { AjvFactory, RequestBodyValidationOptions } from '../types';
/**
 * A provider class that instantiate an AJV instance
 */
export declare class AjvFactoryProvider implements Provider<AjvFactory> {
    private options;
    constructor(options?: RequestBodyValidationOptions);
    private keywords;
    private formats;
    value(): AjvFactory;
}
