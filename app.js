
var name = ["yogi","sanki","akhil","swarna"];
var score = ["72","65","73","59"];
var chartdata = {
	labels: name,
	datasets :[
	{
		label : ' student score ';
		backgroundColor : blue;
		borderColor : black;
		hoverBackgroundColor : green ;
		hoverBorderColor : red;
		data : score;
	}]
};
var ctx = document.getElementById("mycanvas");
var barGraph = new Chart(ctx,{ type: 'bar', data: chartdata)});