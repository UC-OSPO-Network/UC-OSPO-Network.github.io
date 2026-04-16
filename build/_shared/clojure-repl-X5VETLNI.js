import {
  __commonJS
} from "/uc-ospo-network.github.io/build/_shared/chunk-CGOEG7L2.js";

// ../../node_modules/highlight.js/lib/languages/clojure-repl.js
var require_clojure_repl = __commonJS({
  "../../node_modules/highlight.js/lib/languages/clojure-repl.js"(exports, module) {
    function clojureRepl(hljs) {
      return {
        name: "Clojure REPL",
        contains: [
          {
            className: "meta",
            begin: /^([\w.-]+|\s*#_)?=>/,
            starts: {
              end: /$/,
              subLanguage: "clojure"
            }
          }
        ]
      };
    }
    module.exports = clojureRepl;
  }
});
export default require_clojure_repl();
//# sourceMappingURL=/uc-ospo-network.github.io/build/_shared/clojure-repl-X5VETLNI.js.map
