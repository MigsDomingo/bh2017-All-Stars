// App a = new App();
var App = (function() {
	var $messageBox				= $("#message");
	var $numberBox				= $("#number");
	var $msgBtnSend				= $("#btn-send-msg");
	var $msgBtnShow			= $("#btn-show-msg");
	var $table 						= $("#message-list");
	var messages					= [];
	var $responseText			= $("#responseText");
	var urlSaveMsg				= "http://localhost:9999/message/send";
	var urlFetchMsgs				= "/api/v1/messages";
	
	var _initGUI = function() {
		$messageBox				= $("#message");
		$numberBox					= $("#number");
		$msgBtnSend				= $("#btn-send-msg");
		$msgBtnShow			= $("#btn-show-msg");
		$responseText				= $("#responseText");
		$table 						= $("#message-list");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$msgBtnSend	= $("#btn-send-msg");
		$msgBtnSend.on('click', function() {
			var messageText 	= $messageBox.val();
			var numberText 	= $numberBox.val();
			_saveMessage(messageText, numberText);
		});
		$msgBtnShow = $("#btn-show-msg");
		_renderMessages();
		$msgBtnShow.on("click", function() {
			$("#table_of_items tr").remove(); 
			window.location.reload();
		});
	}
	
	var _saveMessage = function(messageText, numberText) {
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
				message: messageText,
				number: numberText
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
	
	var _renderMessages = function() {
		$.ajax({
			url: "http://localhost:9999/message/all",
			method: 'GET',
			dataType: 'json',
			crossDomain:true,
			success: function(response) {
				// { messages: messages }
				console.log(response);
				//users = response.allUsers;
				message = response;
				for(var i = 0; i < message.length; i++){
					$table.append("<tr><td>" + message[i].mobileNumber + "</td>" + "<td>" + message[i].message + "</td></tr>");
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