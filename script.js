// DOM元素
const authTabBtns = document.querySelectorAll('.auth-tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const sendPhoneCodeBtn = document.getElementById('sendPhoneCode');
const sendEmailCodeBtn = document.getElementById('sendEmailCode');

// 登录/注册切换
authTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // 移除所有活动状态
        authTabBtns.forEach(b => b.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));
        
        // 添加活动状态
        btn.classList.add('active');
        if (targetTab === 'login') {
            loginForm.classList.add('active');
        } else if (targetTab === 'register') {
            registerForm.classList.add('active');
        }
    });
});

// 注册标签页切换
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // 移除所有活动状态
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 添加活动状态
        btn.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
});

// 验证码倒计时
function startCountdown(button, seconds) {
    let remaining = seconds;
    button.disabled = true;
    button.textContent = `${remaining}s`;
    
    const interval = setInterval(() => {
        remaining--;
        button.textContent = `${remaining}s`;
        
        if (remaining <= 0) {
            clearInterval(interval);
            button.disabled = false;
            button.textContent = '发送验证码';
        }
    }, 1000);
}

// 发送手机验证码（演示版本）
sendPhoneCodeBtn.addEventListener('click', async () => {
    const phone = document.getElementById('phone').value;
    
    if (!phone) {
        showMessage('请输入手机号', 'error');
        return;
    }
    
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        showMessage('请输入正确的手机号', 'error');
        return;
    }
    
    // 演示版本：直接显示成功消息
    showMessage('验证码已发送（演示版本）', 'success');
    startCountdown(sendPhoneCodeBtn, 60);
});

// 发送邮箱验证码（演示版本）
sendEmailCodeBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    
    if (!email) {
        showMessage('请输入邮箱地址', 'error');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage('请输入正确的邮箱地址', 'error');
        return;
    }
    
    // 演示版本：直接显示成功消息
    showMessage('验证码已发送（演示版本）', 'success');
    startCountdown(sendEmailCodeBtn, 60);
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL参数，如果指定了tab=register，则切换到注册标签页
    const urlParams = new URLSearchParams(window.location.search);
    const targetTab = urlParams.get('tab');
    
    if (targetTab === 'register') {
        // 激活注册表单和tab
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        document.getElementById('registerForm').classList.add('active');
        document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.auth-tab-btn[data-tab="register"]').classList.add('active');
    } else {
        // 默认激活登录表单和tab
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        document.getElementById('loginForm').classList.add('active');
        document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.auth-tab-btn[data-tab="login"]').classList.add('active');
    }
});

// 注册表单提交（演示版本）
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const activeTab = document.querySelector('.tab-btn.active');
    if (!activeTab) {
        showMessage('请选择注册方式', 'error');
        return;
    }
    const activeTabType = activeTab.getAttribute('data-tab');
    const agreeCheckbox = document.getElementById('agree');
    if (!agreeCheckbox.checked) {
        showMessage('请先同意用户协议和隐私政策', 'error');
        return;
    }
    
    let formData = {};
    if (activeTabType === 'phone') {
        const phone = document.getElementById('phone').value;
        const code = document.getElementById('phone-code').value;
        const password = document.getElementById('phone-password').value;
        if (!phone || !code || !password) {
            showMessage('请填写完整信息', 'error');
            return;
        }
        formData = { type: 'phone', phone, code, password };
    } else if (activeTabType === 'email') {
        const email = document.getElementById('email').value;
        const code = document.getElementById('email-code').value;
        const password = document.getElementById('email-password').value;
        if (!email || !code || !password) {
            showMessage('请填写完整信息', 'error');
            return;
        }
        formData = { type: 'email', email, code, password };
    } else if (activeTabType === 'wechat') {
        showMessage('微信注册功能开发中', 'error');
        return;
    }
    
    try {
        const registerBtn = document.querySelector('#registerForm .auth-btn');
        registerBtn.classList.add('loading');
        registerBtn.disabled = true;
        
        // 演示版本：模拟注册成功
        setTimeout(() => {
            showMessage('注册成功！请登录（演示版本）', 'success');
            setTimeout(() => {
                // 只用tab按钮切换
                const loginTabBtn = document.querySelector('.auth-tab-btn[data-tab="login"]');
                if (loginTabBtn) loginTabBtn.click();
            }, 2000);
        }, 1500);
        
    } catch (error) {
        showMessage('网络错误，请重试', 'error');
    } finally {
        setTimeout(() => {
            const registerBtn = document.querySelector('#registerForm .auth-btn');
            registerBtn.classList.remove('loading');
            registerBtn.disabled = false;
        }, 1500);
    }
});

// 登录表单提交（演示版本）
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (!username || !password) {
        showMessage('请填写完整信息', 'error');
        return;
    }
    
    try {
        const loginBtn = document.querySelector('#loginForm .auth-btn');
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
        
        // 演示版本：模拟登录成功
        setTimeout(() => {
            showMessage('登录成功！正在跳转...（演示版本）', 'success');
            setTimeout(() => {
                // 演示版本：跳转到示例页面
                window.open('https://www.example.com', '_blank');
            }, 2000);
        }, 1500);
        
    } catch (error) {
        showMessage('网络错误，请重试', 'error');
    } finally {
        setTimeout(() => {
            const loginBtn = document.querySelector('#loginForm .auth-btn');
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
        }, 1500);
    }
});

// 显示消息
function showMessage(message, type) {
    // 移除现有消息
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建新消息
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    // 插入到表单前面
    const activeForm = document.querySelector('.auth-form.active');
    activeForm.parentNode.insertBefore(messageDiv, activeForm);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// 输入验证
function validateInput(input, pattern, errorMessage) {
    const value = input.value;
    if (!pattern.test(value)) {
        input.style.borderColor = '#dc3545';
        showMessage(errorMessage, 'error');
        return false;
    } else {
        input.style.borderColor = '#e9ecef';
        return true;
    }
}

// 手机号验证
document.getElementById('phone').addEventListener('blur', function() {
    if (this.value) {
        validateInput(this, /^1[3-9]\d{9}$/, '请输入正确的手机号');
    }
});

// 邮箱验证
document.getElementById('email').addEventListener('blur', function() {
    if (this.value) {
        validateInput(this, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, '请输入正确的邮箱地址');
    }
});

// 密码强度验证
function validatePassword(password) {
    const minLength = 6;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return password.length >= minLength && hasLetter && hasNumber;
}

// 密码输入验证
document.getElementById('phone-password').addEventListener('blur', function() {
    if (this.value && !validatePassword(this.value)) {
        this.style.borderColor = '#dc3545';
        showMessage('密码至少6位，包含字母和数字', 'error');
    } else {
        this.style.borderColor = '#e9ecef';
    }
});

document.getElementById('email-password').addEventListener('blur', function() {
    if (this.value && !validatePassword(this.value)) {
        this.style.borderColor = '#dc3545';
        showMessage('密码至少6位，包含字母和数字', 'error');
    } else {
        this.style.borderColor = '#e9ecef';
    }
}); 