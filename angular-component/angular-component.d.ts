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
        component(name: string, options: IComponentOptions): IModule;
    }

    ///////////////////////////////////////////////////////////////////////////
    // Component
    // see https://github.com/toddmotto/angular-component
    ///////////////////////////////////////////////////////////////////////////
    interface IComponentOptions {
        bindings?: Object;
        controller?: string | Function;
        controllerAs?: string;
        isolate?: boolean;
        template?: string | IComponentTemplateFn;
        templateUrl?: string | IComponentTemplateFn;
        transclude?: boolean;
        restrict?: string;
        $canActivate?: Function;
        $routeConfig?: Object;
    }

    interface IComponentTemplateFn {
        ( $element?: IAugmentedJQuery, $attrs?: IAttributes ): string;
    }

}
