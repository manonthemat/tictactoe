var tttApp = angular.module('tttApp', ["firebase"]);

tttApp.controller('playerInfo', ['$scope', '$firebase', function($scope, $firebase) {
	$scope.playerName = '';

// programmatic representation of gameboard.  [['','',''], ['','',''], ['','','']] - each row on the board
	$scope.box = {cells: ["","","","","","","","",""]}; // one

	var ref = $firebase( new Firebase("https://tic-square.firebaseio.com/data"));  // two
	ref.$bind($scope, "box");  // three

	$scope.$watch("box", function() {  // four
		console.log("hi");
	});

// may have to manually (bind) address each item with the ng-repeat methodology

// define player one & two
// create an object that defines color (part of define player)

// define who is active

// how does each turn move to the next one?  counter? true/false?

// each click does something with the array.  integer/string?

// win logic.  check win conditions on the board.  loops.  in row, in col, in diag.

// start simple






}]);
