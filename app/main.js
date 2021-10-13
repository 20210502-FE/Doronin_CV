const burgerMenuOpen = document.querySelector('.open');
const burgerMenuClose = document.querySelector('.close');
const headerSocial = document.querySelector('.header__social');
const headerNav = document.querySelector('.header__nav');
const sectionSummary = document.querySelector('.summary');

const openMenu = () => {
    burgerMenuOpen.classList.add('open_hidden');
    burgerMenuClose.classList.add('close_visible');
    headerSocial.classList.add('header__social_visible');
    headerNav.classList.add('header__nav_visible');
    sectionSummary.classList.add('summary_bottom');
}

const closeMenu = () => {
    burgerMenuOpen.classList.remove('open_hidden');
    burgerMenuClose.classList.remove('close_visible');
    headerSocial.classList.remove('header__social_visible');
    headerNav.classList.remove('header__nav_visible');
    sectionSummary.classList.remove('summary_bottom');
}

burgerMenuOpen.onclick = () => {
    burgerMenuOpen.classList.contains('open_hidden') ? closeMenu() : openMenu()
};

const summaryBtn = document.querySelector('.summary__button');
const summaryText = document.querySelector('.summary__text');

const toggleSummaryText = () => {
    summaryText.classList.toggle('summary__text_opened');
    summaryBtn.innerHTML = summaryText.classList.contains('summary__text_opened') ? 'Close' : 'Summary';
};

summaryBtn.onclick = () => { toggleSummaryText() };

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;

            if ((document.documentElement.scrollTop > animItemOffset - animItemPoint) && document.documentElement.scrollTop < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollTop = document.documentElement.scrollTop,
            scrollLeft = document.documentElement.scrollLeft;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 400)
}