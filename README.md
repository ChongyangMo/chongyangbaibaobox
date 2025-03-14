# 崇阳百宝箱官网

崇阳百宝箱是一款功能强大的图片编辑应用，集成了多种实用工具，让您的照片编辑体验更加流畅、高效。

## 部署说明

本项目已配置为可以直接部署到Cloudflare Pages。

### 最佳方法：使用Cloudflare Pages UI直接上传（强烈推荐）

1. 登录Cloudflare Dashboard
2. 进入Pages > Create a project
3. 选择"Direct Upload"（直接上传）
4. 拖放整个项目文件夹或选择文件
5. 点击"Deploy site"

这种方法最简单，避免了构建过程中可能出现的问题。

### 使用Git仓库部署

如果您想通过Git仓库部署：

1. 登录Cloudflare Dashboard
2. 进入Pages > Create a project
3. 选择"Connect to Git"（连接到Git仓库）
4. 连接您的GitHub/GitLab账号并选择此仓库
5. **重要**: 在构建设置中：
   - 构建命令：**留空**
   - 构建输出目录：`.`（当前目录）
6. 点击"Save and Deploy"

### 使用命令行部署

如果您已安装并登录了Cloudflare CLI：

```bash
# 安装依赖
npm install

# 部署网站（推荐）
npm run deploy:direct

# 或者使用 publish 命令
npm run deploy
```

## 解决部署问题

如果遇到"缺少入口点"或其他部署错误：

1. **最简单的解决方案**: 使用UI直接上传方式部署
2. 确保项目根目录包含 `_routes.json` 和 `_headers` 文件
3. 确保 `wrangler.toml` 中的 `main` 字段指向正确的文件
4. 在Cloudflare Pages UI中将构建命令留空

## 本地开发

1. 克隆此仓库
2. 使用任意HTTP服务器运行，例如：
   ```
   npx http-server
   ```
3. 在浏览器中访问 http://localhost:8080

## 文件结构

- `index.html` - 网站主页
- `privacy-policy.html` - 隐私政策页面
- `css/` - 样式文件
- `js/` - JavaScript文件
- `images/` - 图片资源
- `workers/` - Cloudflare Workers 脚本
- `_routes.json` - Cloudflare Pages 路由配置
- `_headers` - HTTP 头信息配置

## 版权信息

© 2025 崇阳百宝箱. 保留所有权利。版权所有 chongyang

## 功能特点

- 响应式设计，适配各种设备屏幕
- 现代化UI界面，用户体验友好
- 交互式导航菜单
- 应用截图轮播展示
- 联系表单功能
- 平滑滚动效果
- 动画效果增强用户体验

## 使用说明

1. 将网站部署到您的Web服务器上
2. 确保所有资源文件路径正确
3. 根据需要修改联系信息和下载链接
4. 添加您的应用截图到`images`目录

## 图片资源

网站需要以下图片资源：

- `images/logo.png` - 应用logo
- `images/hero-app.png` - 首页展示的应用图片
- `images/screenshot1.png` - `images/screenshot4.png` - 应用截图
- `images/qr-code.png` - 下载二维码

## 自定义

您可以通过修改CSS变量来自定义网站的主题颜色：

```css
:root {
    --primary-color: #4a6bff;
    --secondary-color: #ff6b6b;
    --accent-color: #6bffb8;
    --dark-color: #333;
    --light-color: #f8f9fa;
    /* 其他变量... */
}
```

## 联系方式

如有任何问题或建议，请联系：

- 邮箱：xigua8hao@163.com
- 电话：400-123-4567 