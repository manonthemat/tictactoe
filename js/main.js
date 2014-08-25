var tttApp = angular.module('tttApp', []);

tttApp.controller('playerInfo', ['$scope', function($scope) {
	$scope.playerName = '';

// programmatic representation of gameboard.  [['','',''], ['','',''], ['','','']] - each row on the board
	$scope.cells = [['','',''], ['','',''], ['','','']];

// may have to manually (bind) address each item with the ng-repeat methodology

// define player one & two
// create an object that defines color (part of define player)

// define who is active

// how does each turn move to the next one?  counter? true/false?

// each click does something with the array.  integer/string?

// win logic.  check win conditions on the board.  loops.  in row, in col, in diag.

// start simple






}]);
