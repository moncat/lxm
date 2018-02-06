$(function() {

	//每一行的点击操作  点击进入聊天
	$("[id^='with-']").on('click', function() {
		var id = $(this).attr("id");
		//隐藏其他div 显示本聊天内容div
		$('.mui-control-content').removeClass('mui-active')
		var tabId = '#tabbar-' + id;
		$(tabId).addClass('mui-active');
		$('#goBack').show();
		//做一些打开前事件处理  如果打开的是钱包
		if(id.indexOf('money') > 0) {
			selectSysData(1, function(one) {
				var value = one.value;
				setData('money',value);
				$('#moneyNum').text(value);
				if(value >= 100000000) {
					openAchieve(5, '小目标');
				}
				//关于钱的小提示
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
		//三个人的发送按钮
		var sendId = "#send" + id.replace("li", "");
		$(sendId).addClass('mui-active');
		//操作返回按钮显示状态
		$('#goBack').show();
		//初始化我要说的第一句话 ,对话内容第一行找到该用户id
		var pid = $('#tabbar-' + id).find('ul').find('li').last().attr('data-pid');
		var dom = $(sendId).find('ul');
		//初始化刚开始的 王--单选框
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
		//必须选择一行才能提交
		if(dom == undefined || dom.length == 0) {
			mui.alert('请选择对话内容', '请选择');
			return;
		} else {
			//将此条信息提交到聊天界面，并置空单选的dom
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
				// TODO girl有多个数据，需要根据参数进行过滤,特殊分支一次分支两个
				
				if(replys.length > 1) {
					//特殊处理
					choiceOne(replys, function(obj){
						commonOper(obj, id, uid, tabbarId, dom);
					});
				}else {
					commonOper(replys[0], id, uid, tabbarId, dom);
				}
				
			});
		}, 1);
	});

	//测试 待删除
	$('#test').on('click', function() {
		updateDataTest();
	});

});

//对话的常规操作  TODO 需要改结束条件
function commonOper(obj, id, uid, tabbarId, dom) {
	var pid = obj.id;
	var type= obj.type;
	//节点转折处理
	if(type == 4) {
		//结束处理
		selectResult(pid, function(one) {
			var info = one.info;
			$('#' + id).html('<span class="red-word">' + info + '</span>');
			var local = one.local;
			var over = one.over;
			//附近的人，每次都更新
			if(local != 0){
				updateData('t_sys_data', 'value', local, 5, function() {});
			}
			
			if(over == 0){
				//更新魅力值
				var charm = one.charm;
				if(charm>0){
					mui.toast('获得'+charm+"点魅力！");
					addSysData(2,charm);
				}else if(charm<0){
					charm = Math.abs(charm);  
					mui.toast('弄丢'+charm+"点魅力！");
					minusSysData(2,charm);
				}
				//设置over 为1
				updateData('t_result', 'over', 1, pid, function() {});
				
			}
			
		});
	} else {
		//未结束 添加王的单选选项
		info = obj.content;
		$(tabbarId).find('ul').append('<li data-pid="' + pid + '" >' + info + '</li>');
		//回复后设置新的汪选择框，没有限制条件
		selectChatData(pid, uid, function(videos) {
			var html = "";				
			//我goon 转折到我
			var type= videos[0].type;
			if(type == 9){
				 var info = videos[0].info;
 				 var changeId = parseInt(info);
				 selectOneChatData(changeId, uid, function(n) {
					html += '<li class="mui-table-view-cell mui-radio mui-left" data-pid="' + n.id + '" ><input name="radio" type="radio">' + n.content + '</li>';
					dom.html(html);
					//滚动屏幕
					var b = $(window).height(); //获取当前窗体的高度
					var c = $(document).height(); //获取当前文档的高度
					$(window).scrollTop(c - b + 47); //这个方法是当前滚动条滚动的距离
				 });
			}else{
				//原来无转折
				$.each(videos, function(i, n) {
					html += '<li class="mui-table-view-cell mui-radio mui-left" data-pid="' + n.id + '" ><input name="radio" type="radio">' + n.content + '</li>';
				});
				dom.html(html);
				//滚动屏幕
				var b = $(window).height(); //获取当前窗体的高度
				var c = $(document).height(); //获取当前文档的高度
				$(window).scrollTop(c - b + 47); //这个方法是当前滚动条滚动的距离
			}			
			
		});
	}
}

//特殊业务处理，girl选择回复  TODO 是否删除
function choiceOne(replys, fn) {
	//默认走第一个，特殊走第二个，第三个
	var one = replys[0];
	$.each(replys, function(i, n) {
		var tmpId = n.id;
		var type = n.type;
		var typeStr = n.type+"";
		
		
		var flg = true;
		if(type>0){				
			//关于钱的flg 
			var arr = n.info.split(',');
			if(typeStr.indexOf("1")>=0){
				var money = getData('money');
				if(parseInt(money) < parseInt(arr[0]) ) {
					flg = false;	
				}
			}
			//****关于魅力的flg
			if(typeStr.indexOf("2")>=0){
				var charm = getData('charm');
				if(parseInt(charm)  < parseInt(arr[1]) ) {
					flg = false;	
				}
			}
			//****关于其他的flg
			//......
			if(flg){
				one = n;
			}
		}
	});
	
	if(typeof fn === "function") {
		fn(one);
	}
};



//获得用户id 是否修改 
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