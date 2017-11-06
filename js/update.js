function updateData(tableName,field,value,id,fn){
    var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024); 
    db.transaction(function (tx) { 
       tx.executeSql('update '+tableName+' set '+field+' = '+value+' where id = '+id+';',[], function (tx, results) { 
       	if(typeof fn === "function") { 
            fn();
        }
     }, null);  
    });
}

//测试 待删除
function updateDataTest(){
    var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024); 
    db.transaction(function (tx) { 
       tx.executeSql('update t_chat set content ="nice to meet you danshenwang" where id =7;',[], function (tx, results) { 
     }, null);  
    });
}

function addSysData(id,value){
	selectSysData(id,function(one){
		var now = one.value;
		value = now+value;
		updateData('t_sys_data','value',value,id,function(){
			//丑拒成就
			if(id==7){
				if(value == 1){
					openAchieve(12, '被丑拒');
				}
				if(value == 10){
					openAchieve(13, '丑拒10次');
				}
				if(value == 100){
					openAchieve(14, '丑拒100次');
				}
			}
			
		});
	});
}

function minusSysData(id,value){
	selectSysData(id,function(one){
		var now = one.value;
		if(now > value){
			value = now-value;
		}else{
			value = 0;
		}
		updateData('t_sys_data','value',value,id,function(){});
	});
}

//开启成就
function openAchieve(id,info,fn){
	selectAchievement(id,function(one){
		if(one.show !=1){
			updateData('t_achievement','show',1,id,function(){
				mui.toast('开启新成就，【'+info+'】');
				$('#achievement li').eq(id-1).show();
			});
			if(typeof fn === "function") { 
           		fn();
        	}
		}
	});
}

//设置附近的人
function setLocalData(value,fn){
	updateData('t_sys_data','value',value,5,function(){
		if(typeof fn === "function") { 
       		fn();
    	}
	});
}