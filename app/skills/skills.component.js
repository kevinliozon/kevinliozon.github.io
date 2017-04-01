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
var skill_service_1 = require("../shared/skill.service");
var SkillsComponent = (function () {
    // Injection of SkillService
    function SkillsComponent(skillService) {
        this.skillService = skillService;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.title = "My Skills";
        this.skills = this.skillService.getSkills();
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("/dist/app/", "/app/"),
        templateUrl: 'skills.html'
    }),
    __metadata("design:paramtypes", [skill_service_1.SkillService])
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map