$(function(){
	
	//mui初始化
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});
	
	//初始化mei用户信息 
	var weekId = getWeek();
	selectUserInfoData(weekId, function(one) {
		$('#userInfoId').attr("userInfoId", weekId);
		$('#nickname').text(one.nickname);
		$('#signature').text(one.signature);
	});

	//初始化显示隐藏
	//底线与黑市商人
	selectAchievement(1, function(one) {
		if(one.show == 1) {
			$('#belowLine').hide();
			$('#businessMan').show();
		}
	});

	//初始化会员等级
	selectSysData(3, function(one) {
		var level = one.value;
		if(level == -1) {
			$('#vipLevel').text('nobody');
		} else {
			$('#vipLevel').text('VIP' + level);
		}
	});

	//初始化[魅力多一点] 魅力值增加功能是否显示
	selectSysData(6, function(one) {
		if(one.value > 0) {
			$('#eqPlus').show();
		} else {
			$('#eqPlus').hide();
		}
	});
	
	//初始化消息tab红点
	operChatHint();
	
//	var now = new Date().getTime();
	
	//初始化时间	
	selectSysData(4, function(one) {
		
		var newtime = new Date();
	
		var now = newtime.getTime();
	
		var oldtime = new Date(one.value);
		
		
		
		var old = one.value;
		if(old>now){
			//现在往前修改了时间  或    曾经往后修改过系统时间
			//查看作弊次数
			selectSysData(10, function(two) {
				if(two.value==0){
					mui.toast('修改系统时间，很机智，魅力值+2');
					addSysData(2, 2);
				}else if(two.value==1){
					mui.toast('再次修改了系统时间，魅力值+1');
					addSysData(2, 1);
				}else if(two.value==2){
					openAchieve(15, '作弊行为');
				}
				//增加作弊次数
				addSysData(10,1);
			});
		}else{
			//初始化处罚，三天没登陆开始
			//24*60*60*1000=86400000
			if(now-old>86400000*30){
				//超过一月处罚,  没收房子 或 没收车子  或  没收指甲刀  或 减少金钱100000
				//324
				selectProduct(3,function(one){
					if(one.buy==1){
						mui.alert('你没在的这段时间，房子被拆迁掉了','违法建筑');
						updateData('t_product','buy',0,3);  //没收房子
					}else{
						selectProduct(2,function(two){
							if(two.buy==1){
								mui.alert('你没在的这段时间，车子被你弟弟撞坏了','丢了车子');
								updateData('t_product','buy',0,2);  //没收车子
							}else{
								selectProduct(4,function(three){
									if(three.buy==1){
										mui.alert('你没在的这段时间，神器被系统回收了','丢了指甲刀');
										updateData('t_product','buy',0,4);  //没收指甲刀
									}else{
										mui.alert('你没在的这段时间，钱包被人借用了','少了十万元');
										minusSysData(1,100000);//减少金钱100000
									}
								});
							}
						});
					}
				});
			}else if(now-old>86400000*7){
				//超过一周处罚,  没收指甲刀  或  减少金钱100000
				selectProduct(4,function(three){
					if(three.buy==1){
						mui.alert('你没在的这段时间，神器被系统回收了。','丢了指甲刀');
						updateData('t_product','buy',0,4);  //没收指甲刀
					}else{
						mui.alert('你没在的这段时间，钱包被人借用了。','少了十万元');
						minusSysData(1,100000);//减少金钱100000
					}
				});
			}else if(now-old>86400000*3){
				//超过三天处罚,减少金钱10000
				mui.alert('你没在的这段时间，钱包被人借用了.','少了一万元');
				minusSysData(1,10000);//减少金钱10000
			}
		}
		updateData('t_sys_data', 'value', now, 4);
	});
	
	
	
	
	//初始化人员显示  凤是否显示
	selectUserData(2, function(feng) {
		var display = feng.display;
		if(display == 1) {
			$('#li-feng').show();
		} else {
			$('#li-feng').hide();
		}
		operChatHint();
	});
	
	//芳是否显示
	selectUserData(3, function(fang) {
		var display = fang.display;
		if(display == 1) {
			$('#li-fang').show();
		} else {
			//计算凤位置，是否离开
			selectSysData(5, function(one){
				var value = one.value;
				if(value==9){
					//凤离开
					$('#li-fang').show();
					updateData('t_user', 'display', 1, 3, function() {});
				}else{
					$('#li-fang').hide();
				}
			});
			
		}
		operChatHint();
	});


	selectSysData(1, function(one) {
		setData('money',one.value);				
	})

	selectSysData(2, function(one) {
		setData('charm',one.value);				
	})

	
})

//消息tab红点个数
function operChatHint() {
	var num = $('.redpoint:visible').size();
	if(num > 0) {
		$('#chatHint').text(num);
	} else {
		$('#chatHint').hide();
	}
}