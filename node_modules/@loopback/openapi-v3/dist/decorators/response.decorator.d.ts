import { ResponseModelOrSpec } from '../types';
/**
 *  class MyController {
 *    @oas.response(200, FirstModel)
 *    @oas.response(404, OneError, { $ref: '#/definition...'})
 *    @oas.response(403, SecondError, { schema: ... })
 *  }
 *
 */
export declare function response(responseCode: number, ...responseModelOrSpec: ResponseModelOrSpec[]): MethodDecorator;
export declare namespace response {
    /**
     * Decorate the response as a file
     *
     * @example
     * ```ts
     * import {oas, get, param} from '@loopback/openapi-v3';
     * import {RestBindings, Response} from '@loopback/rest';
     *
     * class MyController {
     *   @get('/files/{filename}')
     *   @oas.response.file('image/jpeg', 'image/png')
     *   download(
     *     @param.path.string('filename') fileName: string,
     *     @inject(RestBindings.Http.RESPONSE) response: Response,
     *   ) {
     *     // use response.download(...);
     *   }
     * }
     * ```
     * @param mediaTypes - A list of media types for the file response. It's
     * default to `['application/octet-stream']`.
     */
    const file: (...mediaTypes: string[]) => MethodDecorator;
}
