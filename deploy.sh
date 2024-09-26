#!/bin/bash

# 确保在项目根目录执行此脚本
# cd "$(dirname "$0")"

# 1. 构建项目
echo "Building the project..."
npm run build

# 检查 dist 目录是否存在
if [ ! -d "./dist" ]; then
  echo "Error: The 'dist' directory does not exist after building."
  exit 1
fi

# 显示 dist 目录的内容
ls -la ./dist

# 2. 切换到 gh-pages 分支
git checkout -B gh-pages

# 3. 删除旧的构建文件
# rm -rf ./*  # 清空当前目录下的所有文件

# 4. 复制新构建的文件到 gh-pages 分支
cp -r ./dist/* ./dist

# 删除不是dist与.git的所有文件
find ./dist -not -name 'dist' -and -not -name '.git' -delete


# 显示当前目录的内容
ls -la .

# 5. 添加文件到暂存区
git add .

# 6. 提交更改前验证提交消息
if ! npx commitlint --edit HEAD; then
  echo "Commit message does not meet commitlint rules."
  exit 1
fi

# 6. 提交更改
git commit -m "chore: Deploy to GitHub Pages"

# 7. 推送 gh-pages 分支到 GitHub
git push origin gh-pages

# 8. 切回主分支
git checkout master

echo "Deployment complete!"

