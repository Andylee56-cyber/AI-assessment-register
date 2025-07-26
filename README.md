# AI评估系统 - 用户注册页面部署指南

## 📋 项目说明
这是一个AI评估系统的用户注册/登录前端页面，具有现代化的科技感设计。

## 🚀 部署方式

### 方式一：GitHub Pages（推荐）

1. **创建GitHub仓库**
   - 在GitHub上创建一个新的仓库
   - 仓库名称建议：`ai-assessment-register`

2. **上传文件**
   - 将以下文件上传到仓库根目录：
     - `index.html`
     - `styles.css`
     - `script.js`
     - `terms.html`
     - `privacy.html`
     - `terms-styles.css`

3. **启用GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到 "Pages" 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 或 "master"
   - 保存设置

4. **访问链接**
   - 部署完成后，您的页面将在以下地址可用：
   - `https://[您的用户名].github.io/ai-assessment-register/`

### 方式二：Netlify部署

1. **注册Netlify账号**
   - 访问 https://netlify.com
   - 使用GitHub账号注册

2. **部署项目**
   - 点击 "New site from Git"
   - 选择您的GitHub仓库
   - 构建命令留空（静态网站）
   - 发布目录设置为根目录
   - 点击 "Deploy site"

3. **自定义域名（可选）**
   - 在站点设置中可以添加自定义域名
   - 例如：`register.ai-assessment.com`

## 📁 文件结构
```
ai-assessment-register/
├── index.html          # 主页面（注册/登录）
├── styles.css          # 主页面样式
├── script.js           # 主页面脚本
├── terms.html          # 用户协议页面
├── privacy.html        # 隐私政策页面
└── terms-styles.css    # 协议页面样式
```

## 🔧 配置说明

### 后端API配置
当前前端配置为连接本地服务器 `http://localhost:3000`，如需连接生产环境：

1. **修改API地址**
   - 在 `script.js` 中找到所有 `/api/` 开头的请求
   - 将 `http://localhost:3000` 替换为您的生产环境API地址

2. **CORS配置**
   - 确保后端服务器配置了正确的CORS策略
   - 允许前端域名访问API

### 登录成功跳转
当前配置登录成功后跳转到 `http://ai-assessment.zyagi.cn:1080/`，如需修改：

1. **修改跳转地址**
   - 在 `script.js` 中找到 `window.location.href = 'http://ai-assessment.zyagi.cn:1080/';`
   - 替换为您的目标地址

## 🎨 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 科技感UI设计
- ✅ 手机号/邮箱注册
- ✅ 验证码发送功能
- ✅ 用户协议和隐私政策
- ✅ 表单验证
- ✅ 登录/注册切换

## 🔗 访问链接

部署完成后，您可以将以下链接分享给同事：

- **主页面**：`https://[您的域名]/`
- **用户协议**：`https://[您的域名]/terms.html`
- **隐私政策**：`https://[您的域名]/privacy.html`

## 📞 技术支持

如有问题，请联系开发团队。 