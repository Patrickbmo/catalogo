// ==========================================
// PRODUCTO.JS - VERSIÓN CON ICONOS SVG
// ==========================================

/**
 * Obtiene el ID del producto desde la URL
 */
function obtenerIdDeURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return id ? parseInt(id) : null;
}

/**
 * Obtiene los datos completos de un producto
 * - Si es brocha con marca: combina plantilla + datos específicos
 * - Si es otro producto: retorna datos tal cual
 */
function obtenerDatosCompletos(id) {
  const producto = productos.find(p => p.id === parseInt(id));
  
  if (!producto) {
    console.error(`Producto con ID ${id} no encontrado`);
    return null;
  }
  
  // 1️⃣ Si es brocha con marca, usar plantilla de brochas
  if (producto.categoria === "Brochas" && producto.marca && plantillasBrochas[producto.marca]) {
    const plantilla = plantillasBrochas[producto.marca];
    
    return {
      ...plantilla,
      ...producto,
      imagenes: producto.imagenes || [producto.imagen, producto.imagen, producto.imagen]
    };
  }
  
  // 2️⃣ Si tiene información detallada por ID, usarla
  if (informacionProductos[id]) {
    const infoDetallada = informacionProductos[id];
    
    return {
      ...infoDetallada,
      ...producto,
      imagenes: producto.imagenes || [producto.imagen, producto.imagen, producto.imagen]
    };
  }
  
  // 3️⃣ Para productos sin información detallada, retornar básico
  return {
    ...producto,
    subtitulo: producto.descripcion || '',
    descripcionCompleta: producto.descripcion || '',
    imagenes: producto.imagenes || [producto.imagen, producto.imagen, producto.imagen],
    caracteristicas: [],
    especificaciones: {
      "Categoría": producto.categoria,
      "Código": producto.codigo || 'N/A'
    },
    usos: [],
    cuidados: []
  };
}

/**
 * Verifica si un producto tiene datos completos para mostrar
 */
function tieneInformacionCompleta(producto) {
  return !!(
    producto &&
    producto.nombre &&
    producto.imagenes &&
    producto.imagenes.length > 0
  );
}

/**
 * Redirige al catálogo
 */
function redirigirACatalogo() {
  console.log('Redirigiendo al catálogo...');
  setTimeout(() => {
    window.location.href = 'catalogo.html';
  }, 2000);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  inicializarPaginaProducto();
});

/**
 * Función principal que inicializa la página
 */
function inicializarPaginaProducto() {
  const productId = obtenerIdDeURL();
  
  if (!productId) {
    console.error('No se especificó ID de producto');
    redirigirACatalogo();
    return;
  }
  
  const producto = obtenerDatosCompletos(productId);
  
  if (!producto) {
    console.error('Producto no encontrado');
    redirigirACatalogo();
    return;
  }
  
  console.log('Producto cargado:', producto); // Debug
  
  // Verificar información completa
  if (!tieneInformacionCompleta(producto)) {
    console.warn('Producto sin información completa:', producto.nombre);
  }
  
  // Renderizar todo el producto
  renderizarProducto(producto);
  
  // Inicializar funcionalidades
  inicializarGaleria();
  inicializarTabs();
  inicializarBotones();
  cargarProductosRelacionados(producto);
}

/**
 * Renderiza todos los datos del producto en el HTML
 */
function renderizarProducto(producto) {
  try {
    // ===== TÍTULO DE LA PÁGINA =====
    document.title = `${producto.nombre} - Wilson`;
    
    // ===== BREADCRUMB =====
    actualizarBreadcrumb(producto);
    
    // ===== INFORMACIÓN PRINCIPAL =====
    const nombreElement = document.getElementById('productoNombre');
    if (nombreElement) {
      nombreElement.textContent = producto.nombre;
    }
    
    const subtituloElement = document.getElementById('productoSubtitulo');
    if (subtituloElement) {
      subtituloElement.textContent = producto.subtitulo || '';
    }
    
    const descripcionElement = document.getElementById('productoDescripcionCorta');
    if (descripcionElement) {
      descripcionElement.innerHTML = `<p>${producto.descripcionCompleta || producto.descripcion}</p>`;
    }
    
    // ===== BADGES =====
    const badgeCategoria = document.getElementById('badgeCategoria');
    if (badgeCategoria) {
      badgeCategoria.textContent = producto.categoria;
    }
    
    if (producto.marca) {
      const badgeMarca = document.getElementById('badgeMarca');
      if (badgeMarca) {
        badgeMarca.textContent = producto.marca;
        badgeMarca.style.display = 'inline-block';
      }
    }
    
    // ===== META INFO =====
    const codigoElement = document.getElementById('productoCodigo');
    if (codigoElement) {
      codigoElement.textContent = producto.codigo || 'N/A';
    }
    
    const cantidadElement = document.getElementById('productoCantidadCaja');
    if (cantidadElement) {
      cantidadElement.textContent = producto.cantidadPorCaja || 'N/A';
    }
    
    // ===== GALERÍA DE IMÁGENES =====
    renderizarGaleria(producto.imagenes || [producto.imagen]);
    
    // ===== CARACTERÍSTICAS =====
    if (producto.caracteristicas && producto.caracteristicas.length > 0) {
      renderizarCaracteristicas(producto.caracteristicas);
    } else {
      // Ocultar sección si no hay características
      const seccion = document.querySelector('.caracteristicas-destacadas');
      if (seccion) seccion.style.display = 'none';
    }
    
    // ===== ESPECIFICACIONES =====
    if (producto.especificaciones) {
      renderizarEspecificaciones(producto.especificaciones);
    }
    
    // ===== USOS =====
    if (producto.usos && producto.usos.length > 0) {
      renderizarUsos(producto.usos);
    } else {
      // Ocultar tab de usos si no hay
      const tabBtn = document.querySelector('[data-tab="usos"]');
      if (tabBtn) tabBtn.style.display = 'none';
    }
    
    // ===== CUIDADOS =====
    if (producto.cuidados && producto.cuidados.length > 0) {
      renderizarCuidados(producto.cuidados);
    } else {
      // Ocultar tab de cuidados si no hay
      const tabBtn = document.querySelector('[data-tab="cuidados"]');
      if (tabBtn) tabBtn.style.display = 'none';
    }
    
    console.log('Producto renderizado correctamente'); // Debug
    
  } catch (error) {
    console.error('Error al renderizar producto:', error);
  }
}

/**
 * Renderiza la galería de imágenes
 */
function renderizarGaleria(imagenes) {
  const imagenPrincipal = document.getElementById('imagenPrincipalProducto');
  const thumbnailsContainer = document.querySelector('.thumbnails-galeria');
  
  if (!imagenPrincipal || !thumbnailsContainer) {
    console.error('Elementos de galería no encontrados');
    return;
  }
  
  // Imagen principal
  imagenPrincipal.src = imagenes[0];
  imagenPrincipal.alt = 'Imagen del producto';
  
  // Thumbnails
  thumbnailsContainer.innerHTML = '';
  imagenes.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `Miniatura ${index + 1}`;
    thumb.className = `thumbnail-producto ${index === 0 ? 'active' : ''}`;
    thumb.dataset.index = index;
    thumb.onclick = () => cambiarImagenPrincipalProducto(index);
    thumbnailsContainer.appendChild(thumb);
  });
}

/**
 * Cambia la imagen principal al hacer clic en thumbnail
 */
function cambiarImagenPrincipalProducto(index) {
  const productId = obtenerIdDeURL();
  const producto = obtenerDatosCompletos(productId);
  const imagenes = producto.imagenes || [producto.imagen];
  
  // Cambiar imagen principal
  const imagenPrincipal = document.getElementById('imagenPrincipalProducto');
  if (imagenPrincipal) {
    imagenPrincipal.src = imagenes[index];
  }
  
  // Actualizar thumbnails activos
  document.querySelectorAll('.thumbnail-producto').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

/**
 * Renderiza las características destacadas - CON ICONOS SVG
 */
function renderizarCaracteristicas(caracteristicas) {
  const grid = document.getElementById('caracteristicasGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  caracteristicas.forEach(caract => {
    const card = document.createElement('div');
    card.className = 'caracteristica-card';
    card.innerHTML = `
      <div class="caracteristica-icon">
        <img src="${caract.icono}" alt="${caract.titulo}" class="icono-svg">
      </div>
      <h4>${caract.titulo}</h4>
      <p>${caract.descripcion}</p>
    `;
    grid.appendChild(card);
  });
}

/**
 * Renderiza las especificaciones técnicas
 * Formato simple: label: valor
 */
// Función para renderizar especificaciones (incluyendo colores)
function renderizarEspecificaciones(especificaciones) {
  const grid = document.getElementById('especificacionesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  for (const [key, value] of Object.entries(especificaciones)) {
    // Si es el campo de colores, renderizar solo bolitas
    if (key === 'colores' && Array.isArray(value)) {
      const especItem = document.createElement('div');
      especItem.className = 'especificacion-item';
      
      especItem.innerHTML = `
        <span class="especificacion-label">Colores:</span>
        <div class="colores-disponibles">
          ${value.map((color, index) => `
            <div class="color-option" 
                 onclick="seleccionarColor(${index}, '${color.codigo}', '${color.nombre}')"
                 title="${color.nombre} - Cód: ${color.codigo}">
              <div class="color-circle ${index === 0 ? 'selected' : ''}" 
                   style="background-color: ${color.hex};"
                   data-color-index="${index}">
              </div>
            </div>
          `).join('')}
        </div>
      `;
      
      grid.appendChild(especItem);
    } else {
      // Renderizar especificaciones normales
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      const especItem = document.createElement('div');
      especItem.className = 'especificacion-item';
      
      especItem.innerHTML = `
        <span class="especificacion-label">${label}:</span>
        <span class="especificacion-value">${value}</span>
      `;
      
      grid.appendChild(especItem);
    }
  }
}

// Función para seleccionar color
function seleccionarColor(index, codigo, nombreColor) {
  // Remover selección anterior
  document.querySelectorAll('.color-circle').forEach(circle => {
    circle.classList.remove('selected');
  });
  
  // Agregar selección al color clickeado
  const circleSeleccionado = document.querySelector(`.color-circle[data-color-index="${index}"]`);
  if (circleSeleccionado) {
    circleSeleccionado.classList.add('selected');
  }
  
  // Actualizar el código del producto en la UI
  const productoCodigo = document.getElementById('productoCodigo');
  if (productoCodigo) {
    productoCodigo.textContent = codigo;
  }
  
  // Guardar la selección para cuando se agregue al carrito
  if (window.productoActual) {
    window.productoActual.codigoSeleccionado = codigo;
    window.productoActual.colorSeleccionado = nombreColor;
  }
  
  console.log(`Color seleccionado: ${nombreColor} - Código: ${codigo}`);
}

// Asegúrate de que la función esté disponible globalmente
window.seleccionarColor = seleccionarColor;

/**
 * Renderiza los usos recomendados - CON ICONOS SVG
 */
function renderizarUsos(usos) {
  const grid = document.getElementById('usosGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  usos.forEach(uso => {
    const card = document.createElement('div');
    card.className = 'uso-card';
    card.innerHTML = `
      <div class="uso-icon">
        <img src="${uso.icono}" alt="${uso.titulo}" class="icono-svg">
      </div>
      <h4>${uso.titulo}</h4>
      <p>${uso.descripcion}</p>
    `;
    grid.appendChild(card);
  });
}

/**
 * Renderiza los cuidados
 */
function renderizarCuidados(cuidados) {
  const lista = document.getElementById('cuidadosLista');
  if (!lista) return;
  
  lista.innerHTML = '';
  
  cuidados.forEach(cuidado => {
    const item = document.createElement('div');
    item.className = 'cuidado-item';
    item.innerHTML = `
      <h4>${cuidado.titulo}</h4>
      <p>${cuidado.descripcion}</p>
    `;
    lista.appendChild(item);
  });
}

/**
 * Inicializa la funcionalidad de la galería
 */
function inicializarGaleria() {
  // Botón de zoom
  const btnZoom = document.querySelector('.btn-zoom');
  if (btnZoom) {
    btnZoom.addEventListener('click', () => {
      const img = document.getElementById('imagenPrincipalProducto');
      if (img) {
        window.open(img.src, '_blank');
      }
    });
  }
}

/**
 * Inicializa el sistema de tabs (Desktop) / Accordion (Mobile)
 */
function inicializarTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  // Detectar si estamos en mobile
  const isMobile = () => window.innerWidth <= 768;
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      
      if (!targetPanel) return;
      
      // MOBILE: Accordion behavior (múltiples paneles abiertos)
      if (isMobile()) {
        // Toggle el panel clickeado
        button.classList.toggle('active');
        targetPanel.classList.toggle('active');
        
      } 
      // DESKTOP: Tabs behavior (solo uno activo)
      else {
        // Remover active de todos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Activar el seleccionado
        button.classList.add('active');
        targetPanel.classList.add('active');
      }
    });
  });
  
  // Ajustar comportamiento al cambiar tamaño de ventana
  let previousWidth = window.innerWidth;
  
  window.addEventListener('resize', () => {
    const currentWidth = window.innerWidth;
    
    // Si cambiamos de mobile a desktop o viceversa
    if ((previousWidth <= 768 && currentWidth > 768) || 
        (previousWidth > 768 && currentWidth <= 768)) {
      
      // Reset: cerrar todos los paneles
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // En desktop, activar el primero
      if (currentWidth > 768) {
        if (tabButtons[0]) tabButtons[0].classList.add('active');
        if (tabPanels[0]) tabPanels[0].classList.add('active');
      }
    }
    
    previousWidth = currentWidth;
  });
  
  // Inicialización: En desktop activar el primero, en mobile todos cerrados
  if (!isMobile()) {
    if (tabButtons[0]) tabButtons[0].classList.add('active');
    if (tabPanels[0]) tabPanels[0].classList.add('active');
  }
}

/**
 * Inicializa los botones de acción
 */
function inicializarBotones() {
  // Botón de cotización
  const btnCotizar = document.querySelector('.btn-cotizar');
  if (btnCotizar) {
    btnCotizar.addEventListener('click', () => {
      const productId = obtenerIdDeURL();
      const cantidad = parseInt(document.getElementById('cantidadProducto')?.value || 1);
      
      if (agregarACotizacion(productId, cantidad)) {
        // Opcional: Abrir el modal de cotización
        // setTimeout(() => abrirCotizacion(), 500);
      }
    });
  }
  
  // Botón de favorito
  const btnFavorito = document.querySelector('.btn-favorito');
  if (btnFavorito) {
    btnFavorito.addEventListener('click', () => {
      btnFavorito.classList.toggle('active');
      const icon = btnFavorito.querySelector('i');
      
      if (btnFavorito.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        alert('Producto añadido a favoritos');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        alert('Producto removido de favoritos');
      }
    });
  }
}

// ===== FUNCIONES DE CANTIDAD =====

function ajustarCantidadProducto(cambio) {
  const input = document.getElementById('cantidadProducto');
  if (!input) return;
  
  let valor = parseInt(input.value) + cambio;
  valor = Math.max(1, Math.min(999, valor));
  input.value = valor;
  actualizarInfoUnidades();
}

function validarCantidadProducto() {
  const input = document.getElementById('cantidadProducto');
  if (!input) return;
  
  let valor = parseInt(input.value) || 1;
  valor = Math.max(1, Math.min(999, valor));
  input.value = valor;
  actualizarInfoUnidades();
}

function actualizarInfoUnidades() {
  const productId = obtenerIdDeURL();
  const producto = obtenerDatosCompletos(productId);
  const cantidad = parseInt(document.getElementById('cantidadProducto')?.value || 1);
  const infoElement = document.getElementById('infoUnidades');
  
  if (!producto || !infoElement) return;
  
  if (typeof producto.cantidadPorCaja === 'number') {
    const unidadesTotales = producto.cantidadPorCaja * cantidad;
    infoElement.textContent = `${cantidad} ${cantidad === 1 ? 'caja' : 'cajas'} = ${unidadesTotales} unidades`;
  } else {
    infoElement.textContent = `${cantidad} ${cantidad === 1 ? 'caja' : 'cajas'}`;
  }
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cantidadProducto')) {
    actualizarInfoUnidades();
  }
});
// ===== BREADCRUMB CORREGIDO =====
function actualizarBreadcrumb(producto) {
  // Actualizar texto de categoría
  const breadcrumbCategoria = document.getElementById('breadcrumb-categoria');
  if (breadcrumbCategoria) {
    breadcrumbCategoria.textContent = producto.categoria;
    // IMPORTANTE: Codificar la categoría para la URL
    const categoriaURL = encodeURIComponent(producto.categoria);
    breadcrumbCategoria.href = `catalogo.html?categoria=${categoriaURL}`;
  }
  
  // Actualizar nombre del producto
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  if (breadcrumbProduct) {
    breadcrumbProduct.textContent = producto.nombre;
  }
}

// ===== PRODUCTOS RELACIONADOS =====
function cargarProductosRelacionados(productoActual) {
  const grid = document.getElementById('productosRelacionadosGrid');
  if (!grid) return;
  
  // Obtener productos relacionados
  let relacionados = obtenerProductosRelacionados(productoActual);
  
  // Limitar a 4 productos
  relacionados = relacionados.slice(0, 4);
  
  if (relacionados.length === 0) {
    grid.innerHTML = '<p class="no-relacionados">No hay productos relacionados disponibles</p>';
    return;
  }
  
  // Renderizar productos
  grid.innerHTML = '';
  relacionados.forEach(producto => {
    const card = crearTarjetaProductoRelacionado(producto);
    grid.appendChild(card);
  });
}

function obtenerProductosRelacionados(productoActual) {
  // ✅ SOLO productos de la misma categoría (excluyendo el actual)
  const relacionados = productos.filter(p => 
    p.id !== productoActual.id && 
    p.categoria === productoActual.categoria
  );
  
  return relacionados;
}

function crearTarjetaProductoRelacionado(producto) {
  const card = document.createElement('div');
  card.className = 'producto-relacionado-card';
  card.onclick = () => {
    window.location.href = `producto.html?id=${producto.id}`;
  };
  
  card.innerHTML = `
    <div class="relacionado-imagen">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="relacionado-info">
      <h4>${producto.nombre}</h4>
      <span class="relacionado-categoria">${producto.categoria}</span>
      ${producto.marca ? `<span class="relacionado-marca">${producto.marca}</span>` : ''}
    </div>
    <button class="btn-ver-relacionado">Ver Producto</button>
  `;
  
  return card;
}

