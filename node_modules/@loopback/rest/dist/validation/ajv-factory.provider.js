"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/rest
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const ajv_1 = tslib_1.__importDefault(require("ajv"));
const debug_1 = tslib_1.__importDefault(require("debug"));
const keys_1 = require("../keys");
const debug = debug_1.default('loopback:rest:ajv');
const ajvKeywords = require('ajv-keywords');
const ajvErrors = require('ajv-errors');
/**
 * A provider class that instantiate an AJV instance
 */
let AjvFactoryProvider = class AjvFactoryProvider {
    constructor(options = {}) {
        this.options = options;
    }
    value() {
        return options => {
            var _a;
            let validationOptions = {
                ...this.options,
                ...options,
            };
            // See https://github.com/epoberezkin/ajv#options
            validationOptions = {
                allErrors: true,
                jsonPointers: true,
                // nullable: support keyword "nullable" from Open API 3 specification.
                nullable: true,
                // Allow OpenAPI spec binary format
                unknownFormats: ['binary'],
                ...validationOptions,
            };
            debug('AJV options', validationOptions);
            const ajvInst = new ajv_1.default(validationOptions);
            if (validationOptions.ajvKeywords === true) {
                ajvKeywords(ajvInst);
            }
            else if (Array.isArray(validationOptions.ajvKeywords)) {
                ajvKeywords(ajvInst, validationOptions.ajvKeywords);
            }
            if (validationOptions.ajvErrors === true) {
                ajvErrors(ajvInst);
            }
            else if (((_a = validationOptions.ajvErrors) === null || _a === void 0 ? void 0 : _a.constructor) === Object) {
                ajvErrors(ajvInst, validationOptions.ajvErrors);
            }
            if (this.keywords) {
                this.keywords.forEach(keyword => {
                    debug('Adding Ajv keyword %s', keyword.name);
                    ajvInst.addKeyword(keyword.name, keyword);
                });
            }
            if (this.formats) {
                this.formats.forEach(format => {
                    debug('Adding Ajv format %s', format.name);
                    ajvInst.addFormat(format.name, format);
                });
            }
            return ajvInst;
        };
    }
};
tslib_1.__decorate([
    core_1.inject(core_1.filterByTag(keys_1.RestTags.AJV_KEYWORD)),
    tslib_1.__metadata("design:type", Array)
], AjvFactoryProvider.prototype, "keywords", void 0);
tslib_1.__decorate([
    core_1.inject(core_1.filterByTag(keys_1.RestTags.AJV_FORMAT)),
    tslib_1.__metadata("design:type", Array)
], AjvFactoryProvider.prototype, "formats", void 0);
AjvFactoryProvider = tslib_1.__decorate([
    core_1.bind({ scope: core_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, core_1.inject(keys_1.RestBindings.REQUEST_BODY_PARSER_OPTIONS.deepProperty('validation'), { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], AjvFactoryProvider);
exports.AjvFactoryProvider = AjvFactoryProvider;
//# sourceMappingURL=ajv-factory.provider.js.map