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
var project_service_1 = require("../shared/project.service");
var skill_service_1 = require("../shared/skill.service");
var role_service_1 = require("../shared/role.service");
var diploma_service_1 = require("../shared/diploma.service");
var HomeComponent = (function () {
    // Injections of services
    function HomeComponent(projectService, skillService, roleService, diplomaService) {
        this.projectService = projectService;
        this.skillService = skillService;
        this.roleService = roleService;
        this.diplomaService = diplomaService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.introContent = {
            "title": "A Front-End Architect at your service",
            "image": "dist/assets/img/png/photo.png",
            "alt": "My photo would have appeared if you activated Javascript on this browser :-("
        };
        this.homeTitles = [
            "Overview",
            "Some of my works",
            "My Top 10 technologies",
            "Milestones"
        ];
        this.projects = this.projectService.getProjects();
        this.skills = this.skillService.getSkills();
        this.roles = this.roleService.getRoles();
        this.diplomas = this.diplomaService.getDiplomas();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id.replace("/dist/app/", "/app/"),
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        skill_service_1.SkillService,
        role_service_1.RoleService,
        diploma_service_1.DiplomaService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map