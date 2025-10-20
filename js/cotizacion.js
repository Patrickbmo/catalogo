// ==========================================
// SISTEMA DE COTIZACIÓN WILSON
// Gestiona la cotización de productos y envío por WhatsApp
// ==========================================

class SistemaCotizacion {
  constructor() {
    this.STORAGE_KEY = 'wilson_cotizacion';
    this.WHATSAPP_NUMBER = '593996020665'; // Número de WhatsApp de Wilson
    this.cotizacion = this.cargarCotizacion();
    this.inicializar();
  }

  // ===== GESTIÓN DE DATOS =====
  
  cargarCotizacion() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al cargar cotización:', error);
      return [];
    }
  }

  guardarCotizacion() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cotizacion));
      this.actualizarUI();
    } catch (error) {
      console.error('Error al guardar cotización:', error);
    }
  }

  // ===== OPERACIONES DE COTIZACIÓN =====

  agregarProducto(productoId, cantidadCajas = 1) {
    const producto = productos.find(p => p.id === parseInt(productoId));
    
    if (!producto) {
      this.mostrarNotificacion('Producto no encontrado', 'error');
      return false;
    }

    // Verificar si ya existe en cotización
    const existente = this.cotizacion.find(item => item.id === producto.id);

    if (existente) {
      // Actualizar cantidad
      existente.cantidadCajas += cantidadCajas;
      this.mostrarNotificacion(`${producto.nombre} actualizado (${existente.cantidadCajas} cajas)`, 'success');
    } else {
      // Agregar nuevo
      this.cotizacion.push({
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        categoria: producto.categoria,
        codigo: producto.codigo || 'N/A',
        marca: producto.marca || '',
        cantidadPorCaja: producto.cantidadPorCaja || 'N/A',
        cantidadCajas: cantidadCajas
      });
      this.mostrarNotificacion(`${producto.nombre} agregado a cotización`, 'success');
    }

    this.guardarCotizacion();
    return true;
  }

  actualizarCantidad(productoId, nuevaCantidad) {
    const item = this.cotizacion.find(item => item.id === parseInt(productoId));
    
    if (item) {
      if (nuevaCantidad <= 0) {
        this.eliminarProducto(productoId);
      } else {
        item.cantidadCajas = parseInt(nuevaCantidad);
        this.guardarCotizacion();
      }
    }
  }

  eliminarProducto(productoId) {
    this.cotizacion = this.cotizacion.filter(item => item.id !== parseInt(productoId));
    this.guardarCotizacion();
    this.mostrarNotificacion('Producto eliminado de cotización', 'info');
  }

  vaciarCotizacion() {
    if (this.cotizacion.length === 0) return;
    
    if (confirm('¿Deseas vaciar toda la cotización?')) {
      this.cotizacion = [];
      this.guardarCotizacion();
      this.mostrarNotificacion('Cotización vaciada', 'info');
    }
  }

  obtenerTotal() {
    return {
      productos: this.cotizacion.length,
      cajas: this.cotizacion.reduce((sum, item) => sum + item.cantidadCajas, 0),
      unidades: this.cotizacion.reduce((sum, item) => {
        const unidadesPorCaja = typeof item.cantidadPorCaja === 'number' 
          ? item.cantidadPorCaja 
          : 0;
        return sum + (unidadesPorCaja * item.cantidadCajas);
      }, 0)
    };
  }

  // ===== WHATSAPP =====

  generarMensajeWhatsApp() {
    if (this.cotizacion.length === 0) {
      return '¡Hola! Me gustaría recibir información sobre sus productos Wilson.';
    }

    let mensaje = '¡Hola! Deseo cotizar los siguientes productos Wilson:\n\n';

    this.cotizacion.forEach((item, index) => {
      mensaje += `${index + 1}. ${item.nombre}\n`;
      mensaje += `   📦 Código: ${item.codigo}\n`;
      mensaje += `   📊 Cantidad: ${item.cantidadCajas} ${item.cantidadCajas === 1 ? 'caja' : 'cajas'}`;
      
      // Agregar unidades totales si hay información
      if (typeof item.cantidadPorCaja === 'number') {
        const unidadesTotales = item.cantidadPorCaja * item.cantidadCajas;
        mensaje += ` (${unidadesTotales} unidades)`;
      }
      
      mensaje += '\n\n';
    });

    const totales = this.obtenerTotal();
    mensaje += '━━━━━━━━━━━━━━━━━━━━\n';
    mensaje += `📦 Total de productos: ${totales.productos}\n`;
    mensaje += `📦 Total de cajas: ${totales.cajas}\n`;
    
    if (totales.unidades > 0) {
      mensaje += `📦 Total de unidades: ${totales.unidades}\n`;
    }
    
    mensaje += '\n¡Gracias!';

    return mensaje;
  }

  enviarPorWhatsApp() {
    if (this.cotizacion.length === 0) {
      this.mostrarNotificacion('Agrega productos a tu cotización primero', 'warning');
      return;
    }

    const mensaje = this.generarMensajeWhatsApp();
    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    window.open(url, '_blank');
    
    // Tracking opcional
    this.registrarEvento('cotizacion_enviada', {
      productos: this.cotizacion.length,
      cajas: this.obtenerTotal().cajas
    });
  }

  // ===== UI Y NOTIFICACIONES =====

  inicializar() {
    this.crearBotonFlotante();
    this.crearModal();
    this.actualizarUI();
  }

  crearBotonFlotante() {
    // Verificar si ya existe
    if (document.getElementById('cotizacion-flotante')) return;

    const boton = document.createElement('div');
    boton.id = 'cotizacion-flotante';
    boton.className = 'cotizacion-flotante';
    boton.innerHTML = `
      <button class="btn-cotizacion-flotante" title="Ver cotización">
        <i class="fas fa-clipboard-list"></i>
        <span class="badge-contador">0</span>
      </button>
    `;

    boton.addEventListener('click', () => this.abrirModal());
    document.body.appendChild(boton);
  }

  crearModal() {
    // Verificar si ya existe
    if (document.getElementById('modalCotizacion')) return;

    const modal = document.createElement('div');
    modal.id = 'modalCotizacion';
    modal.className = 'modal-cotizacion';
    modal.innerHTML = `
      <div class="modal-cotizacion-content">
        <div class="modal-cotizacion-header">
          <h2>
            <i class="fas fa-clipboard-list"></i>
            Mi Cotización
          </h2>
          <button class="btn-cerrar-modal" aria-label="Cerrar">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-cotizacion-body">
          <div id="listaCotizacion" class="lista-cotizacion">
            <!-- Los productos se cargarán aquí -->
          </div>

          <div class="cotizacion-vacia" style="display: none;">
            <i class="fas fa-clipboard"></i>
            <p>No hay productos en tu cotización</p>
            <a href="catalogo.html" class="btn-ir-catalogo">Ver Catálogo</a>
          </div>
        </div>

        <div class="modal-cotizacion-footer">
          <div class="cotizacion-totales">
            <div class="total-item">
              <span>Productos:</span>
              <strong id="totalProductos">0</strong>
            </div>
            <div class="total-item">
              <span>Cajas:</span>
              <strong id="totalCajas">0</strong>
            </div>
          </div>

          <div class="cotizacion-acciones">
            <button class="btn-vaciar" onclick="sistemaCotizacion.vaciarCotizacion()">
              <i class="fas fa-trash"></i>
              Vaciar
            </button>
            <button class="btn-enviar-whatsapp" onclick="sistemaCotizacion.enviarPorWhatsApp()">
              <i class="fab fa-whatsapp"></i>
              Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    modal.querySelector('.btn-cerrar-modal').addEventListener('click', () => this.cerrarModal());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.cerrarModal();
    });
  }

  abrirModal() {
    const modal = document.getElementById('modalCotizacion');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.renderizarCotizacion();
    }
  }

  cerrarModal() {
    const modal = document.getElementById('modalCotizacion');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  renderizarCotizacion() {
    const lista = document.getElementById('listaCotizacion');
    const vacia = document.querySelector('.cotizacion-vacia');

    if (!lista) return;

    if (this.cotizacion.length === 0) {
      lista.style.display = 'none';
      if (vacia) vacia.style.display = 'flex';
      return;
    }

    lista.style.display = 'block';
    if (vacia) vacia.style.display = 'none';

    lista.innerHTML = this.cotizacion.map(item => `
      <div class="cotizacion-item" data-id="${item.id}">
        <div class="item-imagen">
          <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='https://via.placeholder.com/80?text=Sin+Imagen'">
        </div>
        
        <div class="item-info">
          <h4>${item.nombre}</h4>
          <p class="item-codigo">Código: ${item.codigo}</p>
          ${item.marca ? `<span class="item-marca">${item.marca}</span>` : ''}
        </div>

        <div class="item-cantidad">
          <label>Cajas:</label>
          <div class="cantidad-control">
            <button onclick="sistemaCotizacion.actualizarCantidad(${item.id}, ${item.cantidadCajas - 1})">
              <i class="fas fa-minus"></i>
            </button>
            <input 
              type="number" 
              value="${item.cantidadCajas}" 
              min="1" 
              onchange="sistemaCotizacion.actualizarCantidad(${item.id}, this.value)"
            >
            <button onclick="sistemaCotizacion.actualizarCantidad(${item.id}, ${item.cantidadCajas + 1})">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          ${typeof item.cantidadPorCaja === 'number' ? 
            `<small>${item.cantidadPorCaja * item.cantidadCajas} unidades</small>` : 
            ''}
        </div>

        <button class="btn-eliminar" onclick="sistemaCotizacion.eliminarProducto(${item.id})" title="Eliminar">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `).join('');
  }

  actualizarUI() {
    // Actualizar badge del botón flotante
    const badge = document.querySelector('.badge-contador');
    if (badge) {
      const total = this.cotizacion.length;
      badge.textContent = total;
      badge.style.display = total > 0 ? 'flex' : 'none';
    }

    // Actualizar totales en modal
    const totales = this.obtenerTotal();
    
    const totalProductos = document.getElementById('totalProductos');
    if (totalProductos) totalProductos.textContent = totales.productos;

    const totalCajas = document.getElementById('totalCajas');
    if (totalCajas) totalCajas.textContent = totales.cajas;

    // Si el modal está abierto, re-renderizar
    const modal = document.getElementById('modalCotizacion');
    if (modal && modal.classList.contains('active')) {
      this.renderizarCotizacion();
    }
  }

  mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear contenedor si no existe
    let container = document.getElementById('notificaciones-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'notificaciones-container';
      container.className = 'notificaciones-container';
      document.body.appendChild(container);
    }

    // Crear notificación
    const notif = document.createElement('div');
    notif.className = `notificacion notificacion-${tipo}`;
    
    const iconos = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      warning: 'fa-exclamation-triangle',
      info: 'fa-info-circle'
    };

    notif.innerHTML = `
      <i class="fas ${iconos[tipo] || iconos.info}"></i>
      <span>${mensaje}</span>
    `;

    container.appendChild(notif);

    // Animar entrada
    setTimeout(() => notif.classList.add('show'), 10);

    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }

  // ===== TRACKING (OPCIONAL) =====

  registrarEvento(evento, datos = {}) {
    // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
    console.log('Evento:', evento, datos);
    
    // Ejemplo con Google Analytics (si está instalado)
    if (typeof gtag !== 'undefined') {
      gtag('event', evento, datos);
    }
  }
}

// ===== INICIALIZACIÓN GLOBAL =====

let sistemaCotizacion;

document.addEventListener('DOMContentLoaded', () => {
  sistemaCotizacion = new SistemaCotizacion();
  
  // Hacer disponible globalmente
  window.sistemaCotizacion = sistemaCotizacion;
});

// ===== FUNCIONES DE ATAJO GLOBALES =====

function agregarACotizacion(productoId, cantidad = 1) {
  if (window.sistemaCotizacion) {
    return window.sistemaCotizacion.agregarProducto(productoId, cantidad);
  }
  return false;
}

function abrirCotizacion() {
  if (window.sistemaCotizacion) {
    window.sistemaCotizacion.abrirModal();
  }
}