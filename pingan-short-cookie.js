ss =  `"WT-FPC=id=4.0.4.42-4227994960.30778615:lv=1577262562301:ss=1577262537058:fs=1574841307242:pn=9:vn=3; BSFIT4_OkLJUJ=FHWb9IbVF9mHyMPppB1F1OwQx7rILGVz; fp_ver=4.7.5; BSFIT4_DEVICEID=j4c5ecBDPfB863yIZH_lNCH5vaVPt0-Dr75bbfnr-x_tpUP7lK2ETcNSzqGPPubnJ455682m5hbKEJscWee4NlFe6cqG7PuGXEsviBv-j0gCgbqQYn4BgE5xYHPYJbXh5v1g_13u0FX5TeBEH1rqcBy58GwuvcgA; WEBTRENDS_ID=4.0.4.42-4227994960.30778615; BSFIT4_EXPIRATION=1577331156111; PAEBANK_PARAM_W={"outerid":"","downapp_id":"","cid":""}; sdc_PABankParam=WT.source%3D%26WT.outersource%3D%26WT.channel_source%3D%26WT.innerid%3D%26WT.campaignid%3D%26WT.usertagid%3D%26WT._bid_id%3D%26WT.strategyid%3D%26WT.traceid%3D%26WT.ai_id%3D; PAEBANK_PARAM_N={"source":"","outersource":"","channel_source":"","innerid":"","campaignid":"","usertagid":"","_bid_id":"","strategyid":"","traceid":"","ai_id":""}; WEBTRENDS_SESSIONID=d1e47b0a-dab6-4846-8019-6e12a27abd33; WT_DC=; NGWhitelist=100601,100602; PAEBANK_PARAM=%7B%22source%22%3A%22%22%2C%22outersource%22%3A%22%22%2C%22channel_source%22%3A%22%22%2"`
var newCookie =""
var arr = ss.split(";")
function modify(s){
    var tmp = s.split("=")[0]
    s = s.split("=")[1]
    var json= JSON.parse(s)
    for(var e in json){
        if(json[e] === ""){
            delete json[e]
        }
    }
    var jsonStr = JSON.stringify(json)
    if(jsonStr ==="{}"){
       return ""    
    }
    return tmp +"=" +JSON.stringify(json)
}
function clear(s){
   if(s.split("=")[1].replace(/\s+/g, "") ===""){
       return ""    
   }
   return s;    
}
for(var i= 0;i <arr.length;i++){
    if(arr[i].indexOf("{")>-1){
        newCookie += modify(arr[i]) +";"
    }else{
        newCookie +=clear(arr[i]) +";"
    }
}
 newCookie = newCookie.replace(/\s+/g, "")
