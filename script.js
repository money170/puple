// Purple People Website JavaScript - NOW WITH EXTRA CRINGE!
// Mysterious and suspicious functionality (VERY SUS!)

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isSmallScreen = window.innerWidth <= 768;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all mysterious features with EXTRA CRINGE
    initScrollAnimations();
    initFormHandling();
    initMysteriousEffects();
    initSecretFiles();
    initGlitchEffects();
    initCringeMode();
    initPurpleEnergy();
    initEpicAnimations();
    
    // Show welcome message
    setTimeout(() => {
        showMysteriousMessage('🌟 WELCOME TO THE PURPLE PEOPLE ARMY! 🌟\n💜 You are now entering the realm of EXTREME MYSTERY! 💜');
    }, 2000);
    
    // Mobile-specific optimizations
    if (isMobile) {
        initMobileOptimizations();
    }
});

// Mobile optimizations
function initMobileOptimizations() {
    // Reduce floating emoji frequency on mobile
    const cringeInterval = isSmallScreen ? 8000 : 5000;
    
    // Reduce purple energy particles on mobile
    const particleInterval = isSmallScreen ? 2000 : 1000;
    
    // Reduce glitch effects on mobile
    const glitchInterval = isSmallScreen ? 4000 : 2000;
    
    // Update intervals
    if (isSmallScreen) {
        // Clear existing intervals and set mobile-optimized ones
        clearInterval(window.cringeInterval);
        clearInterval(window.particleInterval);
        clearInterval(window.glitchInterval);
        
        window.cringeInterval = setInterval(() => {
            if (isSmallScreen) {
                addMobileCringeEffect();
            }
        }, cringeInterval);
        
        window.particleInterval = setInterval(() => {
            if (isSmallScreen) {
                addMobilePurpleParticle();
            }
        }, particleInterval);
        
        window.glitchInterval = setInterval(() => {
            if (isSmallScreen) {
                addMobileGlitchEffect();
            }
        }, glitchInterval);
    }
}

// Mobile-optimized cringe effects
function addMobileCringeEffect() {
    if (isSmallScreen) {
        const randomEmoji = ['💜', '🟣', '⚡', '🌟', '🔥', '💯', '😎', '🤯', '😱', '👻', '🔮', '🌙'];
        const emoji = randomEmoji[Math.floor(Math.random() * randomEmoji.length)];
        
        const floatingEmoji = document.createElement('div');
        floatingEmoji.innerHTML = emoji;
        floatingEmoji.style.cssText = `
            position: fixed;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: floatingEmojiMobile 2s ease-out forwards;
        `;
        
        document.body.appendChild(floatingEmoji);
        setTimeout(() => {
            if (document.body.contains(floatingEmoji)) {
                document.body.removeChild(floatingEmoji);
            }
        }, 2000);
    }
}

// Mobile-optimized purple particles
function addMobilePurpleParticle() {
    if (isSmallScreen) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: #8a2be2;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: purpleParticleMobile 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 1500);
    }
}

// Mobile-optimized glitch effects
function addMobileGlitchEffect() {
    if (isSmallScreen) {
        const elements = document.querySelectorAll('h1, h2, h3, p');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement && Math.random() < 0.1) {
            randomElement.style.transform = 'skew(1deg) rotate(0.5deg)';
            randomElement.style.color = '#ff00ff';
            randomElement.style.textShadow = '0 0 10px #ff00ff';
            
            setTimeout(() => {
                randomElement.style.transform = '';
                randomElement.style.color = '';
                randomElement.style.textShadow = '';
            }, 200);
        }
    }
}

// Scroll animations for sections with EXTRA BOUNCE
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add extra cringe effect
                if (!isSmallScreen) {
                    entry.target.style.animation = 'bounceIn 1s ease-out';
                } else {
                    entry.target.style.animation = 'bounceInMobile 0.8s ease-out';
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scrolling for navigation with EXTRA DRAMA
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Add dramatic effect (reduced on mobile)
        if (!isSmallScreen) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 500);
        }
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Show dramatic message
        showMysteriousMessage(`🚀 SCROLLING TO ${sectionId.toUpperCase()}! 🚀\n💜 PREPARE FOR EXTREME MYSTERY! 💜`);
    }
}

// Form handling with EXTRA MYSTERIOUS validation
function initFormHandling() {
    const form = document.getElementById('joinForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const reason = formData.get('reason');
            
            // EXTRA mysterious validation
            if (validatePurpleSecrets(name, email, reason)) {
                showMysteriousMessage('🎉 CONGRATULATIONS! 🎉\n💜 You are now OFFICIALLY a Purple People Army member! 💜\n🌟 Dandy Dean will contact you within 47 seconds! 🌟');
                form.reset();
                
                // Add celebration effects
                addCelebrationEffects();
            } else {
                showMysteriousMessage('❌ APPLICATION REJECTED! ❌\n💜 The purple energy found you UNWORTHY! 💜\n🌟 Try again with MORE MYSTERY and DRAMA! 🌟');
            }
        });
    }
}

// EXTRA mysterious validation function
function validatePurpleSecrets(name, email, reason) {
    // Check if name contains EXTRA mysterious elements
    const mysteriousWords = ['shadow', 'purple', 'secret', 'mystery', 'dark', 'night', 'hidden', 'unknown', 'epic', 'legendary', 'awesome', 'cool'];
    const hasMysteriousName = mysteriousWords.some(word => 
        name.toLowerCase().includes(word)
    );
    
    // Check if reason is EXTRA mysterious
    const reasonLength = reason.length;
    const hasMysteriousReason = reasonLength > 20 && (
        reason.toLowerCase().includes('purple') || 
        reason.toLowerCase().includes('mystery') ||
        reason.toLowerCase().includes('epic') ||
        reason.toLowerCase().includes('awesome')
    );
    
    // Check if email looks EXTRA suspicious
    const hasSuspiciousEmail = email.includes('@') && email.length > 5;
    
    // Check for EXTRA cringe words
    const cringeWords = ['sus', 'amogus', 'epic', 'legendary', 'awesome', 'cool', 'fire', 'lit'];
    const hasCringeWords = cringeWords.some(word => 
        (name + reason).toLowerCase().includes(word)
    );
    
    return hasMysteriousName || hasMysteriousReason || hasSuspiciousEmail || hasCringeWords;
}

// Show EXTRA mysterious messages
function showMysteriousMessage(message) {
    // Create EXTRA mysterious message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'mysterious-message';
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    
    // Mobile-optimized styling
    const isMobileStyle = isSmallScreen ? `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, rgba(26, 10, 46, 0.95), rgba(138, 43, 226, 0.95));
        border: 3px solid #8a2be2;
        color: #8a2be2;
        padding: 1.5rem;
        border-radius: 15px;
        font-family: 'VT323', monospace;
        font-size: 1.1rem;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 0 30px #8a2be2;
        animation: messageGlow 1s ease-in-out infinite alternate;
        max-width: 90vw;
        backdrop-filter: blur(10px);
    ` : `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, rgba(26, 10, 46, 0.95), rgba(138, 43, 226, 0.95));
        border: 3px solid #8a2be2;
        color: #8a2be2;
        padding: 2rem;
        border-radius: 15px;
        font-family: 'VT323', monospace;
        font-size: 1.3rem;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 0 50px #8a2be2;
        animation: messageGlow 1s ease-in-out infinite alternate;
        max-width: 500px;
        backdrop-filter: blur(10px);
    `;
    
    messageDiv.style.cssText = isMobileStyle;
    
    document.body.appendChild(messageDiv);
    
    // Add dramatic entrance
    messageDiv.style.animation = isSmallScreen ? 'messageEntranceMobile 0.5s ease-out' : 'messageEntrance 0.5s ease-out';
    
    // Remove message after 6 seconds
    setTimeout(() => {
        messageDiv.style.animation = isSmallScreen ? 'fadeOutMobile 1s ease-out' : 'fadeOut 1s ease-out';
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 1000);
    }, 6000);
}

// Add EXTRA mysterious effects
function initMysteriousEffects() {
    // Add EXTRA glitch effects to text
    const texts = document.querySelectorAll('p, h1, h2, h3');
    texts.forEach(text => {
        text.addEventListener('mouseenter', function() {
            if (!isSmallScreen) {
                this.style.textShadow = '0 0 20px #8a2be2, 0 0 40px #ff00ff';
                this.style.color = '#8a2be2';
                this.style.transform = 'scale(1.05)';
                this.style.animation = 'textWiggle 0.5s ease-in-out';
            }
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
            this.style.color = '';
            this.style.transform = '';
            this.style.animation = '';
        });
    });
    
    // Add EXTRA mysterious cursor trail (reduced on mobile)
    if (!isSmallScreen) {
        let trail = [];
        const maxTrailLength = 15;
        
        document.addEventListener('mousemove', function(e) {
            const dot = document.createElement('div');
            dot.className = 'cursor-trail';
            dot.innerHTML = '💜';
            dot.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX - 10}px;
                top: ${e.clientY - 10}px;
                animation: trailFade 1.5s ease-out forwards;
                font-size: 20px;
            `;
            
            document.body.appendChild(dot);
            trail.push(dot);
            
            if (trail.length > maxTrailLength) {
                const oldDot = trail.shift();
                if (document.body.contains(oldDot)) {
                    document.body.removeChild(oldDot);
                }
            }
        });
    }
    
    // Add EXTRA mysterious click effects (reduced on mobile)
    if (!isSmallScreen) {
        document.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                width: 50px;
                height: 50px;
                background: radial-gradient(circle, #8a2be2, transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                left: ${e.clientX - 25}px;
                top: ${e.clientY - 25}px;
                animation: rippleEffect 1s ease-out forwards;
            `;
            
            document.body.appendChild(ripple);
            setTimeout(() => {
                if (document.body.contains(ripple)) {
                    document.body.removeChild(ripple);
                }
            }, 1000);
        });
    }
}

// Initialize secret files functionality with EXTRA DRAMA
function initSecretFiles() {
    const secretFiles = document.querySelectorAll('.secret-file');
    secretFiles.forEach(file => {
        file.addEventListener('click', function() {
            const fileName = this.textContent;
            showSecretFileContent(fileName);
            
            // Add dramatic effect
            this.style.animation = 'fileClick 0.5s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}

// Show EXTRA secret file content
function showSecretFileContent(fileName) {
    const secretContents = {
        '📄 Operation Purple Dawn (EPIC!)': 'This operation involves the systematic replacement of all blue objects with purple ones. Dandy Dean claims this will shift the world\'s energy balance. *MIND BLOWN* 🤯',
        '📄 Dandy Dean\'s True Identity (LEGENDARY!)': 'CLASSIFIED: Dandy Dean is actually a time traveler from the year 3024, where purple is the dominant color of the universe. *GASP* 😱',
        '📄 The Purple Dimension Theory (MIND BLOWING!)': 'According to Dandy Dean, there exists a parallel dimension where everything is purple. He claims to have visited it 47 times. *WOW* 😲',
        '📄 Secret Meeting Locations (VERY SECRET!)': 'Meetings are held at random locations determined by the position of purple objects in the night sky. Check your purple compass. *MYSTERIOUS* 🔮',
        '📄 Purple People Anthem (MUSICAL!)': '🎵 "We are the Purple People, hear us roar! 🎵\n🎵 In the shadows we will hide no more! 🎵\n🎵 Purple power, purple might! 🎵\n🎵 We will win this purple fight! 🎵"',
        '📄 The Great Purple Conspiracy (REAL!)': 'The government doesn\'t want you to know that purple is actually the secret color of the universe. Dandy Dean has proof! *CONSPIRACY* 🕵️'
    };
    
    const content = secretContents[fileName] || 'This file appears to be corrupted or doesn\'t exist. *SAD* 😢';
    
    const modal = document.createElement('div');
    modal.className = 'secret-modal';
    modal.innerHTML = `
        <div class="secret-modal-content">
            <h3>${fileName}</h3>
            <p>${content}</p>
            <button onclick="this.parentElement.parentElement.remove()">Close (VERY SAD)</button>
        </div>
    `;
    
    // Mobile-optimized modal styling
    const modalStyle = isSmallScreen ? `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: modalEntrance 0.5s ease-out;
        padding: 1rem;
    ` : `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: modalEntrance 0.5s ease-out;
    `;
    
    modal.style.cssText = modalStyle;
    
    const modalContent = modal.querySelector('.secret-modal-content');
    const contentStyle = isSmallScreen ? `
        background: linear-gradient(45deg, rgba(26, 10, 46, 0.95), rgba(138, 43, 226, 0.95));
        border: 3px solid #8a2be2;
        padding: 1.5rem;
        border-radius: 15px;
        max-width: 95vw;
        text-align: center;
        color: #e0e0e0;
        font-family: 'VT323', monospace;
        box-shadow: 0 0 30px #8a2be2;
    ` : `
        background: linear-gradient(45deg, rgba(26, 10, 46, 0.95), rgba(138, 43, 226, 0.95));
        border: 3px solid #8a2be2;
        padding: 2rem;
        border-radius: 15px;
        max-width: 600px;
        text-align: center;
        color: #e0e0e0;
        font-family: 'VT323', monospace;
        box-shadow: 0 0 50px #8a2be2;
    `;
    
    modalContent.style.cssText = contentStyle;
    
    const closeBtn = modal.querySelector('button');
    closeBtn.style.cssText = `
        background: #8a2be2;
        color: #000;
        border: none;
        padding: 0.8rem 1.5rem;
        margin-top: 1.5rem;
        cursor: pointer;
        font-family: 'VT323', monospace;
        border-radius: 8px;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        if (!isSmallScreen) {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 0 20px #8a2be2';
        }
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
    
    document.body.appendChild(modal);
}

// Initialize EXTRA glitch effects
function initGlitchEffects() {
    // Add EXTRA random glitch to page elements
    const glitchInterval = isSmallScreen ? 4000 : 2000;
    
    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, h3, p');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement && Math.random() < 0.15) {
            if (isSmallScreen) {
                randomElement.style.transform = 'skew(1deg) rotate(0.5deg)';
                randomElement.style.color = '#ff00ff';
                randomElement.style.textShadow = '0 0 10px #ff00ff';
            } else {
                randomElement.style.transform = 'skew(3deg) rotate(1deg)';
                randomElement.style.color = '#ff00ff';
                randomElement.style.textShadow = '0 0 20px #ff00ff';
            }
            
            setTimeout(() => {
                randomElement.style.transform = '';
                randomElement.style.color = '';
                randomElement.style.textShadow = '';
            }, isSmallScreen ? 200 : 300);
        }
    }, glitchInterval);
    
    // Add EXTRA mysterious background effects
    const body = document.body;
    let hue = 270; // Purple hue
    
    setInterval(() => {
        hue = (hue + 2) % 360;
        body.style.background = `linear-gradient(135deg, #0a0a0a 0%, hsl(${hue}, 70%, 20%) 50%, #0a0a0a 100%)`;
    }, 3000);
}

// Initialize CRINGE MODE
function initCringeMode() {
    // Add EXTRA cringe effects
    const cringeInterval = isSmallScreen ? 8000 : 5000;
    
    setInterval(() => {
        if (!isSmallScreen) {
            const randomEmoji = ['💜', '🟣', '⚡', '🌟', '🔥', '💯', '😎', '🤯', '😱', '👻', '🔮', '🌙'];
            const emoji = randomEmoji[Math.floor(Math.random() * randomEmoji.length)];
            
            const floatingEmoji = document.createElement('div');
            floatingEmoji.innerHTML = emoji;
            floatingEmoji.style.cssText = `
                position: fixed;
                font-size: 2rem;
                pointer-events: none;
                z-index: 9999;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation: floatingEmoji 3s ease-out forwards;
            `;
            
            document.body.appendChild(floatingEmoji);
            setTimeout(() => {
                if (document.body.contains(floatingEmoji)) {
                    document.body.removeChild(floatingEmoji);
                }
            }, 3000);
        }
    }, cringeInterval);
}

// Initialize PURPLE ENERGY
function initPurpleEnergy() {
    // Add purple energy particles
    const particleInterval = isSmallScreen ? 2000 : 1000;
    
    setInterval(() => {
        if (!isSmallScreen) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #8a2be2;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9997;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation: purpleParticle 2s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 2000);
        }
    }, particleInterval);
}

// Initialize EPIC ANIMATIONS
function initEpicAnimations() {
    // Add epic entrance animations
    const elements = document.querySelectorAll('.article-card, .secret-file, .join-btn, .learn-btn');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.animation = isSmallScreen ? 'epicEntranceMobile 0.6s ease-out forwards' : 'epicEntrance 0.8s ease-out forwards';
    });
}

// Add celebration effects
function addCelebrationEffects() {
    // Add confetti (reduced on mobile)
    const confettiCount = isSmallScreen ? 25 : 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['💜', '🟣', '🌟', '⚡', '🔥'][Math.floor(Math.random() * 5)];
            confetti.style.cssText = `
                position: fixed;
                font-size: ${isSmallScreen ? '1.2rem' : '1.5rem'};
                pointer-events: none;
                z-index: 10001;
                left: ${Math.random() * window.innerWidth}px;
                top: -50px;
                animation: confettiFall 3s ease-in forwards;
            `;
            
            document.body.appendChild(confetti);
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 3000);
        }, i * (isSmallScreen ? 150 : 100));
    }
    
    // Add dramatic background effect
    document.body.style.animation = 'celebrationPulse 2s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// Add CSS animations for new elements
const style = document.createElement('style');
style.textContent = `
    @keyframes messageGlow {
        from { box-shadow: 0 0 30px #8a2be2; }
        to { box-shadow: 0 0 60px #8a2be2, 0 0 90px #8a2be2; }
    }
    
    @keyframes messageEntrance {
        from { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes messageEntranceMobile {
        from { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    @keyframes fadeOutMobile {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    }
    
    @keyframes trailFade {
        from { opacity: 1; transform: scale(1) rotate(0deg); }
        to { opacity: 0; transform: scale(0.5) rotate(360deg); }
    }
    
    @keyframes rippleEffect {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(4); opacity: 0; }
    }
    
    @keyframes textWiggle {
        0%, 100% { transform: scale(1.05) rotate(0deg); }
        25% { transform: scale(1.05) rotate(1deg); }
        75% { transform: scale(1.05) rotate(-1deg); }
    }
    
    @keyframes fileClick {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    @keyframes modalEntrance {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes floatingEmoji {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    @keyframes floatingEmojiMobile {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-80px) rotate(180deg); opacity: 0; }
    }
    
    @keyframes purpleParticle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(180deg); opacity: 0; }
    }
    
    @keyframes purpleParticleMobile {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(90deg); opacity: 0; }
    }
    
    @keyframes epicEntrance {
        from { transform: translateY(50px) scale(0.8); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes epicEntranceMobile {
        from { transform: translateY(30px) scale(0.9); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes confettiFall {
        0% { transform: translateY(-50px) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(720deg); }
    }
    
    @keyframes celebrationPulse {
        0%, 100% { filter: hue-rotate(0deg) brightness(1); }
        50% { filter: hue-rotate(180deg) brightness(1.2); }
    }
    
    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes bounceInMobile {
        0% { transform: scale(0.5); opacity: 0; }
        50% { transform: scale(1.02); }
        70% { transform: scale(0.95); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    .cursor-trail {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Add EXTRA mysterious console messages
console.log('%c🟣 WELCOME TO THE PURPLE PEOPLE ARMY 🟣', 'color: #8a2be2; font-size: 24px; font-weight: bold; text-shadow: 0 0 20px #8a2be2;');
console.log('%c💜 If you can see this, you\'re already being watched by Dandy Dean... 💜', 'color: #8a2be2; font-size: 16px; text-shadow: 0 0 10px #8a2be2;');
console.log('%c🌟 This website contains EXTREME levels of PURPLE ENERGY! 🌟', 'color: #ff00ff; font-size: 14px; text-shadow: 0 0 15px #ff00ff;');

if (isMobile) {
    console.log('%c📱 Mobile device detected - Purple energy optimized! 📱', 'color: #00ffff; font-size: 14px; text-shadow: 0 0 15px #00ffff;');
}

// Add EXTRA mysterious page title changes
let titleIndex = 0;
const mysteriousTitles = [
    'The Purple People - Join the Army (NOT CLICKBAIT!)',
    'Dandy Dean is watching... 👀',
    'Purple secrets await... 🔮',
    'The purple dimension calls... 🌌',
    'Join us in the shadows... 👻',
    'EXTREME MYSTERY AHEAD! ⚡',
    'You\'re not ready for this... 😱',
    'Purple power activated! 💜',
    'Dandy Dean approves! 👑',
    'Welcome to the purple side! 🟣'
];

setInterval(() => {
    document.title = mysteriousTitles[titleIndex];
    titleIndex = (titleIndex + 1) % mysteriousTitles.length;
}, 4000);

// Add EXTRA mysterious right-click prevention
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showMysteriousMessage('🚫 Right-clicking is FORBIDDEN in the Purple People domain! 🚫\n💜 Dandy Dean is watching your every move! 💜');
});

// Add EXTRA mysterious keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+Shift+P for EXTRA purple mode
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        document.body.style.filter = 'hue-rotate(270deg) brightness(1.3)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 5000);
        showMysteriousMessage('🚀 EXTRA PURPLE MODE ACTIVATED! 🚀\n💜 Dandy Dean is EXTREMELY impressed! 💜\n🌟 You have unlocked the ULTIMATE purple power! 🌟');
    }
    
    // Escape key for EXTRA mysterious escape
    if (e.key === 'Escape') {
        showMysteriousMessage('🚫 There is NO ESCAPE from the Purple People! 🚫\n💜 Resistance is futile! 💜\n🌟 Embrace the purple! 🌟');
    }
    
    // Spacebar for EXTRA purple energy
    if (e.key === ' ') {
        e.preventDefault();
        addCelebrationEffects();
        showMysteriousMessage('⚡ PURPLE ENERGY BLAST! ⚡\n💜 You have unleashed the power! 💜\n🌟 The purple force is strong with you! 🌟');
    }
});

// Add EXTRA mysterious mouse effects (desktop only)
if (!isSmallScreen) {
    document.addEventListener('mousemove', function(e) {
        if (Math.random() < 0.01) { // 1% chance
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 9996;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                animation: sparkleEffect 1s ease-out forwards;
            `;
            
            document.body.appendChild(sparkle);
            setTimeout(() => {
                if (document.body.contains(sparkle)) {
                    document.body.removeChild(sparkle);
                }
            }, 1000);
        }
    });
}

// Add sparkle effect animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleEffect {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);

// Mobile-specific touch optimizations
if (isMobile) {
    // Add touch feedback for interactive elements
    const touchElements = document.querySelectorAll('.article-card, .secret-file, .join-btn, .learn-btn, .submit-btn');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Optimize scroll performance on mobile
    let ticking = false;
    function updateScroll() {
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}
