#git配置
1.git config --global user.email xxx@163.com

2.git config --global user.name xxx

3.ssh-keygen -t rsa -C xxx@163.com(邮箱地址)      // 生成ssh

4.找到.ssh文件夹打开，使用cat id_rsa.pub    //打开公钥ssh串

5.登陆github，settings － SSH keys  － add ssh keys （把上面的内容全部添加进去即可）
#git常用命令
1、git config user.name  /  user.email     //查看当前git的用户名称、邮箱 

2、git clone https://github.com/jarson7426/javascript.git  project  //clone仓库到本地。

3、修改本地代码，提交到分支:  git add file   /   git commit -m “新增文件”

4、把本地库推送到远程库:  git push origin master

5、查看提交日志：git log -5

6、返回某一个版本：git reset --hard 123

7、分支：git branch / git checkout name  / git checkout -b dev

8、合并name分支到当前分支：git merge name   /   git pull origin

9、删除本地分支：git branch -D name

10、删除远程分支： git push origin  :daily/x.x.x

11、git checkout -b mydev origin/daily/1.0.0    //把远程daily分支映射到本地mydev分支进行开发

12、合并远程分支到当前分支 git pull origin daily/1.1.1
13、发布到线上：

    git tag publish/0.1.5
    git push origin publish/0.1.5:publish/0.1.5
14、线上代码覆盖到本地：

    git checkout --theirs build/scripts/ddos
    git checkout --theirs src/app/ddos