import { Getter } from '@loopback/core';
import { juggler } from '@loopback/repository';
import { UserRepository, UserCredentialsRepository } from '@loopback/authentication-jwt';
export declare class MyUserRepository extends UserRepository {
    protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>;
    constructor(dataSource: juggler.DataSource, userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>);
}
