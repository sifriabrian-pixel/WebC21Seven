/* ══════════════════════════════════════════
   CENTURY 21 SEVEN — APP.JS
   ══════════════════════════════════════════ */

const state = { filtroTipo:'', filtroOperacion:'', filtroTexto:'' };

/* ── Helpers ── */
function formatPrecio(precio, moneda) {
  if (moneda === 'PYG') return '₲ ' + precio.toLocaleString('es-PY');
  return 'USD ' + precio.toLocaleString('en-US');
}
function iconProp(tipo) {
  return { casa:'ti-building-estate', departamento:'ti-building', local:'ti-store', oficina:'ti-briefcase', terreno:'ti-map', galpon:'ti-building-warehouse' }[tipo] || 'ti-home';
}
function tipoLabel(tipo) {
  return { casa:'Casa', departamento:'Departamento', local:'Local comercial', oficina:'Oficina', terreno:'Terreno', galpon:'Galpón' }[tipo] || tipo;
}
function getAsesor(id) { return ASESORES.find(a => a.id === id) || null; }
function getPropiedadesAsesor(id) { return PROPIEDADES.filter(p => p.asesorId === id); }
function waLink(asesor, prop) {
  const msg = encodeURIComponent(`Hola ${asesor.nombre}, vi la propiedad "${prop.titulo}" en la web de Century 21 Seven y me gustaría recibir más información.`);
  return `https://wa.me/${asesor.tel.replace(/\D/g,'')}?text=${msg}`;
}
function waLinkAsesor(asesor) {
  const msg = encodeURIComponent(`Hola ${asesor.nombre}, quiero consultar sobre propiedades con Century 21 Seven.`);
  return `https://wa.me/${asesor.tel.replace(/\D/g,'')}?text=${msg}`;
}

/* ── Specs HTML ── */
function renderSpecsCard(prop) {
  let s = '';
  if (prop.dormitorios) s += `<div class="prop-spec"><i class="ti ti-bed"></i> ${prop.dormitorios} dorm.</div>`;
  if (prop.banos) s += `<div class="prop-spec"><i class="ti ti-bath"></i> ${prop.banos} baño${prop.banos>1?'s':''}</div>`;
  if (prop.metros) s += `<div class="prop-spec"><i class="ti ti-ruler"></i> ${prop.metros}m²</div>`;
  return s;
}

/* ══ RENDER PROP CARD ══ */
function renderPropCard(prop) {
  const asesor = getAsesor(prop.asesorId);
  const imgContent = prop.fotos?.length
    ? `<img src="${prop.fotos[0]}" alt="${prop.titulo}" loading="lazy" />`
    : `<i class="ti ${iconProp(prop.tipo)} prop-card-img-ph"></i>`;
  const precioSub = prop.operacion === 'alquiler' ? '<span class="prop-price-sub">/mes</span>' : '';
  return `
    <div class="prop-card" onclick="openModal(${prop.id})">
      <div class="prop-card-img">
        ${imgContent}
        <div class="prop-tag ${prop.operacion}">${prop.operacion === 'venta' ? 'Venta' : 'Alquiler'}</div>
      </div>
      <div class="prop-card-body">
        <div class="prop-price">${formatPrecio(prop.precio, prop.moneda)}${precioSub}</div>
        <div class="prop-title">${prop.titulo}</div>
        <div class="prop-loc"><i class="ti ti-map-pin"></i> ${prop.barrio}, ${prop.zona}</div>
        <div class="prop-specs">${renderSpecsCard(prop)}</div>
      </div>
      <div class="prop-card-footer">
        <div class="prop-asesor">
          <div class="prop-asesor-avatar">${asesor ? asesor.iniciales : '??'}</div>
          <div class="prop-asesor-name">${asesor ? asesor.nombre : 'Sin asesor'}</div>
        </div>
        ${asesor ? `<a class="btn-wa" href="${waLink(asesor,prop)}" target="_blank" onclick="event.stopPropagation()"><i class="ti ti-brand-whatsapp"></i> Consultar</a>` : ''}
      </div>
    </div>`;
}

function renderPropiedades() {
  const texto = document.getElementById('filtro-texto')?.value.toLowerCase() || '';
  const filtered = PROPIEDADES.filter(p => {
    const tipoOk = !state.filtroTipo || p.tipo === state.filtroTipo;
    const opOk = !state.filtroOperacion || p.operacion === state.filtroOperacion;
    const textOk = !texto || p.titulo.toLowerCase().includes(texto) || p.zona.toLowerCase().includes(texto) || p.barrio.toLowerCase().includes(texto);
    return tipoOk && opOk && textOk;
  });
  const grid = document.getElementById('props-grid');
  const empty = document.getElementById('empty-state');
  const count = document.getElementById('result-count');
  if (!grid) return;
  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    if (count) count.innerHTML = '';
  } else {
    if (empty) empty.style.display = 'none';
    grid.innerHTML = filtered.map(renderPropCard).join('');
    if (count) count.innerHTML = `<span>${filtered.length}</span> propiedades encontradas`;
  }
}

function renderDestacadas() {
  const grid = document.getElementById('props-destacadas');
  if (!grid) return;
  grid.innerHTML = PROPIEDADES.filter(p => p.destacada).slice(0,3).map(renderPropCard).join('');
}

/* ══ RENDER ASESORES ══ */
function renderAsesorCard(asesor) {
  const props = getPropiedadesAsesor(asesor.id);
  return `
    <div class="asesor-card" onclick="openAsesorModal(${asesor.id})">
      <div class="asesor-avatar-lg">${asesor.iniciales}</div>
      <div class="asesor-card-name">${asesor.nombre}</div>
      <div class="asesor-card-rol">${asesor.rol}</div>
      <div class="asesor-card-stats">
        <div class="asesor-stat"><div class="asesor-stat-num">${props.length}</div><div class="asesor-stat-label">Propiedades</div></div>
      </div>
      <a class="btn-wa-asesor" href="${waLinkAsesor(asesor)}" target="_blank" onclick="event.stopPropagation()">
        <i class="ti ti-brand-whatsapp"></i> Contactar
      </a>
    </div>`;
}

function renderAsesoresPreview() {
  const grid = document.getElementById('asesores-preview');
  if (!grid) return;
  grid.innerHTML = ASESORES.map(a => `
    <div class="asesor-preview-card" onclick="openAsesorModal(${a.id})">
      <div class="asesor-avatar-lg">${a.iniciales}</div>
      <div class="asesor-preview-name">${a.nombre}</div>
      <div class="asesor-preview-rol">${a.rol}</div>
      <div class="asesor-preview-props">${getPropiedadesAsesor(a.id).length} propiedades</div>
    </div>`).join('');
}

function renderAsesoresGrid() {
  const grid = document.getElementById('asesores-grid');
  if (!grid) return;
  grid.innerHTML = ASESORES.map(renderAsesorCard).join('');
}

/* ══ MODAL PROPIEDAD — COMPLETO CON GALERÍA ══ */
let currentFotos = [];
let currentFotoIdx = 0;

function openModal(propId) {
  const prop = PROPIEDADES.find(p => p.id === propId);
  if (!prop) return;
  const asesor = getAsesor(prop.asesorId);
  currentFotos = prop.fotos || [];
  currentFotoIdx = 0;

  // Galería
  let galleryHTML = '';
  if (currentFotos.length > 0) {
    galleryHTML = `
      <div class="modal-gallery" id="modal-gallery">
        <img src="${currentFotos[0]}" class="modal-gallery-main" id="modal-gallery-main" alt="${prop.titulo}" />
        <div class="modal-gallery-counter" id="modal-gallery-counter">1 / ${currentFotos.length}</div>
      </div>`;
    if (currentFotos.length > 1) {
      galleryHTML += `<div class="modal-gallery-thumbs">${currentFotos.map((f,i) => `
        <div class="modal-gallery-thumb ${i===0?'active':''}" onclick="setFoto(${i})" id="thumb-${i}">
          <img src="${f}" alt="Foto ${i+1}" loading="lazy" />
        </div>`).join('')}</div>`;
    }
  } else {
    galleryHTML = `<div class="modal-gallery"><div class="modal-gallery-ph"><i class="ti ${iconProp(prop.tipo)}"></i></div></div>`;
  }

  // Specs
  let specsHTML = '';
  if (prop.dormitorios) specsHTML += `<div class="modal-spec"><div class="modal-spec-icon"><i class="ti ti-bed"></i></div><div class="modal-spec-val">${prop.dormitorios}</div><div class="modal-spec-label">Dormitorios</div></div>`;
  if (prop.banos) specsHTML += `<div class="modal-spec"><div class="modal-spec-icon"><i class="ti ti-bath"></i></div><div class="modal-spec-val">${prop.banos}</div><div class="modal-spec-label">Baños</div></div>`;
  if (prop.metros) specsHTML += `<div class="modal-spec"><div class="modal-spec-icon"><i class="ti ti-ruler"></i></div><div class="modal-spec-val">${prop.metros}m²</div><div class="modal-spec-label">Superficie</div></div>`;
  if (prop.estacionamiento) specsHTML += `<div class="modal-spec"><div class="modal-spec-icon"><i class="ti ti-car"></i></div><div class="modal-spec-val">${prop.estacionamiento}</div><div class="modal-spec-label">Cocheras</div></div>`;

  const precioSub = prop.operacion === 'alquiler' ? '<span class="modal-prop-price-sub">/mes</span>' : '';

  document.getElementById('modal-body').innerHTML = `
    ${galleryHTML}
    <div class="modal-content">
      <div class="modal-top">
        <div class="modal-prop-price">${formatPrecio(prop.precio, prop.moneda)}${precioSub}</div>
        <div class="modal-tags">
          <div class="prop-tag ${prop.operacion}">${prop.operacion === 'venta' ? 'Venta' : 'Alquiler'}</div>
        </div>
      </div>
      <div class="modal-prop-title">${prop.titulo}</div>
      <div class="modal-prop-loc"><i class="ti ti-map-pin"></i> ${prop.barrio}, ${prop.zona} · ${tipoLabel(prop.tipo)}</div>
      ${specsHTML ? `<div class="modal-specs-grid">${specsHTML}</div>` : ''}
      <div class="modal-desc-title">Descripción</div>
      <div class="modal-desc">${prop.descripcion}</div>
      ${asesor ? `
        <div class="modal-asesor-section">
          <div class="modal-asesor-info">
            <div class="modal-asesor-avatar">${asesor.iniciales}</div>
            <div>
              <div class="modal-asesor-name">${asesor.nombre}</div>
              <div class="modal-asesor-rol">${asesor.rol} · Century 21 Seven</div>
            </div>
          </div>
          <a class="modal-wa-btn" href="${waLink(asesor,prop)}" target="_blank">
            <i class="ti ti-brand-whatsapp"></i> Consultar con ${asesor.nombre.split(' ')[0]}
          </a>
        </div>` : ''}
    </div>`;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setFoto(idx) {
  if (!currentFotos[idx]) return;
  currentFotoIdx = idx;
  document.getElementById('modal-gallery-main').src = currentFotos[idx];
  document.getElementById('modal-gallery-counter').textContent = `${idx+1} / ${currentFotos.length}`;
  document.querySelectorAll('.modal-gallery-thumb').forEach((t,i) => t.classList.toggle('active', i===idx));
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══ MODAL ASESOR ══ */
function openAsesorModal(asesorId) {
  const asesor = ASESORES.find(a => a.id === asesorId);
  if (!asesor) return;
  const props = getPropiedadesAsesor(asesorId);
  const propsListHTML = props.length > 0
    ? props.slice(0,4).map(p => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(190,175,135,.08);cursor:pointer;" onclick="closeAsesorModal();setTimeout(()=>openModal(${p.id}),200)">
          <div>
            <div style="color:rgba(255,255,255,.8);font-size:12px;font-weight:500;">${p.titulo}</div>
            <div style="color:rgba(255,255,255,.4);font-size:11px;">${p.zona} · ${tipoLabel(p.tipo)}</div>
          </div>
          <div style="color:#BEAF87;font-size:12px;font-weight:700;white-space:nowrap;margin-left:12px;">${formatPrecio(p.precio,p.moneda)}</div>
        </div>`).join('')
    : '<div style="color:rgba(255,255,255,.3);font-size:13px;text-align:center;padding:12px;">Sin propiedades asignadas aún</div>';

  document.getElementById('modal-asesor-body').innerHTML = `
    <div style="padding:28px;">
      <div class="modal-asesor-header">
        <div class="modal-asesor-avatar-lg">${asesor.iniciales}</div>
        <div class="modal-asesor-fullname">${asesor.nombre}</div>
        <div class="modal-asesor-cargo">${asesor.rol} · Century 21 Seven</div>
        <div class="modal-asesor-props-count"><span>${props.length}</span> propiedad${props.length!==1?'es':''} asignada${props.length!==1?'s':''}</div>
      </div>
      <div style="margin-bottom:16px;">${propsListHTML}</div>
      ${props.length>4?`<div style="text-align:center;margin-bottom:16px;"><button onclick="closeAsesorModal();setTimeout(()=>showPage('propiedades'),200);" style="background:transparent;border:none;color:#BEAF87;font-size:12px;font-weight:600;cursor:pointer;text-transform:uppercase;letter-spacing:.06em;">Ver todas las propiedades →</button></div>`:''}
      <a class="btn-wa-asesor" href="${waLinkAsesor(asesor)}" target="_blank">
        <i class="ti ti-brand-whatsapp"></i> Contactar a ${asesor.nombre.split(' ')[0]}
      </a>
    </div>`;

  document.getElementById('modal-asesor-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAsesorModal() {
  document.getElementById('modal-asesor-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══ NAVEGACIÓN ══ */
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const page = document.getElementById('page-' + pageName);
  if (page) page.classList.add('active');
  const navLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
  if (navLink) navLink.classList.add('active');
  document.getElementById('nav-links').classList.remove('open');
  if (pageName === 'propiedades') renderPropiedades();
  if (pageName === 'asesores') renderAsesoresGrid();
  window.scrollTo({ top:0, behavior:'smooth' });
  return false;
}

/* ══ FILTROS ══ */
function initFiltros() {
  document.getElementById('filtro-tipo')?.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('filtro-tipo').querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filtroTipo = btn.dataset.val;
      renderPropiedades();
    });
  });
  document.getElementById('filtro-operacion')?.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('filtro-operacion').querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filtroOperacion = btn.dataset.val;
      renderPropiedades();
    });
  });
}

function resetFiltros() {
  state.filtroTipo = ''; state.filtroOperacion = ''; state.filtroTexto = '';
  const t = document.getElementById('filtro-texto');
  if (t) t.value = '';
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.pill[data-val=""]').forEach(p => p.classList.add('active'));
  renderPropiedades();
}

function buscar() {
  const tipo = document.getElementById('search-tipo').value;
  const op = document.getElementById('search-operacion').value;
  const texto = document.getElementById('search-texto').value;
  state.filtroTipo = tipo; state.filtroOperacion = op; state.filtroTexto = texto;
  document.querySelectorAll('#filtro-tipo .pill').forEach(p => p.classList.toggle('active', p.dataset.val===tipo));
  document.querySelectorAll('#filtro-operacion .pill').forEach(p => p.classList.toggle('active', p.dataset.val===op));
  const t = document.getElementById('filtro-texto');
  if (t) t.value = texto;
  showPage('propiedades');
}

/* ══ EVENTOS GLOBALES ══ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeAsesorModal(); }
  // Navegación galería con flechas
  if (document.getElementById('modal-overlay').classList.contains('open')) {
    if (e.key === 'ArrowRight' && currentFotoIdx < currentFotos.length-1) setFoto(currentFotoIdx+1);
    if (e.key === 'ArrowLeft' && currentFotoIdx > 0) setFoto(currentFotoIdx-1);
  }
});

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  renderDestacadas();
  renderAsesoresPreview();
  initFiltros();
  const statEl = document.getElementById('stat-props');
  if (statEl) statEl.textContent = PROPIEDADES.length;
});
