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
							selectAchievement(11,function(one){
								if(one.show !=1){
									//查看10个成就
									selectYourAchievementCount(function(num){
										if(num==10){
											updateData('t_achievement','show',1,16,function(){
												mui.toast('开启新成就，【成就捕手】');
												$('#achievement li').eq(15).show();
												updateData('t_sys_data','value',10,6,function(){
													$('#eqPlus').show();
												});
											});
										}
										if(num==20){
											updateData('t_achievement','show',1,17,function(){
												mui.toast('开启新成就，【成就大师】');
												$('#achievement li').eq(16).show();
												updateData('t_sys_data','value',20,6,function(){
													$('#eqPlus').show();
												});
											});
										}
									});
								}
							});
						});
					}
				});
			});
		});
	});
	
})
