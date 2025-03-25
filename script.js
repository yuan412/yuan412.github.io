// 获取所有具有下拉菜单的导航项
const navItemsWithDropdown = document.querySelectorAll('header ul.fl li:has(ul>li)');

// 为每个具有下拉菜单的导航项添加鼠标悬停事件
navItemsWithDropdown.forEach(item => {
    item.addEventListener('mouseover', () => {
        // 显示下拉菜单
        const dropdown = item.querySelector('ul');
        dropdown.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        // 隐藏下拉菜单
        const dropdown = item.querySelector('ul');
        dropdown.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const circles = document.querySelectorAll('.circle li');
    let currentIndex = 0;
    const intervalTime = 3000; // 切换间隔时间，单位：毫秒

    // 自动切换轮播图
    function autoSlide() {
        currentIndex = (currentIndex + 1) % circles.length;
        updateSlider();
    }

    // 更新轮播图和小圆点状态
    function updateSlider() {
        slider.style.left = `-${currentIndex * 100}%`;
        circles.forEach((circle, index) => {
            if (index === currentIndex) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    // 点击小圆点切换轮播图
    circles.forEach((circle, index) => {
        circle.addEventListener('click', function() {
            currentIndex = index;
            updateSlider();
        });
    });

    // 开始自动切换
    const interval = setInterval(autoSlide, intervalTime);
});
// 获取按钮和弹窗元素
const loginRegisterBtn = document.getElementById('login-register-btn');
const loginRegisterModal = document.getElementById('login-register-modal');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtns = document.querySelectorAll('.close');

// 点击登录/注册按钮显示弹窗
loginRegisterBtn.addEventListener('click', function() {
    loginRegisterModal.style.display = 'block';
});

// 点击购物车按钮显示弹窗
cartBtn.addEventListener('click', function() {
    cartModal.style.display = 'block';
});

// 点击关闭按钮隐藏弹窗
closeBtns.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// 点击弹窗外部区域隐藏弹窗
window.addEventListener('click', function(event) {
    if (event.target == loginRegisterModal) {
        loginRegisterModal.style.display = 'none';
    } else if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
});
