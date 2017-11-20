//聊天记录
function chat(id,pid,uid,content){
	this.id =id;
	this.pid =pid;
	this.uid =uid;
	this.content =content;
}

//用户
function user(id , name ,display){
	this.id =id;
	this.name =name;
	this.display =display;
}


//用户签名
function userInfo (id, uid, nickname ,signature){
	this.id =id;
	this.uid =uid;
	this.nickname =nickname;
	this.signature =signature;
}

//系统数据
function sysData (id , name ,value){
	this.id =id;
	this.name =name;
	this.value =value;
}

//商品表
function product(id , name ,price,buy){
	this.id =id;
	this.name =name;
	this.price =price;
	this.buy =buy;
};

//抢福利摇一摇随机信息表  source 1抢福利  2摇一摇
function boonInfo(id , info ,source){
	this.id =id;
	this.info =info;
	this.source =source;
};

//附近的人
function local(id , info){
	this.id =id;
	this.info =info;
};

//成就
function achievement(id , title,info,show,read ){
	this.id =id;
	this.title =title;
	this.info =info;
	this.show =show;
	this.read =read;
 
};


//vip等级
function vip(id , need , max){
 	this.id =id;
	this.need =need;
	this.max =max;
};

//钱包信息
function moneyInfo(id , min ,max , info){
	this.id =id;
	this.min =min;
	this.max =max; 
	this.info =info; 
};


//结局
function result(id , info,read){
	this.id =id;
	this.info =info;	
	this.read =read;	
}