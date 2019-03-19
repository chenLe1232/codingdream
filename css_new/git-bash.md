
提交文件到GitHub
1. gitt add (要上传的文件 打文件名前几个字母 用tab键自动补充，可以避免很多不要的麻烦)
2.  git commit -m"上传的理由或者是注释"
3. git status 查看暂存区的工作状态 
4. git push origin master  确定要上传的文件没什么问题，直接提交上传。


    以后编写完代码可以直接通过vs直接提交到GitHub上 但是要注意目录别乱建否则很多东西你自己都会搞蒙

    git reset HEAD . 是清空暂存区的内容 但是不会修改工作区的内容
    开发过程中，遇到了bug，可以先将正在做的工作现场隐藏起来（git stash），然后通过建立临时分支来解决bug,然后将临时分支合并再删除即可。

update what will be committed  更新将提交的内容
Changes to be committed:        未准备提交的更改
terminal is not fully functional 中断功能不全

