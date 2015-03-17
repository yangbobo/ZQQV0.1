/**
 * Created by SDX on 2014/9/10.
 * vision:1.0
 * title:
 * e-mail:jrshenduxian@jd.com
 */
(function () {
	
    var $input = $("#emojiInput");
    var $emojiItem = $("#emoji_1").find("i");

    $emojiItem.on("tap", function () {
    	$(".btn-send").addClass("highlighted");
        $input.blur();
        var currentVal = $input.val();
        var index = $input[0].selectionStart;
        var emoji = $(this).attr('data-emoji');
        var newText = "";
        if (index) {
            var reg = new RegExp("(\.|\n){" + index + "}");
            newText = currentVal.replace(reg, function (e) {
                return (e + emoji);
            })
        } else if (index == 0) {
            newText = emoji + currentVal;
        } else {
            newText = currentVal + emoji;
        }
        $input.val(newText);
        $input[0].selectionStart = index + parseInt(emoji.length);

    });
})();