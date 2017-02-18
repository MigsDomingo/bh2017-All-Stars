// App a = new App();
var App = (function() {
	var $idNumBox 				= $("#idnum");
	var $firstNameBox				= $("#fname");
	var $lastNameBox				= $("#lname");
	var $schoolBox					= $("#school");
	var $yearCourseBox 			= $("#yrCourse");
	var $mobileNumberBox		= $("#mobNum");
	var $areaBox					= $("#area");
	var $statusBox						= $("#status");
	var $table 					= $("#student-list");
	var $studentBtnSave			= $("#btn-save-student");
	var $studentBtnShow 			= $("#btn-show-student");
	var messages					= [];
	var $responseText				= $("#responseText");
	var urlSaveMsg					= "http://localhost:9999/student/add";
	var urlFetchMsgs				= "/api/v1/messages";
	
	var _initGUI = function() {
		$idNumBox 					= $("#idnum");
		$firstNameBox				= $("#fname");
		$lastNameBox				= $("#lname");
		$schoolBox					= $("#school");
		$yearCourseBox 			= $("#yrCourse");
		$mobileNumberBox		= $("#mobNum");
		$areaBox						= $("#area");
		$statusBox						= $("#status");
		$table 					= $("#student-list");
		$studentBtnSave			= $("#btn-save-student");
		$studentBtnShow 			= $("#btn-show-student");
		$responseText				= $("#responseText");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$studentBtnSave	= $("#btn-save-student");
		$studentBtnSave.on('click', function() {
			var idNumText 				= $idNumBox.val();
			var firstNameText 			= $firstNameBox.val();
			var lastNameText 			= $lastNameBox.val();
			var schoolText 				= $schoolBox.val();
			var yearCourseText 		= $yearCourseBox.val();
			var mobileNumberText 	= $mobileNumberBox.val();
			var statusText 				= $statusBox.val();
			var areaText 				= $areaBox.val();
			_saveMessage(idNumText, firstNameText, lastNameText, schoolText, yearCourseText, mobileNumberText,  statusText, areaText);
		});
		$studentBtnShow 			= $("#btn-show-student");
		_renderStudents();
		$studentBtnShow.on('click', function() {
			window.location.reload();
		});
	}
	
	var _saveMessage = function(idNumText, firstNameText, lastNameText, schoolText, yearCourseText, mobileNumberText,  statusText, areaText) {
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
				studentNumber:	idNumText,
				firstName:			firstNameText,
				lastName:				lastNameText,
				school:					schoolText,
				yearAndCourse:	yearCourseText,
				mobileNumber:		mobileNumberText,
				status:				statusText,
				area:					areaText
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
	
	var _renderStudents = function() {
		$.ajax({
			url: "http://localhost:9999/student/all",
			method: 'GET',
			dataType: 'json',
			crossDomain:true,
			success: function(response) {
				// { messages: messages }
				console.log(response);
				//users = response.allUsers;
				students = response;
				for(var i = 0; i < students.length; i++){
					$table.append("<tr><td>" + students[i].lastName + "</td>" + "<td>" + students[i].firstName + "</td>" + "<td>" + students[i].studentNumber + "</td>" + "<td>" + students[i].school + "</td>" + "<td>" + students[i].yearAndCourse + "</td>" + "<td>" + students[i].status+ "</td>" + "<td>" + students[i].mobileNumber + "</td>" + "<td>" + students[i].area.areaName+ "</td></tr>");

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