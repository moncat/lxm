$(function(){
	if (!window.openDatabase) {    
           mui.alert('sorry，不支持该浏览器版本！','丑拒了'); 
        } else{
		   var db = window.openDatabase('chatDataBase', '1.0', 'chat DB', 2 * 1024 * 1024);  
		   db.transaction(function (tx) {    
			   	tx.executeSql('CREATE TABLE IF NOT EXISTS t_chat (id unique , pid,uid,type,info,content)');
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
/**
 * 兄弟，你最终还是打开了这个页面，其实这个页面连beggarVIP都没有，
 * 如果你要做攻略，我在这里支持你，
 * 如果你说有bug，你可以告诉我，我会努力改正，
 * 如果你要乱改代码，我只想说程序员何必为难程序员呢。
 */
//聊天记录表
//target 1小美  2凤凤  3小芳    source1自己 2女生
//目前最后一句，最前一句都是自己    
function initChat(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_chat (id unique , pid,uid,type,info,content)'); 
    tx.executeSql('delete from t_chat');  
   	tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (1,0,1,0,"","how are you")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (2,1,1,0,"","fine,thank you ,and you ?")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (3,2,1,0,"","i am fine too,what is your name?")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (4,3,1,0,"","i am hanmeimei ,and you ?")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (5,4,1,0,"","i am wang")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7,4,1,0,"","i am li lei")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (8,5,1,0,"","nice to meet you wang")');
     tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (9,8,1,9,"7","goon")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (10,7,1,0,"","nice to meet you lilei")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (11,10,1,0,"","不用客气，咱们都是名人")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (12,11,1,0,"","为什么呢？")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (13,12,1,0,"","咱们在初中课本第一页就出现了。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (14,13,1,0,"","好吧，这是九年制义务教育，江苏教育出版社出的书，其实还是不错的，英语口语还算标准")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (15,14,1,0,"","你说的没错。")');
    tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100003,15,1,0,"","over")');
//******************ff**********************
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200001, 2540038383681536, 2, 4, NULL, '你被凤凤嫌弃了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200002, 2542780525854720, 2, 4, NULL, '你被凤凤呵呵了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200003, 2540044048891904, 2, 4, NULL, '周末去女生单身宿舍')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200004, 2540045483556864, 2, 4, NULL, '你是个诚实的人')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200005, 2540046954201088, 2, 4, NULL, '不按照套路出牌啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200006, 2540048404037632, 2, 4, NULL, '你伤害了一个爱慕你的女孩的心')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200007, 2540069336055808, 2, 4, NULL, '好无聊，周末干嘛呢？再说吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200008, 2540071910178816, 2, 4, NULL, '周末要陪女生，实验就先放一下吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200009, 2540084528332800, 2, 4, NULL, '有钱了不起啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200010, 2540088490573824, 2, 4, NULL, '你是个骗子')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200011, 2540089365381120, 2, 4, NULL, '曾经一个漂亮的女秘书在身边，你没有珍惜')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200012, 2540092036628480, 2, 4, NULL, '伺候女生不会比上班还累吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200013, 2540092509503488, 2, 4, NULL, '好难伺候啊，心累')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (200014, 2540093223174144, 2, 4, NULL, '现在女生都这么怪吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540029341728768, 0, 2, 0, NULL, '美女，聊一百块钱的吧。')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540029763403776, 2540029341728768, 2, 0, NULL, '你是谁啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540029887119360, 2540029763403776, 2, 0, NULL, '你不认识我吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540030019207168, 2540029887119360, 2, 0, NULL, '我不记得你是谁啊，我怎么加你为好友的?')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540031431131136, 2540030019207168, 2, 0, NULL, '是我把你摇出来')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540033154514944, 2540031431131136, 2, 0, NULL, '好吧，你在北京？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540033276526592, 2540033154514944, 2, 0, NULL, '对啊，我是北大的学生')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540033646985216, 2540033154514944, 2, 0, NULL, '嗯，我在北京工作')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540034025750528, 2540033276526592, 2, 0, NULL, '真的假的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540035351134208, 2540034025750528, 2, 0, NULL, '你看我信息就知道了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540035514171392, 2540035351134208, 2, 0, NULL, '厉害啊，你是北京人本地人吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540035656957952, 2540035514171392, 2, 0, NULL, '是啊，我家在石景山区')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540035862446080, 2540035656957952, 2, 0, NULL, '那真的是缘分啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540035999514624, 2540035862446080, 2, 0, NULL, '这话怎么说？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540036989190144, 2540035999514624, 2, 0, NULL, '我今天的星运提示爱情运是五星')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540037216616448, 2540036989190144, 2, 0, NULL, '这都是娱乐你也信吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540037447581696, 2540037216616448, 2, 0, NULL, '怎么不信啊，这都很准的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540037610569728, 2540037447581696, 2, 0, NULL, '好吧，随便你说')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540037874221056, 2540037610569728, 2, 0, NULL, '你都不相信我，我给你说什么啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540038094274560, 2540037874221056, 2, 0, NULL, '那你想怎样啊？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540038260981760, 2540038094274560, 2, 0, NULL, '你这人真没趣')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540038383681536, 2540038260981760, 2, 0, NULL, '我X')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540039083212800, 2540037874221056, 2, 0, NULL, '我了解的不多，你给我讲解一下吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540039389626368, 2540039083212800, 2, 0, NULL, '好啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540040486387712, 2540037447581696, 2, 0, NULL, '那举个例子呗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540040645918720, 2540040486387712, 2, 0, NULL, '我是白羊座，就是一个非常急性子的人。')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540040853094400, 2540040645918720, 2, 0, NULL, '白羊座，我听说过，很活泼开朗，天不怕地不怕')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540041072476160, 2540040853094400, 2, 0, NULL, '也不要惹我，我脾气很火爆的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540041392996352, 2540041072476160, 2, 0, NULL, '那不就是女汉子吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540041570861056, 2540041392996352, 2, 0, NULL, '俺是有小嫩肤的小美女好不好')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540041735847936, 2540041570861056, 2, 0, NULL, '嗯，看这身材不错，一转脸，吓死爹了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540041873981440, 2540041735847936, 2, 0, NULL, '-_-!')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540042018668544, 2540041873981440, 2, 0, NULL, 'O(∩_∩)O')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540042990256128, 2540041072476160, 2, 0, NULL, '是地雷吗，一言不合就 爆')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043247992832, 2540042990256128, 2, 0, NULL, '你才地雷呢，你NND')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043373723648, 2540043247992832, 2, 0, NULL, '什么鬼这是，还拽缩写。')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043471372288, 2540043373723648, 2, 0, NULL, '你猜')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043579392000, 2540043471372288, 2, 0, NULL, '你能耐大？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043725733888, 2540043579392000, 2, 0, NULL, '能耐大个屁，你奶奶的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043841847296, 2540043725733888, 2, 0, NULL, '我去，厉害了，我服')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540043935268864, 2540043841847296, 2, 0, NULL, '说正事，周末有空吗，来找我玩吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540044048891904, 2540043935268864, 2, 0, NULL, '好吧，周末见')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540044993675264, 2540041072476160, 2, 0, NULL, '谁惹你啊，咱们又不熟')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540045122453504, 2540044993675264, 2, 0, NULL, '你现在惹我了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540045226131456, 2540045122453504, 2, 0, NULL, '我擦，遇到个神经病')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540045388414976, 2540045226131456, 2, 0, NULL, '滚')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540045483556864, 2540045388414976, 2, 0, NULL, '……')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046108999680, 2540036989190144, 2, 0, NULL, '厉害了，妹子')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046223425536, 2540046108999680, 2, 0, NULL, '我心上人来了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046494351360, 2540046223425536, 2, 0, NULL, '不会是我吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046604288000, 2540046494351360, 2, 0, NULL, '对啊对啊，就是你，咱们大家立刻开始这段感情吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046711816192, 2540046604288000, 2, 0, NULL, '是不是要我亲你一下啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046830649344, 2540046711816192, 2, 0, NULL, '呦，神经病')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540046954201088, 2540046830649344, 2, 0, NULL, '我，……')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540047480750080, 2540046604288000, 2, 0, NULL, '好啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540047579168768, 2540047480750080, 2, 0, NULL, '那你亲我一下')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540047690153984, 2540047579168768, 2, 0, NULL, '好啊，你得先拿个信物证明一下呀')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540047792259072, 2540047690153984, 2, 0, NULL, '向女生要什么礼物啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540047927017472, 2540047792259072, 2, 0, NULL, '没有啊，是信物不是礼物')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540048056844288, 2540047927017472, 2, 0, NULL, '解释就是掩饰，掩饰就是放肆')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540048190390272, 2540048056844288, 2, 0, NULL, '什么跟什么啊？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540048306307072, 2540048190390272, 2, 0, NULL, '不想理你')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540048404037632, 2540048306307072, 2, 0, NULL, '不理就不理呗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540048898277376, 2540048742449152, 2, 0, NULL, '继续')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540049744445440, 2540047792259072, 2, 0, NULL, '没有啊，就要点项链，首饰，月光宝盒什么的。')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540049868816384, 2540049744445440, 2, 0, NULL, '我去，你NND')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540050109530112, 2540049868816384, 2, 9, '2540043373723648', 'goon')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540067958521856, 2540035514171392, 2, 0, NULL, '我是外地人，想当北京人，想多了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068058234880, 2540067958521856, 2, 0, NULL, '你打算留在北京吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068199579648, 2540068058234880, 2, 0, NULL, '打算啥啊，北京房价高得要死')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068340449280, 2540068199579648, 2, 0, NULL, '你打算在北京工作吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068439818240, 2540068340449280, 2, 0, NULL, '看看再说吧，看工作情况')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068603396096, 2540068439818240, 2, 0, NULL, '你的专业找工作怎么样？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068721229824, 2540068603396096, 2, 0, NULL, '我这也就是普通的专业，等快毕业再说')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068825464832, 2540068721229824, 2, 0, NULL, '名牌大学一定很抢手吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540068926570496, 2540068825464832, 2, 0, NULL, '北京这么多名牌大学，我哪里知道')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540069024464896, 2540068926570496, 2, 0, NULL, '好吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540069131583488, 2540069024464896, 2, 0, NULL, '别说这个了，周末出去玩吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540069233278976, 2540069131583488, 2, 0, NULL, '周末不一定有空，看看在说吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540069336055808, 2540069233278976, 2, 0, NULL, '好吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070014255104, 2540068058234880, 2, 0, NULL, '想留，毕竟北京机会那么多')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070461931520, 2540070014255104, 2, 0, NULL, '北京工作压力很大的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070559154176, 2540070461931520, 2, 0, NULL, '有压力才有动力啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070723829760, 2540070559154176, 2, 0, NULL, '你的专业找工作怎么样')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070856409088, 2540070723829760, 2, 0, NULL, '还挺热门吧，学哥学姐的工作都不错')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540070996541440, 2540070856409088, 2, 0, NULL, '名牌大学一定很抢手吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071104659456, 2540070996541440, 2, 0, NULL, '只要能力高，到哪儿都抢手')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071407239168, 2540071104659456, 2, 0, NULL, '你们学校出来的学生，能力应该不低')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071514079232, 2540071407239168, 2, 0, NULL, '过奖了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071610302464, 2540071514079232, 2, 0, NULL, '周末我去你们学校玩玩吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071716175872, 2540071610302464, 2, 0, NULL, '可以啊，welcome，给你当向导')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071805665280, 2540071716175872, 2, 0, NULL, '多谢啦')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540071910178816, 2540071805665280, 2, 0, NULL, '客气')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540073549185024, 2540033646985216, 2, 0, NULL, '你在哪儿上班啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540073875292160, 2540073549185024, 2, 0, NULL, '我上啥班啊，我是老板')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540082904023040, 2540073875292160, 2, 0, NULL, '真的假的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083008520192, 2540082904023040, 2, 0, NULL, '我一个老板，骗你小姑娘有意思吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083120947200, 2540083008520192, 2, 0, NULL, '老板一般很有钱，但是没有那么多时间和普通人聊天吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083236323328, 2540083120947200, 2, 0, NULL, '你不是有钱人，哪里知道有钱人怎么安排时间')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083334217728, 2540083236323328, 2, 0, NULL, '那给我看看你钱包里有多少钱呗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083433783296, 2540083334217728, 2, 0, NULL, '这能随便给你看吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083704086528, 2540083433783296, 2, 0, NULL, '你一个大老板，害怕什么啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083799064576, 2540083704086528, 2, 0, NULL, '你这姑娘怎么说话呢')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083899105280, 2540083799064576, 2, 0, NULL, '这么说，给我看喽')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540083996246016, 2540083899105280, 2, 9, '2540085693726720', 'goon')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540084240662528, 2540083704086528, 2, 0, NULL, '谁害怕了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540084432142336, 2540084240662528, 2, 0, NULL, '我也就是说说，给我看我也不看啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540084528332800, 2540084432142336, 2, 0, NULL, '好吧……')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540085485748224, 2540083334217728, 2, 0, NULL, '可以啊，别吓着你就行')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540085581381632, 2540085485748224, 2, 0, NULL, '真的能吓到我吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540085693726720, 2540085581381632, 2, 0, NULL, '给，看看吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540088194007040, 2540085693726720, 2, 0, NULL, '百万都没有，你根本不是老板，骗鬼呢')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540088304943104, 2540088194007040, 2, 0, NULL, '你也不是鬼啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540088404508672, 2540088304943104, 2, 0, NULL, '你在说什么呢？我去洗澡了，拜拜')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540088490573824, 2540088404508672, 2, 0, NULL, '好吧……')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540089036947456, 2540085693726720, 2, 1, '1000000', '哇，老板，这儿有一个秘书丢了，你看是你公司的吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540089168707584, 2540089036947456, 2, 0, NULL, '你是谁啊?')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540089274695680, 2540089168707584, 2, 0, NULL, '我是凤凤啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540089365381120, 2540089274695680, 2, 0, NULL, '我要开会了，拜拜')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090387972096, 2540073549185024, 2, 0, NULL, '我就在一个不出名的小公司')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090515914752, 2540090387972096, 2, 0, NULL, '你们上班都干嘛啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090623492096, 2540090515914752, 2, 0, NULL, '对着电脑，一对就是一天')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090740359168, 2540090623492096, 2, 0, NULL, '平时也有空出去玩吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090851229696, 2540090740359168, 2, 0, NULL, '没有空，天天加班')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540090939342848, 2540090851229696, 2, 0, NULL, '都加班到几点啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091022311424, 2540090939342848, 2, 0, NULL, '10点多，回到宿舍都快12点了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091115536384, 2540091022311424, 2, 0, NULL, '周末出去玩吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091241480192, 2540091115536384, 2, 0, NULL, '不行啊，周末我还得加班')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091332132864, 2540091241480192, 2, 0, NULL, '周末我请你吃饭')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091431010304, 2540091332132864, 2, 0, NULL, '好啊，我去')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091533557760, 2540091431010304, 2, 0, NULL, '你不说说周末要加班吗')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091633008640, 2540091533557760, 2, 0, NULL, '还是不加了，在家洗洗衣服，做点好吃的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091766030336, 2540091633008640, 2, 0, NULL, '你会做饭啊，好吃不？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091861549056, 2540091766030336, 2, 0, NULL, '你来尝尝就知道啦')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540091951513600, 2540091861549056, 2, 0, NULL, '好啊，周末我过去')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092036628480, 2540091951513600, 2, 0, NULL, '嗯，好的')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092292284416, 2540091533557760, 2, 0, NULL, '陪女生吃饭要紧啊')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092416573440, 2540092292284416, 2, 0, NULL, '神经病')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092509503488, 2540092416573440, 2, 0, NULL, '你说谁呢')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092875210752, 2540091332132864, 2, 0, NULL, '对不起，我去不了')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540092968419328, 2540092875210752, 2, 0, NULL, '好吧，你不想来，我也不勉强')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540093052223488, 2540092968419328, 2, 0, NULL, '你有什么事吗？')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540093145874432, 2540093052223488, 2, 0, NULL, '没事了，你忙吧')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2540093223174144, 2540093145874432, 2, 0, NULL, '莫名其妙')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2542761458794496, 2540039389626368, 2, 9, '2540040486387712', 'goon')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2542778765180928, 2540042018668544, 2, 0, NULL, '呵呵呵呵')");
tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (2542780525854720, 2542778765180928, 2, 0, NULL, '......')");


//****************************************
//  tx.executeSql("INSERT OR IGNORE  INTO t_chat VALUES (6001,0,2,0,'','你是谁啊？怎么看你这么熟悉'     )");
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6001,0,2,0,'","你是谁啊？怎么看你这么熟悉")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6002,6001,2,0,"","我是凤凤啊，你是谁？")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6005,6002,2,0,"","别管我是谁，我清华毕业")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6008,6005,2,0,"","清华毕业有什么了不起的")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6010,6005,2,1,"100","清华学子智商一定很高")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6009,6008,2,0,"","我X。")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (6011,6010,2,0,"","欢迎来北京看看。")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100001,6009,2,4,"","over")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (100002,6011,2,4,"","over")');

//	tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7001,0,3,"你是小芳吗？")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7002,7001,3,"我是，你是谁？")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7003,7002,3,"我是王wang。")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7004,7003,3,"哦？高中同学")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7005,7004,3,"嘿嘿，你想起来啦")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7006,7005,3,"嗯，咱们班的体育委员呀")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7007,7006,3,"嘿嘿，你在那儿工作呢？")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7008,7007,3,"我还没工作呢，我在北京上研究生")');
//  tx.executeSql('INSERT OR IGNORE  INTO t_chat VALUES (7009,7008,3,"北京研究生，厉害啊")');


};

//系统数据表
function initSysData(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_sys_data (id unique , name ,value)'); 
    tx.executeSql('delete from t_sys_data');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (1, "钱包",1000)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (2, "魅力值",10)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (3, "会员等级",-1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (4, "系统时间",0)');   
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (5, "附近的人",1)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (6, "魅力多一点",0)');  //获得足够成就，则多10点魅力 
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (7, "丑拒次数",0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (8, "已经点击次数",0)');  //配合6魅力多一点
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (9, "需要点击次数",2)');  //配合6魅力多一点
    tx.executeSql('INSERT OR IGNORE  INTO t_sys_data VALUES (10, "作弊次数",0)');  //配合4系统时间使用
    
};
//商品表  buy是否已买 0未买1已买      物品操作系统数据
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





//附近的人
function initLocal(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_local (id unique , info )'); 
    tx.executeSql('delete from t_local');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (1, "附近没人")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (2, "小美在远方")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (3, "小美在楼上")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (4, "小美在这个城市")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (5, "小美在洗澡间")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (6, "")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (7, "凤凤在这个城市")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (8, "凤凤在你身边")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (9, "凤凤在远方")');  
    tx.executeSql('INSERT OR IGNORE  INTO t_local VALUES (10, "小芳在楼下")');  
 
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
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (15, "作弊行为","被发现修改系统时间来作弊，魅力值-4",0,0)');  ////更改系统时间,来切换小美状态
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (16, "成就捕手","达成10个成就，不要关闭，魅力临时多一点。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (17, "成就大师","达成20个成就，魅力果然不止一点。",0,0)');  
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (18, "成就终结者","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (19, "坚持不懈","很多人没有坚持自己的信念，除了你",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (20, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (21, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (22, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (23, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (24, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (25, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (26, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (27, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (28, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (29, "","",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (30, "豪华馈赠","凤凤送我豪车一辆。",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (31, "人傻钱多","你不傻为什么还这么穷呢？",0,0)');  //低EQ聊天后，钱多于250 减少至250 //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (32, "牵手小美","你和小美快乐地在一起",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (33, "凤凤牵你","凤凤和你幸福地在一起了",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (34, "牵手小芳","你和青梅竹马的小芳在一起",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (35, "一脸懵逼","感觉自己萌萌哒",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (36, "好心累","为什么她不愿意和我在一起",0,0)');  //TODO
    tx.executeSql('INSERT OR IGNORE  INTO t_achievement VALUES (37, "曾经错过","错过了，然后就，就没有了……",0,0)');  //TODO
 
};



//结局表     影响魅力值   和  本地位置
function initResult(tx){
	tx.executeSql('CREATE TABLE IF NOT EXISTS t_result (id unique , info,over,charm,local)'); 
    tx.executeSql('delete from t_result');  
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100001, "感觉自己萌萌哒……",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100002, "快点坐稳了，老司机发车啦！！",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100003, "本可以靠颜值，非要靠才华！！！",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100004, "",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100005, "",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100006, "我要睡觉了，88",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100007, "那个，我闺女来找我去逛街，我出去了，88",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (100008, "那个，我去洗澡了。byebye",0,0,0)'); 
    
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200001, "你被凤凤嫌弃了",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200002, "你被凤凤呵呵了",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200003, "周末去女生单身宿舍",0,10,8)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200004, "你是个诚实的人",0,-2,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200005, "不按照套路出牌啊",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200006, "你伤害了一个爱慕你的女孩的心",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200007, "好无聊，周末干嘛呢？再说吧",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200008, "周末要陪女生，实验就先放一下吧",0,1,8)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200009, "有钱了不起啊",0,-1,7)');
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200010, "你是个骗子",0,-1,7)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200011, "曾经一个漂亮的女秘书在身边，你没有珍惜",0,0,9)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200012, "伺候女生不会比上班还累吧",0,1,8)'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200013, "好难伺候啊，心累",0,-1,7)');     
    tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (200014, "现在女生都这么怪吗",0,-1,7)'); 
    
    
    
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300001, "感觉自己萌萌哒……",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300002, "快点坐稳了，老司机发车啦！！",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300003, "本可以靠颜值，非要靠才华！！！",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300004, "",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300005, "",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300006, "我要睡觉了，88",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300007, "那个，我闺女来找我去逛街，我出去了，88",0,0,0)'); 
//  tx.executeSql('INSERT OR IGNORE  INTO t_result VALUES (300008, "那个，我去洗澡了。byebye",0,0,0)'); 
   
    
};



//暂时不加帮助


/**
 * 影响条件：
 * 系统数据的多少 比如金钱  魅力 本地
 * 
 * 
 * 小美： 一定条件显示凤凤
 * 凤凤：     bad结果 魅力减1     good结果魅力加10，凤凤到来           金钱够了，且凤凤在本地，就让凤凤离开
 * 小芳:  显示条件    凤凤 离开
 * 
 * 
 *    ******************减少耦合，大不了再算一遍*****************************
 * 
 */

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
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (1, 0,1000,"手里捧着窝窝头，菜里没有一滴油")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (2, 1000,10000,"月光光，真漂亮")'); 
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (3, 10000,50000,"赚钱了，煎饼果子可以加火腿了")');   
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (4, 50000,500000,"到了砖家说的平均水平。")');    
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (5, 500000,1000000,"可以娶到媳妇了")');       
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (6, 1000000,10000000,"站着，还能把钱赚了")');    
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (7, 10000000,100000000,"躺着也赚钱")');   
    tx.executeSql('INSERT OR IGNORE  INTO t_money_info VALUES (8, 100000000,1000000000000,"普通家庭的小目标")');   
};

