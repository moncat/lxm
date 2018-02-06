$(function() {

	//抢福利
	$('#weal').get(0).addEventListener('tap', function() {
		//查询会员等级
		selectSysData(3, function(one) {
			var vipLevel = one.value;
			if(vipLevel ==-1){
				vipLevel = 0;
			}
			selectVip(vipLevel, function(vip) {
				var max = vip.max;
				var min = 1;
				var percent = GetRandomNum(1, 3);
				var id = 1;
				var weal = 0;
				var mid = max / 2;
				if(percent < 3) {
					weal = GetRandomNum(min, mid);
					id = 2;
				} else {
					weal = GetRandomNum(mid + 1, max);
				}
				selectBoonInfo(id, function(boon) {
					var info = boon.info;
					info = info.replace('@', weal);
					mui.alert(info, '抢福利', function() {
						addSysData(1, weal);
					});
				});
			});
		});
	});

	//摇一摇
	$('#rock').get(0).addEventListener('tap', function() {
		//魅力值大于10,摇到小芳
		selectAchievement(6, function(one) {
			if(one.show != 1) {
				selectSysData(2, function(charm) {
					var cv = charm.value;
					if(cv > 10) {						
						openAchieve(6,'摇到女生', function() {						
							$('#li-fang').show();
							operChatHint();
							updateData('t_user', 'display', 1, 3);
						});
					}else{
						getFeng();
					}
				});
			} else {
				getFeng()
			}
		});
	});

	//点击微博链接
		$('#weibo').get(0).addEventListener('tap', function() {
			mui.alert("点击此链接将无法回到聊天页面", "有bug",function() {
				openAchieve(10,"有bug",function(){
					addSysData(2,1);
				});
				location.href="https://m.weibo.cn/u/1613423047";
			});
			
		});

	//附近的人
	$('#local').get(0).addEventListener('tap', function() {
		selectSysData(5, function(one) {
			var value = one.value;
			selectLocal(value, function(local) {
				var info = local.info;
				mui.alert(info, '附近的人');
			});
		});
	});

	//显示我的魅力值
	$('#eq').get(0).addEventListener('tap', function() {
		selectSysData(2, function(one) {
			mui.alert(one.value + '', '魅力值');
		})
	});

	//增加魅力值
	$('#eqPlus').get(0).addEventListener('tap', function() {
		//需要点击
		selectSysData(9, function(one) {
			//已经点击
			selectSysData(8, function(two) {
				var twoValue = two.value;
				var oneValue = one.value;
				if(oneValue> twoValue) {
						mui.toast('你的魅力值不止一点  '+twoValue+"/"+oneValue);
						addSysData(8, 1);
				} else {
					if(oneValue ==256){					
						mui.alert('祝贺你，所有魅力值已经收取完毕', '收集完毕');
						addSysData(2, 1);
					}else if(oneValue ==512){
						mui.alert('已经没有魅力值，手机点坏，概不负责', '真的收集完毕');
					}else if(oneValue ==1024){
						mui.alert('点击了这么多次，佩服,获得20点魅力值', '套路完毕');
						addSysData(2, 20);
						//开启成就
						openAchieve(19,'坚持不懈');
					}else {
						mui.toast('你获得了一点魅力值');
						addSysData(2, 1);
						
					}
					addSysData(9, oneValue);
				}
			});
		});
	});

	//vip升级
	$('#vip').get(0).addEventListener('tap', function(e) {
		selectSysData(3, function(one) {
			var level = one.value;
			var tmp = 0;
			var v0 = false;
			if(level == -1) {
				level = 0;
			}
			if(level != 9) {
				tmp = level + 1;
			}else{
				//准备升级到vip0
				v0 = true;
			}
			selectVip(tmp, function(vip) {
				var need = vip.need;
				var btnArray = ['取消', '确定'];
				mui.confirm("确认升级会员特权到VIP" + tmp + "？只要" + need + "买不到吃亏，买不到上当。", "会员特权", btnArray, function(e) {
					if(e.index == 1) {
						selectSysData(1, function(money) {
							var money = money.value;
							if(money >= need) {
								//减钱,加等级
								minusSysData(1, need)
								updateData('t_sys_data', 'value', tmp, 3, function() {});
								mui.alert('您已升级为VIP' + tmp, '开通成功', function() {
									$('#vipLevel').text('VIP' + tmp);
									if(v0){
										openAchieve(8,'vip0');
									}
								});
							} else {
								addSysData(7,1);
								mui.alert('钱包余额不足………', '丑拒');
							}
						});
					} else {
						mui.alert('Follow your heart！！', '取消开通');
					}
				});
			});
		});
	});

	//突破底线
	var i = 0;
	$('#belowLine').on('click', function() {
		i++;
		if(i > 5) {
			mui.alert('有胆量突破底线，那就该认识一下我的朋友', '突破底线', function() {
				//开启新成就  隐藏底线，显示商人
				$('#belowLine').hide();
				$('#businessMan').show();
				openAchieve(1, '突破底线');
			});
		}
	});

})


function getFeng(){
	selectAchievement(7, function(one) {
		if(one.show != 1) {
			selectSysData(1, function(money) {
				var remain = money.value;
				if(remain == 0) {
					mui.alert("手机变砖头，啥都没摇到。", '摇一摇');
				} else if(remain > 500000) {
					//金钱大于50万开启					
					openAchieve(7,'摇到美女', function() {
						$('#li-feng').show();
						operChatHint();
						updateData('t_user', 'display', 1, 2);
					});
					
				}else{
					minusMoney();
				}
			});
		} else {
			minusMoney();
		}
	});
}


function minusMoney() {
	selectSysData(1, function(money) {
		var remain = money.value;
		if(remain == 0) {
			mui.alert("手机变砖头，啥都没摇到。", '摇一摇');
		} else {
			//查询会员等级
			selectSysData(3, function(one) {
				var vipLevel = one.value;
				if(vipLevel ==-1){
					vipLevel = 0;
				}
				selectVip(vipLevel, function(vip) {
					var max = vip.max;
					var min = 1;
					var percent = GetRandomNum(1, 3);
					var id = 5;
					var weal = 0;
					var mid = max / 2;
					if(percent == 3) {
						weal = GetRandomNum(min, mid);
						id = 4;
					} else {
						weal = GetRandomNum(mid + 1, max);
					}
					if(weal > remain) {
						weal = remain;
					}
					selectBoonInfo(id, function(boon) {
						var info = boon.info;
						info = info.replace('@', weal);
						mui.alert(info, '摇一摇', function() {
							minusSysData(1, weal);
						});
					});
				});
			});
		}
	});
}