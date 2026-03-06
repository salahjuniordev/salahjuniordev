document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#0' && href !== '#') {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

    // Project Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtns = document.querySelectorAll('.close-modal, .close-project-btn');

    const projectData = {
        project1: {
            title: "E-commerce Platform",
            image: "img/portfolio/1.png",
            description: "A full-featured e-commerce solution with integrated payment gateways, user authentication, and real-time inventory management. Built with modern frameworks to ensure scalability and performance."
        },
        project2: {
            title: "Brand Identity Design",
            image: "img/portfolio/3.png",
            description: "A comprehensive branding project for a tech startup, including logo design, color palette selection, and typography guidelines to create a cohesive and memorable brand presence."
        },
        project3: {
            title: "Mobile App UI",
            image: "img/portfolio/6.jpg",
            description: "User interface design for a fitness tracking mobile application, focusing on intuitive navigation, clear data visualization, and an engaging user experience."
        }
    };

    document.querySelectorAll('.open-project').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const data = projectData[projectId];
            
            modalBody.innerHTML = `
                <div class="modal-body-content">
                    <img src="${data.image}" alt="${data.title}" style="width:100%; height:auto;">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>
            `;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
