//your JS code here. If required.
let count=0;
function btn(){
	let pop=document.getElementById("counter");
	if(count==0){
	alert(count);
	}
	else{
		alert(count-1);
	}
	count++;
	document.getElementById("counter").innerText=count;
}