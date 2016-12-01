var code;
function createCode() {
    code = "";
    var codeLength = 4;
    var checkCode = document.getElementById("checkCode");
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//���к�ѡ�����֤����ַ�����ȻҲ���������ĵ�

    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        code += selectChar[charIndex];
    }
    code.toLowerCase();
    //alert(code);
    if (checkCode) {
        checkCode.className = "code";
        checkCode.value = code;
    }
}

function validate() {
    var inputCode = document.getElementById("codeInput").value.toLowerCase();
    if (inputCode.length <= 0) {
        $('.login-tips').removeClass('hide').find('span').text("请输入验证码");
    } else if (inputCode != code.toLowerCase()) {
        $('.login-tips').removeClass('hide').find('span').text("验证码输入错误");
        createCode();
    } else {
        alert("^-^ OK");
    }
}

window.onload = createCode();
$('.btn-login').click(function() {
    validate();
});
$('.icon-refresh').click(function() {
    createCode();
});
