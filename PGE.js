document.addEventListener("DOMContentLoaded", () => {

    //Global

    const ease = 'power2.inOut';
    const easeSec = 'back.inOut(2)';
    const duration = 1;
    const durationSec = 0.5;

    let mm = gsap.matchMedia();

    //Десктоп версия

    mm.add("(min-width: 768px)", () => {


        //Первая секция (Hero)

        let heroAnimation = gsap.timeline();

        heroAnimation
            .from('.nav_component', {
                yPercent: -100,
                ease: ease,
                duration: duration
            }, 0)
            .from('.nav_menu_link', {
                autoAlpha: 0,
                stagger: 0.15,
                ease: ease,
                duration: duration
            }, 0.25)
            .from('#nav-logo', {
                x: '50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, 0.66)
            .from('#nav-btn', {
                x: '-50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, 0.66)
            .from('.hero_h1', {
                x: '-50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, 1)
            .from('.hero_h2', {
                x: '50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, 1.25)
            .from('.hero_divider', {
                scaleX: 0,
                transformOrigin: 'center',
                ease: ease,
                duration: duration
            }, 1.75)
            .to('.hero_h1', {
                y: '-2.5rem',
                ease: ease,
                duration: duration
            }, 1.75)
            .to('.hero_h2', {
                y: '2.5rem',
                ease: ease,
                duration: duration
            }, 1.75)

        let lastScrollTop = 0;

        const navbar = document.querySelector('.nav_component');

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                gsap.to(navbar, {
                    yPercent: -100,
                    ease: 'none',
                    duration: duration
                });
            } else {
                gsap.to(navbar, {
                    yPercent: 0,
                    ease: 'none',
                    duration: duration
                });
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });

        //Вторая секция (About)

        const sectionAbout = document.querySelector('.section.is-about');

        const aboutSplitMain = new SplitType('#about-body-main');

        gsap.to(sectionAbout, {
            backgroundPosition: '50% 100%',
            ease: ease,
            scrollTrigger: {
                trigger: sectionAbout,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        let aboutAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: sectionAbout,
                start: 'top 80%'
            }
        });

        aboutAnimation
            .from('.about_content-wrapper', {
                autoAlpha: 0,
                xPercent: -50,
                ease: ease,
                duration: duration
            }, 0)
            .from(aboutSplitMain.lines, {
                autoAlpha: 0,
                y: 50,
                stagger: 0.05,
                ease: ease,
                duration: duration
            }, .3)
            .from('.about_grid-item', {
                autoAlpha: 0,
                xPercent: 50,
                stagger: 0.3,
                ease: ease,
                duration: duration
            }, .5)


        //Третья секция (Services)

        const sectionServices = document.querySelector('.section.is-services');
        const items = gsap.utils.toArray('.service_item');
        const itemCount = items.length;

        items.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, { x: '100%' });
            }
        });

        let servicesAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: sectionServices,
                start: 'top top',
                pin: true,
                scrub: 1,
                end: `+=${150 * (itemCount - 1)}%`,
            }
        });

        items.forEach((item, index) => {
            if (index !== 0) {
                servicesAnimation
                    .to(item, {
                        x: '0%',
                        ease: ease,
                        duration: duration,
                    })
                    .to({}, { duration: .5 });
            }
        });

        let servicesAnimation2 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionServices,
                start: 'top 80%'
            }
        });

        servicesAnimation2
            .from('.services_container', {
                scale: 1.1,
                filter: 'blur(0.5rem)',
                ease: ease,
                duration: duration
            }, 0)
            .from('.service-overlay', {
                backgroundColor: 'rgba(16, 16, 16, 0.8)',
                ease: ease,
                duration: duration
            }, 0)
            .from('.services_h2', {
                autoAlpha: 0,
                yPercent: 50,
                filter: 'blur(0.3rem)',
                ease: ease,
                duration: duration
            }, .3)
            .from('.service_title-wrapper', {
                autoAlpha: 0,
                yPercent: 50,
                filter: 'blur(0.3rem)',
                ease: ease,
                duration: duration
            }, .5)
            .from('.service_content-wrapper', {
                autoAlpha: 0,
                yPercent: 25,
                filter: 'blur(0.3rem)',
                ease: ease,
                duration: duration
            }, .7)
            .from('.service_button-wrapper', {
                autoAlpha: 0,
                yPercent: 50,
                filter: 'blur(0.3rem)',
                ease: ease,
                duration: duration
            }, .9)

        //Четвёртая секция (Industries)

        const sectionIndustries = document.querySelector('.section.is-industries');

        gsap.to(sectionIndustries, {
            backgroundPosition: '50% 100%',
            ease: ease,
            scrollTrigger: {
                trigger: sectionIndustries,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        let industriesAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: sectionIndustries,
                start: 'top 70%'
            }
        });

        industriesAnimation
            .from('#industries-h2', {
                autoAlpha: 0,
                yPercent: 50,
                filter: 'blur(0.3rem)',
                ease: ease,
                duration: duration
            }, 0)
            .from('.industries_item', {
                autoAlpha: 0,
                yPercent: 25,
                stagger: 0.2,
                ease: easeSec,
                duration: duration
            }, .3)

        gsap.set('.industries_image', { filter: 'blur(0rem) brightness(100%)' });

        document.querySelectorAll('.industries_item').forEach(item => {

            item.addEventListener('mouseenter', () => {
                let tl = gsap.timeline();

                tl
                    .to(item, {
                        yPercent: -5,
                        scale: 1.1,
                        boxShadow: '0rem 0rem 1rem 0.5rem rgba(16, 16, 16, 0.5)',
                        ease: easeSec,
                        duration: durationSec
                    }, 0)

                    .to(item.querySelector('.industries_text-wrap'), {
                        autoAlpha: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0)

                    .to(item.querySelector('.industries_image'), {
                        filter: 'blur(0.5rem) brightness(50%)',
                        scale: 1.1,
                        duration: durationSec,
                        ease: ease
                    }, 0)

                    .to(item.querySelector('.industries_header-wrap'), {
                        color: '#f0f0f0',
                        backgroundColor: 'rgba(16, 16, 16, 0.5)',
                        duration: durationSec,
                        ease: ease
                    }, 0);
            });

            item.addEventListener('mouseleave', () => {
                let tl = gsap.timeline();

                tl
                    .to(item, {
                        yPercent: 0,
                        scale: 1,
                        boxShadow: '0rem 0rem 0rem 0rem rgba(0, 0, 0, 0)',
                        ease: easeSec,
                        duration: durationSec
                    }, 0)

                    .to(item.querySelector('.industries_text-wrap'), {
                        autoAlpha: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)

                    .to(item.querySelector('.industries_image'), {
                        filter: 'blur(0rem) brightness(100%)',
                        scale: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0)

                    .to(item.querySelector('.industries_header-wrap'), {
                        color: '#101010',
                        backgroundColor: '#f0f0f0',
                        duration: durationSec,
                        ease: ease
                    }, 0);
            });
        });

        //Пятая секция (FAQ)

        const sectionFAQ = document.querySelector('.section.is-faq');

        let animationFaqSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionFAQ,
                start: 'top 70%'
            }
        })

        animationFaqSection
            .from('.faq_h2', {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                stagger: 0.3,
                ease: ease,
                duration: duration
            }, 0)
            .from('.faq_item', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                stagger: 0.2,
                ease: ease,
                duration: duration
            }, .5)

        function initDropdown() {
            const faqItems = document.querySelectorAll('.faq_item');

            faqItems.forEach((item) => {
                const header = item.querySelector('.faq_header');
                const buttonBorder = item.querySelector('.faq_btn-wrap');
                const buttonVertical = item.querySelector('.faq_v-line');
                const buttonHorizontal = item.querySelector('.faq_h-line');
                const content = item.querySelector('.faq_content');

                gsap.set(content, { height: '0rem', autoAlpha: 0, marginTop: '0rem', marginBottom: '0rem' });

                header.addEventListener('click', () => toggleDropdown(item, buttonBorder, buttonVertical, buttonHorizontal, content));
            });
        }

        function toggleDropdown(item, buttonBorder, buttonVertical, buttonHorizontal, content) {
            const isOpen = item.classList.contains('open');

            if (!isOpen) {
                item.classList.add('open');
                let tl = gsap.timeline();
                tl
                    .to(content, {
                        height: 'auto',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(content, {
                        autoAlpha: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.33)
                    .to(buttonBorder, {
                        borderColor: '#5c3c86',
                        scale: 1.2,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonBorder, {
                        scale: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.16)
                    .to(buttonVertical, {
                        backgroundColor: '#5c3c86',
                        rotationZ: 270,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonHorizontal, {
                        autoAlpha: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
            } else {
                item.classList.remove('open');
                let tl = gsap.timeline();
                tl
                    .to(content, {
                        autoAlpha: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(content, {
                        height: '0rem',
                        marginTop: '0rem',
                        marginBottom: '0rem',
                        duration: durationSec,
                        ease: ease
                    }, 0.33)
                    .to(buttonBorder, {
                        borderColor: '#499b9c',
                        scale: 1.2,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonBorder, {
                        scale: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.16)
                    .to(buttonVertical, {
                        backgroundColor: '#499b9c',
                        rotationZ: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonHorizontal, {
                        autoAlpha: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0)
            }
        }

        initDropdown();

        //Шестая секция (CTA)

        const sectionCTA = document.querySelector('.section.is-cta');

        let animationCtaSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionCTA,
                start: 'top 50%'
            }
        })

        animationCtaSection
            .from('.cta_content-wrapper', {
                autoAlpha: 0,
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, 0)
            .from('.cta_h2', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .3)
            .from('.cta_h3', {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .5)
            .from('.cta_divider', {
                scaleX: 0,
                transformOrigin: 'center',
                ease: ease,
                duration: duration
            }, 1)

        gsap.to(sectionCTA, {
            backgroundPosition: '50% 100%',
            ease: ease,
            scrollTrigger: {
                trigger: sectionCTA,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        //Седьмая секция (Contact)

        const sectionContact = document.querySelector('.section.is-contact');

        const contactSplit = new SplitType('.contact_img-txt')

        let animationContactSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionContact,
                start: 'top 60%'
            }
        })

        animationContactSection
            .from('.contact_h2', {
                autoAlpha: 0,
                yPercent: 50,
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, 0)
            .from('.contact_img-wrap', {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .5)
            .from(contactSplit.lines, {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                stagger: 0.2,
                duration: duration,
                ease: ease
            }, .9)
            .from('.text-field.is-1', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                stagger: 0.1,
                duration: duration,
                ease: ease
            }, .7)
            .from('.text-field.is-2', {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                stagger: 0.2,
                duration: duration,
                ease: ease
            }, .7)
            .from('.textarea', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .9)
            .from('.contact_btn', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, 1.1)

        gsap.to(sectionContact, {
            backgroundPosition: '50% 100%',
            ease: ease,
            scrollTrigger: {
                trigger: sectionContact,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });


        //Восьмая секция (Footer)

        const sectionFooter = document.querySelector('.section.is-footer');

        let animationFooterSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionFooter,
                start: 'top 90%'
            }
        })

        animationFooterSection
            .from('.logo_footer', {
                autoAlpha: 0,
                y: '5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, 0)
            .from('.footer_wrapper-gap-1rem', {
                autoAlpha: 0,
                y: '5rem',
                filter: 'blur(0.3rem)',
                stagger: .3,
                duration: duration,
                ease: ease
            }, .3)
            .from('#body-s-footer', {
                autoAlpha: 0,
                y: '-5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .9)

        // Курсор

        const cursor = document.querySelector('.custom-cursor');
        let isFirstMove = true;

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (isFirstMove) {
                cursor.style.opacity = '1';
                isFirstMove = false;
            }

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;

            const hoveredElement = document.elementFromPoint(mouseX, mouseY);
            if (hoveredElement) {
                if (hoveredElement.hasAttribute('cursor-change')) {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursor.style.backgroundColor = 'rgba(73, 155, 156, 0.8)';
                } else {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.backgroundColor = 'rgba(92, 60, 134, 0.8)';
                }
            }
        });

    });

    //Моб версия

    mm.add("(max-width: 767px)", () => {

        //Глобал моб

        gsap.set('[scroll-mob]', {
            autoAlpha: 0,
            y: '5rem',
            filter: 'blur(0.3rem)'
        });

        ScrollTrigger.batch('[scroll-mob]', {
            onEnter: batch => gsap.to(batch, {
                autoAlpha: 1,
                y: '0rem',
                filter: 'blur(0rem)',
                duration: duration,
                ease: ease
            })
        });

        //Первая секция (Hero)

        let heroAnimation = gsap.timeline();

        heroAnimation
            .from('.nav_component', {
                yPercent: -100,
                ease: ease,
                duration: duration
            }, 0)
            .from('#nav-logo', {
                x: '50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, .5)
            .from('.nav_burger', {
                x: '-50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, .5)
            .from('.hero_h1', {
                x: '-50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, .75)
            .from('.hero_h2', {
                x: '50%',
                autoAlpha: 0,
                ease: ease,
                duration: duration
            }, 1)
            .from('.hero_divider', {
                scaleX: 0,
                transformOrigin: 'center',
                ease: ease,
                duration: duration
            }, 1.25)

        let lastScrollTop = 0;

        const navbar = document.querySelector('.nav_component');

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                gsap.to(navbar, {
                    yPercent: -100,
                    ease: 'none',
                    duration: duration
                });
            } else {
                gsap.to(navbar, {
                    yPercent: 0,
                    ease: 'none',
                    duration: duration
                });
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });

        //Четвёртая секция (Industries)

        gsap.set('.industries_image', { filter: 'blur(0rem) brightness(100%)' });

        const observerOptions = {
            root: null, // Отслеживаем видимость относительно окна просмотра (viewport)
            rootMargin: '-50% 0px -50% 0px', // Ещё больше смещаем границы отслеживания
            threshold: 0 // Срабатывает, когда хотя бы 1 пиксель элемента виден в этих границах
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const item = entry.target;

                if (entry.isIntersecting) {
                    // Элемент в узкой зоне около центра экрана
                    gsap.to(item, {
                        scale: 1.1,
                        boxShadow: '0rem 0rem 1rem 0.5rem rgba(16, 16, 16, 0.5)',
                        ease: easeSec,
                        duration: duration
                    });

                    gsap.to(item.querySelector('.industries_text-wrap'), {
                        autoAlpha: 1,
                        duration: duration,
                        ease: ease
                    });

                    gsap.to(item.querySelector('.industries_image'), {
                        filter: 'blur(0.5rem) brightness(50%)',
                        scale: 1.1,
                        duration: duration,
                        ease: ease
                    });

                    gsap.to(item.querySelector('.industries_header-wrap'), {
                        color: '#f0f0f0',
                        backgroundColor: 'rgba(16, 16, 16, 0.5)',
                        duration: duration,
                        ease: ease
                    });
                } else {
                    // Элемент выходит из узкой зоны около центра экрана
                    gsap.to(item, {
                        scale: 1,
                        boxShadow: '0rem 0rem 0rem 0rem rgba(0, 0, 0, 0)',
                        ease: easeSec,
                        duration: duration
                    });

                    gsap.to(item.querySelector('.industries_text-wrap'), {
                        autoAlpha: 0,
                        duration: duration,
                        ease: ease
                    });

                    gsap.to(item.querySelector('.industries_image'), {
                        filter: 'blur(0rem) brightness(100%)',
                        scale: 1,
                        duration: duration,
                        ease: ease
                    });

                    gsap.to(item.querySelector('.industries_header-wrap'), {
                        color: '#101010',
                        backgroundColor: '#f0f0f0',
                        duration: duration,
                        ease: ease
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.industries_item').forEach(item => {
            observer.observe(item);
        });



        //Пятая секция (FAQ)

        function initDropdown() {
            const faqItems = document.querySelectorAll('.faq_item');

            faqItems.forEach((item) => {
                const header = item.querySelector('.faq_header');
                const buttonBorder = item.querySelector('.faq_btn-wrap');
                const buttonVertical = item.querySelector('.faq_v-line');
                const buttonHorizontal = item.querySelector('.faq_h-line');
                const content = item.querySelector('.faq_content');

                gsap.set(content, { height: '0rem', autoAlpha: 0, marginTop: '0rem', marginBottom: '0rem' });

                header.addEventListener('click', () => toggleDropdown(item, buttonBorder, buttonVertical, buttonHorizontal, content));
            });
        }

        function toggleDropdown(item, buttonBorder, buttonVertical, buttonHorizontal, content) {
            const isOpen = item.classList.contains('open');

            if (!isOpen) {
                item.classList.add('open');
                let tl = gsap.timeline();
                tl
                    .to(content, {
                        height: 'auto',
                        marginTop: '0.5rem',
                        marginBottom: '0.5rem',
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(content, {
                        autoAlpha: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.33)
                    .to(buttonBorder, {
                        borderColor: '#5c3c86',
                        scale: 1.2,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonBorder, {
                        scale: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.16)
                    .to(buttonVertical, {
                        backgroundColor: '#5c3c86',
                        rotationZ: 270,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonHorizontal, {
                        autoAlpha: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
            } else {
                item.classList.remove('open');
                let tl = gsap.timeline();
                tl
                    .to(content, {
                        autoAlpha: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(content, {
                        height: '0rem',
                        marginTop: '0rem',
                        marginBottom: '0rem',
                        duration: durationSec,
                        ease: ease
                    }, 0.33)
                    .to(buttonBorder, {
                        borderColor: '#499b9c',
                        scale: 1.2,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonBorder, {
                        scale: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0.16)
                    .to(buttonVertical, {
                        backgroundColor: '#499b9c',
                        rotationZ: 0,
                        duration: durationSec,
                        ease: ease
                    }, 0)
                    .to(buttonHorizontal, {
                        autoAlpha: 1,
                        duration: durationSec,
                        ease: ease
                    }, 0)
            }
        }

        initDropdown();

        //Шестая секция (CTA)

        const sectionCTA = document.querySelector('.section.is-cta');

        let animationCtaSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionCTA,
                start: 'top 40%'
            }
        })

        animationCtaSection
            .from('.cta_content-wrapper', {
                autoAlpha: 0,
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, 0)
            .from('.cta_h2', {
                autoAlpha: 0,
                x: '-5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .3)
            .from('.cta_h3', {
                autoAlpha: 0,
                x: '5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            }, .5)
            .from('.cta_divider', {
                scaleX: 0,
                transformOrigin: 'center',
                ease: ease,
                duration: duration
            }, 1)

        //Восьмая секция (Footer)

        const sectionFooter = document.querySelector('.section.is-footer');

        let animationFooterSection = gsap.timeline({
            scrollTrigger: {
                trigger: sectionFooter,
                start: '55% 50%'
            }
        })

        animationFooterSection
            .from('#body-s-footer', {
                autoAlpha: 0,
                y: '5rem',
                filter: 'blur(0.3rem)',
                duration: duration,
                ease: ease
            })

        // Formspree
        document.getElementById('contact-form').setAttribute('action', 'https://formspree.io/f/meojdqva');
        document.getElementById('contact-form').setAttribute('method', 'POST');
        document.getElementById('first-name').setAttribute('name', 'first_name');
        document.getElementById('last-name').setAttribute('name', 'last_name');
        document.getElementById('email').setAttribute('name', 'email');
        document.getElementById('company-name').setAttribute('name', 'company_name');
        document.getElementById('position').setAttribute('name', 'position');
        document.getElementById('description').setAttribute('name', 'description');
        document.getElementById('submit-button').setAttribute('type', 'submit');
        document.getElementById('first-name').setAttribute('required', 'required');
        document.getElementById('last-name').setAttribute('required', 'required');
        document.getElementById('email').setAttribute('required', 'required');
        document.getElementById('description').setAttribute('required', 'required');


    });

});