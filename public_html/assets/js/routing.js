var app=angular.module("mainApp",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'templates/sliderMain.html', 
            controller:'indexCtrl'           
        })
        .when('/home',{
            templateUrl:'templates/sliderMain.html',
            controller:'indexCtrl'
        })
        .when("/rechtsgebiete",{
            templateUrl:'templates/rechtsgebiete.html', 
            controller:'rechtsgebieteCtrl'
        }) 
        .when("/zurPerson",{
            templateUrl:'templates/zurPerson.html', 
            controller:'zurPersonCtrl'
        }) 
        .when("/kontakt",{
            templateUrl:'templates/kontakt.html', 
            controller:'kontaktCtrl'
        }) 
        .when("/anfahrt",{
            templateUrl:'templates/anfahrt.html', 
            controller:'anfahrtCtrl'
        })         
        .when("/impressum",{
            templateUrl:'templates/impressum.html',
            controller:'impressumCtrl'
        }) 
        .when("/datenschutz",{
            templateUrl:'templates/datenschutz.html',
            controller:'datenschutzCtrl'  
        })        
        .otherwise({
            redirectTo:'html/sliderMain.html'
        });
    }]);
app.controller('headerCtrl', function($scope){});
app.controller('rechtsgebieteeCtrl', function($scope){});
app.controller('zurPersonCtrl', function($scope){});
app.controller('kontaktCtrl', function($scope){});
app.controller('impressumCtrl', function($scope){});
app.controller('datenschutzCtrl', function($scope){});
app.controller('weitereInfosCtrl', function($scope){
   $('.beratung').click(function(){
       $('#beratung').toggle('slow');
   });
   $('.verfahren').click(function(){
       $('#verfahren').toggle('slow');
   });
   $('.schlichtung').click(function(){
       $('#schlichtung').toggle('slow');
   });
});
app.controller('anfahrtCtrl', function($scope){});
app.controller('impressumCtrl', function($scope){});
app.controller('datenschutzCtrl', function($scope){});
app.controller('leistungenCtrl', function($scope){});

   
  
   
  
   

