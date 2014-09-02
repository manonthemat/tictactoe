
var tttApp = angular.module('tttApp', ["firebase"]);
tttApp.controller('gamePlay', ['$scope', '$firebase', function($scope, $firebase) {

// === create the board === //

$scope.cells = [0,0,0,0,0,0,0,0,0];

// === firebase === //

/*var ref = $firebase( new Firebase("https://tic-square-v2.firebaseio.com/data"));
ref.$bind($scope, "box");*/

$scope.$watch("box", function() {
	console.log("hi");
});
/*
	var ref = new Firebase("https://tic-square.firebaseio.com/");
	var sync = $firebase(ref);
	// download the data into a local object 
	$scope.data = sync.$asObject();
	var syncObject = sync.$asObject();
	//-- ref.$bind($scope, "box");
	syncObject.$bindTo($scope, "box");
}
*/

// === show player name === //

$scope.playerName = '';

// === counter === //

var turnCounter = 1;

// === players === //

$scope.players = ["Player One", "Player Two"];

// === gameplay & switch to the next player === //

$scope.makeMove = function(cellNum) {
	if (turnCounter % 2 != 0 && turnCounter <= 9 && ($scope.cells[cellNum] === 0)) {
		$scope.cells[cellNum] = 1;
		player = "Player One";
		console.log($scope.cells);
		console.log(turnCounter);
		console.log(player);
		$scope.getWinner(cellNum);
	} else if (turnCounter % 2 === 0 && turnCounter <= 9 && ($scope.cells[cellNum] === 0)) {
		$scope.cells[cellNum] = -1;
		player = "Player Two";
		console.log($scope.cells);
		console.log(turnCounter);
		console.log(player);
		$scope.getWinner(cellNum);
	} else if ($scope.cells[cellNum] != 0) {
		console.log("Not valid");
		turnCounter -= 1;
	} else {
		console.log("Game Over");
	}
		turnCounter += 1;
	};

// === what happens when :hover === //



// === what happens when clicked === //

$scope.getCellColor = function(cellNum) {			
	if ($scope.cells[cellNum] === 1) {
		return "#b0aa76"								
	} else if ($scope.cells[cellNum] === -1) {
		return "#fd6432"		
	} else {
		return "rgba(255, 255, 255, .9)"
	}
};

// === winner & win message === //

$scope.getWinner = function(cellNum) {
	// === rows === //
		   if (($scope.cells[0] + $scope.cells[1] + $scope.cells[2]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[0] + $scope.cells[1] + $scope.cells[2]) === -3) {
		return($scope.players[1] + " is the winner!");
	} else if (($scope.cells[3] + $scope.cells[4] + $scope.cells[5]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[3] + $scope.cells[4] + $scope.cells[5]) === -3) {
		return($scope.players[1] + " is the winner!");
	} else if (($scope.cells[6] + $scope.cells[7] + $scope.cells[8]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[6] + $scope.cells[7] + $scope.cells[8]) === -3) {
		return($scope.players[1] + " is the winner!");
	// === columns === //
	} else if (($scope.cells[0] + $scope.cells[3] + $scope.cells[6]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[0] + $scope.cells[3] + $scope.cells[6]) === -3) {
		return($scope.players[1] + " is the winner!");
	} else if (($scope.cells[1] + $scope.cells[4] + $scope.cells[7]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[1] + $scope.cells[4] + $scope.cells[7]) === -3) {
		return($scope.players[1] + " is the winner!");
	} else if (($scope.cells[2] + $scope.cells[5] + $scope.cells[8]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[2] + $scope.cells[5] + $scope.cells[8]) === -3) {
		return($scope.players[1] + " is the winner!");
	// === diags === //
	} else if (($scope.cells[0] + $scope.cells[4] + $scope.cells[8]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[0] + $scope.cells[4] + $scope.cells[8]) === -3) {
		return($scope.players[1] + " is the winner!");
	} else if (($scope.cells[2] + $scope.cells[4] + $scope.cells[6]) === 3) {
		return($scope.players[0] + " is the winner!");
	} else if (($scope.cells[2] + $scope.cells[4] + $scope.cells[6]) === -3) {
		return($scope.players[1] + " is the winner!");
	}
};

// === new game === //


// === score board === //

var playerOneScore = 0;
var playerTwoScore = 0;

$scope.playerScore = function(playerOneScore, playerTwoScore) {
	for (var i = 0; i < 50; i++) {
		return i;
	}
};


// === confirm app load === //

console.log("hello");

}]);

// === end === //





// === * ==== * === ideas === * === * === //

/*
if {[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]}; 
prompt("winner") 
*/

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

