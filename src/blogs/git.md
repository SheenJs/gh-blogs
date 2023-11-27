:::tip 写在最前
:::
## git 常用指令
- git init 初始化一个本地仓库，但是此时没有远程仓库与之关联
- git status 查看当前文件状态
- git add . 把工作区的代码扔到暂存区，此是还没有形成版本
- git commit -m "xx" 把暂存区的代码扔到版本库中，形成版本
- git log / git reflog 查看当前版本库中都有哪些版本
- git reset --hard 版本号 版本之间进行切换
- git checkout branchName 切换分支

## git 跳 eslint 校验提交
```bash
git commit -m "feat(m): n" --no-verify
```

## 代码修改完了才发现选择错了分支（代码还未提交）
```bash
#先暂存到stash去
git stash
#切换目标分支
git checkout tranchName
#从stash区取出
git stash pop
```

## git撤销未push的commit
```bash
#退回上个版本
git reset --soft HEAD^
#退回上上版本
git reset --soft HEAD^^
```

## git reset
- mixed为默认的，可以不用带该参数
    - 用于重置暂存区的文件，此时历史记录与上一次的提交(commit)保持一致，工作区文件内容保持不变（有上次修改的内容）。移动 HEAD 指针，改变暂存区内容，但不会改变工作区
    - 原有文件内容的变更 ：修改内容还在，变成未add的状态
    - 目录结构的变更（增加或者删除文件）：
        - 新增文件： 还存在，变成未add的状态(目录结构中文件变成红色，需要执行命令git add . 再执行git commit )
        - 删除文件：目录结构中还是没有，可以直接执行git commit
- soft用于回退到某个版本
    - 仅仅移动当前 Head 指针，不会改变工作区和暂存区的内容
    - 原有文件内容的变更 ：修改内容还在，变成已add的状态（未commit）
    - 目录结构的变更（增加或者删除文件）：
        - 新增文件：还存在，变成已add的状态(目录结构中文件变成绿色，可以再次执行git commit )；
        - 删除文件：目录结构中还是没有，可以直接执行git commit
- hard 参数撤销工作区中所有未提交的修改内容
    - 将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交，当前 HEAD 指针、工作区和暂存区内容全部改变
    - 原有文件内容的变更 ：修改内容丢失（修改的代码不会变成未add的状态）
    - 目录结构的变更（增加或者删除文件）：新增文件丢失、删除的文件相当于没删




## git log
> git log 可以让我们查看提交commit history,接下来我们来一起探索git log提供的参数。
```bash
commit 2d16e1bfde05123354107c2a00c66da450763ff4 (HEAD -> develop, origin/develop)
Author: wuguanghui <2669670087>                                                  
Date:   Tue Jul 11 11:02:25 2023 +0800                                           
                                                                                 
    摸鱼                                                                         
                                                                                 
commit 5d04f93ed9b2e750520f2916e2d58cb3e2912fa8                                  
Author: wgh <995980020@qq.com>                                                   
Date:   Mon Jul 10 23:58:44 2023 +0800                                           
                                                                                 
    网格布局                                                                     
                                                                                 
    Signed-off-by: wgh <995980020@qq.com>                                        
                                                                                 
commit 8f298200440be2d2957963937d29e7514f4a7965                                  
Author: wgh <995980020@qq.com>                                                   
Date:   Wed Jul 5 23:55:00 2023 +0800                                            
                                                                                 
    date                                                                         
                                                                                 
    Signed-off-by: wgh <995980020@qq.com>                              
```
### git log --oneline
这个命令简化git log的默认的输出，仅仅输出commit hash 前7个字符串和commit message.
```bash
2d16e1b (HEAD -> develop, origin/develop) 摸鱼
5d04f93 网格布局
8f29820 date
b1e6438 axios
7e653b4 axios
0d60d97 网格布局
e46380f 网格布局
8b42b06 弹性布局
```
### git log --stat
git log 的基础上输出文件增删改的统计数据。
### git log -p
控制输出每个commit具体修改的内容，输出的形式以diff的形式给出。
### git show
git show命令同git log -p输出类似，只不过它只显示一个commit的内容，如果不指定commit hash, 它默认输出HEAD指向commit的内容.
### git git shortlog
- 这个命令用来输出汇总信息，以作者进行分类。
```bash
YGHHJs (1):
      Initial commit

gh (5):
      doc init
      doc config尝试
      代码格式化blog
      代码格式化blog
      代码格式化blog

wgh (110):
      代码格式化blog
      代码格式化blog
      ...
```
- git shortlog -s -n
```bash
 110  wgh
  38  wuguanghui
   5  gh
   1  YGHHJs
```
### git log --author
来过滤commit,限定输出给定的用户
- git log --author='YGHHJs' --oneline
```bash
#YGHHJs只提过一个commit
f906622 Initial commit
```
### git log -n
指定输出几条commit记录
- git log -1
```bash
commit 2d16e1bfde05123354107c2a00c66da450763ff4 (HEAD -> develop, origin/develop)
Author: wuguanghui <2669670087>
Date:   Tue Jul 11 11:02:25 2023 +0800

    摸鱼

```
### git log --after/--before
指定时间范围
### git log --merges/--no-merges
控制是否显示merge的commit

## git stash
> 把未commit的修改暂存到本地,使工作模板变为干净状态

### 常用命令

```shell
# 保存当前未commit的代码
git stash

# 保存当前未commit的代码并添加备注
git stash save "备注的内容"

# 列出stash的所有记录
git stash list

# 删除stash的所有记录
git stash clear

# 应用最近一次的stash
git stash apply

# 应用最近一次的stash，随后删除该记录
git stash pop

# 删除最近的一次stash
git stash drop
```

### 指定操作stash

```shell
# 查看stash列表
git stash list
# stash@{0}: On develop-wgh: <E9><A6><96><E9><A1><B5><E4><BF><AE><E6><94><B9>(9.21)
# stash@{1}: On develop-wgh: <E8><BD><AE><E6><92><AD><E5>BE><E6><9F><A5><E7><9C><8B><E8><AF><A6><E6><83><85>

# 应用指定stash
git stash apply 1
# 表示应用第二个stash
```
<git-talk />
