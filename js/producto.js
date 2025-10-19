// ==========================================
// FUNCIONES AUXILIARES PARA PRODUCTO.JS
// AGREGAR AL INICIO (línea 3) - ANTES de document.addEventListener
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
  
  // Si es brocha con marca, combinar con plantilla
  if (producto.categoria === "Brochas" && producto.marca && plantillasBrochas[producto.marca]) {
    const plantilla = plantillasBrochas[producto.marca];
    
    return {
      // Primero los datos de la plantilla
      ...plantilla,
      // Luego los datos específicos del producto (sobrescriben)
      ...producto,
      // Asegurar que imagenes[] existe
      imagenes: producto.imagenes || [producto.imagen, producto.imagen, producto.imagen]
    };
  }
  
  // Para productos no-brochas, retornar tal cual
  return producto;
}

/**
 * Verifica si un producto tiene datos completos para mostrar
 */
function tieneInformacionCompleta(producto) {
  return !!(
    producto &&
    producto.nombre &&
    producto.imagenes &&
    producto.imagenes.length > 0 &&
    producto.caracteristicas &&
    producto.usos &&
    producto.cuidados
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

// ===== NO AGREGAR MÁS CÓDIGO AQUÍ =====
// El document.addEventListener ya existe más abajo en tu archivo
// ===== INICIALIZACIÓN =====

document.addEventListener('DOMContentLoaded', () => {
  inicializarPaginaProducto();
});

// ... AQUÍ CONTINÚA TU CÓDIGO EXISTENTE (inicializarPaginaProducto, etc.)
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
  
  // Verificar información completa
  if (!tieneInformacionCompleta(producto)) {
    console.warn('Producto sin información completa:', producto.nombre);
    // Aún así renderizar lo que tengamos
  }
  
  // Renderizar todo el producto
  renderizarProducto(producto);
  
  // Inicializar funcionalidades
  inicializarGaleria();
  inicializarTabs();
  inicializarBotones();
}

/**
 * Renderiza todos los datos del producto en el HTML
 */
function renderizarProducto(producto) {
  // ===== TÍTULO Y META =====
  document.getElementById('page-title').textContent = `${producto.nombre} - Wilson`;
  document.getElementById('breadcrumb-product').textContent = producto.nombre;
  
  // ===== INFORMACIÓN PRINCIPAL =====
  document.getElementById('productoNombre').textContent = producto.nombre;
  document.getElementById('productoSubtitulo').textContent = producto.subtitulo || '';
  document.getElementById('productoDescripcionCorta').innerHTML = `<p>${producto.descripcionCompleta || producto.descripcion}</p>`;
  
  // ===== BADGES =====
  document.getElementById('badgeCategoria').textContent = producto.categoria;
  
  if (producto.marca) {
    const badgeMarca = document.getElementById('badgeMarca');
    badgeMarca.textContent = producto.marca;
    badgeMarca.style.display = 'inline-block';
  }
  
  // ===== META INFO =====
  document.getElementById('productoCodigo').textContent = producto.codigo || 'N/A';
  document.getElementById('productoCantidadCaja').textContent = producto.cantidadPorCaja || 'N/A';
  
  // ===== GALERÍA DE IMÁGENES =====
  renderizarGaleria(producto.imagenes || [producto.imagen]);
  
  // ===== CARACTERÍSTICAS =====
  if (producto.caracteristicas && producto.caracteristicas.length > 0) {
    renderizarCaracteristicas(producto.caracteristicas);
  }
  
  // ===== ESPECIFICACIONES =====
  if (producto.especificaciones) {
    renderizarEspecificaciones(producto.especificaciones);
  }
  
  // ===== USOS =====
  if (producto.usos && producto.usos.length > 0) {
    renderizarUsos(producto.usos);
  }
  
  // ===== CUIDADOS =====
  if (producto.cuidados && producto.cuidados.length > 0) {
    renderizarCuidados(producto.cuidados);
  }
}

/**
 * Renderiza la galería de imágenes
 */
function renderizarGaleria(imagenes) {
  const imagenPrincipal = document.getElementById('imagenPrincipalProducto');
  const thumbnailsContainer = document.querySelector('.thumbnails-galeria');
  
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
  imagenPrincipal.src = imagenes[index];
  
  // Actualizar thumbnails activos
  document.querySelectorAll('.thumbnail-producto').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

/**
 * Renderiza las características destacadas
 */
function renderizarCaracteristicas(caracteristicas) {
  const grid = document.getElementById('caracteristicasGrid');
  grid.innerHTML = '';
  
  caracteristicas.forEach(caract => {
    const card = document.createElement('div');
    card.className = 'caracteristica-card';
    card.innerHTML = `
      <div class="caracteristica-icon">
        <i class="fas ${caract.icono}"></i>
      </div>
      <h4>${caract.titulo}</h4>
      <p>${caract.descripcion}</p>
    `;
    grid.appendChild(card);
  });
}

/**
 * Renderiza las especificaciones técnicas
 */
function renderizarEspecificaciones(especificaciones) {
  const grid = document.getElementById('especificacionesGrid');
  grid.innerHTML = '';
  
  Object.entries(especificaciones).forEach(([label, value]) => {
    const item = document.createElement('div');
    item.className = 'especificacion-item';
    item.innerHTML = `
      <span class="especificacion-label">${label}:</span>
      <span class="especificacion-value">${value}</span>
    `;
    grid.appendChild(item);
  });
}

/**
 * Renderiza los usos recomendados
 */
function renderizarUsos(usos) {
  const grid = document.getElementById('usosGrid');
  grid.innerHTML = '';
  
  usos.forEach(uso => {
    const card = document.createElement('div');
    card.className = 'uso-card';
    card.innerHTML = `
      <div class="uso-icon">
        <i class="fas ${uso.icono}"></i>
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
      // Abrir imagen en modal o ventana nueva
      window.open(img.src, '_blank');
    });
  }
}

/**
 * Inicializa el sistema de tabs
 */
function inicializarTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Remover active de todos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Activar el seleccionado
      button.classList.add('active');
      document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
  });
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
      const producto = obtenerDatosCompletos(productId);
      
      alert(`Producto añadido a la cotización:\n${producto.nombre}\n\nEsta funcionalidad se implementará en el sistema de cotización.`);
      
      // Aquí irá la lógica real de añadir a cotización
      // Por ahora solo mostramos un alert
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
      
      // Aquí irá la lógica real de favoritos
    });
  }
}

/**
 * Redirige al catálogo
 */
function redirigirACatalogo() {
  setTimeout(() => {
    window.location.href = 'catalogo.html';
  }, 2000);
}