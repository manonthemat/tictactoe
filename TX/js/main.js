var tttApp = angular.module('tttApp', []);

tttApp.controller('gamePlay', ['$scope', function($scope) {
	$scope.playerName = '';

// === counter === //

var turnCounter = 1;

// === create the board === //

$scope.cells = [0,0,0,0,0,0,0,0,0];

// === players === //

$scope.players = ["Player One", "Player Two"];

// === define player one & two and their properties === //
/*
$scope.playerColorR = function() {
	$scope.pStyleR={'border':'2px solid red'};
};

$scope.playerColorG = function() {
	$scope.pStyleG={'border':'2px solid green'};
};

$scope.playerColorB = function() {
	$scope.pStyleB={'border':'2px solid blue'};
};

$scope.playerColorX = function() {
	$scope.pStyleX={'border':'2px solid black'};
};
*/

$scope.playerColor = function() {
	if ($scope.playerRed === true) {
		return "red"
	} else if ($scope.playerGreen === true) {
		return "green"
	} else if ($scope.playerBlue === true) {
		return "blue"
	} else if ($scope.playerBlack === true) {
		return "black"
	}
};

// === array update & switch to the next player === //

$scope.makeMove = function(cellNum) {
	if (turnCounter % 2 != 0 && turnCounter <= 9 && ($scope.cells[cellNum] === 0)) {
		$scope.cells[cellNum] = 1;
		player = "Player One";
		console.log($scope.cells);
		console.log(turnCounter);
		console.log(player);
	} else if (turnCounter % 2 === 0 && turnCounter <= 9 && ($scope.cells[cellNum] === 0)) {
		$scope.cells[cellNum] = -1;
		player = "Player Two";
		console.log($scope.cells);
		console.log(turnCounter);
		console.log(player);
	} else if ($scope.cells[cellNum] != 0) {
		console.log("Not valid");
		turnCounter -= 1;
	} else {
		console.log("Game Over");
	}
		turnCounter += 1;
	};

// === what happens when clicked === //

// $scope.colorCellsRed = [#700400, #910600, #CC0800, #FF6A64, #FFB7B3];
// $scope.colorCellsGreen = [#36402D, #48592E, #778C4A, #98A67B, #D9D7C5];
// $scope.colorCellsBlue = [#023059, #084F8C, #4992BF, #77BDD9, #BDE3F2];
// $scope.colorCellsBlack = [#0D0D0D, #3E3E3E, #737373, #C0C0C0, #F3F3F3];

var colors = {"red": ["#700400", "#910600", "#CC0800", "#FF6A64", "#FFB7B3"],
			  "green": ["#36402D", "#48592E", "#778C4A", "#98A67B", "#D9D7C5"],
			  "blue": ["#023059", "#084F8C", "#4992BF", "#77BDD9", "#BDE3F2"],
			  "black": ["#0D0D0D", "#3E3E3E", "#737373", "#C0C0C0", "#F3F3F3"]};


$scope.getCellColor = function(cellNum) {			// store move number in the array to color different
	if ($scope.cells[cellNum] > 0)					// if player selects "color" && $scope.cells[cellNum] > 0
	{ return colors["green"][1]
	} else if ($scope.cells[cellNum] < 0)
			{return colors["black"][1]
	} else {
		return "gray"
	}
}

// === confirm app load === //

console.log("hello");

}]);


// === * ==== * === ideas === * === * === //

/*
$scope.colorChoice = [[#700400, #910600, #CC0800, #FF6A64, #FFB7B3],
					  [#36402D, #48592E, #778C4A, #98A67B, #D9D7C5],
					  [#023059, #084F8C, #4992BF, #77BDD9, #BDE3F2],
					  [#0D0D0D, #3E3E3E, #737373, #C0C0C0, #F3F3F3]]
*/

//=====================================

/*
$scope.pStyleR={'border':'2px solid red'};
$scope.pStyleG={'border':'2px solid green'};
$scope.pStyleB={'border':'2px solid blue'};
$scope.pStyleX={'border':'2px solid black'};

$scope.playerColor = function() {
	if (players select red) {
		return $scope.pStyleR={'border':'2px solid red'}
	} else if (players select green) {
		return $scope.pStyleG={'border':'2px solid green'}
	} else if (players select blue) {
		return $scope.pStyleB={'border':'2px solid blue'}
	} else {
		return $scope.pStyleX={'border':'2px solid black'} 
	}
	}
*/

//=====================================

/*
$scope.playerColorR = function() {
	$scope.pStyleR={'border':'2px solid red'};
};

$scope.playerColorG = function() {
	$scope.pStyleG={'border':'2px solid green'};
};

$scope.playerColorB = function() {
	$scope.pStyleB={'border':'2px solid blue'};
};

$scope.playerColorX = function() {
	$scope.pStyleX={'border':'2px solid black'};
};
*/

//=====================================

// === define who is active (at start) === /

// $scope.currentPlayer = $scope.players[0]; // - redo based on counter or better -> back & forth

// Fix the CSS so X can be displayed

//=====================================

// === define end of game === //

/*
if {
	[0,1,2],[3,4,5],[6,7,8]
	[0,3,6],[1,4,7],[2,5,8]
	[0,4,8],[2,4,6]
	} then winner is declared. game over.
else tie. game over.
*/

// $scope.end when open cells = 0.  possible turn counter to determine end. diplay on screen

// === how does each turn move to the next one?  counter? true/false? === //

// === each click does something with the array.  integer/string? === //

// if players[0] clicks, insert "X" to matching array element. else players[1] clicks, insert "O".

// === win logic.  check win conditions on the board.  loops.  in row, in col, in diag. === //

