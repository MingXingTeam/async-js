function getData(options) {
	var $defer = $.Deferred();
	$.ajax({
		url: "data.json",
		dataType: 'json',
		type: 'GET'
	}).done(function(data) {
		$defer.resolve(data)
	}).fail(function(xhr, errType, error) {
		$defer.reject(error);
	});

	return $defer.promise();
}

getData({}).then(function(data) {
	$("#test1").html(JSON.stringify(data))
}, function() {
	//handle error
})
