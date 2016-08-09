//在高版本的浏览器中可以直接使用html5新的操作类名的方式:classList
//classList提供了如下几个方法:(1) add(value) 添加类名 如果存在则不添加
//(2) contains(value) 判断列表中是否存在value 存在返回true 否则返回false
// (3) remove(value) 删除指定类 (4) toggle(value) 如果classList中存在value 则删除 否则添加
// classlist


function deleteClass(d,c){
    let className= d.className.split(/\s+/);
    let pos=-1,
        i,len;
    for(i=0,len=className.length;i<len;i++){
        if(className[i]==c){
            pos=i;
            break;
        }
    }
    className.splice(pos,1);
    d.className=className.join(" ");
    return d;
}
function addClass(d,c){
    let className= d.className;
    d.className=className+" "+c;
    return d;
}
