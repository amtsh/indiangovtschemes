angular.module('adminapp').controller('MainCtrl', ['$scope', 'apiService', function($scope, apiService) {

  $scope.scheme = {
    title: '',
    description: {
      what: '',
      who: '',
      date: ''
    },
    schemesource: '',
    filters: {
      gender: {
        male: false,
        female: false
      },
      categories: {
        bpt: false,
        disability: false,
        obc: false,
        open: false,
        scst: false
      },
      age_range: {
        from: '',
        to:  ''
      }
    }
  }

  $scope.schemes = []

  $scope.categories = {
    open: "Open",
    obc: "OBC",
    scst: "SC/ST",
    bpt: "Below Poverty Line",
    disability: "Disabled Person"
  }

  // get schemes by using apiService
  $scope.getSchemes = function() {
    apiService.getSchemes()
      .then(function (response) {
        console.log(response)

        if (response.status == 200) {

          $scope.schemes = response.data._embedded.schemes
          //$scope.status = $scope.schemes.length ? "All schemes received" : "No schemes available."
        }
      }, function(error) {
          $scope.status = "Error occurred while getting all schemes"
      })
  }

  // create/update scheme using apiService
  $scope.submitScheme = function(scheme) {

    if (scheme.toUpdate) {
      var id = getSchemeIdFromURL(scheme._links.scheme.href)
      updateScheme(scheme, id)
      return
    }

    apiService.createScheme(scheme)
      .then(function (response) {
        console.log(response)

        if (response.status == 201) {
          $scope.status = "New scheme is created."

          $scope.schemes.push(response.data)
        }
      }, function(error) {
        $scope.status = "Error occurred while creating scheme"
    })
  }

  $scope.editScheme = function(scheme) {
    $scope.scheme = angular.copy(scheme)
    $scope.scheme.toUpdate = true
  }

  // delete scheme with given id using apiService
  $scope.removeScheme = function(scheme) {
    var id = getSchemeIdFromURL(scheme._links.scheme.href)

    apiService.deleteScheme(id)
      .then(function (response) {
        console.log(response)

        if (response.status == 204) {
          $scope.status = "Scheme was deleted."

          // $scope.schemes = deleteItemFromArray(scheme, $scope.schemes)
          $scope.getSchemes()
        }
      }, function(error) {
        $scope.status = "Error occurred while deleting schema."
    })
  }

  // update scheme with given id using apiService
    var updateScheme = function(scheme, id) {
      apiService.updateScheme(scheme, id)
        .then(function (response) {
          console.log(response)

          if (response) {
            $scope.status = "Scheme is updated."

            $scope.scheme = {}
            $scope.getSchemes()
          }
        }, function(error) {
          $scope.status = "Error occurred while creating scheme"
      })
    }

  $scope.copyScheme = function(scheme) {
    $scope.scheme = angular.copy(scheme)
  }

  $scope.resetForm = function() {
    $scope.scheme = {}
  }

  function getSchemeIdFromURL(url) {
    return url.split('schemes/')[1]
  }

  function deleteItemFromArray(item, array) {
    var index = array.indexOf(item)
    return array.splice(index, 1)
  }

  $scope.getSchemes()

}]);
