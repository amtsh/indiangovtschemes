angular.module('adminapp').factory('apiService', ['$http', function($http) {

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

  function getSchemes() {
      return $http.get(urlBase)
  }

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
