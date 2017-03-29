System.register(["@angular/core", "./translate/translate.service", "@angular/platform-browser"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, translate_service_1, platform_browser_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Component({
                    moduleId: module.id.replace("/dist/", "/app/"),
                    selector: 'my-app',
                    templateUrl: 'app.html'
                }),
                __metadata("design:paramtypes", [translate_service_1.TranslateService, platform_browser_1.Title])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
