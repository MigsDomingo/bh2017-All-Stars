// App a = new App();
var App = (function() {
	var $idNumBox 				= $("#idnum");
	var $firstNameBox				= $("#fname");
	var $lastNameBox				= $("#lname");
	var $mobileNumberBox		= $("#mobNum");
	var $deptBox					= $("#dept");
	var $statusBox 					= $("#status");
	var $areaBox					= $("#area");
	var $table						= $("#faculty-list");
	var $facultyBtnSave			= $("#btn-save-faculty");
	var $facultyBtnShow			= $("#btn-show-faculty");
	var messages					= [];
	var $responseText				= $("#responseText");
	var urlSaveMsg					= "http://localhost:9999/faculty/add";
	var urlFetchMsgs				= "/api/v1/messages";
	
	var _initGUI = function() {
		$idNumBox 					= $("#idnum");
		$firstNameBox				= $("#fname");
		$lastNameBox				= $("#lname");
		$mobileNumberBox		= $("#mobNum");
		$deptBox						= $("#dept");
		$statusBox 					= $("#status");
	    $areaBox						= $("#area");
		$table						= $("#faculty-list");
		$facultyBtnSave			= $("#btn-save-faculty");
		$facultyBtnShow			= $("#btn-show-faculty");
		$responseText				= $("#responseText");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$facultyBtnSave	= $("#btn-save-faculty");
		$facultyBtnSave.on('click', function() {
			var idNumText 				= $idNumBox.val();
			var firstNameText 			= $firstNameBox.val();
			var lastNameText 			= $lastNameBox.val();
			var mobileNumberText 	= $mobileNumberBox.val();
			var deptText 				= $deptBox.val();
			var statusText				= $statusBox.val();
			var areaText					= $areaBox.val();
			
			_saveMessage(idNumText, firstNameText, lastNameText, mobileNumberText,  deptText, statusText, areaText);
		});
		
		_renderFaculty();
		$facultyBtnShow = $("#btn-show-faculty");
		$facultyBtnShow.on("click", function() {
			window.location.reload();
		});
	}
	
	var _saveMessage = function(idNumText, firstNameText, lastNameText, mobileNumberText,  deptText, statusText, areaText) {
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
				employeeNumber: 				idNumText,
				firstName: 			firstNameText,
				lastName: 			lastNameText,
				mobileNumber: 		mobileNumberText,
				status:					statusText,
				department: 			deptText,
				area: 					areaText
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
	
	var _renderFaculty = function() {
		$.ajax({
			url: "http://localhost:9999/faculty/all",
			method: 'GET',
			dataType: 'json',
			crossDomain:true,
			success: function(response) {
				// { messages: messages }
				console.log(response);
				//users = response.allUsers;
				faculty = response;
				for(var i = 0; i < faculty.length; i++){
					$table.append("<tr><td>" + faculty[i].lastName + "</td>" + "<td>" + faculty[i].firstName + "</td>" + "<td>" + faculty[i].employeeNumber + "</td>" + "<td>" + faculty[i].status + "</td>" + "<td>" + faculty[i].department + "</td>" + "<td>" + faculty[i].mobileNumber+ "</td>" + "<td>" + faculty[i].area.areaName + "</td></tr>" );
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