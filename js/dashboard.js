(function(){
  "use strict";

  // ---------- Auth guard ----------
  const userRaw = localStorage.getItem('edumatch_user');
  if(!userRaw){
    window.location.href = 'index.html';
    return;
  }
  const user = JSON.parse(userRaw);
  document.getElementById('user-email').textContent = user.email;

  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('edumatch_user');
    window.location.href = 'index.html';
  });

  // ---------- Build platform filter checkboxes dynamically ----------
  const platforms = [...new Set(COURSES.map(c => c.platform))].sort();
  const platformFilterEl = document.getElementById('platform-filter');
  platforms.forEach(p => {
    const label = document.createElement('label');
    label.className = 'filter-option';
    label.innerHTML = `<input type="checkbox" value="${p}" checked /> ${p}`;
    platformFilterEl.appendChild(label);
  });

  // ---------- State ----------
  let currentQuery = '';

  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const resultsGrid = document.getElementById('results-grid');
  const resultsCount = document.getElementById('results-count');
  const beamStrip = document.getElementById('beam-strip');

  function getSelectedPlatforms(){
    return [...platformFilterEl.querySelectorAll('input[type="checkbox"]:checked')].map(i => i.value);
  }
  function getPriceFilter(){
    return document.querySelector('input[name="price"]:checked').value;
  }
  function getLevelFilter(){
    return document.querySelector('input[name="level"]:checked').value;
  }
  function getSort(){
    return document.getElementById('sort-select').value;
  }

  function parseDurationHours(str){
    // very rough heuristic for sorting: extract first number, assume hours;
    // weeks/months are treated as large so short "hours" courses sort first
    const h = str.match(/([\d.]+)\s*h/);
    if(h) return parseFloat(h[1]);
    const week = str.match(/([\d.]+)\s*week/);
    if(week) return parseFloat(week[1]) * 40; // rough weekly study hours
    const month = str.match(/([\d.]+)\s*month/);
    if(month) return parseFloat(month[1]) * 160;
    return 999;
  }

  function matchesQuery(course, query){
    if(!query) return true;
    const q = query.toLowerCase();
    return course.title.toLowerCase().includes(q) ||
           course.tags.some(t => t.includes(q)) ||
           course.platform.toLowerCase().includes(q);
  }

  function runFilters(){
    const platformsSel = getSelectedPlatforms();
    const price = getPriceFilter();
    const level = getLevelFilter();
    const sort = getSort();

    let results = COURSES.filter(c => {
      if(!matchesQuery(c, currentQuery)) return false;
      if(!platformsSel.includes(c.platform)) return false;
      if(price === 'free' && c.price !== 0) return false;
      if(price === 'paid' && c.price === 0) return false;
      if(level !== 'all' && c.level !== level) return false;
      return true;
    });

    if(sort === 'rating'){
      results.sort((a,b) => b.rating - a.rating);
    } else if(sort === 'price-low'){
      results.sort((a,b) => a.price - b.price);
    } else if(sort === 'duration'){
      results.sort((a,b) => parseDurationHours(a.duration) - parseDurationHours(b.duration));
    }

    renderResults(results);
  }

  function renderResults(results){
    resultsGrid.innerHTML = '';
    resultsCount.textContent = currentQuery
      ? `${results.length} result${results.length!==1?'s':''} for "${currentQuery}"`
      : `${results.length} course${results.length!==1?'s':''} available`;

    if(results.length === 0){
      resultsGrid.innerHTML = `<div class="empty-state">No courses match those filters yet. Try loosening a filter or searching a different topic.</div>`;
      return;
    }

    results.forEach((c, idx) => {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.style.animationDelay = (idx * 30) + 'ms';
      card.innerHTML = `
        <div class="card-top">
          <span class="platform-tag">${c.platform}</span>
          <span class="price-tag ${c.price===0?'free':'paid'}">${c.priceLabel}</span>
        </div>
        <h4>${c.title}</h4>
        <p class="desc">${c.desc}</p>
        <div class="card-meta">
          <span>⏱ ${c.duration}</span>
          <span>${c.level}</span>
          <span class="rating">★ ${c.rating}</span>
        </div>
        <span class="card-cta">View course →</span>
      `;
      resultsGrid.appendChild(card);
    });
  }

  function lightBeam(matchedPlatforms){
    const chips = beamStrip.querySelectorAll('.beam-chip');
    chips.forEach(chip => chip.classList.remove('lit'));
    let i = 0;
    function step(){
      if(i >= chips.length) return;
      const chip = chips[i];
      if(matchedPlatforms.has(chip.dataset.platform)){
        setTimeout(() => chip.classList.add('lit'), i * 90);
      }
      i++;
      step();
    }
    step();
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentQuery = searchInput.value.trim();
    const matched = new Set(
      COURSES.filter(c => matchesQuery(c, currentQuery)).map(c => c.platform)
    );
    lightBeam(currentQuery ? matched : new Set(platforms));
    runFilters();
  });

  platformFilterEl.addEventListener('change', runFilters);
  document.getElementById('price-filter').addEventListener('change', runFilters);
  document.getElementById('level-filter').addEventListener('change', runFilters);
  document.getElementById('sort-select').addEventListener('change', runFilters);

  // initial render: all platforms lit, all courses shown
  lightBeam(new Set(platforms));
  runFilters();
})();
