System.register([], function (exports_1, context_1) {
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
//# sourceMappingURL=lang-eng.js.map