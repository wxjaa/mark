#Selectors API
##querySelector
querySelector("selector")方法接受一个css选择符,返回与之匹配的第一个元素,如果没找到,则返回null
##querySelectorAll()
和querySlector('selector')参数方法一样,但querySelectorAll()返回的是一个NodeList的实例,不管是否有与'selector'匹配的元素.如果没有找到,则NodeList是空的
##matchesSelector()
此方法是Selector API Level 2规范为Element类型所新增的一个方法.这个方法接受一个参数,即CSS选择符,返回结果为Boolean类型,如果与之匹配这返回true,否则返回false
   
querySelector()和querySelectorAll()这两个方法是Selector API level 1的核心方法,可以通过Document以及Element类型的实例来调用他们.目前已经完全支持这两个方法的浏览器有IE8+、Firefox3.5+、Safari3.1+、Chrome和Opera10+. matchesSelector()方法这是Selector API level 2的方法,目前除IE6-IE8，Firefox/Chrome/Safari/Opera/IE 的最新版本均已实现，但方法都带上了各自的前缀  

**Chrome/Safari**

document.body.webkitMatchesSelector

**Firfox**

document.body.mozMatchesSelector

**IE9+**

document.body.msMatchesSelector

如果想一个方法来兼容ie8+的浏览器就得自己来包装函数

    function matchSelector(elment,selector){
        if(elment.matchesSelector){
          return elment.matchesSelector(selector);  	    
     	}else if(elment.msMatchesSelector){
     	  return elment.msMatchesSelector(selector);
     	}else if(webkitMatchesSelector){
	      return elment.webkitMatchesSelector(selector);
		}else if(mozMatchesSelector){
		  return elment.mozMatchesSelector(selector);
		}else{
		  throw new Erroe("当前浏览器版本过低,请升级浏览器版本");
		}
    }
	//调用
	if(matchSelector(document.body,".page1")){
	  //...do something
	}