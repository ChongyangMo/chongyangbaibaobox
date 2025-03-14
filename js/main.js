document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }

    // 导航栏滚动效果
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        // 高亮当前滚动位置的导航项
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 关闭移动端菜单
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // 截图轮播
    const screenshotContainer = document.querySelector('.screenshot-container');
    const screenshots = document.querySelectorAll('.screenshot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (screenshotContainer && screenshots.length > 0) {
        let currentIndex = 0;
        const maxIndex = screenshots.length - 1;
        const screenshotWidth = screenshots[0].offsetWidth + 30; // 包括margin
        
        // 初始化轮播位置
        updateSliderPosition();
        
        // 上一张按钮
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentIndex = Math.max(0, currentIndex - 1);
                updateSliderPosition();
            });
        }
        
        // 下一张按钮
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = Math.min(maxIndex, currentIndex + 1);
                updateSliderPosition();
            });
        }
        
        // 自动轮播
        let autoSlideInterval = setInterval(autoSlide, 3000);
        
        // 鼠标悬停时暂停自动轮播
        screenshotContainer.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });
        
        // 鼠标离开时恢复自动轮播
        screenshotContainer.addEventListener('mouseleave', function() {
            autoSlideInterval = setInterval(autoSlide, 3000);
        });
        
        function autoSlide() {
            currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
            updateSliderPosition();
        }
        
        function updateSliderPosition() {
            // 计算滚动位置
            let scrollPosition = -currentIndex * screenshotWidth;
            
            // 应用变换
            screenshotContainer.style.transform = `translateX(${scrollPosition}px)`;
            
            // 更新按钮状态
            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex === maxIndex;
        }
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            // 重新计算截图宽度
            const newScreenshotWidth = screenshots[0].offsetWidth + 30;
            
            // 如果宽度变化，更新位置
            if (newScreenshotWidth !== screenshotWidth) {
                screenshotWidth = newScreenshotWidth;
                updateSliderPosition();
            }
        });
    }

    // 表单提交处理
    const contactForm = document.getElementById('feedback-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 这里可以添加表单验证逻辑
            
            // 模拟表单提交
            alert(`感谢您的反馈，${name}！我们会尽快回复您。`);
            
            // 重置表单
            contactForm.reset();
        });
    }

    // 动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .screenshot, .contact-item, .social-icon');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化元素样式
    const elementsToAnimate = document.querySelectorAll('.feature-card, .screenshot, .contact-item, .social-icon');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 首次加载时执行动画
    animateOnScroll();
    
    // 滚动时执行动画
    window.addEventListener('scroll', animateOnScroll);
}); 