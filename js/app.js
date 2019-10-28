$(document).ready(function () {

    var _password = "" 

    $("#passwordEntry").on("input", function () {
        _password = $("#passwordEntry").val();
        console.log(_password);

        RenderPassword($("#display-cell1-input"), $("#display-cell1-value"));
        RenderPassword($("#display-cell2-input"), $("#display-cell2-value"));
        RenderPassword($("#display-cell3-input"), $("#display-cell3-value"));
    });

    function RenderPassword(input, label) {
        var numberValue = input.val();

        numberValue = parseInt(numberValue);
        numberValue = numberValue - 1;

        console.log("number value is " + numberValue);

        if ((isNaN(numberValue) || numberValue < 0) || numberValue >= _password.length) {
            label.text("?");
            
            label.addClass("unselected-character"); 
            return;
        } else {
            label.removeClass("unselected-character");
        }

        var character = _password[numberValue];

        if (character == " ") {
            label.html("&nbsp;");
        } else {
            label.text(character);
        }
    }

    $("#display-cell1-input").on("input", function () {
        RenderPassword($("#display-cell1-input"), $("#display-cell1-value"));
    });

    $("#display-cell2-input").on("input", function () {
        RenderPassword($("#display-cell2-input"), $("#display-cell2-value"));
    });

    $("#display-cell3-input").on("input", function () {
        RenderPassword($("#display-cell3-input"), $("#display-cell3-value"));
    });
});