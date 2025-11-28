// ハンバーガーメニューのトグル
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // メニューリンクをクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のナビゲーションバーのスタイル変更
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(250, 248, 243, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(250, 248, 243, 0.95)';
    }
    
    lastScroll = currentScroll;
});

// パララックス効果（必要に応じて他の要素に適用可能）

// スクロールアニメーション（Intersection Observer）
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    // サービスカード
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // 価値提供アイテム
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`;
        observer.observe(el);
    });

    // 資産カード
    const assetCards = document.querySelectorAll('.asset-card');
    assetCards.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(el);
    });

    // 循環サイクルのステップ
    const cycleSteps = document.querySelectorAll('.cycle-step');
    cycleSteps.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px) scale(0.95)';
        el.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(el);
    });

    // セクションタイトル
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // リードテキスト
    const leadTexts = document.querySelectorAll('.lead-text, .contact-text, .cycle-description');
    leadTexts.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
        observer.observe(el);
    });
});

// 循環サイクルのアニメーション
const cycleSteps = document.querySelectorAll('.cycle-step');
const cycleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

cycleSteps.forEach(step => {
    cycleObserver.observe(step);
});

// マウス移動によるパララックス効果（カード）
const cards = document.querySelectorAll('.service-card, .asset-card, .cycle-step');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// 墨の滲みエフェクト（ホバー時）
const addInkEffect = (element) => {
    element.addEventListener('mouseenter', function(e) {
        const ink = document.createElement('div');
        ink.className = 'ink-effect';
        ink.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(44, 95, 124, 0.1);
            width: 0;
            height: 0;
            left: ${e.offsetX}px;
            top: ${e.offsetY}px;
            pointer-events: none;
            animation: inkSpread 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ink);
        
        setTimeout(() => {
            ink.style.width = '300px';
            ink.style.height = '300px';
            ink.style.left = e.offsetX - 150 + 'px';
            ink.style.top = e.offsetY - 150 + 'px';
        }, 10);
        
        setTimeout(() => {
            ink.remove();
        }, 600);
    });
};

// カードに墨の滲みエフェクトを適用
document.querySelectorAll('.service-card, .asset-card').forEach(card => {
    addInkEffect(card);
});

// スクロール進捗インジケーター
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, var(--accent-color), var(--accent-red));
        z-index: 9999;
        transition: width 0.1s ease;
        width: 0%;
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = scrolled + '%';
    });
};

createScrollIndicator();

// フォーム送信処理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 送信ボタンにアニメーション
        const submitButton = contactForm.querySelector('.submit-button');
        submitButton.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            submitButton.style.transform = '';
            alert('お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。');
            contactForm.reset();
        }, 200);
    });
}

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// スクロール速度の調整（スムーズなスクロール）
let isScrolling = false;
window.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
}, { passive: true });

// 数値カウントアップアニメーション（将来の拡張用）
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

