'use strict';
 
angular.module('InsuControl')
.controller('mapaController', ['$scope', '$rootScope', '$location', '$http', 'localStorageService', 
	 function($scope, $rootScope, $location, $http, 
		localStorageService) {

	 	
	 	//var obtenerGPS = "http://insucontrol.life/pdo_servicios/Ws_Ic/vista/obtenerGPS.php";
	 	var obtenerGPS = "http://localhost/pdo_servicios/Ws_Ic/vista/obtenerGPS.php";
		$http.post(obtenerGPS)
		  .then(function(response) {
		  	if(response.data.estado == 1) {
		      $scope.data = response.data.localizacion;
		      //console.log($scope.data);
		  	}
		  });
         
         angular.element(function () {
            document.getElementById("nav_mapa").className = "active";
        });
	}
]);
