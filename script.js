const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
// --- 1. DADOS DE TRADUÇÃO ---
const translations = {
    pt: {
        nav_home: "Home",
        nav_projects: "Projetos",
        nav_about: "Sobre Mim",
        nav_contact: "Contato",
        hero_title_backend: "Do Backend",
        hero_title_frontend: "ao Frontend",
        hero_subtitle: "Tecnologias principais",
        projects_title: "Projetos",
        projects_highlight: "Destaques",
        desc_devsburger: "E-commerce Fullstack. Sistema completo de delivery desenvolvido com Java e Spring Boot. A aplicação gerencia todo o ciclo do pedido: vitrine de produtos dinâmica, carrinho de compras com gerenciamento de sessão e checkout.",
        title_password: "Gerador de Senhas",
        desc_password: "Aplicação Front-end focada em lógica via JavaScript. O usuário pode escolher o tamanho da senha, incluir maiúsculas, números e símbolos. Possui funcionalidade de 'Copiar para Área de Transferência'.",
        btn_code: "Ver Código",
        
        about_title: "Sobre",
        about_me: "Mim",
        bio_p1: "Olá! Meu nome é Fellipe. Sou estudante de Engenharia de Software e apaixonado por transformar ideias em código.",
        bio_p2: "Atualmente, meu foco está no desenvolvimento Fullstack, explorando a solidez do Java no backend e a criatividade do Frontend com tecnologias modernas.",
        bio_p3: "Sempre busco criar aplicações que não apenas funcionem bem, mas que também tenham uma interface intuitiva e agradável (como estou tentando fazer neste portfólio!).",
        edu_title: "Formação",
        edu_course: "Engenharia de Software",
        edu_school: "CEUB - Centro Universitário de Brasília",
        edu_semester: "2º Semestre",
        skills_title: "Soft Skills",
        skill_1: "Trabalho em Equipe",
        skill_2: "Resolução de Problemas",
        skill_3: "Proatividade",
        skill_4: "Comunicação Clara",
        
        contact_title: "Vamos",
        contact_verb: "Conversar?",
        contact_text: "Estou sempre aberto a novas oportunidades e projetos. Sinta-se à vontade para entrar em contato!",
        btn_email: "Mandar E-mail"
    },
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_about: "About Me",
        nav_contact: "Contact",
        hero_title_backend: "From Backend",
        hero_title_frontend: "to Frontend",
        hero_subtitle: "Main Technologies",
        projects_title: "Featured",
        projects_highlight: "Projects",
        desc_devsburger: "Fullstack E-commerce. Complete delivery system built with Java and Spring Boot. Manages the entire order cycle: dynamic product showcase, shopping cart with session management, and checkout.",
        title_password: "Password Generator",
        desc_password: "Front-end application focused on JavaScript logic. Users can choose password length, include uppercase, numbers, and symbols. Features a 'Copy to Clipboard' function.",
        btn_code: "View Code",
        
        about_title: "About",
        about_me: "Me",
        bio_p1: "Hello! My name is Fellipe. I am a Software Engineering student passionate about turning ideas into code.",
        bio_p2: "Currently focused on Fullstack development, exploring the robustness of Java on the backend and the creativity of Frontend with modern technologies.",
        bio_p3: "I always strive to create applications that not only work well but also have an intuitive and pleasant interface.",
        edu_title: "Education",
        edu_course: "Software Engineering",
        edu_school: "CEUB - University Center of Brasília",
        edu_semester: "2nd Semester",
        skills_title: "Soft Skills",
        skill_1: "Teamwork",
        skill_2: "Problem Solving",
        skill_3: "Proactivity",
        skill_4: "Clear Communication",
        
        contact_title: "Let's",
        contact_verb: "Talk?",
        contact_text: "I am always open to new opportunities and projects. Feel free to contact me!",
        btn_email: "Send E-mail"
    }
};

let currentLang = 'pt';

// TYPEWRITER 
const textElement = document.getElementById('typewriter-text');

function getTypewriterText() {
    const t = translations[currentLang];
    return `${t.hero_title_backend} ${t.hero_title_frontend}`; 
}

let i = 0;
function typeWriter() {
    const fullText = getTypewriterText();
    if (i < fullText.length) {
        textElement.innerHTML += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
    } else {
        textElement.classList.remove("cursor-blink");
    }
}
// Inicia
textElement.classList.add("cursor-blink");
typeWriter();

// SCROLL REVEAL 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// TEMA 
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')) {
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
        themeBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
    } else {
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
        themeBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
    }
});

// IDIOMA COM BANDEIRAS 
const langBtn = document.getElementById('lang-toggle');

langBtn.addEventListener('click', () => {
    // 1. Troca o idioma
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    if (currentLang === 'pt') {
        langBtn.innerHTML = '<span class="fi fi-br"></span> PT';
    } else {
        langBtn.innerHTML = '<span class="fi fi-us"></span> EN';
    }
    
    updateTexts();
    
    // 4. Reinicia o Typewriter
    textElement.innerHTML = "";
    i = 0;
    textElement.classList.add("cursor-blink");
    typeWriter();
});

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
}


