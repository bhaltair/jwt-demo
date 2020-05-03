/// <reference types="express" />
import { Provider } from '@loopback/context';
import { RequestBodyParser } from '../body-parsers';
import { ResolvedRoute } from '../router';
import { AjvFactory, ParseParams, Request, RequestBodyValidationOptions } from '../types';
/**
 * Provides the function for parsing args in requests at runtime.
 *
 * @returns The handler function that will parse request args.
 */
export declare class ParseParamsProvider implements Provider<ParseParams> {
    private requestBodyParser;
    private validationOptions;
    private ajvFactory?;
    constructor(requestBodyParser: RequestBodyParser, validationOptions?: RequestBodyValidationOptions, ajvFactory?: AjvFactory | undefined);
    value(): (request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, route: ResolvedRoute) => Promise<import("../types").OperationArgs>;
}
