function YoutubeItemsListController($scope, $http) {

    var url = "http://gdata.youtube.com/feeds/users/" + window.Config.youtube.userId + "/uploads";
    var params = {
        alt : "json-in-script",
        callback : "JSON_CALLBACK"
    };

    // flickr
    $http.jsonp(url, {
        params : params    
    }).success(function(req) {

        var videos = req.feed.entry;
        console.log(videos);

        // var photos = req.photos.photo;
        var aggregatedVideos = [];

        // photos.forEach(function(eachPhoto) {
        //     var photo = {};
        //     var baseURL = "http://farm" + eachPhoto.farm + ".staticflickr.com/" + eachPhoto.server + "/" + eachPhoto.id + "_" + eachPhoto.secret;

        //     photo.title = eachPhoto.title;
        //     photo.thumb_src = baseURL + "_s.jpg";
        //     photo.src = baseURL + ".jpg";

        //     aggregatedPhotos.push(photo);
        // });

        // $scope.items = aggregatedPhotos;
    });
}
//youtubeItemsListController = ['$scope', '$http'];
