System.register("index", ["angular2/angular2", "thntctn-0"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Thntctn0,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Thntctn0 = $__m.Thntctn0;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Thntctn0],
            template: "\n    <thntctn-0></thntctn-0>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
