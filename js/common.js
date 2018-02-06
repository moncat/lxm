
//产生随机数
function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
//睡眠毫秒数
function sleep(numberMillis) {
	var now = new Date();
	var exitTime = now.getTime() + numberMillis;
	while(true) {
		now = new Date();
		if(now.getTime() > exitTime)
			return;
	}
}

function getWeek(){
	var week = new Date().getDay();
	var weekId = 1;
	if(week == 3 || week == 4) {
		weekId = 2;
	} else if(week == 5 || week == 6 || week == 0) {
		weekId = 3;
	}
	return weekId;
}
