document.addEventListener('DOMContentLoaded', () => {
  const TAMANOS_BROCHAS = ['1 pulgada', '1.5 pulgadas', '2 pulgadas', '2.5 pulgadas', '3 pulgadas', '4 pulgadas', '5 pulgadas', '6 pulgadas'];

  let productosFiltrados = [...productos];

  // Renderizar checkboxes de tamaños
  function renderizarFiltrosTamanos() {
    const container = document.getElementById('tamanos-filters');
    if (!container) return;

    let html = '<h4>Tamaños</h4>';
    TAMANOS_BROCHAS.forEach(tamano => {
      // Mostrar solo el número y comillas en la etiqueta visual
      const displayLabel = tamano.replace(' pulgadas', '"').replace(' pulgada', '"');
      html += `<label><input type="checkbox" class="filtro-tamano" value="${tamano}"> ${displayLabel}</label>`;
    });
    container.innerHTML = html;

    // Agregar eventos a los nuevos checkboxes
    document.querySelectorAll('.filtro-tamano').forEach(cb => {
      cb.addEventListener('change', aplicarFiltros);
    });
  }

  // Mostrar/ocultar filtros de tamaño
  function toggleFiltrosTamanos(mostrar) {
    const container = document.getElementById('tamanos-filters');
    if (container) {
      container.style.display = mostrar ? 'block' : 'none';
      if (!mostrar) {
        // Limpiar tamaños seleccionados cuando se oculta
        document.querySelectorAll('.filtro-tamano').forEach(cb => cb.checked = false);
      }
    }
  }

  // Aplicar todos los filtros
  function aplicarFiltros() {
    // Obtener categorías seleccionadas
    const categoriasSeleccionadas = Array.from(
      document.querySelectorAll('.filtro-categoria:checked')
    ).map(cb => cb.value);

    // Obtener tamaños seleccionados
    const tamanosSeleccionados = Array.from(
      document.querySelectorAll('.filtro-tamano:checked')
    ).map(cb => cb.value);

    // Obtener término de búsqueda
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    let resultado = [...productos];

    // 1. Filtrar por categoría
    if (categoriasSeleccionadas.length > 0) {
      resultado = resultado.filter(producto =>
        categoriasSeleccionadas.includes(producto.categoria)
      );
    }

    // 2. Filtrar por tamaño (solo si hay tamaños seleccionados)
    if (tamanosSeleccionados.length > 0) {
      resultado = resultado.filter(producto => {
        if (!producto.tamano) return false;
        return tamanosSeleccionados.includes(producto.tamano);
      });
    }

    // 3. Filtrar por búsqueda
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

  // Actualizar contador de resultados
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

  // Renderizar productos
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
      // Mostrar tamaño con comillas para mejor visualización
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

  // Ordenar productos
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
        // Por defecto (como están en data.js)
        break;
    }

    renderizarProductos(ordenados);
  }

  // Limpiar todos los filtros
  function limpiarFiltros() {
    // Desmarcar todos los checkboxes
    document.querySelectorAll('.filtro-categoria, .filtro-tamano').forEach(cb => {
      cb.checked = false;
    });

    // Ocultar filtros de tamaño
    toggleFiltrosTamanos(false);

    // Limpiar búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    // Resetear ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'default';

    // Mostrar todos los productos
    productosFiltrados = [...productos];
    renderizarProductos(productos);
    actualizarContador(productos.length);
  }

  // Inicializar eventos
  function inicializarEventos() {
    // Eventos de categorías
    document.querySelectorAll('.filtro-categoria').forEach(cb => {
      cb.addEventListener('change', () => {
        const brochasChecked = document.querySelector('.filtro-categoria[value="Brochas"]:checked');
        toggleFiltrosTamanos(!!brochasChecked);
        aplicarFiltros();
      });
    });

    // Botones de limpiar
    document.querySelectorAll('.clear-btn').forEach(btn => {
      btn.addEventListener('click', limpiarFiltros);
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
      searchInput.addEventListener('input', aplicarFiltros);
    }
    
    if (searchBtn) {
      searchBtn.addEventListener('click', aplicarFiltros);
    }

    // Ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        ordenarProductos(e.target.value);
      });
    }
  }

  // Inicialización
  renderizarFiltrosTamanos();
  renderizarProductos(productos);
  actualizarContador(productos.length);
  inicializarEventos();
});

// Función global para ver detalle (puedes implementarla después)
function verDetalle(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    alert(`Ver detalles de: ${producto.nombre}\n\nEsta funcionalidad se implementará en producto.html`);
    // Aquí puedes redirigir a producto.html?id=X
    // window.location.href = `producto.html?id=${id}`;
  }
}

// ========== MODAL DISTRIBUIDOR ==========
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('distribuidorModal');
  const openBtn = document.getElementById('openDistribuidorForm');
  const closeBtn = document.querySelector('.close-modal');
  const form = document.getElementById('distribuidorForm');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');

  // Abrir modal
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
  }

  // Cerrar modal
  function cerrarModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    // Limpiar mensajes
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', cerrarModal);
  }

  // Cerrar al hacer clic fuera del modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      cerrarModal();
    }
  });

  // Manejar envío del formulario
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      // Deshabilitar botón y mostrar loading
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      // Ocultar mensajes previos
      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';

      try {
        const formData = new FormData(form);
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          // Mostrar mensaje de éxito
          successMsg.style.display = 'block';
          form.reset();
          
          // Cerrar modal después de 3 segundos
          setTimeout(() => {
            cerrarModal();
          }, 3000);
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        // Mostrar mensaje de error
        errorMsg.style.display = 'block';
        console.error('Error:', error);
      } finally {
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});