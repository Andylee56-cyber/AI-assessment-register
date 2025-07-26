# 🚀 AI评估系统注册页面 - 快速部署指南

## 📋 项目简介
这是一个现代化的AI评估系统用户注册/登录前端页面，具有科技感设计和完整的功能演示。

## 🎯 部署目标
将前端代码部署到网络上，生成一个可以分享给同事的链接，让他们可以在任何设备上查看注册页面。

## 📁 部署文件清单
```
deploy/
├── index.html          # 主页面（注册/登录界面）
├── styles.css          # 主页面样式文件
├── script.js           # 主页面脚本（演示版本）
├── terms.html          # 用户协议页面
├── privacy.html        # 隐私政策页面
├── terms-styles.css    # 协议页面样式文件
└── README.md           # 详细部署说明
```

## 🌐 部署方式

### 方式一：GitHub Pages（推荐 - 免费）

#### 步骤1：创建GitHub仓库
1. 登录GitHub账号
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`ai-assessment-register`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

#### 步骤2：上传文件
1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将 `deploy` 文件夹中的所有文件拖拽上传
3. 添加提交信息：`Initial commit - AI Assessment Register Page`
4. 点击 "Commit changes"

#### 步骤3：启用GitHub Pages
1. 进入仓库设置：Settings
2. 左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "main"
5. 点击 "Save"

#### 步骤4：获取访问链接
- 等待几分钟后，页面将在以下地址可用：
- `https://[您的用户名].github.io/ai-assessment-register/`

### 方式二：Netlify（推荐 - 免费）

#### 步骤1：注册Netlify
1. 访问 https://netlify.com
2. 使用GitHub账号注册登录

#### 步骤2：部署项目
1. 点击 "New site from Git"
2. 选择 "GitHub"
3. 选择您的仓库 `ai-assessment-register`
4. 构建设置：
   - Build command: 留空
   - Publish directory: 留空（根目录）
5. 点击 "Deploy site"

#### 步骤3：获取访问链接
- 部署完成后，Netlify会提供一个随机域名
- 例如：`https://amazing-name-123456.netlify.app`

### 方式三：Vercel（推荐 - 免费）

#### 步骤1：注册Vercel
1. 访问 https://vercel.com
2. 使用GitHub账号注册登录

#### 步骤2：部署项目
1. 点击 "New Project"
2. 导入您的GitHub仓库
3. 框架预设选择 "Other"
4. 点击 "Deploy"

#### 步骤3：获取访问链接
- 部署完成后，Vercel会提供一个域名
- 例如：`https://ai-assessment-register.vercel.app`

## 🔧 配置说明

### 演示版本特性
当前部署版本为演示版本，具有以下特点：
- ✅ 所有UI交互正常工作
- ✅ 表单验证功能完整
- ✅ 验证码发送模拟（显示成功消息）
- ✅ 注册/登录模拟（显示成功消息）
- ✅ 用户协议和隐私政策页面
- ✅ 响应式设计，支持移动端

### 生产环境配置
如需连接真实后端API，需要修改以下内容：

#### 1. 修改API地址
在 `script.js` 中找到以下代码并替换：
```javascript
// 将演示版本的模拟代码替换为真实API调用
// 例如：fetch('/api/register', {...})
```

#### 2. 修改跳转地址
在 `script.js` 中找到：
```javascript
window.open('https://www.example.com', '_blank');
```
替换为您的目标地址。

## 📱 功能演示

### 注册功能
1. 选择注册方式（手机号/邮箱/微信）
2. 填写注册信息
3. 发送验证码（演示版本会显示成功）
4. 同意用户协议和隐私政策
5. 点击注册（演示版本会显示成功并跳转到登录）

### 登录功能
1. 输入用户名和密码
2. 点击登录（演示版本会显示成功并跳转）

### 协议页面
1. 点击"用户协议"或"隐私政策"链接
2. 在新标签页查看详细内容
3. 点击"返回注册页面"回到主页面

## 🔗 分享链接

部署完成后，您可以将以下链接分享给同事：

- **主页面**：`https://[您的域名]/`
- **用户协议**：`https://[您的域名]/terms.html`
- **隐私政策**：`https://[您的域名]/privacy.html`

## 📞 技术支持

### 常见问题
1. **页面无法访问**：检查GitHub Pages是否已启用
2. **样式显示异常**：确保所有CSS文件已上传
3. **功能不工作**：检查浏览器控制台是否有错误

### 联系方式
如有技术问题，请联系开发团队。

## 🎉 部署完成

恭喜！您的AI评估系统注册页面已成功部署到网络上。现在您可以将链接分享给同事，他们可以在任何设备上查看和体验注册页面了。 