$.ajax({
	type: "GET",
	url: "data.json",
	success: function(data) {
		//to do something with data
		$.ajax({
			type: "GET",
			url: "data2.json?id=" + data.id,
			success: function(data2) {
				//to do something with data
			},
			error: function(xhr, status, error){

			}
		})
	},
	error: function(xhr, status, error){

	}
})