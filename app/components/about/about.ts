import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {NameList} from '../../services/NameList';

@Component({
  selector: 'about',
  bindings: [NameList]
})
@View({
  templateUrl: './components/about/about.html',
  directives: [CORE_DIRECTIVES]
})
export class About {
  name = 'Minko';
  constructor(public list: NameList) {}
  addName(newname):boolean {
    this.list.add(newname.value);
    newname.value = '';
    return false;
  }
}
