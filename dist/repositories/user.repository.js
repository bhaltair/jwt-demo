"use strict";
// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
let MyUserRepository = class MyUserRepository extends authentication_jwt_1.UserRepository {
    constructor(dataSource, userCredentialsRepositoryGetter) {
        super(dataSource, userCredentialsRepositoryGetter);
        this.userCredentialsRepositoryGetter = userCredentialsRepositoryGetter;
        // super(User, dataSource);
    }
};
MyUserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('UserCredentialsRepository')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource, Function])
], MyUserRepository);
exports.MyUserRepository = MyUserRepository;
//# sourceMappingURL=user.repository.js.map