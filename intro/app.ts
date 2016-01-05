import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'my-app',
    template: '<h1>{{ hello }}</h1>'
})
class AppComponent { 
    public hello:string = 'Hello, world!';
}

bootstrap(AppComponent);
