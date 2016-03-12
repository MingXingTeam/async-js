// var getData = $.ajax({
// 	type: "GET",
// 	url: "data.json"
// });

// getData.then(function(data) {
// 	//成功回调
// 	$("#test1").html(JSON.stringify(data));
// }, function(error) {
// 	$("#test1").html(JSON.stringify(error));
// });

var getData = $.get('data.json');
var getData2 = $.get('data2.json');
$.when(getData, getData2).then(function(data,data2) {
	$("#test1").html(JSON.stringify(data));
}, function(){
	//handle error
})