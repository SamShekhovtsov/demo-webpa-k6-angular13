# README

## This demo project demostrates Angular 13 compatibility problems with Webpack 6

```
git clone https://github.com/SamShekhovtsov/demo-webpa-k6-angular13.git
cd demo-webpa-k6-angular13
bundle install
rails s
```

browse http://localhost:3000

The Angular application lives in the app/packs/hello_angular

There is a simple service defined in the app/packs/hello_angular/app/sheroes/hero.service.ts
This service has correct Angular decorator (attribute)

```
@Injectable({
  providedIn: 'root',
})
export class HeroService {
    ...
}
```

however, when opening the application in browser, error appears in the console: 

```
ERROR Error: Uncaught (in promise): Error: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
Error: This constructor is not compatible with Angular Dependency Injection because its dependency at index 0 of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index 0 is correct and 2) the correct Angular decorators are defined for this class and its ancestors.
```