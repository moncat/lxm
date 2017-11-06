$(function(){
	if (!window.openDatabase) {    
           mui.alert('sorry，不支持该浏览器版本！','丑拒了'); 
        } else{
		   var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);  
		   db.transaction(function (tx) {    
			   	tx.executeSql('CREATE TABLE IF NOT EXISTS t_chat (id unique , pid,uid,content)');
			   	tx.executeSql('SELECT * FROM t_chat where id = 1',[], function (tx, results) { 
			       var len = results.rows.length;  
			       if(len == 0){
				       	console.log('数据初始化');
			        	initChat(tx);
			        	initUser(tx);
			        	initUserInfo(tx);
			        	initSysData(tx);
			        	initProduct(tx);
						initBoonInfo(tx);
						initLocal(tx);
						initAchievement(tx);
						initVip(tx);
						initMoneyInfo(tx);
						initResult(tx);
					}
			    });
		
		    }, null);  
        }
   	   
});


//聊天记录表
//target 1小美  2凤凤  3小芳    source1自己 2女生
//目前最后一句，最前一句都是自己    
//男单数  女双数
function initChat(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_chat (id unique , pid,uid,content)'); 
    tx.executeSql('delete from t_chat');  
   	tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (1,0,1,"how are you")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (2,1,1,"fine,thank you ,and you ?")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (3,2,1,"i am fine too,what is your name?")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (4,3,1,"i am hanmeimei ,and you ?")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (5,4,1,"i am wang")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7,4,1,"i am li lei")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (8,5,1,"nice to meet you wang")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (10,7,1,"nice to meet you lilei")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (11,10,1,"不用客气，咱们都是名人")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (12,11,1,"为什么呢？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (13,12,1,"咱们在初中课本第一页就出现了。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (14,13,1,"好吧，这是九年制义务教育，江苏教育出版社出的书，其实还是不错的，英语口语还算标准")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (15,14,1,"你说的没错。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100003,15,1,"over")');

    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6001,0,2,"你是谁啊？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6002,6001,2,"我是凤凤啊，你是谁？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6005,6002,2,"别管我是谁，我清华毕业")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6008,6005,2,"清华毕业有什么了不起的")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6010,6005,2,"清华学子智商一定很高")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6009,6008,2,"我X。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6011,6010,2,"欢迎来北京看看。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100001,6009,2,"over")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100002,6011,2,"over")');

	tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7001,0,3,"你是小芳吗？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7002,7001,3,"我是，你是谁？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7003,7002,3,"我是王wang。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7004,7003,3,"哦？高中同学")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7005,7004,3,"嘿嘿，你想起来啦")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7006,7005,3,"嗯，咱们班的体育委员呀")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7007,7006,3,"嘿嘿，你在那儿工作呢？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7008,7007,3,"我还没工作呢，我在北京上研究生")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7009,7008,3,"北京研究生，厉害啊")');


};
//聊天对象表 
// id 名称  是否显示
function initUser(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_user (id unique , name ,display)'); 
    tx.executeSql('delete from t_user');  
    tx.executeSql('INSERT OR IGNORE  INTO t_user VALUES (1, "小美",1)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_user VALUES (2, "凤凤",1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_user VALUES (3, "小芳",0)');  
};
//用户签名表
function initUserInfo(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_user_info (id unique , uid, nickname ,signature)'); 
    tx.executeSql('delete from t_user_info');  
    tx.executeSql('INSERT OR IGNORE  INTO t_user_info VALUES (1, 1,"叶落纷飞","我做的事不后悔，后悔的事我不做.")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_user_info VALUES (2, 1,"我想静静","距离我远点，我有傻X恐惧症。")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_user_info VALUES (3, 1,"慵懒的猫","吃饱了就犯困，睡醒了就害饿。")');  
};

//系统数据表
function initSysData(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_sys_data (id unique , name ,value)'); 
    tx.executeSql('delete from t_sys_data');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (1, "钱包",1000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (2, "魅力值",0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (3, "会员等级",-1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (4, "完成成就个数",0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (5, "附近的人",1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (6, "魅力多一点",0)');  //获得足够成就，则多10点魅力 
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (7, "丑拒次数",0)');  
    
};
//商品表  buy是否已买 0未买1已买 
function initProduct(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_product (id unique , name ,price,buy)'); 
    tx.executeSql('delete from t_product');  
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (1, "玫瑰",300,0)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (2, "车子",500000,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (3, "房子",5000000,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (4, "指甲刀",100000,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (5, "超人套装",250,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_product VALUES (6, "名表",99999,0)');  
};

//抢福利摇一摇随机信息表  source 1抢福利  2摇一摇
function initBoonInfo(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_boon_info (id unique , info ,source)'); 
    tx.executeSql('delete from t_boon_info');  
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (1, "轻松拿到@元钱。",1)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (2, "抢破头，抢了@元钱。",1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (3, "手机变砖头，啥都没摇到。",2)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (4, "一不小心摇丢了@元钱。",2)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (5, "轻轻一摇，丢失了@元钱。",2)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_boon_info VALUES (6, "摇到了一位女生。",2)');  
};





//附近的人
function initLocal(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_local (id unique , info )'); 
    tx.executeSql('delete from t_local');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (1, "附近没人")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (2, "小美在远方，距离我1024公里")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (3, "小美在楼上，距离我64米")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (4, "小美在这个城市，距离我16公里")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (5, "小美在洗澡间，距离我4米")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (6, "")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (7, "")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (8, "")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (9, "小芳在楼下，距离我8米")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (10, "凤凤在卧室，距离我2米")');  
 
};


//成就
function initAchievement(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_achievement (id unique , title,info,show,read )'); 
    tx.executeSql('delete from t_achievement');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (1, "突破底线","你确定不是胡乱点出来的？",0,0)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (2, "土豪装备","指甲刀一把，暴击+9999,爱心-9999。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (3, "逗比装备","我是会飞的超人，爱吃咸梅干。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (4, "魅力为零","魅力不足，请充值。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (5, "小目标","达成小目标。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (6, "摇到女生","发现女生小芳。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (7, "摇到美女","发现美女凤凤。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (8, "获得VIP0","你不是在逗我？",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (9, "物美价廉","99元买了个表",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (10, "有bug","作为补偿，多余的魅力值送你一点。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (11, "赠送鲜花","送人玫瑰，手有余香。",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (12, "被丑拒","我和彭于晏差距很大吗？",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (13, "丑拒10次","今天对我爱答不理，明天让你高攀不起。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (14, "丑拒100次","肯定是这个世界的错误。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (15, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (16, "成就捕手","达成10个成就，魅力果然不止一点。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (17, "成就大师","达成20个成就，魅力果然不止一点。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (18, "成就终结者","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (19, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (20, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (21, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (22, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (23, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (24, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (25, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (26, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (27, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (28, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (29, "","",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (30, "豪华馈赠","凤凤送我豪车一辆。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (31, "人傻钱多","你不傻为什么还这么穷呢？",0,0)');  //低EQ聊天后，钱多于250 减少至250 
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (32, "牵手小美","你和小美快乐地在一起",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (33, "凤凤牵你","凤凤和你幸福地在一起了",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (34, "牵手小芳","你和青梅竹马的小芳在一起",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (35, "一脸懵逼","感觉自己萌萌哒",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (36, "好心累","为什么她不愿意和我在一起",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (37, "曾经错过","错过了，然后就，就没有了……",0,0)');  
 
};

//vip等级表
function initVip(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_vip (id unique , need , max)'); 
    tx.executeSql('delete from t_vip');  
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (1, 200,50)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (2, 300,100)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (3, 500,200)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (4, 1000,500)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (5, 2000,1000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (6, 5000,1000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (7, 10000,1000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (8, 20000,1800)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (9, 100000,10000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_vip VALUES (0, 200000,10)'); 
};


//钱包信息表
function initMoneyInfo(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_money_info (id unique , min ,max , info)'); 
    tx.executeSql('delete from t_money_info');  
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (1, 0,1000,"饥寒交迫，吃了上顿没下顿。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (2, 1000,10000,"省吃俭用，先养活自己再说。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (3, 10000,50000,"补贴家用，照顾家人，是我的责任。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (4, 50000,500000,"小康生活，家里可以再添点东西了。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (5, 500000,1000000,"小资生活，摇一摇都有缘分。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (6, 1000000,10000000,"生活富裕，随心随性。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (7, 10000000,100000000,"富贵人家，投资理财是一门学问。")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (8, 100000000,1000000000000,"小目标达成，其实我家很普通的，就比你多一点钱。")'); 
};


//结局表
function initResult(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_result (id unique , info)'); 
    tx.executeSql('delete from t_result');  
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100001, "感觉自己萌萌哒……")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100002, "快点坐稳了，老司机发车啦！！！")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100003, "本可以靠颜值，非要靠才华！！！")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100004, "")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100005, "")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100006, "我要睡觉了，88")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100007, "那个，我闺女来找我去逛街，我出去了，88")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100008, "那个，我去洗澡了。byebye")'); 
};
