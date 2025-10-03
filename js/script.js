document.addEventListener('DOMContentLoaded', () => {
  const TAMANOS_BROCHAS = ['1 pulgada', '1.5 pulgadas', '2 pulgadas', '2.5 pulgadas', '3 pulgadas', '4 pulgadas', '5 pulgadas', '6 pulgadas'];

  let productosFiltrados = [...productos];

  // ========== FUNCIONES DE URL ==========
  function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
      categoria: params.get('categoria'),
      search: params.get('search')
    };
  }

  function aplicarFiltrosIniciales() {
    const { categoria, search } = obtenerParametrosURL();

    if (categoria) {
      const checkbox = document.querySelector(`.filtro-categoria[value="${categoria}"]`);
      if (checkbox) {
        checkbox.checked = true;
        if (categoria === 'Brochas') {
          toggleFiltrosTamanos(true);
        }
      }
    }

    if (search) {
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = search;
      }
    }

    if (categoria || search) {
      aplicarFiltros();
    }
  }

  // ========== FUNCIONES DE FILTROS ==========
  function renderizarFiltrosTamanos() {
    const container = document.getElementById('tamanos-filters');
    if (!container) return;

    let html = '<h4>Tamaños</h4>';
    TAMANOS_BROCHAS.forEach(tamano => {
      const displayLabel = tamano.replace(' pulgadas', '"').replace(' pulgada', '"');
      html += `<label><input type="checkbox" class="filtro-tamano" value="${tamano}"> ${displayLabel}</label>`;
    });
    container.innerHTML = html;

    document.querySelectorAll('.filtro-tamano').forEach(cb => {
      cb.addEventListener('change', aplicarFiltros);
    });
  }

  function toggleFiltrosTamanos(mostrar) {
    const container = document.getElementById('tamanos-filters');
    if (container) {
      container.style.display = mostrar ? 'block' : 'none';
      if (!mostrar) {
        document.querySelectorAll('.filtro-tamano').forEach(cb => cb.checked = false);
      }
    }
  }

  function aplicarFiltros() {
    const categoriasSeleccionadas = Array.from(
      document.querySelectorAll('.filtro-categoria:checked')
    ).map(cb => cb.value);

    const tamanosSeleccionados = Array.from(
      document.querySelectorAll('.filtro-tamano:checked')
    ).map(cb => cb.value);

    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    let resultado = [...productos];

    if (categoriasSeleccionadas.length > 0) {
      resultado = resultado.filter(producto =>
        categoriasSeleccionadas.includes(producto.categoria)
      );
    }

    if (tamanosSeleccionados.length > 0) {
      resultado = resultado.filter(producto => {
        if (!producto.tamano) return false;
        return tamanosSeleccionados.includes(producto.tamano);
      });
    }

    if (searchTerm) {
      resultado = resultado.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm) ||
        producto.categoria.toLowerCase().includes(searchTerm) ||
        (producto.marca && producto.marca.toLowerCase().includes(searchTerm))
      );
    }

    productosFiltrados = resultado;
    renderizarProductos(resultado);
    actualizarContador(resultado.length);
  }

  function actualizarContador(cantidad) {
    const counter = document.getElementById('resultsCount');
    if (counter) {
      if (cantidad === productos.length) {
        counter.textContent = `Mostrando todos los productos (${cantidad})`;
      } else {
        counter.textContent = `Mostrando ${cantidad} de ${productos.length} productos`;
      }
    }
  }

  function renderizarProductos(lista) {
    const grid = document.querySelector('.product-grid');
    const noResults = document.querySelector('.no-results');
    
    if (!grid) return;

    grid.innerHTML = '';

    if (lista.length === 0) {
      grid.style.display = 'none';
      if (noResults) noResults.style.display = 'block';
      return;
    }

    grid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    lista.forEach(p => {
      const marcaBadge = p.marca ? `<span class="marca-badge">${p.marca}</span>` : '';
      const tamanoDisplay = p.tamano ? p.tamano.replace(' pulgadas', '"').replace(' pulgada', '"') : '';
      const tamanoBadge = tamanoDisplay ? `<span class="tamano-badge">${tamanoDisplay}</span>` : '';

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/240x200?text=Sin+Imagen'">
        <div class="product-info">
          <div>${marcaBadge}${tamanoBadge}</div>
          <h3>${p.nombre}</h3>
          <p>${p.categoria}</p>
          <p style="font-size: 0.8em; color: #888; margin-top: 5px;">${p.descripcion ? p.descripcion.substring(0, 80) + '...' : ''}</p>
        </div>
        <button class="details-btn" onclick="verDetalle(${p.id})">Ver Detalles</button>
        <div class="actions">
          <span title="Agregar a favoritos">❤️</span>
          <span title="Calificar">⭐</span>
          <span title="Agregar al carrito">🛒</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function ordenarProductos(criterio) {
    let ordenados = [...productosFiltrados];

    switch(criterio) {
      case 'name-asc':
        ordenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'name-desc':
        ordenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      default:
        break;
    }

    renderizarProductos(ordenados);
  }

  function limpiarFiltros() {
    document.querySelectorAll('.filtro-categoria, .filtro-tamano').forEach(cb => {
      cb.checked = false;
    });

    toggleFiltrosTamanos(false);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';

    productosFiltrados = [...productos];
    renderizarProductos(productos);
    actualizarContador(productos.length);
  }

  function inicializarEventos() {
    document.querySelectorAll('.filtro-categoria').forEach(cb => {
      cb.addEventListener('change', () => {
        const brochasChecked = document.querySelector('.filtro-categoria[value="Brochas"]:checked');
        toggleFiltrosTamanos(!!brochasChecked);
        aplicarFiltros();
      });
    });

    document.querySelectorAll('.clear-btn').forEach(btn => {
      btn.addEventListener('click', limpiarFiltros);
    });

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
      searchInput.addEventListener('input', aplicarFiltros);
    }
    
    if (searchBtn) {
      searchBtn.addEventListener('click', aplicarFiltros);
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        ordenarProductos(e.target.value);
      });
    }
  }

  // ========== MODAL DISTRIBUIDOR ==========
  const modal = document.getElementById('distribuidorModal');
  const openBtn = document.getElementById('openDistribuidorForm');
  const closeBtn = document.querySelector('.close-modal');
  const form = document.getElementById('distribuidorForm');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function cerrarModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', cerrarModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        cerrarModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      cerrarModal();
    }
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      if (successMsg) successMsg.style.display = 'none';
      if (errorMsg) errorMsg.style.display = 'none';

      try {
        const formData = new FormData(form);
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          if (successMsg) successMsg.style.display = 'block';
          form.reset();
          
          setTimeout(() => {
            cerrarModal();
          }, 3000);
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        if (errorMsg) errorMsg.style.display = 'block';
        console.error('Error:', error);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // ========== INICIALIZACIÓN ==========
  renderizarFiltrosTamanos();
  inicializarEventos();
  
  const urlParams = obtenerParametrosURL();
  if (urlParams.categoria || urlParams.search) {
    aplicarFiltrosIniciales();
  } else {
    renderizarProductos(productos);
    actualizarContador(productos.length);
  }
});

// Función global para ver detalle
function verDetalle(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    alert(`Ver detalles de: ${producto.nombre}\n\nEsta funcionalidad se implementará en producto.html`);
  }
}