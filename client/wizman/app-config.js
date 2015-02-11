/**
 * Created with IntelliJ IDEA.
 * User: wiznidev
 * Date: 12/02/15
 * Time: 1:05 AM
 * To change this template use File | Settings | File Templates.
 */
// application-configuration.js

"use strict";
define(['angularAMD', 'angular-route', 'ui-bootstrap', 'angular-sanitize', 'blockUI', ],
    function (angularAMD) {

        var app = angular.module("mainModule", ['ngRoute', 'blockUI', 'ngSanitize', 'ui.bootstrap']);

        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when("/", angularAMD.route({
                    templateUrl: function (rp) {  return 'Views/Main/default.html';  },
                    controllerUrl: "Views/Main/defaultController"
                }))
                .when("/:section/:tree", angularAMD.route({
                    templateUrl: function (rp) {
                        return 'views/' + rp.section + '/' + rp.tree + '.html'; },
                    resolve: {
                        load: ['$q', '$rootScope', '$location',
                            function ($q, $rootScope, $location) {

                                var path = $location.path();
                                var parsePath = path.split("/");
                                var parentPath = parsePath[1];
                                var controllerName = parsePath[2];
                                var loadController = "Views/" + parentPath + "/" +
                                    controllerName + "Controller";

                                var deferred = $q.defer();
                                require([loadController], function () {
                                    $rootScope.$apply(function () {
                                        deferred.resolve();
                                    });
                                });
                                return deferred.promise;
                            }]
                    }
                }))

                .when("/:section/:tree/:id", angularAMD.route({

                    templateUrl: function (rp) {
                        return 'views/' + rp.section + '/' + rp.tree + '.html'; },

                    resolve: {
                        load: ['$q', '$rootScope', '$location',
                            function ($q, $rootScope, $location) {
                                var path = $location.path();
                                var parsePath = path.split("/");
                                var parentPath = parsePath[1];
                                var controllerName = parsePath[2];
                                var loadController = "Views/" + parentPath + "/" +
                                    controllerName + "Controller";

                                var deferred = $q.defer();
                                require([loadController], function () {
                                    $rootScope.$apply(function () {
                                        deferred.resolve();
                                    });
                                });
                                return deferred.promise;
                            }]
                    }
                }))
                .otherwise({ redirectTo: '/' })
        }]);

        app.config(function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.defaults.withCredentials = true;
        });
        app.config(function (blockUIConfigProvider) {
            // Change the default overlay message
            blockUIConfigProvider.message("executing...");
            // Change the default delay to 100ms before the blocking is visible
            blockUIConfigProvider.delay(1);
            // Disable automatically blocking of the user interface
            blockUIConfigProvider.autoBlock(false);
        });

        var indexController = function ($scope, $rootScope, $http, $location, blockUI) {

            $scope.$on('$routeChangeStart', function (scope, next, current) {
                //$scope.authenicateUser($location.path(), $scope.authenicateUserComplete, $scope.authenicateUserError);
            });

            $scope.authenicateUser = function (route, successFunction, errorFunction) {
                var authenication = new Object();
                authenication.route = route;
                //$scope.AjaxGet(authenication, "/api/main/AuthenicateUser", successFunction, errorFunction);
            };

            $scope.authenicateUserComplete = function (response) {
                if (response.IsAuthenicated==false)
                {
                    window.location = "/login";
                }
            }

        };
        // Bootstrap Angular when DOM is ready
        angularAMD.bootstrap(app);

        return app;
    });