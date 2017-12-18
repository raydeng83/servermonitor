$( document ).ready(function() {
	window.setInterval(function() {
		var tr = $("#dev_servers");

		// $.get("http://localhost:8081", function(data, status){
		// 	if(status=="success") {
		// 		(tr.find("td[id='dev1_am_status']").text("Running"));
		// 	} else {
		// 		(tr.find("td[id='dev1_am_status']").text("Down"));
		// 	}
		// });

		$.ajax({
		    url: 'http://localhost:8081',
		    type: 'GET',
		    success: function(data, status){ 
		    	console.log(status);
		        (tr.find("td[id='dev1_am_status']").text("Running"));
		    },
		    error: function(data, status) {
		    	console.log(status);
		        (tr.find("td[id='dev1_am_status']").text("Down"));
		    }
		});

	}, 3000);
});

