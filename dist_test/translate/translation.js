System.register(["@angular/core", "./lang-eng", "./lang-fra", "./lang-esp", "./lang-ita"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("TRANSLATIONS", TRANSLATIONS = new core_1.OpaqueToken('translations'));
            // all translations
            dictionary = (_a = {},
                _a[lang_eng_1.LANG_ENG_NAME] = lang_eng_1.LANG_ENG_TRANS,
                _a[lang_fra_1.LANG_FRA_NAME] = lang_fra_1.LANG_FRA_TRANS,
                _a[lang_esp_1.LANG_ESP_NAME] = lang_esp_1.LANG_ESP_TRANS,
                _a[lang_ita_1.LANG_ITA_NAME] = lang_ita_1.LANG_ITA_TRANS,
                _a);
            // providers
            exports_1("TRANSLATION_PROVIDERS", TRANSLATION_PROVIDERS = [
                { provide: TRANSLATIONS, useValue: dictionary },
            ]);
        }
    };
});
