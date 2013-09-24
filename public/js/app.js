angular.module("gallery", []).
    config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/photos", { templateUrl : "partials/item.html", controller : FlickrItemsListController })
            .when("/movies", { templateUrl : "partials/item.html", controller : YoutubeItemsListController })
            .otherwise({ redirectTo : "/photos"});
    }]);
