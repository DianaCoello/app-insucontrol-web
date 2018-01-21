'use strict';
 
angular.module('InsuControl')
.controller('loginController',
    ['$scope', '$rootScope', '$location', '$http', 'localStorageService', 'AuthenticationService',
    function ($scope, $rootScope, $location, $http, localStorageService, AuthenticationService) {
        
        var userLogin = "http://localhost/pdo_servicios/Ws_Ic/vista/autenticacion_login.php";

        $scope.init = function() {
            if (AuthenticationService.isLoggedIn()) {
                $location.path('/perfil');
            }
        }

        $scope.login = function(){  
            $http.post("http://localhost/pdo_servicios/Ws_Ic/vista/autenticacion_login.php", 
                {'correo': $scope.correo, 'clave': $scope.clave})
            .then(function(response) {
                var data = response.data.login;
                console.log(data);
                if(response.data.estado == 1) {
                    console.log(response.data.estado);
                    AuthenticationService.setCredentials(data);
                    $location.path('/perfil');
                } else {
                    alert(response.mensaje);
                }

          });
        }

     $scope.init();
    }  
]);