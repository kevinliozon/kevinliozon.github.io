"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tool_service_1 = require("../shared/tool.service");
var hobby_service_1 = require("../shared/hobby.service");
var AboutComponent = (function () {
    function AboutComponent(ToolService, HobbyService) {
        this.ToolService = ToolService;
        this.HobbyService = HobbyService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.details = {
            email: "mailto:kevinliozonpro@gmail.com",
            street: "25 Church Crescent",
            city: "N10 3NA, London",
            country: "United Kingdom"
        };
        this.aboutTitles = [
            "My experience as a Front-End Developer",
            "My experience as an UX Designer",
            "Why 'Front-End Architect'?",
            "Where do I live?",
            "My favorite tools",
            "My hobbies"
        ];
        this.tools = this.ToolService.getTools();
        this.hobbies = this.HobbyService.getHobbies();
        // window.location.hash retrieves the anchor
        // then scroll down to correct level
        setTimeout(function () {
            document.querySelector(window.location.hash).scrollIntoView();
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("/dist/app/", "/app/"),
        templateUrl: 'about.html'
    }),
    __metadata("design:paramtypes", [tool_service_1.ToolService, hobby_service_1.HobbyService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map