"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let TodoController = class TodoController {
    constructor(todoRepository, geoService) {
        this.todoRepository = todoRepository;
        this.geoService = geoService;
    }
    async createTodo(todo) {
        if (todo.remindAtAddress) {
            const geo = await this.geoService.geocode(todo.remindAtAddress);
            if (!geo[0]) {
                // address not found
                throw new rest_1.HttpErrors.BadRequest(`Address not found: ${todo.remindAtAddress}`);
            }
            // Encode the coordinates as "lat,lng" (Google Maps API format). See also
            // https://stackoverflow.com/q/7309121/69868
            // https://gis.stackexchange.com/q/7379
            todo.remindAtGeo = `${geo[0].y},${geo[0].x}`;
        }
        return this.todoRepository.create(todo);
    }
    async findTodoById(id, items) {
        return this.todoRepository.findById(id);
    }
    async findTodos(filter) {
        return this.todoRepository.find(filter);
    }
    async replaceTodo(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async updateTodo(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async deleteTodo(id) {
        await this.todoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/todos', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { title: 'NewTodo', exclude: ['id'] }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
tslib_1.__decorate([
    rest_1.get('/todos/{id}', {
        responses: {
            '200': {
                description: 'Todo model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.boolean('items')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Boolean]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "findTodoById", null);
tslib_1.__decorate([
    rest_1.get('/todos', {
        responses: {
            '200': {
                description: 'Array of Todo model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Todo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "findTodos", null);
tslib_1.__decorate([
    rest_1.put('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Todo]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "replaceTodo", null);
tslib_1.__decorate([
    rest_1.patch('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
tslib_1.__decorate([
    rest_1.del('/todos/{id}', {
        responses: {
            '204': {
                description: 'Todo DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
TodoController = tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, repository_1.repository(repositories_1.TodoRepository)),
    tslib_1.__param(1, core_1.inject('services.Geocoder')),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoRepository, Object])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map