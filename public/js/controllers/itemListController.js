function itemListController($scope, $http) {

    var items = [];

    // flickr
    $http.get().success(function(items) {
        $scope.items = items;
    });
}
