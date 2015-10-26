angular.module('ngShotbyAbel')
  .controller('GalleryCtrl', ['$scope', 'instagram', 'Lightbox', function($scope, instagram, Lightbox){
    
    $scope.images = [];

    var imgArray = []; 

    instagram.fetchPopular(function(data){
      // console.log(data);
      $scope.images = data;
     //angular forEach loop to get our images on the lightbox
     angular.forEach(data, function(value, key){
        imgArray.push(value.images.standard_resolution);
     });   


      $scope.openLightboxModal = function(index) {
        Lightbox.openModal(imgArray, index);
      }

    })

    // console.log($scope);
    
  }])