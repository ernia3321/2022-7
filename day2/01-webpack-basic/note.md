在我们需要下载第三方包之前 需要先初始化项目
`npm init -y`: 初始化项目, 生成 package.json 文件
`init` 表示的是初始化
`-y` 表示的是所有需要填写的内容都使用默认的

package.json字段

name：包名。规范定义它需要由小写的字母和数字组成，可以包含.、_和-，但不允许出现空格。不允许出现中文，**包名必须是唯一的**，以免对外公布时产生重名冲突的误解。除此之外，NPM还建议不要在包名中附带上node或js来重复标识它是JavaScript或Node模块。

author：作者

description：包的简介

version：版本号

main：入口文件

keywords：关键词数组，NPM中主要用来做分类搜索。一个好的关键词数组有利于用户快速找到你编写的包。

devDependencies：一些模块只在开发时需要依赖。配置这个属性，可以提示包的后续开发者安装依赖包。

dependencies：使用当前包所需要依赖的包列表。这个属性十分重要，NPM会通过这个属性帮助自动加载依赖的包。

scripts：脚本说明对象。它主要被包管理器用来安装、编译、测试和卸载包。

bin：一些包作者希望包可以作为命令行工具使用。配置好bin字段后，通过npm install package name -g命令可以将脚本添加到执行路径中，之后可以在命令行中直接执行。前面的node -gyp即是这样安装的。通过-g命令安装的模块包称为全局模式。

dependencies  VS  devDependencies

dependencies：生产依赖 项目在部署运行时需要用到的依赖

（npm i 包名 --save 或者 npm i 包名）

devDependencies：开发依赖 项目在开发时候需要用到的依赖

 (npm i 包名 --save-dev 或者 npm i 包名 -D)



初始化项目后可以通过 npm i（install） 包名，比如：npm i jquery

卸载第三方包：npm un（uninstall） 包名（后缀和安装包的时候保持一直）

 来下载第三方模块，第三方模块会默认下载到当前项目下的node_modules中

npm 设置淘宝镜像源：`npm config set registry=https://registry.npm.taobao.org/`



