// App a = new App();
var App = (function() {
	var $roomBox 		= $("#room");
	var $commandBox		= $("#command");
	var $gameStateBox	= $("#gameState");
	var $btnSave		= $("#btn-save");
	var messages		= [];
	var $responseText	= $("#responseText");
	var urlSaveMsg		= "http://localhost:9999/dragon/postpojo";
	var urlFetchMsgs	= "/api/v1/messages";
	
	var _initGUI = function() {
		$roomBox 		= $("#room");
		$commandBox		= $("#command");
		$gameStateBox	= $("#gameState");
		$btnSave		= $("#btn-save");
		$responseText	= $("#responseText");
	}
	
	// constructor
	var init = function() {
		_initGUI();
		$btnSave		= $("#btn-save");
		$btnSave.on('click', function() {
			var roomText 		= $roomBox.val();
			var commandText 	= $commandBox.val();
			var gameStateText 	= $gameStateBox.val();
			_saveMessage(roomText, gameStateText, commandText);
		});
	}
	
	var _saveMessage = function(roomText, gameStateText, commandText) {
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
				room: roomText,
				gameState: gameStateText,
				command: commandText
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
			url: urlFetchMsgs,
			method: 'GET',
			dataType: 'json',
			success: function(response) {
				// { messages: messages }
				messages = response.messages;
				for(var i = 0; i < messages.length; i++){
					$content.append("<li>" + messages[i] + "</li>");
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