$(document).ready(function () {

    $("#passwordEntry").on("input", function () {

        // var textValue = $("#passwordEntry").val();

        // RenderPassword(textValue);
    });

    function RenderPassword(password) {
        console.log(password);

        $("#rendered-password-table tbody > tr").empty();

        var i;

        for (i = 0; i < password.length; i++) {

            var character = password[i];

            $("#rendered-password-table").append("<tr><td>" + character + "</td><td>" + (i + 1) + "</td></tr>");
        }
    }

    $("#display-cell1-input").on("input", function () {

        var numberValue = $("#display-cell1-input").val();
        var textValue = $("#passwordEntry").val();

        numberValue = parseInt(numberValue);
        numberValue = numberValue - 1;

        var character = textValue[numberValue];

        $("#display-cell1-value").text(character);
    });

    $("#display-cell2-input").on("input", function () {

        var numberValue = $("#display-cell2-input").val();
        var textValue = $("#passwordEntry").val();

        numberValue = parseInt(numberValue);
        numberValue = numberValue - 1;

        var character = textValue[numberValue];

        $("#display-cell2-value").text(character);
    });

    $("#display-cell3-input").on("input", function () {

        var numberValue = $("#display-cell3-input").val();
        var textValue = $("#passwordEntry").val();

        numberValue = parseInt(numberValue);
        numberValue = numberValue - 1;

        var character = textValue[numberValue];

        $("#display-cell3-value").text(character);
    });
});