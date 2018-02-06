$(function() {
	//鲜花
	$('#xianhua').on('click', function() {
		//是否购买
		selectProduct(1, function(xianhua) {
			var buy = xianhua.buy;
			if(buy == 1) {
				mui.alert('拥有美丽的玫瑰。', '玫瑰一束');
			} else {
				var btnArray = ['取消', '确定'];
				mui.confirm("美丽的玫瑰，你确定购买吗？", "价格公道", btnArray, function(e) {
					if(e.index == 1) {
						selectSysData(1, function(money) {
							var value = money.value;
							if(value < 300) {
								addSysData(7, 1);
								mui.alert('钱包余额不足………', '丑拒');
							} else {
								mui.alert('拥有美丽的玫瑰。', '购买成功', function() {
									//已购买
									minusSysData(1, 300);
									updateData('t_product', 'buy', 1, 1);
								});
							}
						});
					} else {
						mui.alert('其实她不喜欢玫瑰。', '取消购买');
					}
				});
			}
		});
	});

	//石头
	$('#shitou').on('click', function() {
		//是否购买
		mui.alert('暂时无法购买', '石头一块');
	});

	//车子
	$('#chezi').on('click', function() {
		//是否购买
		selectProduct(2, function(chezi) {
			var buy = chezi.buy;
			if(buy == 1) {
				mui.alert('拥有车子一辆。', '车子一辆');
			} else {
				var btnArray = ['取消', '确定'];
				mui.confirm("车子一辆，你确定购买吗？", "价格公道", btnArray, function(e) {
						if(e.index == 1) {
							selectSysData(1, function(money) {
								var value = money.value;
								if(value < 1000000) {
									addSysData(7, 1);
									mui.alert('钱包余额不足………', '丑拒');
								} else {
									mui.alert('拥有车子一辆。', '购买成功', function() {
										//已购买
										minusSysData(1, 1000000);
										updateData('t_product', 'buy', 1, 2);
									});
								}
							});
						} else {
							mui.alert('其实我是真的不想买了。', '取消购买');
						}
					});
				}
			});
		});

		//房子
		$('#fangzi').on('click', function() {
			//是否购买
			selectProduct(3, function(fangzi) {
				var buy = fangzi.buy;
				if(buy == 1) {
					mui.alert('拥有房子一栋。', '房子一栋');
				} else {
					var btnArray = ['取消', '确定'];
					mui.confirm("房子一套，你确定购买吗？", "价格公道", btnArray, function(e) {
						if(e.index == 1) {
							selectSysData(1, function(money) {
								var value = money.value;
								if(value < 5000000) {
									addSysData(7, 1);
									mui.alert('钱包余额不足………', '丑拒');
								} else {
									mui.alert('拥有房子一栋。', '购买成功', function() {
										//已购买
										minusSysData(1, 5000000);
										updateData('t_product', 'buy', 1, 3);
									});
								}
							});
						} else {
							mui.alert('其实我是真的不想买了。', '取消购买');
						}
					});
				}
			});
		});

		//超人套装
		$('#chaoren').on('click', function() {
			//是否购买
			selectProduct(5, function(chaoren) {
				var buy = chaoren.buy;
				if(buy == 1) {
					mui.alert('我是会飞的超人', '我的骄傲');
				} else {
					//查看魅力值
					selectSysData(2, function(one) {
						var num = one.value;
						//需要魅力值>0
						if(num <= 0) {
							addSysData(7, 1);
							mui.alert('没有适合您魅力身材的套装，您还不能购买………', '丑拒');
						} else {
							var btnArray = ['取消', '确定'];
							mui.confirm("需要250来购买此商品，你确定购买吗？", "适合身份", btnArray, function(e) {
								if(e.index == 1) {
									selectSysData(1, function(money) {
										var value = money.value;
										if(value < 250) {
											addSysData(7, 1);
											mui.alert('您不够250………', '丑拒');
										} else {
											mui.alert('穿上感觉自己更加逗比了，魅力值-1', '购买成功', function() {
												//已购买
												updateData('t_product', 'buy', 1, 5, function() {
													//魅力值减一
													minusSysData(2, 1);
													minusSysData(1, 250);
													//达成成就 逗比装备
													openAchieve(3, '逗比装备');
												});
											});
										}
									});
								} else {
									mui.alert('需要250来购买此商品，我买不起。', '机智如我');
								}
							});
						}
					});
				}
			});
		});

		$('#zhijiadao').on('click', function() {
			selectProduct(4, function(zjd) {
				var buy = zjd.buy;
				if(buy == 1) {
					selectSysData(3, function(one) {
						var level = one.value;
						if(level == 0) {
							//如果是vip0则可以暴击
							mui.alert('获得99999元钱', '一刀暴击', function() {
								addSysData(1, 99999);
								openAchieve(2, '土豪装备');
							});
						} else {
							mui.alert('获得1元钱', '一刀', function() {
								addSysData(1, 1);
							});
						}
					});
				} else {
					var btnArray = ['取消', '确定'];
					mui.confirm("指甲刀一把，价格100000", "价格公道", btnArray, function(e) {
						if(e.index == 1) {
							selectProduct(4, function(goods) {
								var price = goods.price;
								selectSysData(1, function(one) {
									var money = one.value;
									if(money >= price) {
										//减钱,设置为已买
										minusSysData(1, price);
										updateData('t_product', 'buy', 1, 4, function() {});
										mui.alert('十万大洋，买个破刀。', '购买成功');
									} else {
										addSysData(7, 1);
										mui.alert('钱包余额不足………', '丑拒');
									}
								});
							});
						} else {
							mui.alert('我是奇异翁，独钓寒江雪', '取消购买');
						}
					});
				}
			});

		});
		//黑市商人
		$('#businessMan').on('click', function() {
			var btnArray = ['取消', '确定'];
			mui.confirm("消耗一点魅力值，获得100000元", "黑市商人", btnArray, function(e) {
				if(e.index == 1) {
					selectSysData(2, function(one) {
						if(one.value > 0) {
							addSysData(1, 100000);
							minusSysData(2, 1)
							mui.alert('很有想法，但太冲动……', '购买成功');
						} else {
							mui.alert('魅力值不足……', '丑拒', function() {
								addSysData(7, 1);
								//新成就提示，成就状态为显示
								openAchieve(4, '魅力为零');
							});
						}
					})
				} else {
					mui.alert('没有想法，难成大事……', '购买失败');
				}
			});
		});

		//手表
		$('#shoubiao').on('click', function() {
			//是否购买
			selectProduct(6, function(chaoren) {
				var buy = chaoren.buy;
				if(buy == 1) {
					mui.alert('获得名表一块', '尊贵身份');
				} else {
					//确认买表
					cy1(1, 1);
				};
			});
		});

	})

	//停止对话，开始购买
	function stopConfirm(need) {
		time = 1;
		if(need > 99) {
			mui.alert("由于你的犹豫，名表已经涨价到" + need, "错失良机", function() {
				buyWatch(need);
			});
		} else {
			buyWatch(need);
		}
	};

	function buyWatch(need) {
		selectSysData(1, function(money) {
			var money = money.value;
			if(money >= need) {
				minusSysData(1, need);
				updateData('t_product', 'buy', 1, 6);
				mui.alert('你情不自禁高喊，买了个表 ！', '购买成功', function() {
					if(need == 99) {
						//成就  物美价廉  ，99元买了个表
						openAchieve(9, '物美价廉');
					}
				});
			} else {
				addSysData(7, 1);
				mui.alert('浪费这么多口舌，原来你买不起………', '丑拒');
			}
		});
	}

	//不停对话
	var time = 1;

	function confirmData(data, btn1, btn0, data1, data0, title, content, fn1, fn0) {
		if(data > 6) {
			var gap = time - data;
			var price = 99;
			for(var i = 0; i < gap; i = i + 1) {
				price = price * 10 + 9;
			}
			$.confirm({
				title: '确定取消',
				content: '难道你不是真的取消确定吗？',
				confirmButton: '确定',
				cancelButton: '取消',
				confirm: function() {
					stopConfirm(price);
				},
				cancel: function() {
					stopConfirm(price);
				}
			});

		} else {
			time = time + 1;
			if(time > 20) {
				addSysData(7, 1);
				mui.alert('不确定买就不要浪费时间了………', '丑拒', function() {
					time = 1;
				});
			} else {
				$.confirm({
					title: title,
					content: content,
					confirmButton: btn1,
					cancelButton: btn0,
					confirm: function() {
						data = data + data1;
						if(typeof fn1 === "function") {
							fn1(data);
						}
					},
					cancel: function() {
						data = data + data0;
						if(typeof fn0 === "function") {
							fn0(data);
						}
					}
				});
			}
		}
	}

	// 要买 data+1，不买data-1
	//各种对话框
	function cy1(data) {
		confirmData(data, '取消', '确定', -1, 1, '赶紧确认', '确定购买吗？', function(data) {
			console.log(data + " " + time);
			cn1(data);
		}, function(data) {
			console.log(data + " " + time);
			cy2(data);
		});

	}

	function cy2(data) {
		confirmData(data, '取消', '确定', -1, 1, '赶快确认', '难道你真的要购买吗？', function(data) {
			console.log(data + " " + time);
			cn1(data);
		}, function(data) {
			console.log(data + " " + time);
			cn3(data);
		});
	}

	function cy3(data) {
		confirmData(data, '取消', '确定', -1, 1, '飞快确认', '你不是真的要买吧？', function(data) {
			console.log(data + " " + time);
			cn2(data);
		}, function(data) {
			console.log(data + " " + time);
			cn1(data);
		});
	}

	function cn1(data) {
		confirmData(data, '取消', '确定', 1, -1, '从速确认', '你真的确定取消购买吗？', function(data) {
			console.log(data + " " + time);
			cy3(data);
		}, function(data) {
			console.log(data + " " + time);
			cn2(data);
		});

	}

	function cn2(data) {
		confirmData(data, '取消', '确定', 1, -1, '飞速确认', '难道你真的不买吗？', function(data) {
			console.log(data + " " + time);
			cy3(data);
		}, function(data) {
			console.log(data + " " + time);
			cn3(data);
		});
	}

	function cn3(data) {
		confirmData(data, '取消', '确定', 1, -1, '火速确认', '你不会真的不买吧？', function(data) {
			console.log(data + " " + time);
			cn2(data);
		}, function(data) {
			console.log(data + " " + time);
			cy2(data);
		});
	}