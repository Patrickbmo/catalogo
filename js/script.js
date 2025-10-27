document.addEventListener('DOMContentLoaded', () => {
  const TAMANOS_BROCHAS = ['1 pulgada', '2 pulgadas', '2.5 pulgadas', '3 pulgadas', '4 pulgadas', '5 pulgadas', '6 pulgadas','Angular'];

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
    // Si es Angular, no convertir a pulgadas
    const displayLabel = tamano === 'Angular' 
      ? 'Angular' 
      : tamano.replace(' pulgadas', '"').replace(' pulgada', '"');
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
          <span title="Agregar a favoritos" onclick="event.stopPropagation()">❤️</span>
          <span title="Calificar" onclick="event.stopPropagation()">⭐</span>
          <span title="Agregar a cotización" onclick="event.stopPropagation(); agregarACotizacion(${p.id}); return false;">🛒</span>
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
  // Redirigir a la página de producto con el ID
  window.location.href = `producto.html?id=${id}`;
}


// Script para el formulario de newsletter
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = this.querySelector('input[type="email"]').value;
  
  // Aquí puedes agregar tu lógica de envío (API, servicio de email, etc.)
  console.log('Email suscrito:', email);
  
  // Mostrar mensaje de éxito
  alert('¡Gracias por suscribirte! Recibirás nuestras mejores ofertas.');
  
  // Limpiar formulario
  this.reset();
});

// Script específico para el formulario de contacto
    document.getElementById('contactoForm')?.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitBtn = this.querySelector('.btn-enviar');
      const originalText = submitBtn.textContent;
      const mensajeExito = document.getElementById('mensajeExito');
      const mensajeError = document.getElementById('mensajeError');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      mensajeExito.style.display = 'none';
      mensajeError.style.display = 'none';

      try {
        const formData = new FormData(this);
        
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          mensajeExito.style.display = 'block';
          this.reset();
          
          setTimeout(() => {
            mensajeExito.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        mensajeError.style.display = 'block';
        console.error('Error:', error);
        
        setTimeout(() => {
          mensajeError.style.display = 'none';
        }, 5000);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });

    // Funcionalidad para el buscador en el header
    document.getElementById('searchBtn')?.addEventListener('click', function() {
      const searchTerm = document.getElementById('searchInput').value;
      if (searchTerm.trim()) {
        window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
      }
    });

    document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
          window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
        }
      }
    });

    // ==========================================
// FUNCIONES PARA INDEX.HTML
// Agregar al final de script.js
// ==========================================

// Variable global para trackear la línea actual
let lineaActual = null;

/**
 * Muestra los detalles de una línea de brocha (Premier, Futura, Prima)
 * Usado en index.html para el panel de líneas de brochas
 */
function mostrarDetalles(linea, element = null) {
  lineaActual = lineasData[linea];
  
  // DESKTOP: Actualizar panel principal
  if (window.innerWidth > 768) {
    const panel = document.getElementById('panelDetalles');
    
    if (!panel) return; // Si no existe el panel, salir
    
    // Actualizar título
    const titulo = document.getElementById('detallesTitulo');
    if (titulo) titulo.textContent = lineaActual.titulo;
    
    // Actualizar imagen principal
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    if (imagenPrincipal) imagenPrincipal.src = lineaActual.imagenes[0];
    
    // Actualizar thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (lineaActual.imagenes[index]) {
        thumb.src = lineaActual.imagenes[index];
        thumb.style.display = 'block';
      } else {
        thumb.style.display = 'none';
      }
    });
    
    // Marcar primer thumbnail como activo
    thumbnails.forEach(t => t.classList.remove('active'));
    if (thumbnails[0]) thumbnails[0].classList.add('active');
    
    // Actualizar botón Ver Más
    const btnVerMas = document.getElementById('btnVerMasPanel');
    if (btnVerMas) btnVerMas.href = lineaActual.url;
    
    // Remover clase active de todas las cards
    document.querySelectorAll('.linea-card').forEach(card => {
      card.classList.remove('active');
    });
    
    // Agregar clase active a la card seleccionada
    if (element) {
      element.classList.add('active');
      
      // Scroll suave hacia el panel
      setTimeout(() => {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    } else {
      // Si no hay elemento (carga inicial), marcar la primera card
      const primerCard = document.querySelector('.linea-card');
      if (primerCard) {
        primerCard.classList.add('active');
      }
    }
  } 
  // MOBILE: Toggle panel colapsable dentro de la card
  else {
    if (element) {
      // Cerrar todas las otras cards
      document.querySelectorAll('.linea-card').forEach(card => {
        if (card !== element) {
          card.classList.remove('active');
        }
      });
      
      // Toggle la card actual
      element.classList.toggle('active');
    }
  }
}

/**
 * Cambia la imagen principal del panel de brochas
 */
function cambiarImagenPrincipal(index) {
  if (!lineaActual) return;
  
  const imagenPrincipal = document.getElementById('imagenPrincipal');
  if (!imagenPrincipal) return;
  
  imagenPrincipal.src = lineaActual.imagenes[index];
  
  // Actualizar thumbnails activos
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(t => t.classList.remove('active'));
  if (thumbnails[index]) thumbnails[index].classList.add('active');
}

/**
 * Cambia la imagen principal de la sección de baldes
 */
function cambiarImagenBalde(element, event) {
  // Remover clase active de todos los thumbnails
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  
  // Agregar clase active al thumbnail clickeado
  element.classList.add('active');
  
  // Cambiar la imagen principal
  const imagenPrincipal = document.getElementById('imagenPrincipalBalde');
  if (imagenPrincipal) {
    imagenPrincipal.src = element.src;
  }
}

/**
 * Cambia la imagen principal de la sección de canecas
 */
function cambiarImagenCaneca(element, event) {
  // Remover clase active de todos los thumbnails en la sección de canecas
  const canecaThumbnails = element.closest('.superior-canecas')?.querySelectorAll('.thumbnail-caneca');
  if (canecaThumbnails) {
    canecaThumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });
  }
  
  // Agregar clase active al thumbnail clickeado
  element.classList.add('active');
  
  // Cambiar la imagen principal
  const imagenPrincipal = document.getElementById('imagenPrincipalCaneca');
  if (imagenPrincipal) {
    imagenPrincipal.src = element.src;
  }
}

/**
 * Cierra los detalles de las líneas de brochas
 */
function cerrarDetalles() {
  // Remover clase active de todas las cards
  document.querySelectorAll('.linea-card').forEach(card => {
    card.classList.remove('active');
  });
}

// ===== INICIALIZACIÓN PARA INDEX.HTML =====
// Solo ejecutar si estamos en index.html
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
  document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el panel con la primera línea al cargar la página
    if (typeof lineasData !== 'undefined' && lineasData.premier) {
      mostrarDetalles('premier');
    }
  });
}

    