function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main-wrapper').classList.toggle('sidebar-collapsed');
  }
  function openMobileSidebar() { document.getElementById('sidebar').classList.add('mobile-open'); document.getElementById('overlay').classList.add('active'); }
  function closeMobileSidebar() { document.getElementById('sidebar').classList.remove('mobile-open'); document.getElementById('overlay').classList.remove('active'); }
    function headerClick(header) {
    const tbody = header.closest('.hu-section').querySelector('tbody');
    const wasCollapsed = header.classList.contains('collapsed');
    header.classList.toggle('collapsed', !wasCollapsed);
    tbody.style.display = wasCollapsed ? '' : 'none';
  }
  function toggleDetail(row) {
    const next = row.nextElementSibling;
    if (next && next.classList.contains('detail-row')) next.classList.toggle('open');
  }
    function switchTab(tab, btn) {
    const group = btn.closest('.bandeja');
    group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelector('#tab-' + tab).classList.add('active');
    btn.classList.add('active');
  }

  function switchEnvTab(env, btn) {
    const group = btn.closest('.env-tab-group');
    group.querySelectorAll('.env-tab-panel').forEach(p => p.classList.remove('active'));
    group.querySelectorAll('.env-tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelector('#env-' + env).classList.add('active');
    btn.classList.add('active');
  }
