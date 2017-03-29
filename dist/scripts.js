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
define("translate/lang-eng", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LANG_ENG_NAME = 'eng';
    var test2 = 'truck';
    var test3 = 'car';
    var testmerge = test2 + "\n" + test3;
    exports.LANG_ENG_TRANS = {
        'hello world': 'hello world',
        'test': "cat",
        'testmerge': "" + testmerge,
        /* ABOUT ME */
        'aboutFront': "I started coding during highschool. The purpose of such interest was\n                  to create specific scripts (permanent or triggered) while I was modding\n                  on my favourite video games.\n                  That is the reason why I have chosen to turn to computer sciences and, at\n                  some point, specializing into web oriented development.\n                  If my very first languages were HTML, CSS, JavaScript and PHP. I prefered\n                  to focus on CSS preprocessors as well as JavaScript frameworks and libraries\n                  than the latest (more used by backends).\n                  Now my main technologies.",
        'aboutUX': "I started coding during highschool. The purpose of such interest was\n                  to create specific scripts (permanent or triggered) while I was modding\n                  on my favourite video games.\n                  That is the reason why I have chosen to turn to computer sciences and, at\n                  some point, specializing into web oriented development.\n                  If my very first languages were HTML, CSS, JavaScript and PHP. I prefered\n                  to focus on CSS preprocessors as well as JavaScript frameworks and libraries\n                  than the latest (more used by backends).\n                  Now my main technologies.",
        'aboutArchi': "I enjoy seeing these new technologies growing so fast. Because since the\n                  \"death\" of the fullstack and of the webdesigner we can focus more on certain\n                  aspects.",
    };
});
define("translate/lang-fra", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LANG_FRA_NAME = 'fra';
    exports.LANG_FRA_TRANS = {
        'hello world': 'Salut tout le monde',
        /* ABOUT ME */
        'aboutFront': 'Olahlaha',
        'aboutUX': 'Olahlaha',
        'aboutArchi': 'Olahlaha',
    };
});
define("translate/lang-esp", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LANG_ESP_NAME = 'esp';
    exports.LANG_ESP_TRANS = {
        'hello world': 'hola mundo',
    };
});
define("translate/lang-ita", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LANG_ITA_NAME = 'ita';
    exports.LANG_ITA_TRANS = {
        'hello world': 'ciao mondo',
    };
});
define("translate/translation", ["require", "exports", "@angular/core", "translate/lang-eng", "translate/lang-fra", "translate/lang-esp", "translate/lang-ita"], function (require, exports, core_1, lang_eng_1, lang_fra_1, lang_esp_1, lang_ita_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // translation token
    exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
    // all translations
    var dictionary = (_a = {},
        _a[lang_eng_1.LANG_ENG_NAME] = lang_eng_1.LANG_ENG_TRANS,
        _a[lang_fra_1.LANG_FRA_NAME] = lang_fra_1.LANG_FRA_TRANS,
        _a[lang_esp_1.LANG_ESP_NAME] = lang_esp_1.LANG_ESP_TRANS,
        _a[lang_ita_1.LANG_ITA_NAME] = lang_ita_1.LANG_ITA_TRANS,
        _a);
    // providers
    exports.TRANSLATION_PROVIDERS = [
        { provide: exports.TRANSLATIONS, useValue: dictionary },
    ];
    var _a;
});
define("translate/translate.service", ["require", "exports", "@angular/core", "translate/translation"], function (require, exports, core_2, translation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TranslateService = (function () {
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
    exports.TranslateService = TranslateService;
});
define("app.component", ["require", "exports", "@angular/core", "translate/translate.service", "@angular/platform-browser"], function (require, exports, core_3, translate_service_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
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
    exports.AppComponent = AppComponent;
});
define("shared/models/project", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-projects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PROJECTS = [{
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
        }];
});
define("shared/project.service", ["require", "exports", "shared/mocks/mock-projects", "@angular/core"], function (require, exports, mock_projects_1, core_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectService = (function () {
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
    exports.ProjectService = ProjectService;
});
define("shared/models/skill", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-skills", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SKILLS = [{
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
        }];
});
define("shared/skill.service", ["require", "exports", "shared/mocks/mock-skills", "@angular/core"], function (require, exports, mock_skills_1, core_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SkillService = (function () {
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
    exports.SkillService = SkillService;
});
define("shared/models/role", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-roles", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ROLES = [{
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
        }];
});
define("shared/role.service", ["require", "exports", "shared/mocks/mock-roles", "@angular/core"], function (require, exports, mock_roles_1, core_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoleService = (function () {
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
    exports.RoleService = RoleService;
});
define("shared/models/diploma", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-diplomas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DIPLOMAS = [{
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
        }];
});
define("shared/diploma.service", ["require", "exports", "shared/mocks/mock-diplomas", "@angular/core"], function (require, exports, mock_diplomas_1, core_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DiplomaService = (function () {
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
    exports.DiplomaService = DiplomaService;
});
define("home/home.component", ["require", "exports", "@angular/core", "shared/project.service", "shared/skill.service", "shared/role.service", "shared/diploma.service"], function (require, exports, core_8, project_service_1, skill_service_1, role_service_1, diploma_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.HomeComponent = HomeComponent;
});
define("shared/models/tool", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-tools", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TOOLS = [{
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
        }];
});
define("shared/tool.service", ["require", "exports", "@angular/core", "shared/mocks/mock-tools"], function (require, exports, core_9, mock_tools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolService = (function () {
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
    exports.ToolService = ToolService;
});
define("shared/models/hobby", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("shared/mocks/mock-hobbies", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HOBBIES = [{
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
        }];
});
define("shared/hobby.service", ["require", "exports", "@angular/core", "shared/mocks/mock-hobbies"], function (require, exports, core_10, mock_hobbies_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HobbyService = (function () {
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
    exports.HobbyService = HobbyService;
});
define("about/about.component", ["require", "exports", "@angular/core", "shared/tool.service", "shared/hobby.service"], function (require, exports, core_11, tool_service_1, hobby_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        core_11.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [tool_service_1.ToolService, hobby_service_1.HobbyService])
    ], AboutComponent);
    exports.AboutComponent = AboutComponent;
});
define("education/education.component", ["require", "exports", "@angular/core", "shared/diploma.service"], function (require, exports, core_12, diploma_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EducationComponent = (function () {
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
    exports.EducationComponent = EducationComponent;
});
define("experience/experience.component", ["require", "exports", "@angular/core", "shared/role.service"], function (require, exports, core_13, role_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExperienceComponent = (function () {
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
    exports.ExperienceComponent = ExperienceComponent;
});
define("projects/projects.component", ["require", "exports", "@angular/core", "shared/project.service"], function (require, exports, core_14, project_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectsComponent = (function () {
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
    exports.ProjectsComponent = ProjectsComponent;
});
define("projects/project.component", ["require", "exports", "@angular/core"], function (require, exports, core_15) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProjectComponent = (function () {
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
    exports.ProjectComponent = ProjectComponent;
});
define("skills/skills.component", ["require", "exports", "@angular/core", "shared/skill.service"], function (require, exports, core_16, skill_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        core_16.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'skills.html'
        }),
        __metadata("design:paramtypes", [skill_service_2.SkillService])
    ], SkillsComponent);
    exports.SkillsComponent = SkillsComponent;
});
define("translate/translate.pipe", ["require", "exports", "@angular/core", "translate/translate.service"], function (require, exports, core_17, translate_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TranslatePipe = (function () {
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
    exports.TranslatePipe = TranslatePipe;
});
define("shared/filter.pipe", ["require", "exports", "@angular/core"], function (require, exports, core_18) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterPipe = (function () {
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
    exports.FilterPipe = FilterPipe;
});
define("app.module", ["require", "exports", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/router", "app.component", "home/home.component", "about/about.component", "education/education.component", "experience/experience.component", "projects/projects.component", "projects/project.component", "skills/skills.component", "translate/translation", "translate/translate.service", "translate/translate.pipe", "shared/filter.pipe", "shared/project.service", "shared/skill.service", "shared/role.service", "shared/diploma.service", "shared/tool.service", "shared/hobby.service"], function (require, exports, core_19, platform_browser_2, forms_1, router_1, app_component_1, home_component_1, about_component_1, education_component_1, experience_component_1, projects_component_1, project_component_1, skills_component_1, translation_2, translate_service_3, translate_pipe_1, filter_pipe_1, project_service_3, skill_service_3, role_service_3, diploma_service_3, tool_service_2, hobby_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var appRoutes = [
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
    var AppModule = (function () {
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
    exports.AppModule = AppModule;
});
define("main", ["require", "exports", "@angular/platform-browser-dynamic", "app.module"], function (require, exports, platform_browser_dynamic_1, app_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule);
});
define("translate/index", ["require", "exports", "translate/translate.service", "translate/translation", "translate/translate.pipe"], function (require, exports, translate_service_4, translation_3, translate_pipe_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(translate_service_4);
    __export(translation_3);
    __export(translate_pipe_2);
});
//# sourceMappingURL=scripts.js.map