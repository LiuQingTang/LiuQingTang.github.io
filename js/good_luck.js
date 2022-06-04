/*
 * 页面加载以后就执行的函数
 */
window.onload = function() {
	// 创建日期对象
	var today = new Date();
	
	// 创建数组并初始化数组
	var weeks = ["日 ", "一 ", "二 ", "三 ", "四 ", "五 ", "六 "];

	// 拼接字符串得到一个中文日期，并设置为id="date"的div标签的内容
	document.getElementById('date').innerHTML = "今天是 " + today.getFullYear() + "年 " + (today.getMonth() + 1) + "月 " + today.getDate() + "日 星期" + weeks[today.getDay()];
	
	// 根据标签名称获取所有td标签
	var tds = document.getElementsByTagName('td');
	
	// 循环遍历td标签，给每一个td都添加一个点击事件
	for(var i = 0; i < tds.length; i++) {
		// 添加点击事件
		tds[i].onclick = function() {
			// 根据id获取id="asd"的div标签，并设置其top属性为0px(标签样式0.5秒移动至0px)
			document.getElementById('ask').style.top = '0px';
			
			// 根据id获取id="card"的div标签，并设置其display属性为none(隐藏div)
			document.getElementById('check').style.display = 'none';
			
			// 根据id获取id="answer"的div标签，并设置其top属性为205px(标签样式0.5秒移动至205px)
			document.getElementById('answer').style.top = '205px';
		}
	}
	
	// 创建数组并初始化数组
	var results = ['超大吉', '大吉', '吉', '小吉', '小凶', '凶', '大凶', '超大凶'];
	
	// 根据id获取id="asd"的div标签，并添加点击事件
	document.getElementById('ask').onclick = function() {
		// 生成一个0~7的随机数
		var num = Math.floor(Math.random() * 8);
		// 根据随机数(下标)获取results数组内对应的求签结果，并设置为id="answer"的div标签的内容
		document.getElementById('answer').innerHTML = results[num];
		
		// 根据id获取id="answer"的div标签，并设置其top属性为0px(标签样式0.5秒移动至0px)
		document.getElementById('answer').style.top = '0px';
		// 根据id获取id="asd"的div标签，并设置其top属性为205px(标签样式0.5秒移动至205px)
		document.getElementById('ask').style.top = '205px';
	}
}