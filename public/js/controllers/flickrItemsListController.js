function flickrItemsListController($scope, $http) {

    var url = "http://api.flickr.com/services/rest/";
    var params = {
        api_key : window.Config.flickrApiKey,
        method : "flickr.photos.search",
        user_id : "45247652@N04",
        format : "json",
        jsoncallback : "JSON_CALLBACK"
    };

    // flickr
    $http.jsonp(url, {
        params : params    
    }).success(function(req) {

        var photos = req.photos.photo;
        var aggregatedPhotos = [];

        photos.forEach(function(eachPhoto) {
            var photo = {};
            var baseURL = "http://farm" + eachPhoto.farm + ".staticflickr.com/" + eachPhoto.server + "/" + eachPhoto.id + "_" + eachPhoto.secret;

            photo.title = eachPhoto.title;
            photo.thumb_src = baseURL + "_s.jpg";
            photo.src = baseURL + ".jpg";

            aggregatedPhotos.push(photo);
        });

        $scope.items = aggregatedPhotos;
    });
}
