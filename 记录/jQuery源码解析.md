#1.jQuery.get()

	jQuery.each( [ "get", "post" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		//判断第二个参数是否是function,如果是则第二个参数为回调方法
		if ( jQuery.isFunction( data ) ) {
			type     = type || callback;
			callback = data;
			data     = undefined;
		}
		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
	});
#$.ready和window.onload执行顺序

先看下面一段代码

	document.write('观察脚本加载的顺序')

	document.addEventListener("DOMContentLoaded", function() {
   		document.write('DOMContentLoaded回调')
	}, false);

	window.addEventListener("load", function() {
    	document.write('load事件回调')
	}, false);


	document.write('脚本解析一')

	//测试加载
	$(function(){
	   	 document.write('脚本解析二')
	})

	document.write('脚本解析三')

将代码放到浏览中运行,结果：

  ![avatar][a]

从图片中可以看出ready在load之前运行

实际上一个网页的加载顺序:

1. 解析HTML结构。
2. 加载外部样式和脚本文件。
3. 解析并执行脚本代码。
4. 构造HTML Dom模型。（ready）
5. 加载图片等外部文件。
6. 页面加载完毕。（load）

ready与load的区别就在于资源文件的加载，ready构建了基本的DOM结构，所以对于代码来说应该越快加载越好。在一个高速浏览的时代，没人愿意等待答案。假如一个网站页面加载超过4秒，不好意思，你1/4的用户将面临着流失，所以对于框架来说用户体验是至关重要的，我们应该越早处理DOM越好，我们不需要等到图片资源都加载后才去处理框架的加载，图片资源过多load事件就会迟迟不会触发。

JQuery.ready方法[源码](https://github.com/jquery/jquery/blob/10399ddcf8a239acc27bdec9231b996b178224d3/src/core/ready.js#L80)



[a]:data:image/png;base64,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