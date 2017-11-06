// 聊天记录
function selectChatData(pid, uid, fn) {
	var arr = [];
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_chat where pid = ' + pid + ' and uid=' + uid, [], function(tx, results) {
			var len = results.rows.length;
			for(var i = 0; i < len; i++) {
				var obj = results.rows.item(i);
				arr.push(new chat(obj.id, obj.pid, obj.uid, obj.content));
			}
			if(typeof fn === "function") {
				fn(arr);
			}

		}, null);
	});
}

//用户信息
function selectUserData(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_user where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new user(obj.id, obj.name, obj.display);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//用户信息
function selectUserInfoData(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_user_info where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new userInfo(obj.id, obj.uid, obj.nickname, obj.signature);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//系统数据
function selectSysData(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_sys_data where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new sysData(obj.id, obj.name, obj.value);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//商品表  buy是否已买 0未买1已买 
function selectProduct(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_product where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new product(obj.id, obj.name, obj.price, obj.buy);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//抢福利摇一摇随机信息表  source 1抢福利  2摇一摇
function selectBoonInfo(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_boon_info where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new boonInfo(obj.id, obj.info, obj.source);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//附近的人
function selectLocal(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_local where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new local(obj.id, obj.info);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//成就
function selectAchievement(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_achievement where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new achievement(obj.id, obj.title, obj.info, obj.show, obj.read);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}
//全部成就
function selectAllAchievement(fn) {
	var arr = [];
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_achievement', [], function(tx, results) {
			var len = results.rows.length;
			for(var i = 0; i < len; i++) {
				var obj = results.rows.item(i);
				arr.push(new achievement(obj.id, obj.title, obj.info, obj.show, obj.read));
			}
			if(typeof fn === "function") {
				fn(arr);
			}
		}, null);
	});
}

//获得已经查看的成就数量
function selectYourAchievementCount(fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT count(*) num FROM t_achievement where read =1', [], function(tx, results) {
			var size = results.rows.item(0).num;
			if(typeof fn === "function") {
				fn(size);
			}
		}, null);
	});
}

//vip
function selectVip(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_vip where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new vip(obj.id, obj.need, obj.max);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//钱包信息
function selectMoneyInfo(money, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_money_info where min <= ' + money + ' and max >' + money, [], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new moneyInfo(obj.id, obj.min, obj.max, obj.info);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
}

//结局表
function selectResult(id, fn) {
	var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM t_result where id = ?', [id], function(tx, results) {
			var obj = results.rows.item(0);
			var one = new result(obj.id, obj.info);
			if(typeof fn === "function") {
				fn(one);
			}
		}, null);
	});
};