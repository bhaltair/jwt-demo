"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const geocoder_datasource_1 = require("../../../datasources/geocoder.datasource");
const services_1 = require("../../../services");
const helpers_1 = require("../../helpers");
describe('GeoLookupService', function () {
    // eslint-disable-next-line no-invalid-this
    this.timeout(30 * 1000);
    let cachingProxy;
    before(async () => (cachingProxy = await helpers_1.givenCachingProxy()));
    after(() => cachingProxy.stop());
    let service;
    before(givenGeoService);
    let available = true;
    before(async () => {
        available = await helpers_1.isGeoCoderServiceAvailable(service);
    });
    it('resolves an address to a geo point', async function () {
        // eslint-disable-next-line no-invalid-this
        if (!available)
            return this.skip();
        const points = await service.geocode(helpers_1.aLocation.address);
        testlab_1.expect(points).to.deepEqual([helpers_1.aLocation.geopoint]);
    });
    async function givenGeoService() {
        const config = helpers_1.getProxiedGeoCoderConfig(cachingProxy);
        const dataSource = new geocoder_datasource_1.GeocoderDataSource(config);
        service = await new services_1.GeocoderProvider(dataSource).value();
    }
});
//# sourceMappingURL=geocoder.service.integration.js.map