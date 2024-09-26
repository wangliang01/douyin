#!/bin/bash

# 确保在项目根目录执行此脚本

# 1. 构建项目
echo "Building the project..."
npm run build

# 2. 切换到gh-pages分支
git checkout -B gh-pages

# 3. 删除旧的构建文件
rm -rf dist/*

# 4. 复制新构建的文件到gh-pages分支
cp -r ./dist/* .

# 5. 添加文件到暂存区
git add .

# 6. 提交更改
git commit -m "Deploy to GitHub Pages"

# 7. 推送gh-pages分支到GitHub
git push origin gh-pages

# 8. 切回主分支
git checkout master

echo "Deployment complete!"