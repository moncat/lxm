$(function() {
	//mui初始化
	mui.init({
		swipeBack: true //启用右滑关闭功能
	});

	//**********************init************************************

	//初始化用户信息 
	var week = new Date().getDay();
	var weekId = 1;
	if(week == 3 || week == 4) {
		weekId = 2;
	} else if(week == 5 || week == 6 || week == 0) {
		weekId = 3;
	}
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

	//初始化魅力多一点
	selectSysData(6, function(one) {
		if(one.value > 0) {
			$('#eqPlus').show();
		} else {
			$('#eqPlus').hide();
		}
	});

	operChatHint();
	//初始化人员显示
	selectUserData(2, function(feng) {
		var display = feng.display;
		if(display == 1) {
			$('#li-feng').show();
		} else {
			$('#li-feng').hide();
		}
		operChatHint();
	});
	selectUserData(3, function(fang) {
		var display = fang.display;
		if(display == 1) {
			$('#li-fang').show();
		} else {
			$('#li-fang').hide();
		}
		operChatHint();
	});

	//**********************************************************

	//每一行的点击操作
	$("[id^='with-']").on('click', function() {
		var id = $(this).attr("id");
		$('.mui-control-content').removeClass('mui-active')
		var tabId = '#tabbar-' + id;
		$(tabId).addClass('mui-active');
		$('#goBack').show();
		//做一些打开前事件处理
		if(id.indexOf('money') > 0) {
			selectSysData(1, function(one) {
				var value = one.value;
				$('#moneyNum').text(value);
				if(value >= 100000000) {
					openAchieve(5, '小目标');
				}
				selectMoneyInfo(value, function(data) {
					$('#moneyInfo').text(data.info);
				});
			})
		}
	});

	//后退按钮的点击操作
	$('#goBack').on('click', function() {
		$(this).hide();
		$('.mui-control-content').removeClass('mui-active')
		var href = $('.mui-tab-item.mui-active').attr('href');
		$(href).addClass('mui-active');
	});

	//聊天对象每一行点击操作，开始聊天
	$('#tabbar-with-chat li').on('click', function() {
		//操作红色提示点显示状态
		var id = $(this).attr('id');
		var rp = $(this).find('.redpoint');
		if(rp.is(':visible')) {
			rp.hide();
			operChatHint();
		}
		//操作界面显示状态
		$('.mui-control-content').removeClass('mui-active');
		$('#tabbar-' + id).addClass('mui-active');
		var sendId = "#send" + id.replace("li", "");
		$(sendId).addClass('mui-active');
		//操作返回按钮显示状态
		$('#goBack').show();
		//初始化我要说的第一句话
		var pid = $('#tabbar-' + id).find('ul').find('li').last().attr('data-pid');
		var dom = $(sendId).find('ul');
		var uid = getUid(id);
		selectChatData(pid, uid, function(videos) {
			var html = "";
			$.each(videos, function(i, n) {
				html += '<li class="mui-table-view-cell mui-radio mui-left" data-pid="' + n.id + '" ><input name="radio" type="radio">' + n.content + '</li>';
			});
			dom.html(html);
		});
	});

	//发送按钮
	$('div[id^="send"]').find('button').on('click', function() {
		//汪来做出选择，不做限制条件
		var btn = $(this);
		var id = btn.parent().parent().attr('id');
		var uid = getUid(id);
		var dom = btn.prev().find('li input:checked');
		if(dom == undefined || dom.length == 0) {
			mui.alert('请选择对话内容', '请选择');
			return;
		} else {
			var pid = dom.parent().attr('data-pid');
			var info = dom.parent().text();
			var tabbarId = '#tabbar-li' + id.replace('send', '');
			$(tabbarId).find('ul').append('<li data-pid="' + pid + '" >' + info + '</li>')
			var pid = $(tabbarId).find('ul').find('li').last().attr('data-pid');
			var dom = btn.prev();
			dom.html("");
		}
		var random = GetRandomNum(1200, 2400);

		//小美回复，根据汪的回答和参数设置条件
		window.setTimeout(function() {
			selectChatData(pid, uid, function(replys) {
				var obj = replys[0];
				selectSysData(1, function(money) {
					var money = money.value;
					if(replys.length > 1) {
						// TODO girl有多个数据，需要根据参数进行过滤,特殊分支比汪分支少。 一次分支建议两个
						$.each(replys, function(i, n) {
							var tmpId = n.id;
							if(money > 1000 && tmpId == 6010) {
								obj = n;
							}
						});
					} 
					commonOper(obj, id, uid, tabbarId, dom);
				});
			});
		}, random);
	});

	//测试 待删除
	$('#test').on('click', function() {
		updateDataTest();
	});

});

function commonOper(obj, id, uid, tabbarId, dom) {
	pid = obj.id;
	if(pid > 100000) {
		//结束处理
		selectResult(pid, function(one) {
			var info = one.info;
			$('#' + id).html('<span class="red-word">' + info + '</span>');
		});
	} else {
		info = obj.content;
		$(tabbarId).find('ul').append('<li data-pid="' + pid + '" >' + info + '</li>');
		//回复后设置新的汪选择框，没有限制条件
		selectChatData(pid, uid, function(videos) {
			var html = "";
			$.each(videos, function(i, n) {
				html += '<li class="mui-table-view-cell mui-radio mui-left" data-pid="' + n.id + '" ><input name="radio" type="radio">' + n.content + '</li>';
			});
			dom.html(html);
			//滚动屏幕
			var b = $(window).height(); //获取当前窗体的高度
			var c = $(document).height(); //获取当前文档的高度
			$(window).scrollTop(c - b + 47); //这个方法是当前滚动条滚动的距离
		});
	}
}

//特殊业务处理，girl选择回复
function choiceOne(obj, fn) {
	var one = null;
	var tmpId = obj.id;
	selectSysData(1, function(money) {
		var money = money.value;
		if(money > 1000 && tmpId == 6010) {
			one = obj;
		}
		if(typeof fn === "function") {
			fn(one);
		}
	});

};

//消息tab红点个数
function operChatHint() {
	var num = $('.redpoint:visible').size();
	if(num > 0) {
		$('#chatHint').text(num);
	} else {
		$('#chatHint').hide();
	}
}

function getUid(id) {
	var uid = 0;
	var idTmp = id + " ";
	if(idTmp.indexOf('mei') > 0) {
		uid = 1;
	}
	if(idTmp.indexOf('feng') > 0) {
		uid = 2;
	}
	if(idTmp.indexOf('fang') > 0) {
		uid = 3;
	}
	return uid;
}