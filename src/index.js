import {ComponentMetadata as Component, ViewMetadata as View, bootstrap} from 'angular2/angular2';
import {Thntctn0} from 'thntctn-0';

@Component({
  selector: 'main'
})

@View({
  directives: [Thntctn0],
  template: `
    <thntctn-0></thntctn-0>
  `
})

class Main {

}

bootstrap(Main);
