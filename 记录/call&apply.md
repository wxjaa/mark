#call和apply的区别
在js中call和apply它们的作用都是将函数绑定到另一个对象上去运行,调用一个对象的一个方法，以另一个对象替换当前对象。可以通过这两个方法来修改this的指向.

语法:

		foo.call(this, arg1,arg2,arg3) == foo.apply(this, arguments) == this.foo(arg1, arg2, arg3);

这两个方法在本质上没有区别,只是在使用时传入的参数有区别:

- 第一个参数意义都是一样,都是传入被用作当前对象的对象,后面的参数都是传递给当前对象的参数
- 第二个参数 apply是传入一个将要传入当前对象的所有参数作为一个数组传入,而call则是将后面的所有参数一一传入

##使用

		function add(a,b){
		   alert(a+b);
		}
		function reduce(a,b){
		  alert(a-b);
		}
		add.call(reduce,1,3)  //将add方法运用到reduce方法,结果为4
        add.appley(reduce,[1,3]); //和add方法的作用一样
##通过这两个方法改变this的指向
		function a(){
         alert(this);
		}
		a();  //window
		a.call();  //window
		a.call("b");//b
        a.apply();  //window
		a.apply("b");  //b
再来一个例子

		function dog(){
         this.name="dog";
         this.getName=function(){alert(this.name)}
		}
		function cat(){
         this.name="cat";
		}
        var dog=new dog();
        var cat=new cat();
		dog.showName();  //dog
        dog.showName.call(cat);  //cat  通过调用dog的call方法将cat作为参数传入,强showName方法运用到cat上,使的dog方法的this指向了cat   
  		/*apply方法使用方式一样*/

##还可以通过这两个方法实现继承

		function dog(name){
 		 this.name=name;
         this.showName=function(){alert(this.name)}
		}
		function cat(name){
		dog.call(this,name);
         //dog.apply(this,[name]);
		}
		var cat =new cat("cat");
		cat.showName();//cat
通过以上例子发现call和apply方法的作用都一样,都可以修改this的指向
只是传入的参数不同