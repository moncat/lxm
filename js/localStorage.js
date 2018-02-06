
$(function(){
	if(!window.localStorage){
	    alert("您的运气不好，手机不支持呢..");
	    return false;
	}
})


function setData(key,value){
    var storage=window.localStorage;
    storage.setItem(key,value);
}

function getData(key){
    var storage=window.localStorage;
    return storage.getItem(key);
}

function removeData(key){
    var storage=window.localStorage;
    storage.removeItem(key);
}

function removeAllData(){
    var storage=window.localStorage;
    storage.clear();

}

function showKeys(){
	var storage=window.localStorage;
	var size =storage.length;
	var keys = "";
    for(var i=0 ; i<size ; i++){
        keys=keys+","+storage.key(i);
    }
    return keys;
}



