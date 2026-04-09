const grid = document.getElementById('projectGrid');

// 1. Render Cards
projectData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.shortDesc}</p>
        <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    card.onclick = () => openModal(project);
    grid.appendChild(card);
});

// 2. Modal Logic
function openModal(project) {
    document.getElementById('mTitle').textContent = project.title;
    document.getElementById('mTech').textContent = project.tech;
    document.getElementById('mBody').textContent = project.body;
    document.getElementById('mLink').href = project.link;

    const linkBtn = document.getElementById('mLink');
    if (project.link === "") {
        linkBtn.href = "javascript:void(0)";       
        linkBtn.textContent = "Not Avaliable Yet";
        linkBtn.classList.add('github-btn-disabled');     
    } else {
        linkBtn.href = project.link;
        linkBtn.textContent = "View on GitHub";
        linkBtn.classList.remove('github-btn-disabled'); 
    }
    
    // Handle the image
    const imgElement = document.getElementById('mImage');
    if (project.image) {
        imgElement.src = project.image;
        imgElement.style.display = 'block';
    } else {
        imgElement.src = '';
        imgElement.style.display = 'none';
    }
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 3. Close Logic
const closeModal = () => {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = ''
}
document.getElementById('closeBtn').onclick = closeModal;

// Close on background click
window.onclick = (e) => { 
    if(e.target.id === 'modalOverlay') closeModal(); 
};

// 4. Email Obfuscation
const emailElement = document.getElementById('email-link');

if (emailElement) {
    const user = 'Aiden.slabiak';
    const domain = 'gmail.com';

    emailElement.href = `mailto:${user}@${domain}`;
    emailElement.textContent = "Contact Me";
}