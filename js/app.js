//app
var app = angular.module('myApp',[]);
//controller
app.controller('hogeCtrl',function($scope,$http){

    //init
    $scope.name = "";
    $scope.email = "";
    $scope.file = "";

    //onclick
    $scope.btnClick = function(){

        //formdata
        var fd = new FormData();
        fd.append('name',$scope.name);
        fd.append('email',$scope.email);
        fd.append('file',$scope.file);

        //post
        $http.post('res.php',fd,{
            transformRequest: null,
            headers: {'Content-type':undefined}
        })
        .success(function(res){
            $scope.response = res;
        });
    }

    //変化を監視して画像読み込み＋表示を実行
    $scope.$watch("file",function(file){

        $scope.srcUrl = undefined;

        //画像ファイルじゃなければ何もしない
        if(!file || !file.type.match("image.*")){
            return;
        }

        //new FileReader API
        var reader = new FileReader();

        //callback
        reader.onload = function(){
            $scope.$apply(function(){
                $scope.srcUrl = reader.result;
            });
        };

        //read as url(reader.result = url)
        reader.readAsDataURL(file)
    });

});

//directive
app.directive('fileModel',function($parse){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){
            var model = $parse(attrs.fileModel);
            element.bind('change',function(){
                scope.$apply(function(){
                    model.assign(scope,element[0].files[0]);
                });
            });
        }
    };
});