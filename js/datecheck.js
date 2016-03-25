$(document).ready(function(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if((mm==3 && dd>=30) || (mm>=4) || (yyyy>2016))
{
	$('#posterbtn').css("display" , "none");
	$('#poster').css("display" , "none");
}
});