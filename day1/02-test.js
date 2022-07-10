// 工作流程
// git的工作流程一般是这样的：
// 1、在工作目录中添加、修改文件
// 2、将需要进行版本管理的文件放入暂存区域
// 3、将暂存区域的文件提交到git仓库
// 4、从git仓库提交到远程库

// git管理的文件有三种状态：已修改(modified),已暂存(staged),已提交(committed)

// 比较文件修改前后的差异
// git diff [files] 
// 比较暂存区的文件与之前已经提交过的文件
// git diff --cached

// 查看提交的日志(版本号、作者、时间、当前HEAD指针指向哪个分支、提交信息)
// git log
// 查看所有分支日志(版本号简写、当前HEAD指针指向哪个分支、提交信息)
// git reflog

// 回退到上一个版本: git reset --hard HEAD^
// 回退到上两个版本: git reset --hard HEAD^^
// 回退到上n个版本: git reset --hard HEAD~n
// 跳转到指定版本号的版本: git reset --hard 版本号


// 白发戴花君莫笑、岁月从不败美人
// 醉卧沙场君莫笑、古来征战几人回
