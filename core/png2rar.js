/*
方法名：rar压缩
参数：
password
zipFilePath
srcFilePath
例如： 


start C:\WinRAR\WinRAR.exe a -ep -P123 D:\1.rar D:\1.png
start "" "C:\Program Files\WinRAR\WinRAR.exe" a -ep -P123 D:\1.rar D:\1.png

 * */

var fs = require("fs");
var exec = require('child_process').exec;

rar = function(param){
	// exec('setx WINRAR "C:\Program Files\WinRAR" /m')
	// exec('setx "Path" "C:\Program Files\WinRAR;%path%"')
    var cmdStr = 'start "" "C:\Program Files\\WinRAR\\WinRAR.exe" a -ep -P'+param.password+' '+param.zipFilePath+' '+param.srcFilePath+' -y -df';
    console.log(">> cmdStr:",cmdStr);
    fs.exists(param.srcFilePath, function(exists) {  //判断路径是否存在
        if(exists) {
			 console.log(">> cmdStr:",cmdStr);
            exec(cmdStr); 
        } else {
			console.log(">> 11111111111111 cmdStr:",cmdStr); 
             
        }
    });
}

rar({
	password:"123",
	zipFilePath:"D:\\1.rar",
	srcFilePath:"D:\\1.png",
}) 
 