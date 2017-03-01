function clickMe(){
	document.getElementById('first').innerHTML = "Bey";
}
function addMe(){
	var x = parseInt(document.getElementById('fn').value);
	var y = document.getElementById('sn').value;
	var sum = x + parseInt(y);
	document.getElementById('answer').innerHTML = sum;
}