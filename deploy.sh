#!/bin/bash

# 打包
npm run build

# 推送gh-pages
git subtree push --prefix dist origin gh-pages