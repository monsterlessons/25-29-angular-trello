angular.module('app').controller('listsCtrl', function (listFactory) {
  console.log('listsCtrl');
  this.lists = listFactory.getLists();
});
