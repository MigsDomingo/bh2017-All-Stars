// App a = new App();
var App = (function() {
	var $firstNameBox			= $("#fname");
	var $lastNameBox			= $("#lname");
	var $usernameBox			= $("#username");
	var $passwordBox			= $("#password");
	var $occupationBox			= $("#occupation");
	var $table 					= $("#user-list");
	var $userBtnSave				= $("#btn-save-user");
	var $userBtnShow			= $("#btn-show-user");
	var messages					= [];
	var $responseText			= $("#responseText");
	var urlSaveMsg				= "http://localhost:9999/users/add";
	var urlFetchMsgs				= "/api/v1/messages";

	
	var _initGUI = function() {
		$firstNameBox				= $("#fname");
		$lastNameBox				= $("#lname");
		$usernameBox				= $("#username");
		$passwordBox				= $("#password");
		$occupationBox			= $("#occupation");
		$userBtnSave				= $("#btn-save-user");
		$userBtnShow			= $("#btn-show-user");
		$responseText				= $("#responseText");
		$table			= $("#user-list");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$userBtnSave	= $("#btn-save-user");
		$userBtnSave.on('click', function() {
			var firstNameText 			= $firstNameBox.val();
			var lastNameText 			= $lastNameBox.val();
			var usernameText 			= $usernameBox.val();
			var passwordText			= $passwordBox.val();
			var occupationText 			= $occupationBox.val();
			_saveMessage(firstNameText, lastNameText, usernameText, passwordText, occupationText);
			
		});
		$userBtnShow = $("#btn-show-user");
		$userBtnShow.on("click", function() {
			window.location.reload();
		});
		
	}
	
	var _saveMessage = function(firstNameText, lastNameText, usernameText, passwordText,occupationText) {
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
				firstName: firstNameText,
				lastName: lastNameText,
				username: usernameText,
				password: passwordText,
				occupation: occupationText
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

	
	return {
		init: init
	};
})();