// Define your controller and the objects you need to reference.
mitchellMovieApp.controller('appController', function ($scope) {
  $scope.movies = {
  	movie1: {
  		title: 'Captain America',
  		releaseDate: '22 Jul 2011',
  		totalOrders: 2346,
  		percentage: 45
  	},
  	movie2: {
  		title: 'Iron Man',
  		releaseDate: '02 May 2008',
  		totalOrders: 4422,
  		percentage: 60
  	}
  }

  //monthly sales chart data
  $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.lineSeries = ["Captain America", "Iron Man"];
  $scope.lineData = [
    [65, 59, 40, 51, 36, 25, 40],
    [48, 48, 60, 39, 56, 37, 30]
  ];
  $scope.colors = ["#9d9d9d", "#1ab394"];
});