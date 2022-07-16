// text change
function textChange1(){

	document.getElementById('h2').innerHTML = "Hello world!";

}
function textChange2(){

	document.getElementsByClassName('h2')[0].innerHTML = "Hello world!";
	document.getElementsByClassName('h2')[1].style.color = "red";
	document.getElementsByClassName('h2')[2].style.border = "1px solid silver";
}
// Date
function textChange3(){

	document.getElementById('h_2').innerHTML = Date();

}
// repeat function
function textChange4(){
	var data = "Hello world! ";

	document.getElementById('h-2').innerHTML = data.repeat(2);

}