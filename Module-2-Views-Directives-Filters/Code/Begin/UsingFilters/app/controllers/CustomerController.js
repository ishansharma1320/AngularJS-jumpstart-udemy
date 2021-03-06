(function(){
    const custCtrl = function(){
        scope = this;
        scope.sortVar = 'name';
        scope.reverse = false;
        scope.customers=customers=[{joined: '2000-12-02', name:'John', city:'Chandler', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zed', city:'Las Vegas', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'New York', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Seattle', orderTotal:101.50}]
        scope.doSort = function(propColumn){
            scope.sortVar = propColumn;
            scope.reverse = !scope.reverse;
        }
    }
    angular.module('customersApp').controller('CustomersController',custCtrl)
})();
