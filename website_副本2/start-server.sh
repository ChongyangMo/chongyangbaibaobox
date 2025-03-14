#!/bin/bash

# 检查Python版本
if command -v python3 &>/dev/null; then
    echo "使用Python 3启动服务器..."
    cd "$(dirname "$0")"
    python3 -m http.server 8000
elif command -v python &>/dev/null; then
    echo "使用Python 2启动服务器..."
    cd "$(dirname "$0")"
    python -m SimpleHTTPServer 8000
else
    echo "错误: 未找到Python。请安装Python后再试。"
    exit 1
fi

echo "服务器已启动，请在浏览器中访问: http://localhost:8000" 