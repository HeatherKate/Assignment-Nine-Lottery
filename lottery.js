var chosenNums = [];
var playNow = document.getElementById("playNow");
var block = document.getElementById("output");
var wallet = 10;
var bank = document.getElementById("bank");


function selectNumber(number) {
	if (chosenNums.length < 4) {
		chosenNums.push(number);
	} else {
		alert("You Have Entered Too Many Numbers!");
//	} if (chosenNums[i]==chosenNums[i]){
//		alert ("You Cannot Choose Number Twice!");
	} return;
	console.log(chosenNums);
}

function displayLotto() {
	var winningNums = [];
	for (var i = 0; i < 4; i++) {
		var randomNumber = Math.floor((Math.random() * 10), 1);
		winningNums.push(randomNumber);
	}
	block.innerHTML = winningNums;
	return winningNums;
}

function defMatches() {
	var winningNums=displayLotto();
	var getMatches = 0;
	for (var i=0; i<winningNums.length; i++){
		for (var j=0; j<chosenNums.length; j++) {
			if (winningNums[i] == chosenNums[j]) {
				getMatches ++;
			}
		} return getMatches;
	}
}

function payBiches() { 
	console.log(wallet);
	if (wallet <= 0){
		alert ("You Do Not Have Enough Money To Play!");
		return;
	} 
	var matches = defMatches();
	if (matches == 0){
		bank.innerHTML="$" + wallet;
	} else if (matches == 1) {
		wallet = wallet + 2;
		bank.innerHTML = "$" + wallet;
	} else if (matches == 2) {
		wallet = wallet + 16;
		bank.innerHTML = "$" + wallet;
	} else if (matches == 3) {
		wallet = wallet + 64;
		bank.innerHTML = "$" + wallet; 
	} else {
		wallet = wallet + 4096;
		bank.innerHTML = "$" + wallet; 
	} 
}











