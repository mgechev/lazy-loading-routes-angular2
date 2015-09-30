import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Home} from './components/home/home';

import {componentProxyFactory} from './component_proxy';

@Component({
  selector: 'app',
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  {
    path: '/about',
    component: componentProxyFactory({
      path: './components/about/about',
      provide: m => m.About
    }),
    as: 'about' }
])
@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);
