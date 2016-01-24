Promise.coroutine(function* () {
	var data = yield  $.get('data.json');
	console.log(JSON.stringify(data));
	var data2 = yield $.get('data2.json');

})().catch(function(errs) {
	//handle error
})