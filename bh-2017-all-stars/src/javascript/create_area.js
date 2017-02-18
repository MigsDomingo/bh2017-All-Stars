// App a = new App();
var App = (function() {
	var $areaBox 			= $("#area");
	var $cityBox				= $("#city");
	var $regionBox			= $("#region");
	var $statusBox  		= $("#status");
	var $table 					= $("#area-list");
	var $areaBtnSave	= $("#btn-save-area");
	var $areaBtnShow = $("#btn-show-area");
	var messages			= [];
	var $responseText	= $("#responseText");
	var urlSaveMsg		= "http://localhost:9999/area/add";
	var urlFetchMsgs		= "/api/v1/messages";
	
	var _initGUI = function() {
		$areaBox 				= $("#area");
		$cityBox				= $("#city");
		$regionBox			= $("#region");
		$areaBtnSave		= $("#btn-save-area");
		$areaBtnShow = $("#btn-show-area");
		$responseText		= $("#responseText");
		$statusBox  			= $("#status");
		$table			= $("#area-list");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$areaBtnSave		= $("#btn-save-area");
		$areaBtnSave.on('click', function() {
			var areaText 		= $areaBox.val();
			var cityText 			= $cityBox.val();
			var regionText 	    = $regionBox.val();
			var statusText       = $statusBox.val();
			_saveMessage(areaText, cityText, regionText, statusText);
		});
		_renderAreas();
		$areaBtnShow = $("#btn-show-area");
		$areaBtnShow.on('click', function() {
			window.location.reload();
		});
	}
	
	var _saveMessage = function(areaText, cityText, regionText, statusText) {
		// String message = request.get("message");
		$.ajax({
			// headers: {
				// 'Accept': 'application/json',
				// 'Content-Type': 'application/json',
			// 	'Access-Control-Allow-Origin': '*'
			// },
			url: urlSaveMsg,
			method: 'POST',
			data: JSON.stringify({
				areaName: 	areaText,
				city: 	cityText,
				region: regionText,
				status: statusText
			}),
			contentType: 'application/json; charset=UTF-8',
			crossDomain:true,
			dataType: 'json',
			success: function(response) {
				$responseText.html(response.message)
			},
			error: function(response) {
			}
		});
	}
	
	var _renderAreas = function() {
		$.ajax({
			url: "http://localhost:9999/area/all",
			method: 'GET',
			dataType: 'json',
			crossDomain:true,
			success: function(response) {
				// { messages: messages }
				console.log(response);
				//users = response.allUsers;
				areas = response;
				for(var i = 0; i < areas.length; i++){
					$table.append("<tr><td>" + areas[i].areaName + "</td>" + "<td>" + areas[i].city + "</td>" + "<td>" + areas[i].region + "</td>" + "<td>" + areas[i].status + "</td></tr>");
				}
			},
			error: function(response) {
			}
		});
	}
	
	return {
		init: init
	};
})();