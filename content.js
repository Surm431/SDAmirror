$(document).ready( function(){
	// $("*").css("font-size","28px","!important"); uncomment if text need to be enlarged.
	$("*").css("color", "black","!important");
	$("*").css("background-color", "white ","!important");
	$("*").css("background", "white ","!important");
	$("img").css("-webkit-filter","grayscale(100%)","!important");
	$("img").css("filter","grayscale(100%)","!important");
	$("svg").css("-webkit-filter","grayscale(100%)","!important");
	$("svg").css("filter","grayscale(100%)","!important");
	$("*").css("filter","grayscale(100%)","!important");
});
function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-EN";//"en-EN";
    message.text = text;
    window.speechSynthesis.speak(message)
}

$(document.body).on('click', function(){
	var text = '';
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != 'Control') {
		text = document.selection.createRange().text;
	}
	speak(text);
});
