/// <reference types="node" />
import { IncomingMessage } from 'http';
export interface ProxyOptions {
    /**
     * Directory where to keep the cached snapshots.
     */
    cachePath: string;
    /**
     * How long to keep snapshots before making a new request to the backend.
     * The value is in milliseconds.
     *
     * Default: one day
     */
    ttl?: number;
    /**
     * The port where the HTTP proxy should listen at.
     * Default: 0 (let the system pick a free port)
     */
    port?: number;
    /**
     * A flag if the error should be logged
     */
    logError?: boolean;
    /**
     * Timeout to connect to the target service
     */
    timeout?: number;
}
/**
 * The HTTP proxy implementation.
 */
export declare class HttpCachingProxy {
    private _axios;
    private _options;
    private _server?;
    /**
     * URL where the proxy is listening on.
     * Provide this value to your HTTP client as the proxy configuration.
     */
    url: string;
    constructor(options: ProxyOptions);
    /**
     * Start listening.
     */
    start(): Promise<void>;
    /**
     * Stop listening.
     */
    stop(): Promise<void>;
    private _handle;
    private _handleAsync;
    private _getCacheKey;
    private _sendCachedEntry;
    private _forwardRequest;
    logError(request: IncomingMessage, error: Error): void;
}
