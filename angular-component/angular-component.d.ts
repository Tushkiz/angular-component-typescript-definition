// Type definitions for angular component from angularjs 1.5.0.RC
// Project: https://github.com/toddmotto/angular-component
// Definitions by: Tushar Sonawane <https://github.com/tushkiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular {

  ///////////////////////////////////////////////////////////////////////////
  // Module
  // see http://docs.angularjs.org/api/angular.Module
  ///////////////////////////////////////////////////////////////////////////
  interface IModule {
    /**
     * Register a new component with the compiler.
     *
     * @param name Name of the component in camel-case (i.e. ngBind which will match as ng-bind)
     * @param options Component definition object.
     */
    component(name: string, options: IComponent): IModule;
  }

  ///////////////////////////////////////////////////////////////////////////
  // Component
  // see https://github.com/toddmotto/angular-component
  ///////////////////////////////////////////////////////////////////////////
  interface IComponent {
    bindings?: Object;
    controller?: any;
    controllerAs?: string;
    isolate?: any;
    template?: any;
    templateUrl?: any;
    transclude?: any;
    restrict?: string;
  }

}
