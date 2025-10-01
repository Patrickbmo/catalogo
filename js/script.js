document.addEventListener('DOMContentLoaded', () => {
  const TAMANOS_BROCHAS = ['1"', '2"', '2.5"', '3"', '4"', '5"'];

  // Renderizar checkboxes de tamaños
  function renderizarFiltrosTamanos() {
    const container = document.getElementById('tamanos-filters');
    if (!container) return;

    let html = '<h4>Tamaños (Brochas)</h4>';
    TAMANOS_BROCHAS.forEach(tamano => {
      html += `<label><input type="checkbox" class="filtro-tamano" value="${tamano}"> ${tamano}</label>`;
    });
    container.innerHTML = html;
  }

  // Mostrar/ocultar filtros de tamaño
  function toggleFiltrosTamanos(mostrar) {
    const container = document.getElementById('tamanos-filters');
    if (container) {
      container.style.display = mostrar ? 'block' : 'none';
      if (!mostrar) {
        document.querySelectorAll('.filtro-tamano').forEach(cb => cb.checked = false);
      }
    }
  }

 function filtrarProductos() {
  // Obtener categorías seleccionadas
  const categoriasSeleccionadas = Array.from(
    document.querySelectorAll('.filtro-categoria:checked')
  ).map(cb => cb.value);

  // Obtener tamaños seleccionados
  const tamanosSeleccionados = Array.from(
    document.querySelectorAll('.filtro-tamano:checked')
  ).map(cb => cb.value);

  let resultado = productos;

  // 1. Filtrar por categoría (si hay al menos una seleccionada)
  if (categoriasSeleccionadas.length > 0) {
    resultado = resultado.filter(producto =>
      categoriasSeleccionadas.includes(producto.categoria)
    );
  }

  // 2. Filtrar por tamaño (solo si se seleccionó "Brochas" y hay tamaños marcados)
  if (tamanosSeleccionados.length > 0) {
    resultado = resultado.filter(producto =>
      producto.tamano && tamanosSeleccionados.includes(producto.tamano)
    );
  }

  return resultado;
}

  // Renderizar productos
  function renderizarProductos(lista) {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    lista.forEach(p => {
      const tamanosHTML = p.tamanos ? `<p class="tamanos-disponibles">${p.tamanos.join(' • ')}</p>` : '';
      const subcatHTML = p.subcategoria ? ` • ${p.subcategoria}` : '';

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.categoria}${subcatHTML}</p>
        ${tamanosHTML}
        <button class="details-btn">Ver Detalles</button>
        <div class="actions">
          <span>❤️</span>
          <span>⭐</span>
          <span>🛒</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Inicializar eventos
  function inicializarEventos() {
    // Categorías
    document.querySelectorAll('.filtro-categoria').forEach(cb => {
      cb.addEventListener('change', () => {
        const brochasCheck = document.querySelector('.filtro-categoria[value="Brochas"]:checked');
        toggleFiltrosTamanos(!!brochasCheck);
        renderizarProductos(filtrarProductos());
      });
    });

    // Tamaños
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('filtro-tamano')) {
        renderizarProductos(filtrarProductos());
      }
    });

    // Limpiar
    document.querySelector('.clear-btn')?.addEventListener('click', () => {
      document.querySelectorAll('.filtro-categoria, .filtro-tamano').forEach(cb => cb.checked = false);
      toggleFiltrosTamanos(false);
      renderizarProductos(productos);
    });

    // Slider de precio (simulado)
    const slider = document.getElementById('priceSlider');
    const minPrice = document.getElementById('minPrice');
    if (slider && minPrice) {
      slider.addEventListener('input', () => {
        minPrice.textContent = `$${slider.value}.00`;
      });
    }
  }

  // Iniciar
  renderizarFiltrosTamanos();
  renderizarProductos(productos);
  inicializarEventos();
});