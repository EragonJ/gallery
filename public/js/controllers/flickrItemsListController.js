function flickrItemsListController($scope, $http) {

    var items = [];
    var url = "http://api.flickr.com/services/rest/";
    var params = {
        method : "flickr.photos.search",
        api_key : window.Config.flickrApiKey,
        user_id : "45247652@N04",
        format : "json",
        jsoncallback : "JSON_CALLBACK"
    };

    // flickr
    $http.jsonp(url, {
        params : params    
    }).success(function(items) {
        $scope.items = items;
    });
}
