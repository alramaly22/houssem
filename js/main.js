/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    if (window.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
};
window.addEventListener('scroll', scrollHeader); // Corrected the function name


/*==

/*=============== REMOVE MENU MOBILE ===============*/



/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grapCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*=============== SHOW SCROLL UP ===============*/
const swiper1 = new Swiper('#swiper1', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
        disableOnInteraction: false,
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }
});

const swiper2 = new Swiper('#swiper2', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000, // الوقت بالمللي ثانية (3000 مللي ثانية = 3 ثوانٍ)
        disableOnInteraction: false,
        reverseDirection: true, // لتحريك الشريط إلى اليسار
    },
    breakpoints: {
        1150: {
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // 5000ms = 5 seconds
        disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل مع الـ Swiper
    },
});
/*==================== EmailJS ====================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    // Service Id - templateID - #form -publickey
    emailjs.sendForm('service_m1vme7a', 'template_w1tt59b', '#contact-form', 'XvW381h1g-zYVmnKY')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Clear input 
            contactForm.reset();
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error)';
        });
}

contactForm.addEventListener('submit', sendEmail);

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();
        // Change the icon
        videoIcon.classList.remove('ri-play-circle-fill');
        videoIcon.classList.add('ri-pause-circle-fill');
    } else {
        // Pause video
        videoFile.pause();
        // Change the icon
        videoIcon.classList.remove('ri-pause-circle-fill');
        videoIcon.classList.add('ri-play-circle-fill');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-circle-fill');
    videoIcon.classList.add('ri-play-circle-fill');
}

// When the video ends
videoFile.addEventListener('ended', finalVideo);