"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department_schema_1 = require("./schemas/department.schema");
exports.DepartmentsProviders = [
    {
        provide: 'DepartmentModelToken',
        useFactory: (connection) => connection.model('Department', department_schema_1.DepartmentSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=departments.providers.js.map