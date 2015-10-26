angular.module('ngShotbyAbel')
  .factory('instagram', function($resource){
    return {
      fetchPopular: function(callback) {

                          // https://api.instagram.com/v1/users/{shotbyabel}/media/recent/? 
     // var api = $resource('https://api.instagram.com/v1/users/steadyjenny?client_id=:client_id&callback=JSON_CALLBACK', {
        var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                                                        // /users/shotbyabel/media/recent
                        
              client_id: '21416b5a74e048cabd2bb4999397de48'
          },{
              fetch:{method:'JSONP'}

          });

            api.fetch(function(response){
                callback(response.data);
            });
        }
      }
  })