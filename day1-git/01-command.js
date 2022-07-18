// 微信: is-code
// Bash的基本命令
// 创建文件: touch 文件名
// 创建文件夹: mkdir 文件夹名
// 编辑文件: vim 文件名 => 按i进入编辑 => 输入内容 => Esc => :wq => 回车
//          - yy复制 p粘贴 dd删除一行
//          - :q! 不保存退出vim编辑器
//          - :wq 保存并退出vim编辑器
// 查看文件内容: cat 文件名
// 删除文件: rm 文件名 就会把对应文件删除
// 删除一个文件夹: rm -r 文件夹名
// 移动文件: mv 文件名 移动的路径
// pwd : 显示当前所在的目录路径

// master: 默认开发分支
// origin: 默认远程版本库
// Index / Stage: 暂存区
// Workspace: 工作区
// Repository: 仓库区（或本地仓库）
// Remote: 远程仓库

// Untracked: 未被追踪
//  - 追踪: git add 文件名
// Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作
//  - 提交到暂存区再到本地库 git add & git commit
//  - 放弃修改 git checkout

// 初始化仓库: git init
// 克隆仓库: git clone 仓库地址
// 查看git状态: git status
// 提交到暂存区(stage): git add 文件名
// 提交所有文件到暂存区: git add .
// 从暂存区移除: git rm --cached 文件名
// 提交到本地库: git commit -m '日志信息'
// 放弃修改: git checkout 文件名 => 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从Index中取出文件, 覆盖当前修改
