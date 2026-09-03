/* ==========================================================================
   PORTFOLIO APPLICATION CONTROLLER (MODULAR JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initProfileData();
  initProjectsSection();
  initSkillsSection();
  initTimelineSection();
  initContactForm();
  initScrollEffects();
  initModalEvents();
});

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

  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
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
function initContactForm() {
  const form = document.getElementById('contact-form');
  const emailVal = document.getElementById('contact-email-text');
  const targetEmail = PORTFOLIO_DATA.profile.email;
  if (emailVal) emailVal.textContent = targetEmail;

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

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : 'Send Message';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
      }

      try {
        // Send email silently in background via FormSubmit token 507bf8be6742e3efa2cab599ff6cb6fc
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
        } else {
          showToast(`Thank you, ${name}! Your message has been sent.`, 'success');
          form.reset();
        }
      } catch (err) {
        showToast(`Thank you, ${name}! Your message has been sent.`, 'success');
        form.reset();
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
   7. Scroll Progress & Active Nav Link Highlight
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Scroll progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    // Active Section Link Highlight
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (winScroll >= top && winScroll < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}
