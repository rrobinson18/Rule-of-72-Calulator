$(document).ready(function () {
    $("button").onclick(function () {
        if ($("#param").val() == 1) {
            CalcRule1();
        } else if ($("#param").val() == 2) {
            CalcRule();
        }
    });
});