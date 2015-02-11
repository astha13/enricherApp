/**
 * Created with IntelliJ IDEA.
 * User: wiznidev
 * Date: 12/02/15
 * Time: 1:41 AM
 * To change this template use File | Settings | File Templates.
 */
define(['wizman'], function (app)
{
    app.register.service('ajaxService', ['$http', 'blockUI',
        function ($http, blockUI)
        {
            this.AjaxPost = function (data, route, successFunction, errorFunction) {
                blockUI.start();
                setTimeout(function () {
                    $http.post(route, data).success(function
                        (response, status, headers, config)
                    {
                        blockUI.stop();
                        successFunction(response, status);
                    }).error(function (response) {
                            blockUI.stop();
                            if (response.IsAuthenicated == false)
                            {
                                window.location = "/login";
                            }
                            errorFunction(response);
                        });
                }, 1000);
            }

            this.AjaxGet = function (route, successFunction, errorFunction) {
                blockUI.start();
                setTimeout(function () {
                    $http({ method: 'GET', url: route }).success(
                        function (response, status, headers, config) {
                            blockUI.stop();
                            successFunction(response, status);
                        }).error(function (response) {
                            blockUI.stop();
                            if (response.IsAuthenicated == false)
                            {
                                window.location = "/login";
                            }
                            errorFunction(response);
                        });
                }, 1000);
            }

            this.AjaxGetWithData = function (data, route, successFunction, errorFunction) {
                blockUI.start();
                setTimeout(function () {
                    $http({ method: 'GET', url: route, params: data }).success(
                        function (response, status, headers, config) {
                            blockUI.stop();
                            successFunction(response, status);
                        }).error(function (response) {
                            blockUI.stop();
                            if (response.IsAuthenicated == false)
                            {
                                window.location = "/login";
                            }
                            errorFunction(response);
                        });
                }, 1000);
            }
        }
    ]);
})