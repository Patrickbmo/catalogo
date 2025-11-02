// ==========================================
// PLANTILLAS DE BROCHAS POR MARCA
// Estas plantillas contienen la información común
// que comparten todas las brochas de cada línea
// ==========================================

const plantillasBrochas = {
  Premier: {
    subtitulo: "",
    descripcionCompleta: "La brocha Wilson Premier es una opción de alto desempeño para quienes quieren un acabado parejo, sin rayas y con menos pasadas, incluso sobre paredes con textura donde otras suelen dejar marcas. Sus filamentos sintéticos cónicos cargan la pintura justa y la distribuyen de forma controlada para un acabado uniforme y sin marcas en interiores y exteriores, ya sea en muros lisos o con textura, así como en madera y metal. El mango ergonómico proporciona un agarre cómodo y un control firme durante jornadas extensas, mientras su estructura resistente conserva la forma y ayuda a disminuir goteos y salpicaduras, perfecta para obra, mantenimiento o proyectos en el hogar.",
    
    caracteristicas: [
      {
        icono: "img/icons/CERDAS.svg",
        titulo: "Cerdas Premium",
        descripcion: "La mezcla y largo de los filamentos elevan la carga de pintura y mejoran el nivelado del trazo, logrando aplicación pareja, bordes definidos y menos retoques."
      },
      {
        icono: "img/icons/MANGO.svg",
        titulo: "Mango Ergonómico",
        descripcion: "Su diseño se adapta a la mano, reduce la fatiga y brinda precisión en cortes, bordes y superficies amplias. Así mantienes un pulso estable y un acabado consistente durante toda la jornada."
      },
      {
        icono: "img/icons/todot.svg",
        titulo: "Todo Terreno",
        descripcion: "Rinde excelente con pintura de agua (látex/acrílica) y esmalte en muros lisos o con textura, madera y metal, tanto en interior como en exterior. Una sola brocha para múltiples trabajos sin perder calidad."
      },
      {
        icono: "img/icons/goteo.svg",
        titulo: "Menos goteo, más rendimineto",
        descripcion: "Los filamentos cónicos entregan la pintura de manera controlada, evitando chorreos y salpicaduras. Aprovechas mejor cada carga y avanzas con menos pasadas."
      }
    ],
    
    
    
    usos: [
      {
        icono: "fa-home",
        titulo: "Pintura de Interiores",
        descripcion: "Ideal para paredes, techos y superficies interiores con acabados profesionales."
      },
      {
        icono: "fa-bullseye",
        titulo: "Trabajos de Precisión",
        descripcion: "Perfecta para detalles, bordes y áreas que requieren control preciso."
      },
      {
        icono: "fa-star",
        titulo: "Acabados Profesionales",
        descripcion: "Excelente para proyectos que demandan resultados de alta calidad."
      }
    ],
    
    cuidados: [
      {
        titulo: "Limpieza Después del Uso",
        descripcion: "Limpie inmediatamente después de usar con agua tibia y jabón suave. Para pinturas al óleo, use solvente apropiado."
      },
      {
        titulo: "Secado Adecuado",
        descripcion: "Después de limpiar, cuelgue la brocha o colóquela horizontalmente para que se seque completamente con las cerdas hacia abajo."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarde en posición horizontal o colgada para mantener la forma de las cerdas. Evite almacenar con las cerdas hacia arriba."
      }
    ]
  },

  Futura: {
    subtitulo: "Tecnología y Rendimiento Profesional",
    descripcionCompleta: "La Brocha Futura es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso y nivelado. Recoge y mantiene muy bien la pintura, ofreciendo un rendimiento excepcional en cada aplicación. Su diseño ergonómico reduce la fatiga durante largas jornadas de trabajo.",
    
    caracteristicas: [
      {
        icono: "fa-brush",
        titulo: "Cerdas Premium",
        descripcion: "Cerdas de alta calidad que retienen más pintura y permiten una aplicación uniforme sin dejar marcas."
      },
      {
        icono: "fa-hand",
        titulo: "Mango Ergonómico",
        descripcion: "Diseño ergonómico que se adapta perfectamente a la mano, reduciendo la fatiga durante el uso prolongado."
      },
      {
        icono: "fa-layer-group",
        titulo: "Distribución Uniforme",
        descripcion: "Sistema de distribución que permite una cobertura perfecta sin marcas ni imperfecciones."
      },
      {
        icono: "fa-star",
        titulo: "Acabado Superior",
        descripcion: "Resultados profesionales con acabados lisos y duraderos en todo tipo de superficies."
      }
    ],
    
    especificaciones: {
      "Material de Cerdas": "Poliéster de fibras largas",
      "Material de Mango": "Polipropileno de primera calidad",
      "Tipo de Cerda": "Sintética con puntas horquilladas",
      "Forma": "Plana rectangular",
      "Tipo de Acabado": "Liso y nivelado",
      "Vida Útil Estimada": "Hasta 300,000 pinceladas",
      "Compatible con": "Metales, maderas, paredes, superficies rugosas"
    },
    
    usos: [
      {
        icono: "fa-home",
        titulo: "Pintura de Interiores",
        descripcion: "Ideal para paredes, techos y superficies interiores con acabados profesionales."
      },
      {
        icono: "fa-bullseye",
        titulo: "Trabajos de Precisión",
        descripcion: "Perfecta para detalles, bordes y áreas que requieren control preciso."
      },
      {
        icono: "fa-star",
        titulo: "Acabados Profesionales",
        descripcion: "Excelente para proyectos que demandan resultados de alta calidad."
      }
    ],
    
    cuidados: [
      {
        titulo: "Limpieza Después del Uso",
        descripcion: "Limpie inmediatamente después de usar con agua tibia y jabón suave. Para pinturas al óleo, use solvente apropiado."
      },
      {
        titulo: "Secado Adecuado",
        descripcion: "Después de limpiar, cuelgue la brocha o colóquela horizontalmente para que se seque completamente con las cerdas hacia abajo."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarde en posición horizontal o colgada para mantener la forma de las cerdas. Evite almacenar con las cerdas hacia arriba."
      }
    ]
  },

  Prima: {
    subtitulo: "",
    descripcionCompleta: "La Brocha Wilson Angular está pensada para recortar con precisión donde una brocha recta no llega: bordes, esquinas, marcos de puertas y ventanas, rodapiés/guardapolvos y contornos de interruptores. Su cabeza en ángulo y las cerdas sintéticas con punta cónica cargan bien la pintura y la distribuyen parejo, logrando líneas limpias con menos pasadas. El mango plástico ergonómico da control cómodo en trabajos largos, y su desempeño es confiable tanto en interiores como en exteriores con látex/acrílico, esmalte o barniz.",
    
    caracteristicas: [
      {
        icono: "img/icons/cerdas.svg",
        titulo: "Cerdas Premium",
        descripcion: "Cerdas de alta calidad que retienen más pintura y permiten una aplicación uniforme sin dejar marcas."
      },
      {
        icono: "fa-hand",
        titulo: "Mango Ergonómico",
        descripcion: "Diseño ergonómico que se adapta perfectamente a la mano, reduciendo la fatiga durante el uso prolongado."
      },
      {
        icono: "fa-layer-group",
        titulo: "Distribución Uniforme",
        descripcion: "Sistema de distribución que permite una cobertura perfecta sin marcas ni imperfecciones."
      },
      {
        icono: "fa-star",
        titulo: "Acabado Superior",
        descripcion: "Resultados profesionales con acabados lisos y duraderos en todo tipo de superficies."
      }
    ],
    
    especificaciones: {
      "Material de Cerdas": "Sintéticas finas de alta calidad",
      "Material de Mango": "Polipropileno ergonómico",
      "Tipo de Cerda": "Fina y suave para acabados delicados",
      "Forma": "Plana rectangular",
      "Tipo de Acabado": "Delicado y uniforme",
      "Vida Útil Estimada": "Hasta 300,000 pinceladas",
      "Compatible con": "Lacas, tintes, pinturas ligeras, acabados finos"
    },
    
    usos: [
      {
        icono: "fa-home",
        titulo: "Pintura de Interiores",
        descripcion: "Ideal para paredes, techos y superficies interiores con acabados profesionales."
      },
      {
        icono: "fa-bullseye",
        titulo: "Trabajos de Precisión",
        descripcion: "Perfecta para detalles, bordes y áreas que requieren control preciso."
      },
      {
        icono: "fa-star",
        titulo: "Acabados Profesionales",
        descripcion: "Excelente para proyectos que demandan resultados de alta calidad."
      }
    ],
    
    cuidados: [
      {
        titulo: "Limpieza Después del Uso",
        descripcion: "Limpie inmediatamente después de usar con agua tibia y jabón suave. Para pinturas al óleo, use solvente apropiado."
      },
      {
        titulo: "Secado Adecuado",
        descripcion: "Después de limpiar, cuelgue la brocha o colóquela horizontalmente para que se seque completamente con las cerdas hacia abajo."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarde en posición horizontal o colgada para mantener la forma de las cerdas. Evite almacenar con las cerdas hacia arriba."
      }
    ]
  }
};

const informacionProductos = {
  // ===== BALDES =====
  76: { // BALDE 16 LITROS
    descripcionCompleta: "El Balde Wilson de 16 litros está hecho para tareas intensivas de limpieza y traslado de líquidos en casa, negocio u obra ligera. Incorpora pico vertedor para vaciar o regar sin derrames y agarradera metálica que se siente firme incluso lleno. Su cuerpo de plástico (polietileno, PE) 100% virgen, grado alimenticio y compatible con norma FDA, es higiénico, no transfiere olor ni sabor y resiste golpes y uso diario. El borde reforzado ayuda al vaciado, la base amplia mejora la estabilidad y el interior liso se lava rapidito. Ideal para preparar soluciones, acarrear agua, regar o contener derrames con menos viajes y más control.",
    caracteristicas: [
      {
        icono: "img/icons/shield.svg",
        titulo: "Plástico Resistente",
        descripcion: "Fabricado en plástico 100% virgen que soporta golpes, caídas y el uso diario sin deformarse ni perder color. Conserva el brillo por más tiempo y resiste detergentes comunes sin agrietarse."
      },
      {
        icono: "img/icons/resistente.svg",
        titulo: "Asa ergonómica",
        descripcion: "Agarradera sólida y cómoda que distribuye mejor el peso para mover el balde con estabilidad, incluso cuando está lleno. Facilita el traslado y el vaciado con más control y menos tensión en la mano."
      },
      {
        icono: "img/icons/baldes.svg",
        titulo: "Gran capacidad",
        descripcion: "Espacio amplio y boca ancha para preparar mezclas de limpieza y enjuagar la mopa con comodidad. La apertura facilita el llenado sin derrames y acelera la rutina de aseo en casa o negocio."
      }
      
    ],
    especificaciones: {
      
      "Capacidad": "16 litros",
      "Material del cuerpo y escurridor":  "Polietileno (PE) 100% virgen",
      "Peso ": "535 gramos",
      "Altura": "34.2 cm",
      "Ancho": "29.5 cm",
      "Asa": "Metálica de alta resistencia",
      "color": "azul",
      "Unidades por caja ": "12 unidades",
      "Código": "13355"
    
    },
    usos: [
      {
        icono: "img/icons/baldelim.svg",
        titulo: "Limpieza del hogar",
        descripcion: "Su gran capacidad permite trabajar por más tiempo sin recargar, y el pico vertedor facilita vaciar baldes o mopas con precisión, evitando salpicaduras y derrames."
      },
      {
        icono: "img/icons/riego.svg",
        titulo: "Jardinería y riego",
        descripcion: "Ideal para regar macetas y plantas en balcones, patios o jardines. Permite trasladar agua fácilmente a zonas de difícil acceso y mantener tus espacios verdes bien cuidados"
      },
      {
        icono: "fa-star",
        titulo: "Manipulación de agua y alimentos",
        descripcion: "Gracias a su material grado alimenticio, sirve para lavar frutas/verduras o transportar hielo y agua en tareas domésticas."
      }
    ],
    cuidados: [
      {
        titulo: "Limpia y seca después de usar",
        descripcion: "Enjuaga el balde y el pico vertedor con agua tibia y un detergente suave para retirar restos de suciedad y jabón. Frota con una esponja no abrasiva, aclara bien y deja escurrir. Sécalo por fuera y por dentro para evitar acumulación de residuos, malos olores y manchas de humedad"
      },
      {
        titulo: "Evita químicos agresivos y los golpes",
        descripcion: "No utilices solventes fuertes, clorados concentrados, thinner ni abrasivos que puedan opacar o cuartear el plástico. Procura no dejar caer el balde ni usarlo como asiento o banquito. Cárgalo siempre por el asa y apóyalo sobre superficies planas para prolongar su vida útil."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarda a la sombra, en un lugar seco y sin peso encima para prevenir deformaciones y preservar el color."
      }
    ]
  },
  
  77: { // BALDE 6 LITROS
    descripcionCompleta: "El Balde Flor de Liz de 6 litros es tu aliado compacto para las tareas diarias del hogar. Su tamaño mediano lo hace fácil de manipular, almacenar y llenar en lavabos o fregaderos. El acabado exterior incorpora un diseño decorativo que mejora el agarre. Está fabricado en polipropileno (PP) 100% virgen, grado alimenticio, por lo que es higiénico, más resistente a golpes y no absorbe olores. Ligero, estable y duradero: perfecto para limpiar, ordenar y llevar líquidos con comodidad.",
    caracteristicas: [
      {
        icono: "img/icons/shield.svg",
        titulo: "Plástico Resistente",
        descripcion: "Fabricado en plástico 100% virgen que soporta golpes, caídas y el uso diario sin deformarse ni perder color. Conserva el brillo por más tiempo y resiste detergentes comunes sin agrietarse."
      },
      {
        icono: "img/icons/resistente.svg",
        titulo: "Asa ergonómica",
        descripcion: "Agarradera sólida y cómoda que distribuye mejor el peso para mover el balde con estabilidad, incluso cuando está lleno. Facilita el traslado y el vaciado con más control y menos tensión en la mano."
      },
      {
        icono: "img/icons/baldes.svg",
        titulo: "Tamaño Compacto",
        descripcion: "Cabe sin problema en lavabos y fregaderos, se guarda fácil bajo el mesón y es cómodo de manipular. La capacidad justa para las tareas diarias sin cargar de más."
      }
      
    ],
    especificaciones: {
      
      "Capacidad": "6 litros",
      "Material del cuerpo y escurridor":  "Polietileno (PE) 100% virgen",
      "Peso ": "317 gramos",
      "Altura": "22 cm",
      "Ancho": "26.5 cm",
      "Asa": "Metálica de alta resistencia",
      colores: [
      { nombre: "Azul", hex: "#0066cc", codigo: "13361" },
      { nombre: "Rojo", hex: "#dc3545", codigo: "13362" }
    ],
      "Unidades por caja": "12 unidades",
      "Código": "13361-13362"
    
    },
    usos: [
      {
        icono: "img/icons/baldelim.svg",
        titulo: "Limpieza del hogar",
        descripcion: "Su gran capacidad permite trabajar por más tiempo sin recargar, y el pico vertedor facilita vaciar baldes o mopas con precisión, evitando salpicaduras y derrames."
      },
      {
        icono: "img/icons/riego.svg",
        titulo: "Jardinería y riego",
        descripcion: "Ideal para regar macetas y plantas en balcones, patios o jardines. Permite trasladar agua fácilmente a zonas de difícil acceso y mantener tus espacios verdes bien cuidados"
      },
      {
        icono: "fa-star",
        titulo: "Manipulación de agua y alimentos",
        descripcion: "Gracias a su material grado alimenticio, sirve para lavar frutas/verduras o transportar hielo y agua en tareas domésticas."
      }
    ],
    cuidados: [
      {
        titulo: "Limpia y seca después de usar",
        descripcion: "Enjuaga el balde y el pico vertedor con agua tibia y un detergente suave para retirar restos de suciedad y jabón. Frota con una esponja no abrasiva, aclara bien y deja escurrir. Sécalo por fuera y por dentro para evitar acumulación de residuos, malos olores y manchas de humedad"
      },
      {
        titulo: "Evita químicos agresivos y los golpes",
        descripcion: "No utilices solventes fuertes, clorados concentrados, thinner ni abrasivos que puedan opacar o cuartear el plástico. Procura no dejar caer el balde ni usarlo como asiento o banquito. Cárgalo siempre por el asa y apóyalo sobre superficies planas para prolongar su vida útil."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarda a la sombra, en un lugar seco y sin peso encima para prevenir deformaciones y preservar el color."
      }
    ]
  },
  
  698: { // BALDE ESCURRIDOR
     descripcionCompleta: "El balde escurridor Wilson es la solución práctica y resistente para tu rutina de limpieza diaria. Su diseño integra un escurridor superior que facilita retirar el exceso de agua de las mopas/trapeadores Wilson sin mojarte las manos, mientras que su agarradera plástica reforzada permite transportarlo con seguridad y comodidad. Fabricado en plástico 100% virgen, ofrece alta durabilidad, buena rigidez y un acabado higiénico que no absorbe olores. Su interior amplio admite suficiente agua para limpiar superficies extensas sin necesidad de recargas constantes, y la base estable ayuda a prevenir vuelcos durante el uso.",
    caracteristicas: [
      {
        icono: "img/icons/gotas.svg",
        titulo: "Escurrido rápido",
        descripcion: "Escurridor integrado que extrae el exceso de agua de la mopa de forma pareja, con menos esfuerzo y sin salpicaduras. Te permite seguir fregando con la humedad justa para un secado más rápido."
      },
      
      {
        icono: "img/icons/shield.svg",
        titulo: "Plástico Resistente",
        descripcion: "Fabricado en plástico 100% virgen que soporta golpes, caídas y el uso diario sin deformarse ni perder color. Conserva el brillo por más tiempo y resiste detergentes comunes sin agrietarse."
      },
      {
        icono: "img/icons/resistente.svg",
        titulo: "Asa ergonómica",
        descripcion: "Agarradera sólida y cómoda que distribuye mejor el peso para mover el balde con estabilidad, incluso cuando está lleno. Facilita el traslado y el vaciado con más control y menos tensión en la mano."
      },
      {
        icono: "img/icons/baldes.svg",
        titulo: "Tamaño Compacto",
        descripcion: "Cabe sin problema en lavabos y fregaderos, se guarda fácil bajo el mesón y es cómodo de manipular. La capacidad justa para las tareas diarias sin cargar de más."
      }
      
    ],
    especificaciones: {
      
      "Capacidad": "16 litros",
      "Material del cuerpo y escurridor":  "Polietileno (PE) 100% virgen",
      "Peso ": "750 gramos",
      "Altura": "29 cm",
      "Ancho": "40 cm",
      "Typo de escurridor": "integrado de presión manual",
      colores: [
      { nombre: "Azul", hex: "#0066cc", codigo: "13320" },
      { nombre: "Rojo", hex: "#dc3545", codigo: "13321" }
    ],
      "Unidades por caja": "12 unidades",
      "Código": "13320"
    
    },
    usos: [
      {
        icono: "img/icons/baldelim.svg",
        titulo: "Limpieza del hogar",
        descripcion: "Su gran capacidad permite trabajar por más tiempo sin recargar, y el pico vertedor facilita vaciar baldes o mopas con precisión, evitando salpicaduras y derrames."
      },
      {
        icono: "img/icons/casa.svg",
        titulo: "Rutinas de aseo en el hogar",
        descripcion: "Perfecto para cocina, dormitorios y baños: prepara tu solución de limpieza, enjuaga y escurre sin mojarte."
      },
      {
        icono: "img/icons/negocio.svg",
        titulo: "ManipulacMantenimiento en comercios y talleres",
        descripcion: "Su material resistente tolera jornadas intensivas de limpieza y movimientos constantes entre áreas."
      }
    ],
    cuidados: [
      {
        titulo: "Limpia y seca después de usar",
        descripcion: "Enjuaga el balde y el pico vertedor con agua tibia y un detergente suave para retirar restos de suciedad y jabón. Frota con una esponja no abrasiva, aclara bien y deja escurrir. Sécalo por fuera y por dentro para evitar acumulación de residuos, malos olores y manchas de humedad"
      },
      {
        titulo: "Evita químicos agresivos y los golpes",
        descripcion: "No utilices solventes fuertes, clorados concentrados, thinner ni abrasivos que puedan opacar o cuartear el plástico. Procura no dejar caer el balde ni usarlo como asiento o banquito. Cárgalo siempre por el asa y apóyalo sobre superficies planas para prolongar su vida útil."
      },
      {
        titulo: "Almacenamiento Correcto",
        descripcion: "Guarda a la sombra, en un lugar seco y sin peso encima para prevenir deformaciones y preservar el color."
      }
    ]
  },
  
  149: { // CANECA 5 GALONES
  descripcionCompleta: "La caneca de 5 galones (≈18,9 L) está hecha para trabajo pesado: apta para alimentos y bebidas, y también para insumos de limpieza, agrícolas e industriales gracias a sus paredes gruesas y resistencia a golpes. Fabricada en polietileno (PE) 100% virgen, grado alimenticio y compatible con FDA, es higiénica, no transfiere olor ni sabor y soporta uso diario. La tapa a presión sella parejo para mantener el contenido protegido sin derrames, el mango rígido facilita moverla llena con control y su geometría estable permite apilar en bodega o camión. Funciona igual de bien en planta, tienda, campo o frente de obra: desde agua para concreto y aditivos no corrosivos hasta granos, harinas o detergentes diluidos. Se limpia rápido y queda lista para el siguiente turno.",
  
  caracteristicas: [
    {
      icono: "img/icons/candado.svg",
      titulo: "Tapa a presión segura",
      descripcion: "Tapa a presión con sellado que evita derrames en traslados, entregas y apilado en bodega. Facilita la preparación de pedidos y conserva el contenido intacto y sin contaminación."
    },
    {
      icono: "img/icons/shield.svg",
      titulo: "Plástico resistente",
      descripcion: "Fabricada en plástico PE 100% virgen, apto para contacto con alimentos según estándares FDA. No transfiere olor ni sabor; las paredes gruesas resisten golpes y el interior liso se limpia rápido entre usos."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Manejo y apilado fácil",
      descripcion: "Mango rígido para moverla llena con control y menor esfuerzo. Aro y base estables que permiten apilar de forma segura y optimizar espacio en bodega o camión."
    }
  ],
  
  especificaciones: {
    "Capacidad": "5 galones (≈ 18,9 litros)",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "1 kg",
    "Altura": "33 cm",
    "Ancho": "32 cm",
    "Capacidad total": "18925 cc",
    "Sistema de cierre": "Tapa a presión con sello perimetral anti fugas",
    "Color" : "Blanco",
    "Unidades por caja": "20 unidades",
    "Código": "3372"
  },
  
  usos: [
    {
      icono: "img/icons/alimentos.svg",
      titulo: "Alimentos y bebidas",
      descripcion: "Agua, hielo, jugos en proceso, granos, azúcar o harinas: el material de grado alimenticio cuida la seguridad alimentaria."
    },
    {
      icono: "img/icons/construccion.svg",
      titulo: "Obra y construcción",
      descripcion: "Apto para llevar agua de mezcla, dosificar aditivos no corrosivos, mover arena fina y organizar herramientas o residuos livianos. Resistente a impactos y de fácil lavado."
    },
    {
      icono: "img/icons/limpieza.svg",
      titulo: "Limpieza profesional",
      descripcion: "Detergentes, jabones líquidos, desengrasantes y materias primas no corrosivas."
    },
    {
      icono: "img/icons/planta.svg",
      titulo: "Jardinería y plantas",
      descripcion: "Ideal para regar, trasladar agua o tierra, plantar y transportar flores frescas o recortes. La tapa a presión mantiene el contenido protegido."
    }
  ],
  
  cuidados: [
    {
      titulo: "Limpieza después de usar",
      descripcion: "Lava con detergente neutro y esponja suave, enjuaga bien y deja secar boca abajo. Para olores, usa agua tibia con un poco de bicarbonato o cloro diluido."
    },
    {
      titulo: "Químicos agresivos y altas temperaturas",
      descripcion: "Evita solventes, hidrocarburos y ácidos/bases concentrados; pueden dañar el plástico. No superes 60 °C ni viertas líquidos hirviendo."
    },
    {
      titulo: "Almacenamiento y manejo",
      descripcion: "Guarda a la sombra, en lugar seco y nivelado. Transporta en posición vertical con la tapa bien presionada; no te sientes ni te pares sobre la caneca ni la golpees."
    }
  ]
},

727: { // CANECA 1 GALÓN
  descripcionCompleta: "La caneca de 1 galón (≈3,78 L) está hecha para trabajo intenso: apta para alimentos y bebidas y también para insumos de limpieza, agrícolas e industriales, y también es útil en obra liviana para muestras, aditivos no corrosivos o agua. Fabricada en plástico de polietileno 100% virgen y grado alimenticio, es higiénica, no transfiere olor ni sabor y soporta el uso diario. La tapa roscada con sello de seguridad muestra si fue abierta por primera vez y evita derrames; el asa flexible permite llevarla llena con facilidad y verter sin perder el control. Su diseño bajo y estable permite apilar y exhibir de forma ordenada en estantes o perchas bajas. Versátil para aceites, jarabes, granos y harinas, así como detergentes diluidos o soluciones de proceso. Se limpia rápido y queda lista para el siguiente turno.",
  
  caracteristicas: [
    {
      icono: "img/icons/candado.svg",
      titulo: "Tapa sellada",
      descripcion: "Cierre a prueba de fugas con sello de seguridad que deja evidencia de apertura. Mantiene el contenido protegido en traslado y almacenamiento y se abre/cierra con rapidez para dosificar o rellenar."
    },
    {
      icono: "img/icons/shield.svg",
      titulo: "Plástico resistente",
      descripcion: "Fabricada en plástico PE 100% virgen, apto para contacto con alimentos según estándares FDA. No transfiere olor ni sabor; las paredes gruesas resisten golpes y el interior liso se limpia rápido entre usos."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Asa ergonómica",
      descripcion: "Asa cómoda que da buen agarre incluso llena. Permite cargar con menos esfuerzo y verter con control, ideal para servir porciones precisas sin desperdiciar ni salpicar."
    }
  ],
  
  especificaciones: {
    "Capacidad": "1 galón (≈ 3,78 L)",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "1 kg",
    "Altura": "33 cm",
    "Ancho": "32 cm",
    "Capacidad total": "3780 cc",
    "Sistema de cierre": "Tapa roscada con sello de seguridad",
    "Colores": "Blanco",
    "Unidades por caja": "20 unidades",
    "Código": "3372"
  },
  
  usos: [
    {
      icono: "img/icons/alimentos.svg",
      titulo: "Alimentos y bebidas",
      descripcion: "Agua, hielo, jugos en proceso, granos, azúcar o harinas: el material de grado alimenticio cuida la seguridad alimentaria."
    },
    {
      icono: "img/icons/construccion.svg",
      titulo: "Obra y construcción",
      descripcion: "Apto para llevar agua de mezcla, dosificar aditivos no corrosivos, mover arena fina y organizar herramientas o residuos livianos. Resistente a impactos y de fácil lavado."
    },
    {
      icono: "img/icons/limpieza.svg",
      titulo: "Limpieza profesional",
      descripcion: "Detergentes, jabones líquidos, desengrasantes y materias primas no corrosivas."
    },
    {
      icono: "img/icons/planta.svg",
      titulo: "Jardinería y plantas",
      descripcion: "Ideal para regar, trasladar agua o tierra, plantar y transportar flores frescas o recortes. La tapa a presión mantiene el contenido protegido."
    }
  ],
  
  cuidados: [
    {
      titulo: "Limpieza después de usar",
      descripcion: "Lava con detergente neutro y esponja suave, enjuaga bien y deja secar boca abajo. Para olores, usa agua tibia con un poco de bicarbonato o cloro diluido."
    },
    {
      titulo: "Químicos agresivos y altas temperaturas",
      descripcion: "Evita solventes, hidrocarburos y ácidos/bases concentrados; pueden dañar el plástico. No superes 60 °C ni viertas líquidos hirviendo."
    },
    {
      titulo: "Almacenamiento y manejo",
      descripcion: "Guarda a la sombra, en lugar seco y nivelado. Transporta en posición vertical con la tapa bien presionada; no te sientes ni te pares sobre la caneca ni la golpees."
    }
  ]
},

733: { // ENVASE AMERICANO 1 LITRO
  descripcionCompleta: "El Envase Americano de 1 litro es la opción bajita y rendidora para exhibir en perchas bajas y organizar producto en estantes comerciales sin perder visibilidad. Trae tapa roscada con precinto de seguridad (evidencia de apertura) y asa flexible para moverlo y dosificar sin reguero. Está fabricado en polietileno (PE) 100% virgen, grado alimenticio y compatible con norma FDA, así que es higiénico, no transfiere olor ni sabor y aguanta el trote diario en planta, bodega o punto de venta. Compacto, estable y fácil de lavar: funciona de una para alimentos, bebidas e insumos no corrosivos.",
  
  caracteristicas: [
    {
      icono: "img/icons/candado.svg",
      titulo: "Tapa a presión segura",
      descripcion: "Cierre snap-on con sello periférico que evita fugas en traslado y estiba. Se abre y cierra rápido para agilizar despacho y mantener el contenido protegido."
    },
    {
      icono: "img/icons/shield.svg",
      titulo: "Plástico resistente",
      descripcion: "Fabricada en plástico PE 100% virgen, apto para contacto con alimentos según estándares FDA. No transfiere olor ni sabor; las paredes gruesas resisten golpes y el interior liso se limpia rápido entre usos."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Manejo y apilado fácil",
      descripcion: "Mango rígido para moverla llena con control y menor esfuerzo. Aro y base estables que permiten apilar de forma segura y optimizar espacio en bodega o camión."
    }
  ],
  
  especificaciones: {
    "Capacidad": "1 litro",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "225 gr",
    "Altura": "13 cm",
    "Ancho": "11.5 cm",
    "Capacidad total": "1000 cc",
    "Sistema de cierre": "Tapa a presión",
    "Colores": "Blanco",
    "Unidades por caja": "255 unidades",
    "Código": "3373"
  },
  
  usos: [
    {
      icono: "img/icons/alimentos.svg",
      titulo: "Alimentos y bebidas",
      descripcion: "Ideal para aceites, jarabes, agua, jugos en proceso, miel, granos o polvos alimentarios. El PE grado alimenticio cuida la inocuidad y evita migraciones."
    },
    {
      icono: "img/icons/limpieza.svg",
      titulo: "Limpieza e industria ligera",
      descripcion: "Perfecta para detergentes, jabones líquidos, desengrasantes y diluciones no corrosivas; la tapa con precinto ayuda a controlar inventarios y despachos."
    },
    {
      icono: "img/icons/retail.svg",
      titulo: "Retail y bodega",
      descripcion: "Su perfil bajo mejora la exhibición en percha, facilita el frenteo y optimiza el espacio en estanterías y cajas de transporte."
    }
  ],
  
  cuidados: [
    {
      titulo: "Limpieza después de usar",
      descripcion: "Lava con detergente neutro y esponja suave, enjuaga bien y deja secar boca abajo. Para olores, usa agua tibia con un poco de bicarbonato o cloro diluido."
    },
    {
      titulo: "Químicos agresivos y altas temperaturas",
      descripcion: "Evita solventes, hidrocarburos y ácidos/bases concentrados; pueden dañar el plástico. No superes 60 °C ni viertas líquidos hirviendo."
    },
    {
      titulo: "Almacenamiento y manejo",
      descripcion: "Guarda a la sombra, en lugar seco y nivelado. Transporta en posición vertical con la tapa bien presionada; no te sientes ni te pares sobre la caneca ni la golpees."
    }
  ]
}
  
  // ... etc
};





// Base de datos de productos Wilson - Importado desde WooCommerce
// Total de productos: 67

const productos = [
  // ===== BROCHAS PREMIER =====
  
    {
    id: 54,
    nombre: "BROCHA PREMIER 1 PULGADA",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    codigo: "12320",
    cantidadPorCaja: 48,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-frente.webp"
    ],
    
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "1 pulgada",
      "Largo de filamentos":  "45 mm",
      "Grosor": "10 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "48 unidades",
      "Código": "12320"
    }
  },
  {
    id: 56,
    nombre: "BROCHA PREMIER 2 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    
    codigo: "12322",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2 pulgadas",
      "Largo de filamentos":  "55 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12322"
    }
  },
  {
    id: 57,
    nombre: "BROCHA PREMIER 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    
    codigo: "12323",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2,5 pulgadas",
      "Largo de filamentos":  "60 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12323"
    }
  },
  {
    id: 58,
    nombre: "BROCHA PREMIER 3 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    
    codigo: "12324",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "3 pulgadas",
      "Largo de filamentos":  "60 mm",
      "Grosor": "13 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12324"
    }
  },
  {
    id: 60,
    nombre: "BROCHA PREMIER 4 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    
    codigo: "12325",
    cantidadPorCaja: 12,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "4 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "13 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "12 unidades",
      "Código": "12324"
    }
  },
  {
    id: 61,
    nombre: "BROCHA PREMIER 5 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil.",
    
    codigo: "12326",
    cantidadPorCaja: 12,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "4 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "18 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "12 unidades",
      "Código": "12324"
    }
  },

  // ===== BROCHAS PRIMA =====
  {
    id: 62,
    nombre: "BROCHA PRIMA 1 PULGADA",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12420",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "1 pulgada",
      "Largo de filamentos":  "45 mm",
      "Grosor": "10 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "48 unidades",
      "Código": "12420"
    }
  },
  {
    id: 63,
    nombre: "BROCHA PRIMA 2 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12422",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2 pulgadas",
      "Largo de filamentos":  "55 mm",
      "Grosor": "10 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12422"
    }
  },
  {
    id: 64,
    nombre: "BROCHA PRIMA 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12427",
    cantidadPorCaja: 20,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2.5 pulgadas",
      "Largo de filamentos":  "60 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12427"
    }
  },
  {
    id: 65,
    nombre: "BROCHA PRIMA 3 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "BPM-03",
    cantidadPorCaja: 20,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "3 pulgadas",
      "Largo de filamentos":  "60 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12428"
    }
  },
  {
    id: 66,
    nombre: "BROCHA PRIMA 4 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "BPM-04",
    cantidadPorCaja: 16,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "4 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "12 unidades",
      "Código": "12425"
    }
  },
  {
    id: 68,
    nombre: "BROCHA PRIMA 5 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12426",
    cantidadPorCaja: 12,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "5 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "17 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "12 unidades",
      "Código": "12426"
    }
  },

  // ===== BROCHAS FUTURA =====
  {
    id: 69,
    nombre: "BROCHA FUTURA 1 PULGADA",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12219",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "1 pulgadas",
      "Largo de filamentos":  "45 mm",
      "Grosor": "10 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "48 unidades",
      "Código": "12219"
    }
  },
  {
    id: 70,
    nombre: "BROCHA FUTURA 2 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12213",
    cantidadPorCaja: 24,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2 pulgadas",
      "Largo de filamentos":  "55 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12213"
    }
  },
  {
    id: 71,
    nombre: "BROCHA FUTURA 3 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12220",
    cantidadPorCaja: 20,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "3 pulgadas",
      "Largo de filamentos":  "60 mm",
      "Grosor": "12 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12220"
    }
  },
  {
    id: 72,
    nombre: "BROCHA FUTURA 4 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12216",
    cantidadPorCaja: 16,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "4 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "15 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "12 unidades",
      "Código": "12216"
    }
  },
  {
    id: 73,
    nombre: "BROCHA FUTURA 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12222",
    cantidadPorCaja: 20,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "2,5 pulgadass",
      "Largo de filamentos":  "60 mm",
      "Grosor": "11 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12222"
    }
  },
  {
    id: 75,
    nombre: "BROCHA FUTURA 5 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12217",
    cantidadPorCaja: 12,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Frente.webp"
    ],
    // ===== ESPECIFICACIONES ACTUALIZADAS =====
    especificaciones: {
      "Medida": "5 pulgadas",
      "Largo de filamentos":  "65 mm",
      "Grosor": "17 mm",
      "Material de Cerdas": "Poliéster",
      "Tipo de Recubrimiento": "Todo tipo de pintura",
      "Superficies ": "Paredes, madera y metal",
      "Tipo de Pegamento": "Epoxi",
      "Unidades por caja": "24 unidades",
      "Código": "12217"
    }
  },
  {
  id: 121,
  nombre: "BROCHA FUTURA ANGULAR",
  categoria: "Brochas",
  marca: "Futura",
  tamano: "Angular",  // ← AGREGAR ESTA LÍNEA
  imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-angular-delante.webp",
  descripcion: "Es la brocha hecha para los recortes finos donde una brocha recta no llega con la misma precisión...",
  codigo: "BFT-ANG",
  cantidadPorCaja: 20,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-angular-delante.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-angular-delante.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-angular-delante.webp"
  ],
  especificaciones: {
    "Medida": "2 pulgadas",
    "Largo de filamentos": "65 mm",
    "Grosor": "13 mm",
    "Material de Cerdas": "Poliéster",
    "Tipo de Recubrimiento": "Todo tipo de pintura",
    "Superficies ": "Paredes, madera y metal",
    "Tipo de Pegamento": "Epoxi",
    "Unidades por caja": "24 unidades",
    "Código": "12213"
  }
},

  {
    id: 76,
    nombre: "BALDE 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    descripcion: "Diseño ergonómico con agarradera de metal resistente, ideal para trabajos de limpieza. Cumple con las normas FDA para alimentos.",
    codigo: "13355",
  cantidadPorCaja: 20,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp"
  ],
  },

  {
    id: 77,
    nombre: "BALDE 6 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    descripcion: "Diseño ergonómico, polietileno resistente con hojas de maple y agarradera de metal resistente. Cumple con las normas FDA para alimentos.",
    codigo: "13361-13362",
  cantidadPorCaja: 12,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp"
  ],
  },
  {
    id: 698,
    nombre: "BALDE ESCURRIDOR 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
    descripcion: "Balde ultraresistente con escurridor y agarradera que facilita la tarea del hogar",
    codigo: "13320 - 13321",
  cantidadPorCaja: 12,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
  ],

  },
  {
    id: 149,
    nombre: "CANECA 5 GALONES",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    descripcion: "Súper resistente con asa plástica de gran sujeción para facilidad de movimiento. Ideal para transporte de productos fríos o calientes",
    codigo: "3372",
    cantidadPorCaja: 20,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    ],
  },
  {
    id: 727,
    nombre: "CANECA 1 GALÓN",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    descripcion: "Caneca metálica resistente ideal para almacenar pinturas y líquidos.",
    codigo: "3372",
    cantidadPorCaja: 20,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    ],
  },
  {
    id: 733,
    nombre: "ENVASE AMERICANO 1 LITRO",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    descripcion: "Envase práctico y resistente para almacenamiento de líquidos.",
    cantidadPorCaja: 20,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    ],
  },
  {
    id: 109,
    nombre: "CEPILLO DE COCINA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-cocina-de-lado.jpg",
    descripcion: "Ideal para la limpieza en la cocina, frutas, verduras. Mango cómodo, liviano, diseño ergonómico para mejor sujeción. Evita el cansancio de la mano."
  },
  {
    id: 110,
    nombre: "CEPILLO DE CONSTRUCCIÓN",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-construccion-atras-fondo-blanco-scaled.webp",
    descripcion: "Ideal para barrer y restregar superficies extremadamente duras como patios, garajes, veredas, terrazas. Puede ser utilizado en superficies que tengan residuos de cemento."
  },
  {
    id: 111,
    nombre: "CEPILLO INODORO",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-inodoro-principal-scaled.webp",
    descripcion: "Cepillo ideal para limpieza de todo tipo de inodoro, mayor cantidad de fibra rizada que ayuda a un cepillado más profundo. Posee mango ergonómico largo de 40 cm."
  },
  {
    id: 112,
    nombre: "CEPILLO DE ROPA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-ropa-1.webp",
    descripcion: "Ideal para prendas de vestir, jeans, chaquetas. Mango cómodo, liviano, diseño ergonómico para mejor sujeción. Evita el cansancio de la mano."
  },
  {
    id: 113,
    nombre: "CEPILLO EXTRA DURO",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-extra-duro-frente-fondo-blanco.webp",
    descripcion: "Ideal para la limpieza de superficies rugosas como cemento, planchas metálicas, techos. Sirve para remoción de pintura o manchas de humedad. No se oxida."
  },
  {
    id: 114,
    nombre: "CEPILLO FIBRA RECTA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-exteriores-2-scaled.webp",
    descripcion: "Ideal para limpieza de aceras, patios, veredas, garajes. Mango con inclinación de 60° para facilitar la limpieza en pisos duros. Fibra gruesa acabada flexible."
  },
  {
    id: 115,
    nombre: "CEPILLO FIBRA RIZADA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-exteriores-fibra-rizada-frente-fondo-blanco-1-scaled.webp",
    descripcion: "Ideal para limpieza de aceras, patios, veredas, garajes. Mango con inclinación de 60° para facilitar la limpieza en pisos duros. Fibra rizada acabada flexible."
  },
  {
    id: 116,
    nombre: "CEPILLO LAVA AUTOS",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-lava-autos-con-etiqueta.webp",
    descripcion: "Ideal para lavar vehículos, vidrios, ventanas, estuco, cenefas gracias a su fibra delgada plumada extra suave, ideal para superficies extra delicadas, no raya."
  },
  {
    id: 79,
    nombre: "CESTO APILABLE ROJA",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-apilable-rojo-principal-scaled.webp",
    descripcion: "Diseño elegante rectangular tipo repisa, ideal para la organización en cualquier lugar del hogar."
  },
  {
    id: 80,
    nombre: "CESTO APILABLE NARANJA",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-apilable-naranja-principal.webp",
    descripcion: "Diseño elegante rectangular tipo repisa, ideal para la organización en cualquier lugar del hogar."
  },
  {
    id: 82,
    nombre: "CESTO DE BASURA PEQUEÑO",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-de-basura-pequeno-principal.webp",
    descripcion: "Diseño ergonómico y elegante, ideal para usos en baños, oficinas, cuartos, dormitorios. Cumple con las normas FDA para alimentos."
  },
  {
    id: 84,
    nombre: "CESTO CUADRADO AZUL",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-cuadrado-azul-1.webp",
    descripcion: "Diseño elegante cuadrado con perforación, ideal para limpieza, habitaciones, cocina, roperos libreros u otros."
  },
  {
    id: 85,
    nombre: "CESTO RECTANGULAR MEDIANO BLANCO",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-restangular-mediano-vertical.webp",
    descripcion: "Diseño elegante rectangular con perforación, ideal para la organización en cualquier lugar. Cumple con las normas FDA para alimentos."
  },
  {
    id: 86,
    nombre: "CESTO RECTANGULAR GRANDE",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-rectangular-grande-rojo-scaled.webp",
    descripcion: "Diseño elegante rectangular con perforación, ideal para la organización en cualquier lugar. Cumple con las normas FDA para alimentos."
  },
  {
    id: 87,
    nombre: "CESTO RECTANGULAR MEDIANO",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cesto-rentangular-mediano-rojo-verticall.webp",
    descripcion: "Diseño elegante rectangular con perforación, ideal para la organización en cualquier lugar. Cumple con las normas FDA para alimentos."
  },
  {
    id: 105,
    nombre: "ESCURRIDOR DE PLATOS",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Escurridor-de-platos-de-lado-2-scaled.jpg",
    descripcion: "Diseño compacto y práctico súper resistente ideal para todo tipo de platos vasos, cristalería y variedad de utensilios de cocina."
  },
  {
    id: 108,
    nombre: "TINA RECTANGULAR 12 LITROS",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Tina-rectangular-verde-vertical-scaled.webp",
    descripcion: "Diseño ergonómico elegante rectangular, ideal para la limpieza y multifuncional para el hogar, la cocina almacenar y transportar cualquier producto. Cumple con las normas FDA."
  },
  {
    id: 2761,
    nombre: "CESTO REDONDO GRANDE",
    categoria: "Cestos y tinas",
    imagen: "https://servidinamica.com/wp-content/uploads/2025/09/Cesto-redondo-grande-frente-scaled.webp",
    descripcion: "Cesto redondo de gran capacidad, ideal para almacenamiento y organización en el hogar."
  },
  {
    id: 117,
    nombre: "ESCOBA DE INTERIORES",
    categoria: "Escobas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Escoba-interior-con-etiqueta.webp",
    descripcion: "Ideal para parquet y cerámicas, fibra medianamente suaves plumadas, ideal para proteger sus pisos de rayones. 300.000 barridas."
  },
  {
    id: 118,
    nombre: "ESCOBA EXTERIORES",
    categoria: "Escobas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Escoba-exterior-foto-con-etiqueta.webp",
    descripcion: "Ideal para la limpieza de patios, garajes, veredas, adoquines, gracias a su fibra gruesa acabada en punta dura. 300.000 barridas."
  },
  {
    id: 119,
    nombre: "ESCOBA MULTIUSO",
    categoria: "Escobas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Escoba-multiusos-foto-con-etiqueta.webp",
    descripcion: "Ideal para limpieza de pisos de madera, parquet, cerámica, mármol gracias a su fibra medianamente suaves plumadas. 300.000 barridas."
  },
  {
    id: 120,
    nombre: "ESCOBA PISOS DELICADOS",
    categoria: "Escobas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Escoba-pisos-delicados-con-etiqueta.webp",
    descripcion: "Ideal para pisos delicados, fibra muy suave plumada, ideal para porcelanato y piso flotante. Protege sus pisos de rayones. 300.000 barridas."
  },
  {
    id: 154,
    nombre: "PALO DE ESCOBA",
    categoria: "Escobas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Palo-escoba-completa.webp",
    descripcion: "Mango multiuso para escobas, trapeadores y cepillos. Fabricado con metal laminado en 29 micras con forro en color gris."
  },
  {
  id: 140,
  nombre: "ESPÁTULA 2 PULGADAS",
  categoria: "Espátulas",  // ← AGREGADA TILDE
  tamano: "2 pulgadas",
  imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Espatula-2-pulgadas.webp",
  descripcion: "Las Espátulas Wilson son hechas con plástico resistente ideal para tapar irregularidades, aplicar pasta o yeso, para tapar huecos o fallas, para pastelería."
},
{
  id: 141,
  nombre: "ESPÁTULA 3 PULGADAS",
  categoria: "Espátulas",  // ← AGREGADA TILDE
  tamano: "3 pulgadas",
  imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Espatula-3-pulgadas.webp",
  descripcion: "Las Espátulas Wilson son hechas con plástico resistente ideal para tapar irregularidades, aplicar pasta o yeso, para tapar huecos o fallas, para pastelería."
},
{
  id: 142,
  nombre: "ESPÁTULA 4 PULGADAS",
  categoria: "Espátulas",  // ← AGREGADA TILDE
  tamano: "4 pulgadas",
  imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Espatula-3-pulgadas.webp",
  descripcion: "Las Espátulas Wilson son hechas con plástico resistente ideal para tapar irregularidades, aplicar pasta o yeso, para tapar huecos o fallas, para pastelería."
},
  {
    id: 151,
    nombre: "RECOGEDOR CON ESCOBILLA",
    categoria: "Recogedores",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Recogedor-con-escobilla-principal-fondo-blanco-scaled.webp",
    descripcion: "Diseño ergonómico, para recoger suciedad, polvo y residuos sólidos o líquidos."
  },
  {
    id: 144,
    nombre: "TRAPEADOR GRANDOTE",
    categoria: "Trapeadores",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-grandote-sin-funda-scaled.webp",
    descripcion: "Mopas de 100% algodón de alta duración y absorción, fácil de usar y de lavar, biodegradable. Base ultraresistente."
  },
  {
    id: 145,
    nombre: "TRAPEADOR JUMBO",
    categoria: "Trapeadores",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-Jumbo-scaled.webp",
    descripcion: "Mopas de 100% algodón de alta duración y absorción, fácil de usar y de lavar, biodegradable. Base ultrarresistente."
  },
  {
    id: 152,
    nombre: "TRAPEADOR INDUSTRIAL",
    categoria: "Trapeadores",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-industrial-scaled.webp",
    descripcion: "Mopa industrial, sus fibras de algodón y poliamida, mayor resistencia y duración, para todo tipo de superficie."
  },
  {
    id: 143,
    nombre: "TRAPEADOR FIBRA MÁGICA",
    categoria: "Ofertas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-fibramagica-fondo-blanco.webp",
    descripcion: "Mopa de microfibra en tiras, atrae y atrapa las partículas de polvo, para todo tipo de superficie. No deja pelusas."
  },
  {
    id: 146,
    nombre: "TRAPEADOR MICROFIBRA NARANJA",
    categoria: "Ofertas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-microfibra-naranja-sin-funda-scaled.webp",
    descripcion: "Mopa 100% filamentos de poliéster, atrapa las pelusas y los gérmenes, es muy eficaz en seco o con agua, para limpiar todo tipo de superficie. No deja pelusas."
  },
  {
    id: 147,
    nombre: "TRAPEADOR ULTRA JUMBO",
    categoria: "Ofertas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-Ultra-Jumbo--scaled.webp",
    descripcion: "Mopas de 100% algodón de alta duración y absorción, fácil de usar y de lavar, biodegradable. Base ultraresistente."
  },
  {
  id: 150,
  nombre: "RECOGEDOR PREMIER DE MANO",
  categorias: ["Recogedores", "Ofertas"],  // ← Array en lugar de string
  imagen: "https://servidinamica.com/wp-content/uploads/2024/10/pala-recogedora-de-mano.webp",
  descripcion: "Diseño ergonómico, para recoger suciedad, polvo y residuos sólidos o líquidos."
},
  {
    id: 153,
    nombre: "TRAPEADOR SUPERFIBRA BLANCO",
    categoria: "Ofertas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Trapeador-microfibra-blanca-scaled.webp",
    descripcion: "Mopa industrial, sus fibras de algodón mayor resistencia para todo tipo de superficie."
  },
  {
    id: 509,
    nombre: "BROCHA HOGAR 1 PULGADA",
    categoria: "Ofertas",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Hogar-frente-4-pulgadas.webp",
    descripcion: "Es la brocha más ECONÓMICA, orientado tanto al mercado HAZLO TÚ MISMO, como también para pintores profesionales que requieren una brocha más delgada para espacios reducidos."
  },
  {
    id: 512,
    nombre: "BROCHA HOGAR 4 PULGADAS",
    categoria: "Ofertas",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Hogar-frente-4-pulgadas-1.webp",
    descripcion: "Es la brocha más ECONÓMICA, orientado tanto al mercado HAZLO TÚ MISMO, como también para pintores profesionales."
  },
  {
    id: 514,
    nombre: "BROCHA PREMIER 4 PULGADAS MANGO DE MADERA",
    categoria: "Ofertas",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-pulgadas-frente.webp",
    descripcion: "Brocha de cerdas negras, con mango de madera. Sus características de versatilidad y flexibilidad para pintar en todo tipo de superficie y dejar un perfecto acabado."
  },
  {
    id: 575,
    nombre: "BROCHA PREMIER 2 1/2 PULGADAS MANGO DE MADERA",
    categoria: "Ofertas",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2-1-2-pulgadas-frente.webp",
    descripcion: "Brocha de cerdas negras, con mango de madera. Sus características de versatilidad y flexibilidad para pintar en todo tipo de superficie y dejar un perfecto acabado."
  },
  {
    id: 626,
    nombre: "BROCHA KELLY 1 PULGADA",
    categoria: "Ofertas",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Kelly-frente-1-pulgada.webp",
    descripcion: "Brocha de cerdas negras, con mango de madera."
  },
  {
    id: 628,
    nombre: "BROCHA KELLY 2 PULGADAS",
    categoria: "Ofertas",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Kelly-2-pulgadas-frentee.webp",
    descripcion: "Brocha de cerdas negras, con mango de madera."
  },
  {
    id: 2487,
    nombre: "BROCHA PREMIER 6 PULGADAS",
    categoria: "Ofertas",
    tamano: "6 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2025/08/Brocha-Premier-6-pulgadas-frente-scaled.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  }
];



// Datos de las líneas de brochas
const lineasData = {
  premier: {
    titulo: 'Brocha Premier',
    imagenes: [
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp'
    ],
    url: 'catalogo.html?categoria=Brochas&marca=Premier'
  },
  futura: {
    titulo: 'Brocha Futura',
    imagenes: [
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp'
    ],
    url: 'catalogo.html?categoria=Brochas&marca=Futura'
  },
  prima: {
    titulo: 'Brocha Prima',
    imagenes: [
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp',
      'https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp'
    ],
    url: 'catalogo.html?categoria=Brochas&marca=Prima'
  }
};

