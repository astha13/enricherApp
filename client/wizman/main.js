/**
 * Created with IntelliJ IDEA.
 * User: wiznidev
 * Date: 12/02/15
 * Time: 1:01 AM
 * To change this template use File | Settings | File Templates.
 */
requires.config({
    baseUrl: "wizman/",
    paths: {
        'wizman': 'wizman/app-config',
        'jquery': '../../bower_components/jquery/jquery.min',
        'angular': '../../bower_components/angular/angular',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-ui-router':'../../bower_components/angular-ui-route/angular-ui-router.min',
        'angularAMD': '../../bower_components/angularAMD/angularAMD',
        'ngload': '../../bower_components/angularAMD/ngload',
        'ui-bootstrap': '../../bower_components/angular-ui-bootstrap/ui-bootstrap-tpls',
        'prettify': '../../bower_components/google-code-prettify-lite/prettify',
        'bootstrap':'../../bower_components/bootstrapjs/js/bootstrap.min'
    },
// Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap': ['angular'],
        'bootstrap':
        {
            deps:['jquery']
        }
    },

    // kick start application
    deps: ['wizman']
});