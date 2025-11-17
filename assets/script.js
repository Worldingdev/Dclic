\
    // Simple site script: menu toggle, projects renderer, contact form validation

    document.addEventListener('DOMContentLoaded', function(){
      // Menu toggle for mobile
      const menuBtn = document.getElementById('menuBtn');
      const nav = document.getElementById('nav');
      if(menuBtn){
        menuBtn.addEventListener('click', ()=>{
          if(nav.style.display === 'flex') nav.style.display = '';
          else nav.style.display = 'flex';
        });
      }

      // Projects: dynamically render sample projects if element exists
      const projectsGrid = document.getElementById('projectsGrid');
      if(projectsGrid){
        // Sample project data - replace titles, descriptions & links with your own
        const projects = [
          {title: 'Site Portfolio', desc: 'Ce portfolio responsive (HTML/CSS/JS).', tags: ['HTML','CSS','JS'], link:'#'},
          {title: 'ToDo App', desc: 'Application simple de gestion de tâches en JS.', tags: ['JavaScript'], link:'#'},
          {title: 'Galerie Photos', desc: 'Mini-galerie responsive.', tags: ['CSS','JS'], link:'#'}
        ];
        projects.forEach(p => {
          const card = document.createElement('article');
          card.className = 'project-card';
          card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><p class="muted">${p.tags.join(' • ')}</p><p><a class="link" href="${p.link}">Voir le projet →</a></p>`;
          projectsGrid.appendChild(card);
        });
      }

      // Contact form validation & simulation of sending
      const form = document.getElementById('contactForm');
      if(form){
        const msg = document.getElementById('formMsg');
        form.addEventListener('submit', function(e){
          e.preventDefault();
          msg.textContent = '';
          const name = form.name.value.trim();
          const email = form.email.value.trim();
          const message = form.message.value.trim();
          if(name.length < 2){ msg.textContent = 'Le nom doit contenir au moins 2 caractères.'; return; }
          if(!/^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)){ msg.textContent = 'Veuillez entrer un email valide.'; return; }
          if(message.length < 10){ msg.textContent = 'Le message doit contenir au moins 10 caractères.'; return; }

          // Simulate success
          msg.textContent = 'Message envoyé — merci ! (Simulation)';
          form.reset();
        });
      }
    });
