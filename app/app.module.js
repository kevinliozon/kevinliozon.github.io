System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/router", "./app.component", "./home/home.component", "./about/about.component", "./education/education.component", "./experience/experience.component", "./projects/projects.component", "./projects/project.component", "./skills/skills.component", "./translate/translation", "./translate/translate.service", "./translate/translate.pipe", "./shared/filter.pipe", "./shared/project.service", "./shared/skill.service", "./shared/role.service", "./shared/diploma.service", "./shared/tool.service", "./shared/hobby.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, router_1, app_component_1, home_component_1, about_component_1, education_component_1, experience_component_1, projects_component_1, project_component_1, skills_component_1, translation_1, translate_service_1, translate_pipe_1, filter_pipe_1, project_service_1, skill_service_1, role_service_1, diploma_service_1, tool_service_1, hobby_service_1, appRoutes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (experience_component_1_1) {
                experience_component_1 = experience_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (project_component_1_1) {
                project_component_1 = project_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (translation_1_1) {
                translation_1 = translation_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            },
            function (translate_pipe_1_1) {
                translate_pipe_1 = translate_pipe_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (skill_service_1_1) {
                skill_service_1 = skill_service_1_1;
            },
            function (role_service_1_1) {
                role_service_1 = role_service_1_1;
            },
            function (diploma_service_1_1) {
                diploma_service_1 = diploma_service_1_1;
            },
            function (tool_service_1_1) {
                tool_service_1 = tool_service_1_1;
            },
            function (hobby_service_1_1) {
                hobby_service_1 = hobby_service_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                // default route to home on load
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                // links to the components
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'education', component: education_component_1.EducationComponent },
                { path: 'experience', component: experience_component_1.ExperienceComponent },
                { path: 'projects', component: projects_component_1.ProjectsComponent },
                { path: 'project', component: project_component_1.ProjectComponent },
                { path: 'skills', component: skills_component_1.SkillsComponent }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forRoot(appRoutes)
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        about_component_1.AboutComponent,
                        education_component_1.EducationComponent,
                        experience_component_1.ExperienceComponent,
                        projects_component_1.ProjectsComponent,
                        project_component_1.ProjectComponent,
                        skills_component_1.SkillsComponent,
                        translate_pipe_1.TranslatePipe,
                        filter_pipe_1.FilterPipe
                    ],
                    bootstrap: [app_component_1.AppComponent],
                    providers: [translation_1.TRANSLATION_PROVIDERS,
                        translate_service_1.TranslateService,
                        project_service_1.ProjectService,
                        skill_service_1.SkillService,
                        role_service_1.RoleService,
                        diploma_service_1.DiplomaService,
                        tool_service_1.ToolService,
                        hobby_service_1.HobbyService
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map