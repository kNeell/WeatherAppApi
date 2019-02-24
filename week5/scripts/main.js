
$('#getButton').click(function(){

		var search = $('#searchResults').val();

		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=imperial&APPID=e38b4750dc6f676b97dc9a19504a9200',function(data){
		console.log(data);
		//$('#title').html(String(result.weather[0].main));
		$('#cityTitle').html(data.name);
		$('#temp').html(data.main.temp);
		$('#description').html(data.weather[0].description);
		$('#icon').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
	});
});
