var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("app/translate/lang-eng", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LANG_ENG_NAME, test2, test3, testmerge, LANG_ENG_TRANS;
    return {
        setters: [],
        execute: function () {
            exports_1("LANG_ENG_NAME", LANG_ENG_NAME = 'eng');
            test2 = 'truck';
            test3 = 'car';
            testmerge = test2 + "\n" + test3;
            exports_1("LANG_ENG_TRANS", LANG_ENG_TRANS = {
                'hello world': 'hello world',
                'test': "cat",
                'testmerge': "" + testmerge,
                /* ABOUT ME */
                'aboutFront': "I started coding during highschool. The purpose of such interest was\n                  to create specific scripts (permanent or triggered) while I was modding\n                  on my favourite video games.\n                  That is the reason why I have chosen to turn to computer sciences and, at\n                  some point, specializing into web oriented development.\n                  If my very first languages were HTML, CSS, JavaScript and PHP. I prefered\n                  to focus on CSS preprocessors as well as JavaScript frameworks and libraries\n                  than the latest (more used by backends).\n                  Now my main technologies.",
                'aboutUX': "I started coding during highschool. The purpose of such interest was\n                  to create specific scripts (permanent or triggered) while I was modding\n                  on my favourite video games.\n                  That is the reason why I have chosen to turn to computer sciences and, at\n                  some point, specializing into web oriented development.\n                  If my very first languages were HTML, CSS, JavaScript and PHP. I prefered\n                  to focus on CSS preprocessors as well as JavaScript frameworks and libraries\n                  than the latest (more used by backends).\n                  Now my main technologies.",
                'aboutArchi': "I enjoy seeing these new technologies growing so fast. Because since the\n                  \"death\" of the fullstack and of the webdesigner we can focus more on certain\n                  aspects.",
            });
        }
    };
});
System.register("app/translate/lang-fra", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var LANG_FRA_NAME, LANG_FRA_TRANS;
    return {
        setters: [],
        execute: function () {
            exports_2("LANG_FRA_NAME", LANG_FRA_NAME = 'fra');
            exports_2("LANG_FRA_TRANS", LANG_FRA_TRANS = {
                'hello world': 'Salut tout le monde',
                /* ABOUT ME */
                'aboutFront': 'Olahlaha',
                'aboutUX': 'Olahlaha',
                'aboutArchi': 'Olahlaha',
            });
        }
    };
});
System.register("app/translate/lang-esp", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var LANG_ESP_NAME, LANG_ESP_TRANS;
    return {
        setters: [],
        execute: function () {
            exports_3("LANG_ESP_NAME", LANG_ESP_NAME = 'esp');
            exports_3("LANG_ESP_TRANS", LANG_ESP_TRANS = {
                'hello world': 'hola mundo',
            });
        }
    };
});
System.register("app/translate/lang-ita", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var LANG_ITA_NAME, LANG_ITA_TRANS;
    return {
        setters: [],
        execute: function () {
            exports_4("LANG_ITA_NAME", LANG_ITA_NAME = 'ita');
            exports_4("LANG_ITA_TRANS", LANG_ITA_TRANS = {
                'hello world': 'ciao mondo',
            });
        }
    };
});
System.register("app/translate/translation", ["@angular/core", "app/translate/lang-eng", "app/translate/lang-fra", "app/translate/lang-esp", "app/translate/lang-ita"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_1, lang_eng_1, lang_fra_1, lang_esp_1, lang_ita_1, TRANSLATIONS, dictionary, TRANSLATION_PROVIDERS, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_eng_1_1) {
                lang_eng_1 = lang_eng_1_1;
            },
            function (lang_fra_1_1) {
                lang_fra_1 = lang_fra_1_1;
            },
            function (lang_esp_1_1) {
                lang_esp_1 = lang_esp_1_1;
            },
            function (lang_ita_1_1) {
                lang_ita_1 = lang_ita_1_1;
            }
        ],
        execute: function () {
            // translation token
            exports_5("TRANSLATIONS", TRANSLATIONS = new core_1.OpaqueToken('translations'));
            // all translations
            dictionary = (_a = {},
                _a[lang_eng_1.LANG_ENG_NAME] = lang_eng_1.LANG_ENG_TRANS,
                _a[lang_fra_1.LANG_FRA_NAME] = lang_fra_1.LANG_FRA_TRANS,
                _a[lang_esp_1.LANG_ESP_NAME] = lang_esp_1.LANG_ESP_TRANS,
                _a[lang_ita_1.LANG_ITA_NAME] = lang_ita_1.LANG_ITA_TRANS,
                _a);
            // providers
            exports_5("TRANSLATION_PROVIDERS", TRANSLATION_PROVIDERS = [
                { provide: TRANSLATIONS, useValue: dictionary },
            ]);
        }
    };
});
System.register("app/translate/translate.service", ["@angular/core", "app/translate/translation"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_2, translation_1, TranslateService;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (translation_1_1) {
                translation_1 = translation_1_1;
            }
        ],
        execute: function () {
            TranslateService = (function () {
                // inject our translations
                function TranslateService(_translations) {
                    this._translations = _translations;
                }
                Object.defineProperty(TranslateService.prototype, "currentLang", {
                    get: function () {
                        return this._currentLang;
                    },
                    enumerable: true,
                    configurable: true
                });
                TranslateService.prototype.use = function (lang) {
                    // set current language
                    this._currentLang = lang;
                };
                TranslateService.prototype.translate = function (key) {
                    // private perform translation
                    var translation = key;
                    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
                        return this._translations[this.currentLang][key];
                    }
                    return translation;
                };
                TranslateService.prototype.instant = function (key) {
                    // call translation
                    return this.translate(key);
                };
                return TranslateService;
            }());
            TranslateService = __decorate([
                core_2.Injectable(),
                __param(0, core_2.Inject(translation_1.TRANSLATIONS)),
                __metadata("design:paramtypes", [Object])
            ], TranslateService);
            exports_6("TranslateService", TranslateService);
        }
    };
});
System.register("app/app.component", ["@angular/core", "app/translate/translate.service", "@angular/platform-browser"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_3, translate_service_1, platform_browser_1, AppComponent;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_translate, titleService) {
                    this._translate = _translate;
                    this.titleService = titleService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    // standing data
                    this.supportedLanguages = [
                        { display: 'English', value: 'eng' },
                        { display: 'Français', value: 'fra' },
                        { display: 'Español', value: 'esp' },
                        { display: 'Italiano', value: 'ita' },
                    ];
                    // set current langage
                    this.selectLang('eng');
                };
                AppComponent.prototype.isCurrentLang = function (lang) {
                    // check if the selected lang is current lang
                    return lang === this._translate.currentLang;
                };
                AppComponent.prototype.selectLang = function (lang) {
                    // set current lang;
                    this._translate.use(lang);
                    this.refreshText();
                };
                AppComponent.prototype.refreshText = function () {
                    // refresh translation when language change
                    this.translatedText = this._translate.instant('hello world');
                    this.aboutFront = this._translate.instant('aboutFront');
                };
                AppComponent.prototype.setTitle = function (newTitle) {
                    this.titleService.setTitle(newTitle);
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_3.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    selector: 'my-app',
                    templateUrl: 'app.html'
                }),
                __metadata("design:paramtypes", [translate_service_1.TranslateService, platform_browser_1.Title])
            ], AppComponent);
            exports_7("AppComponent", AppComponent);
        }
    };
});
System.register("app/shared/models/project", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-projects", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var PROJECTS;
    return {
        setters: [],
        execute: function () {
            exports_9("PROJECTS", PROJECTS = [{
                    "id": "#project-1",
                    "featured": true,
                    "title": "About this Portfolio",
                    "category": "Portfolio",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date": "2016-12-01",
                    "tag": "front, UX, Symfony, Foundation, Angular.js",
                    "page": "link",
                    "view": "string",
                    "github": "string"
                },
                {
                    "id": "#project-2",
                    "featured": true,
                    "title": "iMakr",
                    "category": "Front-End & UX",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date": "2016-03-01",
                    "tag": "front, UX, Symfony, Foundation, Angular.js",
                    "page": "link",
                    "view": "string",
                    "github": "string"
                },
                {
                    "id": "#project-3",
                    "featured": true,
                    "title": "Digitela",
                    "category": "Front-End & UX",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date": "2015-08-01",
                    "tag": "front, UX, Symfony, Foundation, Angular.js",
                    "page": "link",
                    "view": "string",
                    "github": "string"
                },
                {
                    "id": "#project-4",
                    "featured": true,
                    "title": "My Mini Factory",
                    "category": "Front-End & UX",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date": "2016-08-01",
                    "tag": "Front, UX",
                    "page": "link",
                    "view": "string",
                    "github": "string"
                },
                {
                    "id": "#project-5",
                    "featured": false,
                    "title": "C2I",
                    "category": "Front-End",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date": "2016-01-01",
                    "tag": "UX",
                    "page": "link",
                    "view": "string",
                    "github": "string"
                }]);
        }
    };
});
System.register("app/shared/project.service", ["app/shared/mocks/mock-projects", "@angular/core"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var mock_projects_1, core_4, ProjectService;
    return {
        setters: [
            function (mock_projects_1_1) {
                mock_projects_1 = mock_projects_1_1;
            },
            function (core_4_1) {
                core_4 = core_4_1;
            }
        ],
        execute: function () {
            ProjectService = (function () {
                function ProjectService() {
                }
                ProjectService.prototype.getProjects = function () {
                    return mock_projects_1.PROJECTS;
                };
                return ProjectService;
            }());
            ProjectService = __decorate([
                core_4.Injectable()
            ], ProjectService);
            exports_10("ProjectService", ProjectService);
        }
    };
});
System.register("app/shared/models/skill", [], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-skills", [], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var SKILLS;
    return {
        setters: [],
        execute: function () {
            exports_12("SKILLS", SKILLS = [{
                    "id": "#skill-1",
                    "featured": true,
                    "title": "Angular 2",
                    "category": "Front-End",
                    "desc": "Front end framework",
                    "image": "string",
                    "alt": "string",
                    "tag": "Angular.js"
                },
                {
                    "id": "#skill-2",
                    "featured": true,
                    "title": "iMakr",
                    "category": "UX",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js"
                },
                {
                    "id": "#skill-3",
                    "featured": true,
                    "title": "Digitela",
                    "category": "UX",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js"
                },
                {
                    "id": "#skill-4",
                    "featured": true,
                    "title": "My Mini Factory",
                    "category": "Front-End",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js"
                },
                {
                    "id": "#skill-5",
                    "featured": false,
                    "title": "C2I",
                    "category": "Front-End",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js"
                }]);
        }
    };
});
System.register("app/shared/skill.service", ["app/shared/mocks/mock-skills", "@angular/core"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var mock_skills_1, core_5, SkillService;
    return {
        setters: [
            function (mock_skills_1_1) {
                mock_skills_1 = mock_skills_1_1;
            },
            function (core_5_1) {
                core_5 = core_5_1;
            }
        ],
        execute: function () {
            SkillService = (function () {
                function SkillService() {
                }
                SkillService.prototype.getSkills = function () {
                    return mock_skills_1.SKILLS;
                };
                return SkillService;
            }());
            SkillService = __decorate([
                core_5.Injectable()
            ], SkillService);
            exports_13("SkillService", SkillService);
        }
    };
});
System.register("app/shared/models/role", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-roles", [], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var ROLES;
    return {
        setters: [],
        execute: function () {
            exports_15("ROLES", ROLES = [{
                    "id": "#role-1",
                    "featured": true,
                    "title": "Field Support Technician",
                    "company": "Medasys",
                    "category": "Permanent",
                    "desc": "string",
                    "image": "string",
                    "alt": "string",
                    "date_start": "2016-06-01",
                    "date_end": "2016-06-01",
                    "tag": "string",
                    "page": "string",
                    "view": "string"
                },
                {
                    "id": "#role-2",
                    "featured": true,
                    "title": "Front-End Developer",
                    "company": "DigiTela",
                    "category": "Internship",
                    "desc": "string",
                    "image": "string",
                    "alt": "string",
                    "date_start": "2016-06-01",
                    "date_end": "2016-06-01",
                    "tag": "string",
                    "page": "string",
                    "view": "string"
                },
                {
                    "id": "#role-3",
                    "featured": true,
                    "title": "Field Support Technician",
                    "company": "Medasys",
                    "category": "Contract",
                    "desc": "string",
                    "image": "string",
                    "alt": "string",
                    "date_start": "2016-06-01",
                    "date_end": "2016-06-01",
                    "tag": "string",
                    "page": "string",
                    "view": "string"
                }]);
        }
    };
});
System.register("app/shared/role.service", ["app/shared/mocks/mock-roles", "@angular/core"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var mock_roles_1, core_6, RoleService;
    return {
        setters: [
            function (mock_roles_1_1) {
                mock_roles_1 = mock_roles_1_1;
            },
            function (core_6_1) {
                core_6 = core_6_1;
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
                core_6.Injectable()
            ], RoleService);
            exports_16("RoleService", RoleService);
        }
    };
});
System.register("app/shared/models/diploma", [], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-diplomas", [], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var DIPLOMAS;
    return {
        setters: [],
        execute: function () {
            exports_18("DIPLOMAS", DIPLOMAS = [{
                    "id": "#diploma-1",
                    "featured": true,
                    "degree": "Baccalaureate",
                    "field": "Science, speciality biology, option Physics/chemistry",
                    "school": "Louis Feuillade Highschool",
                    "place": "Lunel - France",
                    "grade": "10/20",
                    "desc": "blabla",
                    "image": "string",
                    "alt": "string",
                    "date_start": "2016-12-01",
                    "date_end": "2016-12-01",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                    "proof": "string"
                },
                {
                    "id": "#diploma-2",
                    "featured": true,
                    "degree": "University Degree (DU)",
                    "field": "Webmaster",
                    "school": "Institute of Technology",
                    "place": "Montpellier - France",
                    "grade": "10/20",
                    "desc": "A social sharing platform for 3D designers",
                    "image": "string",
                    "alt": "string",
                    "date_start": "2016-12-01",
                    "date_end": "2016-12-01",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                    "proof": "string"
                }]);
        }
    };
});
System.register("app/shared/diploma.service", ["app/shared/mocks/mock-diplomas", "@angular/core"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var mock_diplomas_1, core_7, DiplomaService;
    return {
        setters: [
            function (mock_diplomas_1_1) {
                mock_diplomas_1 = mock_diplomas_1_1;
            },
            function (core_7_1) {
                core_7 = core_7_1;
            }
        ],
        execute: function () {
            DiplomaService = (function () {
                function DiplomaService() {
                }
                DiplomaService.prototype.getDiplomas = function () {
                    return mock_diplomas_1.DIPLOMAS;
                };
                return DiplomaService;
            }());
            DiplomaService = __decorate([
                core_7.Injectable()
            ], DiplomaService);
            exports_19("DiplomaService", DiplomaService);
        }
    };
});
System.register("app/home/home.component", ["@angular/core", "app/shared/project.service", "app/shared/skill.service", "app/shared/role.service", "app/shared/diploma.service"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_8, project_service_1, skill_service_1, role_service_1, diploma_service_1, HomeComponent;
    return {
        setters: [
            function (core_8_1) {
                core_8 = core_8_1;
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
            }
        ],
        execute: function () {
            HomeComponent = (function () {
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
                        "image": "app/shared/images/photo.png",
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
                core_8.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'home.html'
                }),
                __metadata("design:paramtypes", [project_service_1.ProjectService,
                    skill_service_1.SkillService,
                    role_service_1.RoleService,
                    diploma_service_1.DiplomaService])
            ], HomeComponent);
            exports_20("HomeComponent", HomeComponent);
        }
    };
});
System.register("app/shared/models/tool", [], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-tools", [], function (exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var TOOLS;
    return {
        setters: [],
        execute: function () {
            exports_22("TOOLS", TOOLS = [{
                    "id": "#tool-1",
                    "title": "Atom",
                    "desc": "blabla",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                },
                {
                    "id": "#tool-2",
                    "title": "PHP Storm",
                    "desc": "blabla",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                }]);
        }
    };
});
System.register("app/shared/tool.service", ["@angular/core", "app/shared/mocks/mock-tools"], function (exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_9, mock_tools_1, ToolService;
    return {
        setters: [
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (mock_tools_1_1) {
                mock_tools_1 = mock_tools_1_1;
            }
        ],
        execute: function () {
            ToolService = (function () {
                function ToolService() {
                }
                ToolService.prototype.getTools = function () {
                    return mock_tools_1.TOOLS;
                };
                return ToolService;
            }());
            ToolService = __decorate([
                core_9.Injectable()
            ], ToolService);
            exports_23("ToolService", ToolService);
        }
    };
});
System.register("app/shared/models/hobby", [], function (exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app/shared/mocks/mock-hobbies", [], function (exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var HOBBIES;
    return {
        setters: [],
        execute: function () {
            exports_25("HOBBIES", HOBBIES = [{
                    "id": "#hobby-1",
                    "title": "hello world",
                    "desc": "blabla",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                },
                {
                    "id": "#hobby-2",
                    "title": "hockey",
                    "desc": "blabla",
                    "image": "string",
                    "alt": "string",
                    "tag": "Front, UX, Symfony, Foundation, Angular.js",
                    "view": "string",
                }]);
        }
    };
});
System.register("app/shared/hobby.service", ["@angular/core", "app/shared/mocks/mock-hobbies"], function (exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var core_10, mock_hobbies_1, HobbyService;
    return {
        setters: [
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (mock_hobbies_1_1) {
                mock_hobbies_1 = mock_hobbies_1_1;
            }
        ],
        execute: function () {
            HobbyService = (function () {
                function HobbyService() {
                }
                HobbyService.prototype.getHobbies = function () {
                    return mock_hobbies_1.HOBBIES;
                };
                return HobbyService;
            }());
            HobbyService = __decorate([
                core_10.Injectable()
            ], HobbyService);
            exports_26("HobbyService", HobbyService);
        }
    };
});
System.register("app/about/about.component", ["@angular/core", "app/shared/tool.service", "app/shared/hobby.service"], function (exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_11, tool_service_1, hobby_service_1, AboutComponent;
    return {
        setters: [
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (tool_service_1_1) {
                tool_service_1 = tool_service_1_1;
            },
            function (hobby_service_1_1) {
                hobby_service_1 = hobby_service_1_1;
            }
        ],
        execute: function () {
            AboutComponent = (function () {
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
                core_11.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'about.html'
                }),
                __metadata("design:paramtypes", [tool_service_1.ToolService, hobby_service_1.HobbyService])
            ], AboutComponent);
            exports_27("AboutComponent", AboutComponent);
        }
    };
});
System.register("app/education/education.component", ["@angular/core", "app/shared/diploma.service"], function (exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var core_12, diploma_service_2, EducationComponent;
    return {
        setters: [
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (diploma_service_2_1) {
                diploma_service_2 = diploma_service_2_1;
            }
        ],
        execute: function () {
            EducationComponent = (function () {
                function EducationComponent(diplomaService) {
                    this.diplomaService = diplomaService;
                }
                EducationComponent.prototype.ngOnInit = function () {
                    this.title = "My Diplomas";
                    this.diplomas = this.diplomaService.getDiplomas();
                };
                return EducationComponent;
            }());
            EducationComponent = __decorate([
                core_12.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'education.html'
                }),
                __metadata("design:paramtypes", [diploma_service_2.DiplomaService])
            ], EducationComponent);
            exports_28("EducationComponent", EducationComponent);
        }
    };
});
System.register("app/experience/experience.component", ["@angular/core", "app/shared/role.service"], function (exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var core_13, role_service_2, ExperienceComponent;
    return {
        setters: [
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (role_service_2_1) {
                role_service_2 = role_service_2_1;
            }
        ],
        execute: function () {
            ExperienceComponent = (function () {
                function ExperienceComponent(roleService) {
                    this.roleService = roleService;
                }
                ExperienceComponent.prototype.ngOnInit = function () {
                    this.title = "My Roles";
                    this.roles = this.roleService.getRoles();
                };
                return ExperienceComponent;
            }());
            ExperienceComponent = __decorate([
                core_13.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'experience.html'
                }),
                __metadata("design:paramtypes", [role_service_2.RoleService])
            ], ExperienceComponent);
            exports_29("ExperienceComponent", ExperienceComponent);
        }
    };
});
System.register("app/projects/projects.component", ["@angular/core", "app/shared/project.service"], function (exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var core_14, project_service_2, ProjectsComponent;
    return {
        setters: [
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (project_service_2_1) {
                project_service_2 = project_service_2_1;
            }
        ],
        execute: function () {
            ProjectsComponent = (function () {
                // Injection of ProjectService
                function ProjectsComponent(projectService) {
                    this.projectService = projectService;
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    this.title = "My Projects";
                    this.projects = this.projectService.getProjects();
                };
                return ProjectsComponent;
            }());
            ProjectsComponent = __decorate([
                core_14.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'projects.html'
                }),
                __metadata("design:paramtypes", [project_service_2.ProjectService])
            ], ProjectsComponent);
            exports_30("ProjectsComponent", ProjectsComponent);
        }
    };
});
System.register("app/projects/project.component", ["@angular/core"], function (exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var core_15, ProjectComponent;
    return {
        setters: [
            function (core_15_1) {
                core_15 = core_15_1;
            }
        ],
        execute: function () {
            ProjectComponent = (function () {
                function ProjectComponent() {
                }
                return ProjectComponent;
            }());
            __decorate([
                core_15.Input(),
                __metadata("design:type", Object)
            ], ProjectComponent.prototype, "project", void 0);
            ProjectComponent = __decorate([
                core_15.Component({
                    selector: 'project-view',
                    template: "\n    <h3>{{ project.id }} says:</h3>\n    <p>I, {{ project.title }}</p>\n  "
                })
            ], ProjectComponent);
            exports_31("ProjectComponent", ProjectComponent);
        }
    };
});
System.register("app/skills/skills.component", ["@angular/core", "app/shared/skill.service"], function (exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var core_16, skill_service_2, SkillsComponent;
    return {
        setters: [
            function (core_16_1) {
                core_16 = core_16_1;
            },
            function (skill_service_2_1) {
                skill_service_2 = skill_service_2_1;
            }
        ],
        execute: function () {
            SkillsComponent = (function () {
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
                core_16.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    templateUrl: 'skills.html'
                }),
                __metadata("design:paramtypes", [skill_service_2.SkillService])
            ], SkillsComponent);
            exports_32("SkillsComponent", SkillsComponent);
        }
    };
});
System.register("app/translate/translate.pipe", ["@angular/core", "app/translate/translate.service"], function (exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var core_17, translate_service_2, TranslatePipe;
    return {
        setters: [
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (translate_service_2_1) {
                translate_service_2 = translate_service_2_1;
            }
        ],
        execute: function () {
            TranslatePipe = (function () {
                function TranslatePipe(_translate) {
                    this._translate = _translate;
                }
                TranslatePipe.prototype.transform = function (value, args) {
                    if (!value)
                        return;
                    return this._translate.instant(value);
                };
                return TranslatePipe;
            }());
            TranslatePipe = __decorate([
                core_17.Pipe({
                    name: 'translate',
                    pure: false // impure pipe allows updating value when we change language
                }),
                __metadata("design:paramtypes", [translate_service_2.TranslateService])
            ], TranslatePipe);
            exports_33("TranslatePipe", TranslatePipe);
        }
    };
});
System.register("app/shared/filter.pipe", ["@angular/core"], function (exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var core_18, FilterPipe;
    return {
        setters: [
            function (core_18_1) {
                core_18 = core_18_1;
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
                core_18.Pipe({
                    name: 'filter',
                    pure: false
                })
            ], FilterPipe);
            exports_34("FilterPipe", FilterPipe);
        }
    };
});
System.register("app/app.module", ["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/router", "app/app.component", "app/home/home.component", "app/about/about.component", "app/education/education.component", "app/experience/experience.component", "app/projects/projects.component", "app/projects/project.component", "app/skills/skills.component", "app/translate/translation", "app/translate/translate.service", "app/translate/translate.pipe", "app/shared/filter.pipe", "app/shared/project.service", "app/shared/skill.service", "app/shared/role.service", "app/shared/diploma.service", "app/shared/tool.service", "app/shared/hobby.service"], function (exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var core_19, platform_browser_2, forms_1, router_1, app_component_1, home_component_1, about_component_1, education_component_1, experience_component_1, projects_component_1, project_component_1, skills_component_1, translation_2, translate_service_3, translate_pipe_1, filter_pipe_1, project_service_3, skill_service_3, role_service_3, diploma_service_3, tool_service_2, hobby_service_2, appRoutes, AppModule;
    return {
        setters: [
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (platform_browser_2_1) {
                platform_browser_2 = platform_browser_2_1;
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
            function (translation_2_1) {
                translation_2 = translation_2_1;
            },
            function (translate_service_3_1) {
                translate_service_3 = translate_service_3_1;
            },
            function (translate_pipe_1_1) {
                translate_pipe_1 = translate_pipe_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            },
            function (project_service_3_1) {
                project_service_3 = project_service_3_1;
            },
            function (skill_service_3_1) {
                skill_service_3 = skill_service_3_1;
            },
            function (role_service_3_1) {
                role_service_3 = role_service_3_1;
            },
            function (diploma_service_3_1) {
                diploma_service_3 = diploma_service_3_1;
            },
            function (tool_service_2_1) {
                tool_service_2 = tool_service_2_1;
            },
            function (hobby_service_2_1) {
                hobby_service_2 = hobby_service_2_1;
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
                core_19.NgModule({
                    imports: [
                        platform_browser_2.BrowserModule,
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
                    providers: [translation_2.TRANSLATION_PROVIDERS,
                        translate_service_3.TranslateService,
                        project_service_3.ProjectService,
                        skill_service_3.SkillService,
                        role_service_3.RoleService,
                        diploma_service_3.DiplomaService,
                        tool_service_2.ToolService,
                        hobby_service_2.HobbyService
                    ]
                })
            ], AppModule);
            exports_35("AppModule", AppModule);
        }
    };
});
System.register("app/main", ["@angular/platform-browser-dynamic", "app/app.module"], function (exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var platform_browser_dynamic_1, app_module_1, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    };
});
System.register("app/translate/index", ["app/translate/translate.service", "app/translate/translation", "app/translate/translate.pipe"], function (exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_37(exports);
    }
    return {
        setters: [
            function (translate_service_4_1) {
                exportStar_1(translate_service_4_1);
            },
            function (translation_3_1) {
                exportStar_1(translation_3_1);
            },
            function (translate_pipe_2_1) {
                exportStar_1(translate_pipe_2_1);
            }
        ],
        execute: function () {
        }
    };
});
