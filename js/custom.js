$( document ).ready(function() {
	window.setInterval(function() {
		var tr = $("#dev_servers");

		$.ajax({
			url: 'http://localhost:4000/SunGuard/am1',
			type: 'GET',
			success: function(data, status){ 
				if(data.alive=='RUNNING') {
					(tr.find("td[id='dev1_am_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev1_am_status']").text("Down").css("background-color", "red"));
				}

				if (data.oAuthTokenAvailable=='RUNNING') {
					(tr.find("td[id='dev1_oauth_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev1_oauth_status']").text("Down").css("background-color", "red"));
				}
			},
			error: function(data, status) {
				(tr.find("td[id='dev1_am_status']").text("N/A").css("background-color", "yellow"));
				(tr.find("td[id='dev1_oauth_status']").text("N/A").css("background-color", "yellow"));
			}
		});

		$.ajax({
			url: 'http://localhost:4000/SunGuard/am2',
			type: 'GET',
			success: function(data, status){ 
				if(data.alive=='RUNNING') {
					(tr.find("td[id='dev2_am_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev2_am_status']").text("Down").css("background-color", "red"));
				}

				if (data.oAuthTokenAvailable=='RUNNING') {
					(tr.find("td[id='dev2_oauth_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev2_oauth_status']").text("Down").css("background-color", "red"));
				}
			},
			error: function(data, status) {
				(tr.find("td[id='dev2_am_status']").text("N/A").css("background-color", "yellow"));
				(tr.find("td[id='dev2_oauth_status']").text("N/A").css("background-color", "yellow"));

			}
		});

		$.ajax({
			url: 'http://localhost:4000/SunGuard/amLoadBalancer',
			type: 'GET',
			success: function(data, status){ 
				if(data.alive=='RUNNING') {
					(tr.find("td[id='loadbalancer_am_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='loadbalancer_am_status']").text("Down").css("background-color", "red"));
				}
			},
			error: function(data, status) {
				(tr.find("td[id='loadbalancer_am_status']").text("N/A").css("background-color", "yellow"));
			}
		});


		$.ajax({
			url: 'http://localhost:4000/SunGuard/idm1',
			type: 'GET',
			success: function(data, status){ 
				if(data.alive=='RUNNING') {
					(tr.find("td[id='dev1_idm_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev1_idm_status']").text("Down").css("background-color", "red"));
				}
			},
			error: function(data, status) {
				(tr.find("td[id='dev1_idm_status']").text("N/A").css("background-color", "yellow"));
			}
		});

		$.ajax({
			url: 'http://localhost:4000/SunGuard/idm2',
			type: 'GET',
			success: function(data, status){ 
				if(data.alive=='RUNNING') {
					(tr.find("td[id='dev2_idm_status']").text("Running").css("background-color", "#8ec252"));
				} else {
					(tr.find("td[id='dev2_idm_status']").text("Down").css("background-color", "red"));
				}
			},
			error: function(data, status) {
				(tr.find("td[id='dev2_idm_status']").text("N/A").css("background-color", "yellow"));
			}
		});

	}, 3000);
});

