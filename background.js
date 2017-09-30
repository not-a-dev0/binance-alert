window.onload = function() {
		
	//audioNotification();
	//createNotification("Dikkat", "WTC 5e geriledi");

	setTimeout(function(){
		check();
	},1000);

}

function audioNotification(){
    var alert = new Audio('sounds/sms-alert-1-daniel_simon.mp3');
    alert.play();
}

function createNotification(title,message){
    var opt = {type: "basic",title: title,message: message,iconUrl: "icon.png"}
    chrome.notifications.create("notificationName",opt,function(){});

    setTimeout(function(){chrome.notifications.clear("notificationName",function(){});},5000);
}

function check(){

	if (jQuery) { 
		var latest  = "body > div.wrap > div.detail-main > div > div.detail-rt.f-clear > div.f-fl > div > table:nth-child(3) > tbody > tr > th > span:nth-child(1) > span";
		var green = "body > div.wrap > div.detail-main > div > div.detail-rt.f-clear > div.f-fl > div > table:nth-child(3) > tbody > tr > th > span:nth-child(1) > span.ng-binding.green";
		var magente = "body > div.wrap > div.detail-main > div > div.detail-rt.f-clear > div.f-fl > div > table:nth-child(3) > tbody > tr > th > span:nth-child(1) > span.ng-binding.green";
		var arrow   = "body > div.wrap > div.detail-main > div > div.detail-rt.f-clear > div.f-fl > div > table:nth-child(3) > tbody > tr > th > span:nth-child(1) > span";
		
		console.log("xxxDEĞERRRR:" + $(latest).text());
		console.log("xxxDüştü:" + $(magente).text());
		console.log("xxYükseldi:" + $(green).text());

		if($( arrow ).hasClass( "green" )){
			console.log("xxxxxxx1111");
		}else if($( arrow ).hasClass( "magenta" )){
			console.log("xxxxxx22222");
		}

	} else {
	    alert("jQuery yüklenemedi");
	}
}