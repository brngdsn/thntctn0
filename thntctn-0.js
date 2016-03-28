System.register("thntctn-0", ["angular2/angular2"], function($__export) {
  "use strict";
  var Component,
      View,
      Thntctn0;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentMetadata;
      View = $__m.ViewMetadata;
    }],
    execute: function() {
      Thntctn0 = function() {
        function Thntctn0() {
          console.info('Thntctn0 Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Thntctn0, {}, {});
      }();
      $__export("Thntctn0", Thntctn0);
      Object.defineProperty(Thntctn0, "annotations", {get: function() {
          return [new Component({selector: 'thntctn-0'}), new View({templateUrl: 'thntctn-0.html'})];
        }});
    }
  };
});
