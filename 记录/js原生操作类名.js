//�ڸ߰汾��������п���ֱ��ʹ��html5�µĲ��������ķ�ʽ:classList
//classList�ṩ�����¼�������:(1) add(value) ������� ������������
//(2) contains(value) �ж��б����Ƿ����value ���ڷ���true ���򷵻�false
// (3) remove(value) ɾ��ָ���� (4) toggle(value) ���classList�д���value ��ɾ�� �������
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
