var cache = {};

function getData(options) {
	return $.when(
		cache[options.key] || (
		console.log("not get data from cache"), $.ajax('data.json', {
			dataType: 'json',
			success: function(data) {
				cache[options.key] = data;
			}
		})
		)
	);
}

getData({
	key: "data1"
}).then(function(data) {
	$("#test1").html(JSON.stringify(data));
	//get Data from cache
	getData({
		key: "data1"
	}).then(function(data) {
		$("#test2").html(JSON.stringify(data));
		//do something with response
	});
	//do something with response
});



