System.register(["./translate.service", "./translation", "./translate.pipe"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (translate_service_1_1) {
                exportStar_1(translate_service_1_1);
            },
            function (translation_1_1) {
                exportStar_1(translation_1_1);
            },
            function (translate_pipe_1_1) {
                exportStar_1(translate_pipe_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map