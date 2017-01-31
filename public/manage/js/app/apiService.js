angular.module('app').factory('apiService', ['$http', function($http) {

  var urlBase = '/schemes'

  // this is service object with list of methods in it
  // this object will be used by controller
  var service = {
      getSchemes: getSchemes,
      getScheme: getScheme,
      createScheme: createScheme,
      updateScheme: updateScheme,
      deleteScheme: deleteScheme
  };

  // get schemes from api by using Restangular
  function getSchemes() {
      return $http.get(urlBase)
  }

  // get scheme with given id from api by using Restangular
  function getScheme(schemeId) {
      return $http.get(urlBase + '/' + schemeId)
  }

  function createScheme(scheme) {
    return $http.post(urlBase, scheme);
  }

  function updateScheme(scheme, schemeId) {
    return $http.put(urlBase + '/' + schemeId, scheme)
  }

  function deleteScheme(schemeId) {
    return $http.delete(urlBase + '/' + schemeId);
  }

  return service

}])
