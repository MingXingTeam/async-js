$.ajax({
	type: "GET",
	url: 'data.json',
	success: getData,
	error: handleError
});

function getData(data) {
	$.ajax({
		type: "GET",
		url: 'data2.json?id='+data.id,
		success: getData2,
		error: handleError
	});
}

function getData2() {
	//...
}

function handleError() {
	
}