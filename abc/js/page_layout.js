fetch("/page_module/top.html")
	.then((res) => {
		console.log(res);
		return response.json(); })
	.then((myJson) => {
		console.log(JSON.stringify(myJson)); })
	.catch((error) => {
		console.err(error); });

fetch("/page_module/sidebar.html")
	.then((res) => {
		console.log(res);
		return res.json(); })
	.then((myJson) => {
		console.log(JSON.stringify(myJson)); })
	.catch((error) => {
		console.err(error); });