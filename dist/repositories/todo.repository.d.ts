import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Todo, TodoRelations } from '../models';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: juggler.DataSource);
}
