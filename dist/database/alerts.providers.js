"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alert_schema_1 = require("./schemas/alert.schema");
exports.AlertsProviders = [
    {
        provide: 'AlertModelToken',
        useFactory: (connection) => connection.model('Alert', alert_schema_1.AlertSchema),
        inject: ['DbConnectionToken'],
    },
];
//# sourceMappingURL=alerts.providers.js.map