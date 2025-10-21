document.addEventListener('DOMContentLoaded', function() {
    // تم تعديل السطر التالي ليشمل كل الأزرار بشكل صحيح
    const linkBoxes = document.querySelectorAll('.link-box'); 
    const container = document.querySelector('.container');
    
    // تأثيرات للينكات
    linkBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // إضافة تأثير النقر
        box.addEventListener('click', function(e) {
            console.log('Clicked: ' + this.textContent.trim());
            
            // تأثير بسيط عند النقر
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                if (!box.matches(':hover')) {
                    this.style.transform = 'translateY(0)';
                } else {
                    this.style.transform = 'translateY(-3px)';
                }
            }, 150);
        });
    });
    
    // !! تم حذف كود "Manage dropdown menu" بالكامل من هنا !!

    
    // إضافة تأثير تحميل الصفحة
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // تأثير للصورة الشخصية
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // إضافة تاريخ التحديث للتذييل
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} PANCAKE LAB. All rights reserved.`;
    }
    
    // تأثيرات للأيقونات الاجتماعية
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثيرات للرموز العائمة
    const floatingPancakes = document.querySelectorAll('.floating-pancake');
    floatingPancakes.forEach(pancake => {
        pancake.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2)';
        });
        
        pancake.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });
    
    // التأكيد على أن زر الواتساب يعمل بشكل صحيح
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            console.log('Opening WhatsApp chat with: +201108305024');
        });
    }
});