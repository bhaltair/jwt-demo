import { Entity } from '@loopback/repository';
import { UserCredentials } from './user-credentials.model';
export declare class User extends Entity {
    id: number;
    realm?: string;
    username?: string;
    email: string;
    emailVerified?: boolean;
    verificationToken?: string;
    userCredentials: UserCredentials;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
