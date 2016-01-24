$.get('data.json').then(function(data) {
	$("#test1").html(JSON.stringify(data))
	return $.get('data2.json');
}).then(function(data2) {
	$("#test2").html(JSON.stringify(data2));
},handleError);

function handleError() {
	console.error("get data error");
}