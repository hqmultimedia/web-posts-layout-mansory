upload.controller('Load_Data_Controller', function($timeout, $rootScope, $scope, $http, $location, $cookies, $routeParams) {

        $rootScope.scroll_top = function() {

            $('body,html').animate({
                scrollTop: 0
            }, 0);
        }

        $scope.posts_mansory = true;
        $scope.content_one_posts_mansory = false;

        //show

        $scope.show_content_one_posts_mansory = function() {

                $('.background-change-page').addClass('effect');

                $timeout(function() {
                    $scope.posts_mansory = false;
                    $scope.content_one_posts_mansory = true;
                    $('body,html').animate({
                        scrollTop: 0
                    }, 0);
                }, 300);
                $timeout(function() {
                    $('.background-change-page').removeClass('effect');
                }, 1200);




            }
            // close
        $scope.clear_content_one_posts_mansory = function() {
            $('.background-change-page').addClass('effect');

            $timeout(function() {
                $scope.posts_mansory = true;
                $scope.content_one_posts_mansory = false;
                $('body,html').animate({
                    scrollTop: 0
                }, 0);
            }, 300);
            $timeout(function() {
                $('.background-change-page').removeClass('effect');
            }, 1200);
        }

    }) //End controller FunctionController