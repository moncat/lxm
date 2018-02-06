$(function(){
	 selectAllAchievement(function(arr){
		var html="";
		$.each(arr, function(i,one) {
			html +='<li class="mui-table-view-cell"'
			if(one.show == 0){
				html+=' style="display:none" ';
			}
			html +=' data-id="'+one.id+'" data-read="'+one.read+'" data-info="'+one.info+'">'
			if(one.read == 0){
				html +='<span class="mui-badge mui-badge-danger">未读</span>';
			}
			html +='<span class="title">'+one.title+'</span></li>';
		});
		//初始化成就显示隐藏
		$('#achievement').html(html);
		
		//成就弹出框
		$('#achievement li').each(function(){
			var li = $(this);
			li.get(0).addEventListener('tap', function() {
				var obj = $(this);
				mui.alert(obj.attr('data-info'),obj.find('span.title').text(),function(){
					//如果未读
					if(obj.attr('data-read') == 0){
						//标为已读，并移除未读标识
						var id=obj.attr('data-id');
						updateData('t_achievement','read',1,id,function(){
							li.find('span.mui-badge-danger').remove();
							
							if(id==16){
								//临时开启魅力点击
								$('#eqPlus').show();
							}
							if(id==17){
								//永久开启魅力点击
								$('#eqPlus').show();
								//永久显示点击按钮
								updateData('t_sys_data', 'value', 1, 6, function() {});
								//初始化数据   8 已经点击     9需要点击 
								updateData('t_sys_data', 'value', 0, 8, function() {});
								updateData('t_sys_data', 'value', 2, 9, function() {});
							}
							if(id==15){
								minusSysData(2,4);
							}
							
							
							
							//查看10个成就
							selectYourAchievementCount(function(num){
								if(num==10){
									openAchieve(16,'成就捕手');
								}
								if(num==20){
									openAchieve(17,'成就大师');
								}
							});
							
						});
					}
				});
			});
		});
	});
	
})
