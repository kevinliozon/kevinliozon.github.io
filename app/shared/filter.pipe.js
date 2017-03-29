System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, FilterPipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            FilterPipe = (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (items, conditions) {
                    return items.filter(function (item) {
                        for (var field in conditions) {
                            // we want to sort the items which the condition
                            // match the "visible" keyword AND is not empty
                            // AND exists
                            if (item[field] !== conditions[field]
                                && conditions[field] !== ""
                                && conditions[field]) {
                                return false;
                            }
                        }
                        return true;
                    });
                };
                return FilterPipe;
            }());
            FilterPipe = __decorate([
                core_1.Pipe({
                    name: 'filter',
                    pure: false
                })
            ], FilterPipe);
            exports_1("FilterPipe", FilterPipe);
        }
    };
});
//# sourceMappingURL=filter.pipe.js.map