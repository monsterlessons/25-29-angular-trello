angular.module('app').controller('listCtrl', function (listFactory) {
  this.removeList = function (list) {
    listFactory.removeList(list);
  };
});
