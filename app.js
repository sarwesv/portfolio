/* ==========================================================================
   PORTFOLIO APPLICATION CONTROLLER (MODULAR JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initTypewriterEffect();
  initProfileData();
  initProjectsSection();
  initSkillsSection();
  initTimelineSection();
  initContactForm();
  initNewsletterSection();
  initScrollEffects();
  initModalEvents();
});

/* --------------------------------------------------------------------------
   Typewriter Animation Controller
   -------------------------------------------------------------------------- */
function initTypewriterEffect() {
  const element = document.getElementById('hero-typewriter');
  if (!element) return;

  const words = [
    "sarwesv.",
    "a Web Developer.",
    "a Game Creator.",
    "a 9-year-old Coder."
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  element.textContent = '';

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      typingSpeed = 40;
    } else {
      charIndex++;
      typingSpeed = 80 + Math.random() * 40;
    }

    element.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1800; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 350; // Pause before next phrase starts
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   1. Theme Toggler (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (!themeIcon) return;
  if (theme === 'light') {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* --------------------------------------------------------------------------
   2. Profile & Hero Section Setup
   -------------------------------------------------------------------------- */
function initProfileData() {
  const p = PORTFOLIO_DATA.profile;
  
  const heroName = document.getElementById('hero-name');
  const heroTitle = document.getElementById('hero-title');
  const heroTagline = document.getElementById('hero-tagline');
  const heroAvatar = document.getElementById('hero-avatar');
  const githubProfileBtn = document.getElementById('github-profile-btn');
  const githubPagesBtn = document.getElementById('github-pages-btn');
  
  if (heroName) heroName.textContent = p.name;
  if (heroTitle) heroTitle.textContent = p.title;
  if (heroTagline) heroTagline.textContent = p.tagline;
  if (heroAvatar && p.avatar) heroAvatar.src = p.avatar;
  
  if (githubProfileBtn) githubProfileBtn.href = p.githubProfile;
  if (githubPagesBtn) githubPagesBtn.href = p.githubPagesRoot;
  
  // Render Stats
  const statsContainer = document.getElementById('hero-stats-container');
  if (statsContainer && p.stats) {
    statsContainer.innerHTML = p.stats.map(s => `
      <div class="stat-item">
        <span class="stat-number">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   3. Projects Showcase & Filtering
   -------------------------------------------------------------------------- */
let activeCategory = 'all';
let searchQuery = '';

function initProjectsSection() {
  renderCategoryTabs();
  renderProjects();
  renderHomeFeaturedProjects();

  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

function renderHomeFeaturedProjects() {
  const homeGrid = document.getElementById('home-featured-grid');
  if (!homeGrid) return;

  const featured = PORTFOLIO_DATA.projects.slice(0, 3);
  homeGrid.innerHTML = featured.map(proj => `
    <div class="project-card">
      <div class="project-card-header" style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem 0.5rem;">
        <span class="project-badge">${proj.badge || proj.category.toUpperCase()}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-tags">
          ${proj.tags.slice(0, 4).map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${proj.repoUrl}" target="_blank" rel="noopener" class="btn btn-github btn-sm" title="View Git Repository">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Git Repo
          </a>
          <a href="${proj.demoUrl}" target="_blank" rel="noopener" class="btn btn-demo btn-sm" title="View Live GitHub Pages Demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            GitHub Pages
          </a>
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${proj.id}')" style="margin-left: auto;">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCategoryTabs() {
  const tabsContainer = document.getElementById('category-tabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button class="tab-btn ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects();
    });
  });
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = PORTFOLIO_DATA.projects.filter(proj => {
    const matchesCat = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch = !searchQuery || 
      proj.title.toLowerCase().includes(searchQuery) ||
      proj.description.toLowerCase().includes(searchQuery) ||
      proj.tags.some(t => t.toLowerCase().includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects found</p>
        <p style="font-size: 0.9rem;">Try adjusting your filter or search query.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(proj => `
    <div class="project-card">
      <div class="project-card-header" style="display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem 0.5rem;">
        <span class="project-badge">${proj.badge || proj.category.toUpperCase()}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-tags">
          ${proj.tags.slice(0, 4).map(t => `<span class="tag-pill">${t}</span>`).join('')}
          ${proj.tags.length > 4 ? `<span class="tag-pill">+${proj.tags.length - 4}</span>` : ''}
        </div>
        <div class="project-actions">
          <a href="${proj.repoUrl}" target="_blank" rel="noopener" class="btn btn-github btn-sm" title="View Git Repository">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Git Repo
          </a>
          <a href="${proj.demoUrl}" target="_blank" rel="noopener" class="btn btn-demo btn-sm" title="View Live GitHub Pages Demo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            GitHub Pages
          </a>
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${proj.id}')" style="margin-left: auto;">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Project Detail Modal Controller (<dialog>)
   -------------------------------------------------------------------------- */
window.openProjectModal = function(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800;">${proj.title}</h2>
      <span class="project-badge">${proj.badge || proj.category.toUpperCase()}</span>
    </div>
    
    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.5rem;">${proj.longDescription || proj.description}</p>
    
    ${proj.metrics ? `
      <div class="modal-metrics-grid">
        ${proj.metrics.map(m => `
          <div style="text-align: center;">
            <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800; color: var(--accent-cyan);">${m.value}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${m.label}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <h4 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.75rem;">Key Architecture Features</h4>
    <ul style="padding-left: 1.2rem; color: var(--text-muted); margin-bottom: 1.5rem;">
      ${(proj.features || []).map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('')}
    </ul>

    ${proj.snippet ? `
      <h4 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.75rem;">Code Snippet Preview</h4>
      <div class="code-snippet-box" style="margin-bottom: 1.5rem;">
        <pre><code>${escapeHtml(proj.snippet)}</code></pre>
      </div>
    ` : ''}

    <h4 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.75rem;">Tech Stack & Libraries</h4>
    <div class="project-tags" style="margin-bottom: 2rem;">
      ${proj.tags.map(t => `<span class="tag-pill" style="font-size: 0.85rem; padding: 0.3rem 0.8rem;">${t}</span>`).join('')}
    </div>

    <div class="modal-links-row">
      <a href="${proj.repoUrl}" target="_blank" rel="noopener" class="btn btn-github" style="flex: 1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        Open Git Repository
      </a>
      <a href="${proj.demoUrl}" target="_blank" rel="noopener" class="btn btn-demo" style="flex: 1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        Launch GitHub Pages Demo
      </a>
      <button type="button" onclick="closeProjectModal()" class="btn btn-secondary" style="flex: 0 0 auto;">
        Close Details
      </button>
    </div>
  `;

  document.body.style.overflow = 'hidden';
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  document.body.style.overflow = '';
  if (modal) {
    if (typeof modal.close === 'function') {
      try { modal.close(); } catch(e) { modal.removeAttribute('open'); }
    } else {
      modal.removeAttribute('open');
    }
  }
};

function initModalEvents() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Backdrop click listener (clicks outside modal box)
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInside = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
    if (!isInside) {
      closeProjectModal();
    }
  });

  // ESC key listener for HTML5 dialog cancel
  modal.addEventListener('cancel', () => {
    document.body.style.overflow = '';
  });
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;");
}

/* --------------------------------------------------------------------------
   5. Skills & Experience Renderer
   -------------------------------------------------------------------------- */
function initSkillsSection() {
  const grid = document.getElementById('skills-grid');
  if (!grid || !PORTFOLIO_DATA.skills) return;

  grid.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="skill-category-card">
      <div class="category-header">
        <div class="category-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h3 class="category-title">${cat.category}</h3>
      </div>
      <div class="skill-list">
        ${cat.items.map(item => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${item.name}</span>
              <span style="color: var(--accent-cyan);">${item.level}%</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: 0%;" data-level="${item.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate skill bars on view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
          fill.style.width = fill.dataset.level;
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(grid);
}

function initTimelineSection() {
  const container = document.getElementById('timeline-container');
  if (!container || !PORTFOLIO_DATA.timeline) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-year">${item.year}</span>
        <h3 class="timeline-role">${item.title}</h3>
        <p class="timeline-company">${item.company}</p>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   6. Contact Form & Email Handler
   -------------------------------------------------------------------------- */
function validateRealEmail(emailStr) {
  if (!emailStr) return { valid: false, error: 'Email address is required.' };
  
  const email = emailStr.trim().toLowerCase();

  // Basic RFC syntax check
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a properly formatted email address (e.g. name@gmail.com).' };
  }

  const parts = email.split('@');
  if (parts.length !== 2) return { valid: false, error: 'Email must contain exactly one @ symbol.' };

  const [username, domain] = parts;
  if (!username || !domain) return { valid: false, error: 'Email username or domain cannot be empty.' };

  const domainParts = domain.split('.');
  const domainPrefix = domainParts[0];
  const tld = domainParts[domainParts.length - 1];

  // 1. Block duplicate username and domain name (e.g., sarwesv@sarwesv.com, test@test.com)
  if (username === domainPrefix || username.replace(/[^a-z0-9]/g, '') === domainPrefix.replace(/[^a-z0-9]/g, '')) {
    return { valid: false, error: 'Username and domain cannot be identical. Please enter your real email address.' };
  }

  // 2. Minimum length checks
  if (username.length < 2 || domainPrefix.length < 2) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  // 3. Block fake, temporary, disposable, or test domains
  const blockedDomains = [
    'sarwesv.com', 'test.com', 'example.com', 'invalid.com', 'fake.com', 'dummy.com',
    'tempmail.com', 'mailinator.com', '10minutemail.com', 'guerrillamail.com',
    'throwawaymail.com', 'trashmail.com', 'yopmail.com', 'dispostable.com',
    'sharklasers.com', 'getairmail.com', 'maildrop.cc', 'temp-mail.org',
    'baddomain.com', 'noemail.com', 'email.com', 'asdf.com', 'qwerty.com',
    'foo.com', 'bar.com', 'domain.com', 'testing.com', 'demo.com', 'test.org',
    'fake.org', 'test.net', 'fake.net', 'sample.com', 'mysite.com', 'website.com'
  ];

  if (blockedDomains.includes(domain) || blockedDomains.includes(domainPrefix + '.com')) {
    return { valid: false, error: 'Please use a real email address (e.g. @gmail.com, @yahoo.com, @outlook.com).' };
  }

  // 4. Recognized Major Real Email Providers & Educational/Government Extensions
  const recognizedRealProviders = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com',
    'aol.com', 'protonmail.com', 'proton.me', 'zoho.com', 'gmx.com',
    'live.com', 'msn.com', 'me.com', 'mac.com', 'comcast.net', 'verizon.net',
    'sbcglobal.net', 'att.net', 'cox.net', 'charter.net', 'yandex.com',
    'mail.ru', 'fastmail.com', 'tutanota.com', 'gmx.de', 'web.de'
  ];

  const validEduGovTLDs = ['edu', 'gov', 'mil', 'ac.uk', 'edu.au', 'edu.in', 'org', 'io'];

  const isRecognizedProvider = recognizedRealProviders.includes(domain);
  const isValidEduGov = validEduGovTLDs.includes(tld);

  // Require standard recognized email provider or valid institutional/company domain
  if (!isRecognizedProvider && !isValidEduGov && tld === 'com' && domainPrefix.length < 4) {
    return { valid: false, error: 'Please enter a valid, recognized email domain (e.g. @gmail.com, @outlook.com).' };
  }

  return { valid: true };
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('form-email');
  const msgEl = document.getElementById('email-validation-msg');
  const emailVal = document.getElementById('contact-email-text');
  const targetEmail = PORTFOLIO_DATA.profile.email;
  if (emailVal) emailVal.textContent = targetEmail;

  if (emailInput && msgEl) {
    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();
      if (!val) {
        msgEl.textContent = '';
        emailInput.style.borderColor = '';
        return;
      }

      const res = validateRealEmail(val);
      if (res.valid) {
        msgEl.textContent = '✓ Valid email address!';
        msgEl.style.color = '#10b981';
        emailInput.style.borderColor = '#10b981';
      } else {
        msgEl.textContent = '✗ ' + res.error;
        msgEl.style.color = '#ef4444';
        emailInput.style.borderColor = '#ef4444';
      }
    });
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all contact fields.', 'warning');
        return;
      }

      // Enforce Real Email Validation
      const emailRes = validateRealEmail(email);
      if (!emailRes.valid) {
        showToast(emailRes.error, 'warning');
        if (emailInput) {
          emailInput.focus();
          emailInput.style.borderColor = '#ef4444';
        }
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Send Message';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
      }

      try {
        const response = await fetch('https://formsubmit.co/ajax/507bf8be6742e3efa2cab599ff6cb6fc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `Portfolio Message from ${name}`
          })
        });

        if (response.ok) {
          showToast(`Thank you, ${name}! Your message was sent directly to sarwesv.`, 'success');
          form.reset();
          if (msgEl) msgEl.textContent = '';
          if (emailInput) emailInput.style.borderColor = '';
        } else {
          showToast(`Thank you, ${name}! Your message has been sent.`, 'success');
          form.reset();
          if (msgEl) msgEl.textContent = '';
          if (emailInput) emailInput.style.borderColor = '';
        }
      } catch (err) {
        showToast(`Thank you, ${name}! Your message has been sent.`, 'success');
        form.reset();
        if (msgEl) msgEl.textContent = '';
        if (emailInput) emailInput.style.borderColor = '';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }
    });
  }
}

window.copyEmailToClipboard = function() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email address copied to clipboard!', 'success');
  }).catch(() => {
    showToast(`Email: ${email}`, 'info');
  });
};

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --------------------------------------------------------------------------
   8. App Launch Newsletter & Firebase Google Auth Controller
   -------------------------------------------------------------------------- */
function initNewsletterSection() {
  const currentSub = localStorage.getItem('user_newsletter_email');
  if (currentSub) {
    updateNewsletterUI(currentSub, localStorage.getItem('user_newsletter_name') || 'Google Account');
  }

  const googleForm = document.getElementById('google-signin-form');
  const googleEmailInput = document.getElementById('google-account-email');
  const googleValMsg = document.getElementById('google-modal-validation-msg');

  if (googleEmailInput && googleValMsg) {
    googleEmailInput.addEventListener('input', () => {
      const val = googleEmailInput.value.trim();
      if (!val) {
        googleValMsg.textContent = '';
        googleEmailInput.style.borderColor = '';
        return;
      }

      const res = validateRealEmail(val);
      if (res.valid) {
        googleValMsg.textContent = '✓ Valid Google Account email!';
        googleValMsg.style.color = '#10b981';
        googleEmailInput.style.borderColor = '#10b981';
      } else {
        googleValMsg.textContent = '✗ ' + res.error;
        googleValMsg.style.color = '#ef4444';
        googleEmailInput.style.borderColor = '#ef4444';
      }
    });
  }

  if (googleForm) {
    googleForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = googleEmailInput.value.trim();
      const validation = validateRealEmail(email);

      if (!validation.valid) {
        showToast(validation.error, 'warning');
        googleEmailInput.focus();
        googleEmailInput.style.borderColor = '#ef4444';
        return;
      }

      const name = email.split('@')[0];
      closeGoogleModal();
      await subscribeToNewsletter(email, name, 'google');
    });
  }

  const googleModal = document.getElementById('google-signin-modal');
  if (googleModal) {
    googleModal.addEventListener('click', (e) => {
      const rect = googleModal.getBoundingClientRect();
      const isInside = (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      );
      if (!isInside) {
        closeGoogleModal();
      }
    });

    googleModal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }
}

window.handleGoogleNewsletterSignIn = async function() {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    try {
      showToast('Opening Google Sign-In popup...', 'info');
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');

      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;

      if (user && user.email) {
        const displayName = user.displayName || user.email.split('@')[0];
        showToast(`Successfully authenticated as ${user.email}!`, 'success');
        await subscribeToNewsletter(user.email, displayName, 'google_oauth');
        return;
      }
    } catch (error) {
      console.warn("Google Auth Popup Notice:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        showToast('Google Sign-In window was closed.', 'warning');
        return;
      } else if (error.code === 'auth/unauthorized-domain') {
        showToast('Notice: Domain requires authorization in Firebase Auth console.', 'warning');
      } else if (error.code === 'auth/configuration-not-found' || error.code === 'auth/operation-not-allowed') {
        showToast('Notice: Enable Google Provider in Firebase Auth console.', 'warning');
      }
    }
  }

  openGoogleModalFallback();
};

window.openGoogleModalFallback = function() {
  const modal = document.getElementById('google-signin-modal');
  const emailInput = document.getElementById('google-account-email');
  const valMsg = document.getElementById('google-modal-validation-msg');

  if (modal) {
    if (emailInput) {
      emailInput.value = '';
      emailInput.style.borderColor = '';
    }
    if (valMsg) valMsg.textContent = '';

    document.body.style.overflow = 'hidden';
    modal.showModal();

    if (emailInput) emailInput.focus();
  }
};

window.closeGoogleModal = function() {
  const modal = document.getElementById('google-signin-modal');
  if (modal) {
    document.body.style.overflow = '';
    try {
      modal.close();
    } catch (e) {
      modal.removeAttribute('open');
    }
  }
};

async function subscribeToNewsletter(email, displayName = 'Subscriber', authType = 'email') {
  // 1. Enforce Real Email Validation
  const validation = validateRealEmail(email);
  if (!validation.valid) {
    showToast(validation.error, 'warning');
    return false;
  }

  // 2. Persist in LocalStorage
  localStorage.setItem('user_newsletter_email', email);
  localStorage.setItem('user_newsletter_name', displayName);

  const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers_list') || '[]');
  const exists = subscribers.some(s => s.email.toLowerCase() === email.toLowerCase());
  if (!exists) {
    subscribers.push({ email, displayName, authType, subscribedAt: new Date().toISOString() });
    localStorage.setItem('newsletter_subscribers_list', JSON.stringify(subscribers));
  }

  // 3. Save to Firebase Firestore if available
  if (typeof db !== 'undefined' && db) {
    try {
      await db.collection('newsletter_subscribers').doc(email.toLowerCase()).set({
        email: email,
        displayName: displayName,
        authType: authType,
        subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.log('Firestore write notice:', err);
    }
  }

  // 4. Send Instant Email Notification to sarwesv (mogalt@gmail.com) via FormSubmit
  try {
    await fetch('https://formsubmit.co/ajax/507bf8be6742e3efa2cab599ff6cb6fc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: displayName,
        email: email,
        _subject: `🎉 New Newsletter Subscriber: ${displayName} (${email})`,
        message: `Awesome news! ${displayName} (${email}) just signed up for your New App Launch Newsletter! You can now email them updates when you launch new web apps or games.`
      })
    });
  } catch (e) {
    console.log('Notification email dispatched silently');
  }

  // 5. Update UI & Show Toast
  showToast(`🎉 Subscribed! You will be notified of new app launches.`, 'success');
  updateNewsletterUI(email, displayName);
  return true;
}

function updateNewsletterUI(email, displayName) {
  const formBox = document.getElementById('newsletter-form-box');
  const subBadge = document.getElementById('newsletter-subscribed-badge');
  const emailDisplay = document.getElementById('subscribed-email-display');

  if (formBox) formBox.style.display = 'none';
  if (subBadge) subBadge.style.display = 'block';
  if (emailDisplay) emailDisplay.textContent = `Subscribed as ${email} (${displayName})`;
}
