"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const service_proxy_1 = require("@loopback/service-proxy");
const datasources_1 = require("../datasources");
let GeocoderProvider = class GeocoderProvider {
    constructor(
    // geocoder must match the name property in the datasource json file
    dataSource = new datasources_1.GeocoderDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return service_proxy_1.getService(this.dataSource);
    }
};
GeocoderProvider = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.geocoder')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.GeocoderDataSource])
], GeocoderProvider);
exports.GeocoderProvider = GeocoderProvider;
//# sourceMappingURL=geocoder.service.js.map