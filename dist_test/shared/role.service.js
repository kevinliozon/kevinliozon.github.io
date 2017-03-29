System.register(["./mocks/mock-roles", "@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var mock_roles_1, core_1, RoleService;
    return {
        setters: [
            function (mock_roles_1_1) {
                mock_roles_1 = mock_roles_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            RoleService = (function () {
                function RoleService() {
                }
                RoleService.prototype.getRoles = function () {
                    return mock_roles_1.ROLES;
                };
                return RoleService;
            }());
            RoleService = __decorate([
                core_1.Injectable()
            ], RoleService);
            exports_1("RoleService", RoleService);
        }
    };
});
