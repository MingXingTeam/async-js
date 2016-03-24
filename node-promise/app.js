var fs = require('fs');
function writeJson(filename, data) {
	return new Promise(function(resolve, reject) {
		fs.writeFile(filename, data, function(err) {
			if(err) {
				reject(err);
			} else {
				try {
					resolve({"error_no":0});
				} catch(e) {
					rejecte(e)
				}
			}
		})
	})
}
console.log("now run!!")
function readJson(filename) {
	return new Promise(function(resolve, reject) {
		fs.readFile(filename, function(err, file) {
			if(err) {
				reject(err);
			} else {
				try {
					resolve(JSON.parse(file.toString('utf-8')))
				} catch(e) {
					rejecte(e)
				}
			}
		})
	})
}

module.exports = (function() {
	Promise.all([
		writeJson("./data.json", '{"a": 1,"b": 2}')
	]).then(function(data) {
		return Promise.all(readJson("./data.json"))
	}).then(function(data) {
		console.log(JSON.stringify(data));
	})
})()