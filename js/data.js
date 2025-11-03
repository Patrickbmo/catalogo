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
        icono: "img/icons/interior.svg",
        titulo: "Paredes y techos interiores",
        descripcion: "Ideal para pintar paredes y techos con pintura látex/acrílica. Carga bastante, distribuye parejo y cubre en menos pasadas, dejando un acabado uniforme sin marcas ni chorreos visibles."
      },
      {
        icono: "img/icons/muros.svg",
        titulo: "Muros con textura y fachadas",
        descripcion: "Rinde muy bien sobre superficies rugosas o semi-rugosas (estuco, bloque, revoque). Las cerdas cónicas “se meten” en la porosidad y mejoran la cobertura por carga."
      },
      {
        icono: "img/icons/generales.svg",
        titulo: "Trabajos generales y repintes en exterior",
        descripcion: "Funciona excelente en puertas, muebles, barandas y rejas con esmalte o barniz. Nivela el trazo y deja una película lisa y continua con menos retoques."
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
        icono: "img/icons/CERDAS.svg",
        titulo: "Cerdas Premium",
        descripcion: "Cerdas de alta calidad que retienen más pintura y permiten una aplicación uniforme sin dejar marcas."
      },
      {
        icono: "img/icons/MANGO.svg",
        titulo: "Mango Ergonómico",
        descripcion: "Diseño ergonómico que se adapta perfectamente a la mano, reduciendo la fatiga durante el uso prolongado."
      },
      {
        icono: "img/icons/uniforme.svg",
        titulo: "Distribución Uniforme",
        descripcion: "Sistema de distribución que permite una cobertura perfecta sin marcas ni imperfecciones."
      },
      {
        icono: "img/icons/perfecto.svg",
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
        descripcion: "La mezcla y el largo de los filamentos aumentan la carga de pintura y mejoran el nivelado del trazo para una aplicación pareja, bordes definidos y menos retoques.       "
      },
      {
        icono: "img/icons/mano.svg",
        titulo: "Mango Ergonómico",
        descripcion: "Su diseño se adapta a la mano, reduce la fatiga y brinda precisión en cortes, bordes y superficies amplias. Así mantienes un pulso estable y un acabado consistente durante toda la jornada."
      },
      {
        icono: "img/icons/unistar.svg",
        titulo: "Acabado Uniforme",
        descripcion: "Diseñada para dejar un acabado uniforme, sin rayas ni marcas visibles, incluso en zonas amplias o de difícil acceso. Su buena carga y liberación de pintura ayuda a cubrir en menos pasadas."
      },
      {
        icono: "img/icons/interior.svg",
        titulo: "Para interior y exterior",
        descripcion: "Rinde excelente con pintura al agua (látex/acrílica) y esmalte en muros lisos o con ligera textura, además de madera y metal, sin perder calidad de acabado."
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
        icono: "img/icons/interior.svg",
        titulo: "Paredes y techos interiores",
        descripcion: "Ideal para pintar paredes y techos con pintura látex/acrílica. Carga bastante, distribuye parejo y cubre en menos pasadas, dejando un acabado uniforme sin marcas ni chorreos visibles."
      },
      {
        icono: "fimg/icons/puerta.svg",
        titulo: "Para trabajos delicados",
        descripcion: "Funciona muy bien con esmalte o barniz en superficies lisas o con ligera textura. Su corte recto permite trazos firmes y uniformes en caras planas."
      },
      {
        icono: "img/icons/generales.svg",
        titulo: "Rejas, barandas y mantenimiento general",
        descripcion: "Útil para repintes, retoques y trabajos de obra doméstica. Sirve con selladores y esmaltes en metal o madera, ofreciendo buen rendimiento y facilidad de limpieza."
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
// ==========================================
// PLANTILLAS INDIVIDUALES
// DE CADA PRODUCTO
// 
// ==========================================
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
        icono: "img/icons/jardineria.svg",
        titulo: "Jardinería y riego",
        descripcion: "Ideal para regar macetas y plantas en balcones, patios o jardines. Permite trasladar agua fácilmente a zonas de difícil acceso y mantener tus espacios verdes bien cuidados"
      },
      {
        icono: "img/icons/shieldcheck.svg",
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
        icono: "img/icons/shieldcheck.svg",
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
      "Código": "13320 - 13321"
    
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
    colores: [
      { nombre: "Blanco", hex: "#ffffffff", codigo: "3371" }
    ],
    "Unidades por caja": "20 unidades",
    "Código": "3371"
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
    colores: [
      { nombre: "Blanco", hex: "#ffffffff", codigo: "3373" }
    ],
    "Unidades por caja": "20 unidades",
    "Código": "3373"
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
    colores: [
      { nombre: "Blanco", hex: "#ffffffff", codigo: "53202" }
    ],
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
},

109: { // CEPILLO DE COCINA
  descripcionCompleta: "El Cepillo de Cocina Wilson es el aliado perfecto para mantener tus alimentos y utensilios siempre limpios e higiénicos. Diseñado con fibra corta de dureza media, elimina fácilmente tierra, grasa y residuos sin dañar frutas, verduras ni superficies delicadas. Su mango ondulado y ergonómico se adapta naturalmente a la mano, ofreciendo un agarre firme incluso con agua y jabón, lo que permite fregar con comodidad y precisión. Fabricado en plástico ultrarresistente, combina ligereza, durabilidad y un diseño compacto que facilita su uso y almacenamiento. Ideal para el hogar, restaurantes o negocios que necesitan una limpieza rápida, eficiente y segura para contacto con alimentos.",
  
  caracteristicas: [
    {
      icono: "img/icons/cerdas.svg",
      titulo: "Limpia sin maltratar",
      descripcion: "Fibra delgada de punta recta que elimina polvo y manchas ligeras sin soltar pelusa ni desgastar la prenda. Ideal para prelavado y telas delicadas."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Preciso y compacto",
      descripcion: "Su tamaño permite entrar fácil en puños, cuellos, costuras y rincones como la entrepierna del jean o la suela de las zapatillas. Perfecto para detalles y zonas difíciles."
    },
    {
      icono: "img/icons/memoria.svg",
      titulo: "Fibra con memoria",
      descripcion: "Las fibras vuelven a su posición original después de cada uso, conservando precisión y rendimiento constante."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Delgada y punta recta",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "109 gr",
    "Altura": "4.3 cm",
    "Ancho": "6 cm",
    "Largo": "14.5 cm",
    "Compatibilidad": "Apto con jabón de ropa, detergentes y quitamanchas no corrosivos",
    colores: [
      { nombre: "Mango", hex: "#99ff33", codigo: "53202" },
      { nombre: "Fibra", hex: "#3f7707ff", codigo: "53202" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "53202"
  },
  
  usos: [
    {
      icono: "img/icons/frutas.svg",
      titulo: "Limpieza de frutas y verduras",
      descripcion: "Retira tierra y residuos de cáscaras firmes o delicadas sin quitar nutrientes ni maltratar la piel del alimento."
    },
    {
      icono: "img/icons/utensilios.svg",
      titulo: "Aseo de utensilios y superficies",
      descripcion: "Apoyo para fregar tablas de picar, coladores, ollas, rejillas y fregaderos sin dejar rayones fuertes."
    }
  ],
  
  cuidados: [
    {
      titulo: "Después de usar, enjuaga y seca",
      descripcion: "Quita el jabón, sacude el exceso de agua y deja secar cerdas abajo."
    },
    {
      titulo: "Evita químicos agresivos",
      descripcion: "No usar solventes fuertes ni cloro concentrado directo sobre el cepillo para prolongar la vida de la fibra."
    },
    {
      titulo: "Guárdalo en lugar seco",
      descripcion: "Lejos del sol directo y sin peso encima para que las cerdas no se deformen."
    }
  ]
},

113: { // CEPILLO EXTRA DURO
  descripcionCompleta: "El Cepillo extra duro Wilson está diseñado para trabajo pesado en limpieza y preparación de superficies. Sus cerdas sintéticas muy gruesas, de punta recta, concentran la presión en cada pasada para desincrustar costra, mugre pegada, restos de pintura y sarro superficial en cemento, ladrillo, planchas metálicas, techos y parrillas. Es la alternativa segura al cepillo de alambre: no se oxida, no suelta filamentos metálicos y reduce el riesgo de rayones profundos en comparación con los alambres. El cuerpo presenta un mango ergonómico con ondulaciones que se ajusta a los dedos para aplicar fuerza con control y sin resbalar, incluso con guantes o manos húmedas. Resiste agua, detergentes y desengrasantes domésticos (no corrosivos), por lo que rinde tanto en obra y taller como en patios, bodegas y cocina exterior.",
  
  caracteristicas: [
    {
      icono: "img/icons/sustituto.svg",
      titulo: "Sustituto del cepillo metálico",
      descripcion: "Sustituye al cepillo metálico con igual firmeza, sin alambres sueltos ni riesgo de rayones. Ideal para remover óxido o residuos difíciles con total seguridad."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Mango ergonómico antideslizante",
      descripcion: "La base con canales para los dedos asegura agarre firme incluso con manos húmedas, reduciendo desliz y fatiga."
    },
    {
      icono: "img/icons/dureza.svg",
      titulo: "Dureza concentrada",
      descripcion: "La fibra súper rígida concentra la presión para desprender salitre, mortero y grasa seca con menos pasadas. El corte recto estabiliza el contacto y entrega un frote uniforme en planos y bordes."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Muy gruesa y punta recta",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "127 gr",
    "Altura": "4.5 cm",
    "Ancho": "6 cm",
    "Largo": "14.2 cm",
    "Compatibilidad": "Apto con jabón de ropa, detergentes y quitamanchas no corrosivos",
    colores: [
      { nombre: "Mango", hex: "#ffffffff", codigo: "53290" },
      { nombre: "Fibra", hex: "#3f7707ff", codigo: "53290" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "53290"
  },
  
  usos: [
    {
      icono: "img/icons/obra.svg",
      titulo: "Obra y construcción",
      descripcion: "Remueve hormigón, salitre y polvo de cemento en muros y pisos, dejando la superficie lista para preparar o sellar."
    },
    {
      icono: "img/icons/manchas.svg",
      titulo: "Remoción de manchas y hongos",
      descripcion: "Remueve moho, algas y tierra compactada en exteriores. Funciona mejor con agua y limpiador doméstico; enjuaga para mantener la superficie limpia."
    },
    {
      icono: "img/icons/parrilla.svg",
      titulo: "Limpieza de parrillas y herramientas",
      descripcion: "Quita grasa carbonizada en parrillas tibias (no al rojo vivo) y retira restos en palas, espátulas, carretillas y equipos de obra. Se enjuaga rápido y no absorbe olores."
    }
  ],
  
  cuidados: [
    {
      titulo: "Limpieza posterior",
      descripcion: "Después de cada uso, lava el cepillo con agua limpia hasta que no queden restos, luego déjalo en su base para que drene el exceso y se seque correctamente."
    },
    {
      titulo: "Químicos a evitar",
      descripcion: "Evite el uso de solventes o productos químicos concentrados que puedan afectar el polietileno y alterar la flexibilidad de las cerdas."
    },
    {
      titulo: "Almacenamiento",
      descripcion: "Guarda en lugar seco y a la sombra. No lo dejes sumergido por horas para evitar deformaciones."
    }
  ]
},

112: { // CEPILLO DE ROPA
  descripcionCompleta: "El cepillo de ropa Wilson está pensado para el lavado a mano de tus prendas del día a día y textiles del hogar. Su fibra delgada de punta recta levanta la mugre sin maltratar la tela, por lo que funciona muy bien en prendas de vestir, cobijas, sábanas, jeans y zapatillas. El cuerpo tiene ondulaciones para los dedos que mejoran el agarre incluso con las manos mojadas, dando control y presión pareja en cada pasada. Es ligero, duradero y fácil de enjuagar.",
  
  caracteristicas: [
    {
      icono: "img/icons/cerdas.svg",
      titulo: "Limpieza suave",
      descripcion: "Fibra delgada con punta recta que quita polvo y manchas sin maltratar la tela ni soltar pelusa. Funciona muy bien para prelavado puntual y para cuidar telas finas o de uso diario."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Agarre cómodo",
      descripcion: "Mango con canales que se ajusta a la mano y no se resbala, incluso húmedo. Te da mejor control al fregar y reduce el cansancio en trabajos más largos."
    },
    {
      icono: "img/icons/dureza.svg",
      titulo: "Compacto y preciso",
      descripcion: "Llega con facilidad a puños, cuellos y costuras, y entra en rincones difíciles como la entrepierna del jean o la suela de la zapatilla. Permite limpiar detalles sin pasar de largo."
    },
    {
      icono: "img/icons/jabon.svg",
      titulo: "Higiénico y fácil lavado",
      descripcion: "No guarda olores ni humedad y se enjuaga en segundos bajo el grifo. Seca rápido y queda listo para el siguiente uso sin acumular residuos."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Delgada y punta recta",
    "Material": "Polietileno (PE) 100% virgen",
    "Peso": "117 gr",
    "Altura": "4.4 cm",
    "Ancho": "6 cm",
    "Largo": "14 cm",
    "Compatibilidad": "Apto con jabón de ropa, detergentes y quitamanchas no corrosivos",
    colores: [
      { nombre: "Mango", hex: "#2576e0ff", codigo: "5320" },
      { nombre: "Fibra", hex: "#ffffffff", codigo: "5320" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "5320"
  },
  
  usos: [
    {
      icono: "img/icons/ropa.svg",
      titulo: "Lavado de prendas de vestir",
      descripcion: "Ideal para jeans, chaquetas, camisas, vestidos y todo tipo de ropa del día a día. La fibra suave protege los tejidos mientras elimina manchas efectivamente."
    },
    {
      icono: "img/icons/textiles.svg",
      titulo: "Textiles del hogar",
      descripcion: "Perfecto para lavar cobijas, sábanas, cortinas y manteles. Llega a todas las áreas sin desgastar las fibras."
    },
    {
      icono: "img/icons/zapatos.svg",
      titulo: "Calzado y accesorios",
      descripcion: "Limpia zapatillas, sandalias y accesorios textiles con precisión, llegando a suelas y costuras difíciles."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuaga después de cada uso",
      descripcion: "Lava el cepillo con agua limpia para eliminar jabón y residuos. Sacude el exceso de agua y deja secar con las cerdas hacia abajo en un lugar ventilado."
    },
    {
      titulo: "Evita productos químicos agresivos",
      descripcion: "No uses solventes fuertes, cloro concentrado ni productos corrosivos que puedan dañar las cerdas de polietileno."
    },
    {
      titulo: "Almacena en lugar seco",
      descripcion: "Guarda el cepillo lejos de la luz solar directa y sin objetos pesados encima para mantener la forma de las cerdas y prolongar su vida útil."
    }
  ]
},

110: { // CEPILLO DE CONSTRUCCIÓN
  descripcionCompleta: "El cepillo de construcción Wilson está hecho para trabajo pesado en patios, garajes, veredas y terrazas, con desempeño confiable a la intemperie. Sus cerdas sintéticas muy gruesas y de punta recta levantan polvo, arena y residuos de obra y además restregan costras y restos de cemento para dejar la superficie lista. El cabezal con inclinación de 60 grados mejora el contacto con el piso, alcanza bordes y rincones con menos esfuerzo y cuida la postura al trabajar de pie. Trae rosca estándar tipo escoba para acoplar la mayoría de palos, se enjuaga rápido y queda listo para el siguiente turno.",
  
  caracteristicas: [
    {
      icono: "img/icons/resistente.svg",
      titulo: "Resistencia extrema",
      descripcion: "Fibra muy gruesa y rígida para barrer residuos pesados y restregar en superficies duras como cemento, adoquín, loseta o metal rugoso, dentro o fuera."
    },
    {
      icono: "img/icons/recta.svg",
      titulo: "Punta recta y presión",
      descripcion: "La punta recta concentra la presión sobre la superficie para despegar barro seco, restos de mortero, pintura floja y suciedad adherida con trazos firmes."
    },
    {
      icono: "img/icons/angulo.svg",
      titulo: "Rosca inclinada 60°",
      descripcion: "Rosca a 60° que mejora el contacto con el piso, alcanza bordes y rincones con menos esfuerzo y cuida la postura al trabajar de pie."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Muy gruesa y punta recta",
    "Material": "Polietileno (PE) 100% virgen",
    "Largo": "28.5 cm",
    "Altura": "8 cm",
    "Ancho": "5.2 cm",
    "Peso": "223 gr",
    "Inclinación del cabezal": "60°",
    colores: [
      { nombre: "Mango", hex: "#ffffffff", codigo: "13240" },
      { nombre: "Fibra", hex: "#178337ff", codigo: "13240" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "13240"
  },
  
  usos: [
    {
      icono: "img/icons/obra.svg",
      titulo: "Obra y pos obra",
      descripcion: "Retiro de polvo, arena, residuos de cemento y mortero en pisos de concreto, pasillos y bodegas."
    },
    {
      icono: "img/icons/exteriores.svg",
      titulo: "Mantenimiento de exteriores",
      descripcion: "Barrido fuerte y restregado en patios, garajes, veredas y terrazas con agua y detergente."
    },
    {
      icono: "img/icons/taller.svg",
      titulo: "Talleres y parqueaderos",
      descripcion: "Limpieza de manchas de grasa superficial, lodos y suciedad pesada en superficies rugosas."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuague después de usar",
      descripcion: "Lava el cepillo con agua a presión para eliminar cemento, arena y residuos. Sacude el exceso y deja secar al aire libre con las cerdas hacia abajo."
    },
    {
      titulo: "Evita químicos corrosivos",
      descripcion: "No uses ácidos fuertes, solventes o productos altamente corrosivos que puedan degradar el polietileno de las cerdas."
    },
    {
      titulo: "Almacenamiento adecuado",
      descripcion: "Guarda en posición vertical en lugar seco y ventilado. Verifica que la rosca esté limpia antes de guardar para facilitar el próximo ensamblaje."
    }
  ]
},

114: { // CEPILLO FIBRA RECTA
  descripcionCompleta: "El Cepillo exterior fibra recta Wilson es el que necesitas para barrer y restregar en aceras, patios, veredas y garajes, todas esas superficies duras donde la suciedad se pega. Su fibra gruesa con punta recta levanta polvo, arena y lodo, y además permite fregado fuerte cuando hay manchas o barro seco. El taco incorpora rosca estándar tipo escoba para montar cualquier palo (madera o metálico) y trabajar de pie, con alcance y sin cansarte. Hecho para exterior: resiste agua, sol ocasional y detergentes domésticos no corrosivos.",
  
  caracteristicas: [
    {
      icono: "img/icons/barrido.svg",
      titulo: "Barrido y fregado",
      descripcion: "Fibra gruesa de punta recta que arrastra arena, grava y residuos de obra; con presión, desprende barro seco, mortero y suciedad pegada. Rinde parejo en cemento, adoquín, loseta y metal rugoso."
    },
    {
      icono: "img/icons/midshield.svg",
      titulo: "Base resistente",
      descripcion: "Base de polietileno rígido con buena estabilidad estructural que no se deforma con agua, detergentes ni golpes. Mantiene las cerdas alineadas y firmes pasada tras pasada, incluso en uso rudo."
    },
    {
      icono: "img/icons/angulo.svg",
      titulo: "Rosca inclinada 60°",
      descripcion: "Rosca a 60° que mejora el contacto con el piso, alcanza bordes y rincones con menos esfuerzo y cuida la postura al trabajar de pie."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Gruesa acabada flexible con punta recta",
    "Material": "Polietileno (PE) 100% virgen",
    "Largo": "28.5 cm",
    "Altura": "8 cm",
    "Ancho": "5.2 cm",
    "Peso": "223 gr",
    "Inclinación del cabezal": "60°",
    "Compatibilidad": "Apto con detergentes y desengrasantes no corrosivos",
    colores: [
      { nombre: "cuerpo", hex: "#572153", codigo: "13235" },
      { nombre: "Fibra", hex: "#db3086", codigo: "13235" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "13235"
  },
  
  usos: [
    {
      icono: "img/icons/zonas.svg",
      titulo: "Zonas comunes y locales",
      descripcion: "Mantenimiento de pasillos, terrazas y accesos en edificios, talleres y comercios."
    },
    {
      icono: "img/icons/baldelim.svg",
      titulo: "Mantenimiento de exteriores",
      descripcion: "Barrido fuerte y restregado en patios, garajes, veredas y terrazas con agua y detergente."
    },
    {
      icono: "img/icons/garaje.svg",
      titulo: "Garajes y parqueaderos",
      descripcion: "Limpieza de manchas de grasa superficial, lodos y suciedad pesada en superficies rugosas."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuaga después de usar",
      descripcion: "Retira arena y residuos con chorro de agua; sacude y deja secar con la fibra hacia abajo."
    },
    {
      titulo: "Evita químicos agresivos",
      descripcion: "No uses solventes fuertes ni ácidos/bases concentradas que puedan dañar el taco o endurecer en exceso la fibra."
    },
    {
      titulo: "Almacenamiento correcto",
      descripcion: "Guarda a la sombra y en seco; evita dejar el cepillo apoyado sobre la fibra o sumergido por horas para no deformar las cerdas."
    }
  ]
},

111: { // CEPILLO INODORO
  descripcionCompleta: "El cepillo para inodoro Wilson está pensado para una limpieza profunda y cuidadosa del sanitario. Incorpora fibra rizada en alta densidad que se amolda al contorno interno, entra entre relieves y bordes y desprende residuos sin rayar la porcelana. Su mango largo, ergonómico y con flexibilidad ligera permite aplicar la presión exacta en las zonas críticas bajo el borde, en el sifón y en las curvas dando mayor alcance y control incluso en espacios estrechos. El pedestal escurridor sostiene el cepillo en posición vertical, facilita el goteo del exceso de agua y protege la fibra entre usos, manteniendo mejor higiene y reduciendo olores.",
  
  caracteristicas: [
    {
      icono: "img/icons/cerdas.svg",
      titulo: "Limpieza profunda y pareja",
      descripcion: "Fibra rizada de alta densidad que se adapta al tazón, alcanza bordes y rincones y desprende residuos sin rayar, dejando la superficie lista para el enjuague."
    },
    {
      icono: "img/icons/mano.svg",
      titulo: "Mango extra largo y ergonómico",
      descripcion: "Empuñadura con ondas y ligera flexibilidad para aplicar presión con control. Mejor alcance bajo el borde y menos fatiga en la muñeca."
    },
    {
      icono: "img/icons/higienico.svg",
      titulo: "Pedestal higiénico",
      descripcion: "Base estable que recoge el goteo y mantiene el cepillo separado del piso para un secado más limpio. Facilita guardarlo en su lugar, evita charcos y contribuye a prolongar la vida de la fibra."
    },
    {
      icono: "img/icons/resistente.svg",
      titulo: "Resistente para el día a día",
      descripcion: "Soporta agua, detergentes y desinfectantes domésticos no corrosivos. Se enjuaga rápido, no guarda olores y queda listo para el siguiente uso."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Rizada de alta densidad",
    "Material": "Polietileno (PE) 100% virgen",
    "Largo": "41 cm",
    "Altura": "8.5 cm",
    "Ancho": "17 cm",
    "Peso": "250 gr",
    "Incluye": "Pedestal escurridor",
    colores: [
      { nombre: "Cuerpo", hex: "#ffffffff", codigo: "13235" },
      { nombre: "Fibra", hex: "#F97CAE", codigo: "13235" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "13230"
  },
  
  usos: [
    {
      icono: "img/icons/diario.svg",
      titulo: "Limpieza diaria del inodoro",
      descripcion: "Cepillado completo del tazón, bajo el borde y zona del sifón para mantener brillo e higiene."
    },
    {
      icono: "img/icons/desinfectante.svg",
      titulo: "Mantenimiento con desinfectante",
      descripcion: "Usa tu limpiador habitual, distribúyelo bien y frota con movimientos uniformes y presión medida; repite el proceso hasta retirar por completo la mancha."
    },
    {
      icono: "img/icons/banos.svg",
      titulo: "Baños de hogar, oficina y comercio",
      descripcion: "Conjunto práctico y resistente para uso frecuente en espacios con flujo de personas. Facilita la limpieza diaria, reduce malos olores al drenar mejor la fibra y se integra sin estorbar junto al inodoro, ideal para mantener el baño presentable todo el día."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuaga y escurre",
      descripcion: "Después de cada uso, enjuaga el cepillo bajo el grifo hasta quitar restos de suciedad y jabón. Colócalo en el pedestal para que drene el exceso de agua y se seque al aire, evitando malos olores y humedad."
    },
    {
      titulo: "Desinfección periódica",
      descripcion: "Una vez por semana (o según uso), sumérgelo 10–15 minutos en cloro diluido o vinagre, enjuaga bien y deja secar completamente. Así reduces gérmenes y prolongas la vida de la fibra."
    },
    {
      titulo: "Renovación sugerida",
      descripcion: "Reemplázalo cada 3–6 meses según la frecuencia de uso y el desgaste. Si notas que la fibra pierde forma, se abre o ya no limpia como antes, cámbialo antes para mantener buenos resultados."
    }
  ]
},
115: { // CEPILLO FIBRA RIZADA
  descripcionCompleta: "El cepillo fibra rizada Wilson está pensado para limpiar sin rayar. Su fibra rizada y flexible se adapta a la superficie, levanta la suciedad y permite restregar con suavidad en cerámica, baldosa, porcelanato, azulejo, pisos vinílicos y alfombrados. El taco trae rosca estándar tipo escoba para colocar cualquier palo y trabajar de pie, con control y menos esfuerzo. Ideal para casas, locales y edificios donde se necesita cuidado fino.",
  
  caracteristicas: [
    {
      icono: "img/icons/suave.svg",
      titulo: "Limpieza suave sin rayones",
      descripcion: "Fibra rizada y flexible que cuida superficies delicadas y remueve polvo, lodo ligero y manchas. Ideal para cerámica brillante, porcelanato pulido y pisos vinílicos."
    },
    {
      icono: "img/icons/pluma.svg",
      titulo: "Base ligera y robusta",
      descripcion: "Base de polímero rígido que mantiene la fibra estable y facilita maniobras en pasillos, esquinas y alrededor de muebles."
    },
    {
      icono: "img/icons/angulo.svg",
      titulo: "Rosca inclinada 60°",
      descripcion: "Rosca a 60° que mejora el contacto con el piso, alcanza bordes y rincones con menos esfuerzo y cuida la postura al trabajar de pie."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Fibra rizada y flexible",
    "Material": "Polietileno (PE) 100% virgen",
    "Largo": "28.5 cm",
    "Altura": "8 cm",
    "Ancho": "5.2 cm",
    "Peso": "214 gr",
    "Inclinación del cabezal": "60°",
    colores: [
      { nombre: "Amarillo", hex: "#e3f700", codigo: "13230" },
      { nombre: "Fibra", hex: "#ffffffff", codigo: "53202" }
    ],
    "Unidades por caja": "12 unidades",
    "Código": "13230"
  },
  
  usos: [
    {
      icono: "img/icons/ceramica.svg",
      titulo: "Cerámica y porcelanato pulido",
      descripcion: "Para retirar polvo, tierra fina y marcas de pisada sin opacar el brillo."
    },
    {
      icono: "img/icons/baldosa.svg",
      titulo: "Baldosa y azulejo de baño/cocina",
      descripcion: "Fregado suave con detergente para eliminar residuos de jabón o grasa sin rayar."
    },
    {
      icono: "img/icons/alfombra.svg",
      titulo: "Alfombrado y pisos vinílicos",
      descripcion: "Cepillado liviano para levantar partículas y preparar antes del aspirado o trapeado."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuaga y seca",
      descripcion: "Tras el uso, lava con detergente suave, enjuaga y deja secar con la fibra hacia abajo."
    },
    {
      titulo: "Evita químicos agresivos",
      descripcion: "No uses solventes fuertes ni ácidos/bases concentradas que puedan dañar el taco o endurecer en exceso la fibra."
    },
    {
      titulo: "Almacenamiento correcto",
      descripcion: "Guarda a la sombra y en seco; evita dejar el cepillo apoyado sobre la fibra o sumergido por horas para no deformar las cerdas."
    }
  ]
},

116: { // CEPILLO LAVA AUTOS
  descripcionCompleta: "El Cepillo Lava Autos Wilson limpia con suavidad real y sin rayar la pintura. Su fibra delgada y plumada se siente suave al tacto y cuida acabados automotrices, vidrios y otras superficies delicadas mientras levanta polvo y suciedad con facilidad. El mango con inclinación de 60 grados mejora el alcance en techos, parabrisas y zonas altas y ayuda a trabajar con una postura más cómoda y menos esfuerzo en la muñeca. Incorpora rosca estándar tipo escoba que se adapta a palos comunes de madera o metal para usarlo como te quede mejor.",
  
  caracteristicas: [
    {
      icono: "img/icons/suave.svg",
      titulo: "No raya la pintura",
      descripcion: "Fibra delgada y plumada que limpia con suavidad real y levanta la suciedad sin dejar marcas ni microrayas. Protege acabados automotrices, vidrios y superficies delicadas, ideal para lavado frecuente sin maltratar."
    },
    {
      icono: "img/icons/angulo.svg",
      titulo: "Ángulo ergonómico de 60°",
      descripcion: "Cabezal inclinado que mejora el contacto y el alcance en techos, parabrisas y zonas altas. Permite trabajar de pie con mejor postura, menos esfuerzo en muñeca y pasadas más parejas."
    },
    {
      icono: "img/icons/pluma.svg",
      titulo: "Cuerpo liviano con buen control",
      descripcion: "Cuerpo de polímero rígido que mantiene la fibra firme y reduce la fatiga; se maniobra fácil en emblemas, molduras y curvas."
    }
  ],
  
  especificaciones: {
    "Tipo de fibra": "Delgado plumado y extra suave",
    "Material": "Polietileno (PE) 100% virgen",
    "Largo": "28.5 cm",
    "Altura": "14 cm",
    "Ancho": "5 cm",
    "Peso": "327 gr",
    "Inclinación del cabezal": "60°",
    colores: [
      { nombre: "Amarillo", hex: "#FFD700", codigo: "53220" },
      { nombre: "fibra", hex: "#5692d6ff", codigo: "53220" },
    ],
    "Unidades por caja": "12 unidades",
    "Código": "53220"
  },
  
  usos: [
    {
      icono: "img/icons/auto.svg",
      titulo: "Vehículos",
      descripcion: "Carrocería, techos, vidrios y rines pintados. Humedece primero para soltar polvo y arenilla, aplica espuma o shampoo para autos y desliza el cepillo con pasadas largas; enjuaga bien para un acabado sin marcas."
    },
    {
      icono: "img/icons/casa.svg",
      titulo: "Hogar y comercio",
      descripcion: "Ideal para la limpieza de ventanas, paredes con estuco, bordes decorativos (cenefas), porcelanato brillante, acrílicos y cualquier otra superficie lisa y delicada."
    },
    {
      icono: "img/icons/spray.svg",
      titulo: "Lavado profesional",
      descripcion: "Perfecto para prelavado con espuma y enjuagues a bajo caudal. La inclinación del cabezal en 60° mejora el alcance en zonas altas y permite ritmos de trabajo constantes con menos esfuerzo y mayor control."
    }
  ],
  
  cuidados: [
    {
      titulo: "Enjuaga y sacude después de usar",
      descripcion: "Pásalo bajo el grifo para retirar polvo, arenilla y espuma; dale unos golpecitos suaves para soltar residuos atrapados en la fibra y evitar rayas en el próximo lavado."
    },
    {
      titulo: "Usa limpiadores suaves",
      descripcion: "Trabaja con jabón para autos o jabón neutro. Evita solventes, desengrasantes fuertes y cloro concentrado, ya que pueden endurecer o deformar la fibra y opacar superficies delicadas."
    },
    {
      titulo: "Seca a la sombra y guarda bien",
      descripcion: "Déjalo escurrir y secar a la sombra; evita el sol directo prolongado. Guárdalo colgado o con la fibra hacia abajo para mantener la forma y prolongar su vida útil."
    }
  ]
},




  
  // ... etc
};





// Base de datos de productos Wilson - Importado desde WooCommerce
// Total de productos: 67

const productos = [
  // ===== BROCHAS PREMIER =====
  
    {//PREMIER 1 PULGADA
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-atras.webp"
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
  {//PREMIER 2 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-atras.webp"
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
  {//PREMIER 2.5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-atras.webp"
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
  {//PREMIER 3 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-atras.webp"
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
  {//PREMIER 4 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-atras.webp"
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
  {//PREMIER 5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-atras.webp"
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
  {//PRIMA 1 PULGADA
    id: 62,
    nombre: "BROCHA PRIMA 1 PULGADA",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12420",
    cantidadPorCaja: 48,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-atras.webp"
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
  {//PRIMA 2 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-atras.webp"
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
  {// PRIMA 2.5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-atras.webp"
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
  {//PRIMA 3 PULGADAS
    id: 65,
    nombre: "BROCHA PRIMA 3 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "14428",
    cantidadPorCaja: 20,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-atras.webp"
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
  {//PRIMA 4 PULGADAS
    id: 66,
    nombre: "BROCHA PRIMA 4 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas.",
    
    codigo: "12425",
    cantidadPorCaja: 16,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-atras.webp"
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
  {//PRIMA 5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-atras.webp"
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
  { //FUTURA 1 PULGADA
    id: 69,
    nombre: "BROCHA FUTURA 1 PULGADA",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura.",
    
    codigo: "12219",
    cantidadPorCaja: 48,
    imagenes: [
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-atras-1-scaled.webp"
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
  { //FUTURA 2 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-atras.webp"
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
  { // FUTURA 3 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Atras.webp"
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
  { // FUTURA 4 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Atras.webp"
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
  { //FUTURA 2.5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-atras.webp"
      
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
  { //FUTURA 5 PULGADAS
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
      "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Atras.webp"
      
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
  { // FUTURA ANGULAR
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
    "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-angular-atras.webp"
    
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

  { // BALDE 16 LITROS
    id: 76,
    nombre: "BALDE 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    descripcion: "Diseño ergonómico con agarradera de metal resistente, ideal para trabajos de limpieza. Cumple con las normas FDA para alimentos.",
    codigo: "13355",
  cantidadPorCaja: 20,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-de-lado-con-medida.webp"
    
  ],
  },

  { // BALDE 6 LITROS
    id: 77,
    nombre: "BALDE 6 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    descripcion: "Diseño ergonómico, polietileno resistente con hojas de maple y agarradera de metal resistente. Cumple con las normas FDA para alimentos.",
    codigo: "13361-13362",
  cantidadPorCaja: 12,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-de-lado-con-medida.webp"
    
  ],
  },
  { // BALDE ESCURRIDOR
    id: 698,
    nombre: "BALDE ESCURRIDOR 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
    descripcion: "Balde ultraresistente con escurridor y agarradera que facilita la tarea del hogar",
    codigo: "13320 - 13321",
  cantidadPorCaja: 12,
  imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-superior.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-lado-con-medidas.webp"
  ],

  },
  { //CANECA 5 GALONES
    id: 149,
    nombre: "CANECA 5 GALONES",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    descripcion: "Súper resistente con asa plástica de gran sujeción para facilidad de movimiento. Ideal para transporte de productos fríos o calientes",
    codigo: "3371",
    cantidadPorCaja: 200,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones-con-mededida.webp",
    ],
  },
  { //CANECA 1 GALON
    id: 727,
    nombre: "CANECA 1 GALÓN",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    descripcion: "Caneca metálica resistente ideal para almacenar pinturas y líquidos.",
    codigo: "3372",
    cantidadPorCaja: 200,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon-con-medida.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon-con-tapa-separada.webp"
    ],
  },
  { //ENVASE AMERICANO
    id: 733,
    nombre: "ENVASE AMERICANO 1 LITRO",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    descripcion: "Envase práctico y resistente para almacenamiento de líquidos.",
    codigo: "3373",
    cantidadPorCaja: 255,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    ],
  },
  { //CEPILLO DE COCINA
    id: 109,
    nombre: "CEPILLO DE COCINA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-cocina-de-lado.jpg",
    descripcion: "Ideal para la limpieza en la cocina, frutas, verduras. Mango cómodo, liviano, diseño ergonómico para mejor sujeción. Evita el cansancio de la mano.",
    codigo: "5320",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-cocina-de-lado.jpg",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-cocina-acostado-fondo-blanco.jpg",
    ],
    
  },
  { //CEPILLO DE CONSTRUCIOON
    id: 110,
    nombre: "CEPILLO DE CONSTRUCCIÓN",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-construccion-lateral-2-fondo-blanco-scaled.webp",
    descripcion: "Ideal para barrer y restregar superficies extremadamente duras como patios, garajes, veredas, terrazas. Puede ser utilizado en superficies que tengan residuos de cemento.",
    codigo: "13240",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-construccion-lateral-2-fondo-blanco-scaled.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-construccion-atras-fondo-atras-scaled.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-construccion-lateral-1-fondo-blanco-scaled.webp"
    ],
    
  },
  { //CEPILLO DE INODORO
    id: 111,
    nombre: "CEPILLO DE INODORO",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-inodoro-principal-scaled.webp",
    descripcion: "Cepillo ideal para limpieza de todo tipo de inodoro, mayor cantidad de fibra rizada que ayuda a un cepillado más profundo. Posee mango ergonómico largo de 40 cm.",
    codigo: "13230",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-inodoro-principal-scaled.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-inodoro-sueltos-scaled.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-inodoro-sin-etiqueta-scaled.webp"
    ],
  },
  { //CEPILLO DE ROPA
    id: 112,
    nombre: "CEPILLO DE ROPA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-ropa-1.webp",
    descripcion: "Ideal para prendas de vestir, jeans, chaquetas. Mango cómodo, liviano, diseño ergonómico para mejor sujeción. Evita el cansancio de la mano.",
    codigo: "53202",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-ropa-1.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-ropa-parado-con-etiqueta-fondo-blanco.webp",
    ],
  },
  { //CEPILLO EXTRA DURO
    id: 113,
    nombre: "CEPILLO EXTRA DURO",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-extra-duro-frente-fondo-blanco.webp",
    descripcion: "Ideal para la limpieza de superficies rugosas como cemento, planchas metálicas, techos. Sirve para remoción de pintura o manchas de humedad. No se oxida.",
    codigo: "53290",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-extra-duro-frente-fondo-blanco.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-extra-duro-frente-fondo-blanco.webp",
    ],
  },
  { //CEPILLO FIBRA RECTA
    id: 114,
    nombre: "CEPILLO FIBRA RECTA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-exteriores-2-fondo-blanco.webp",
    descripcion: "Ideal para limpieza de aceras, patios, veredas, garajes. Mango con inclinación de 60° para facilitar la limpieza en pisos duros. Fibra gruesa acabada flexible.",
    codigo: "13235",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-exteriores-3-fondo-blanco.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-exteriores-1.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-de-exteriores-2-fondo-blanco.webp"
    ],
  },
  { //CEPILLO FIBRA RIZADA
    id: 115,
    nombre: "CEPILLO FIBRA RIZADA",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-exteriores-fibra-rizada-fondo-blanco.jpg",
    descripcion: "Ideal para limpieza de aceras, patios, veredas, garajes. Mango con inclinación de 60° para facilitar la limpieza en pisos duros. Fibra rizada acabada flexible.",
    codigo: "13230",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-exteriores-fibra-rizada-fondo-blanco.jpg",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-exteriores-fibra-rizada-frente-fondo-blanco-1-scaled.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-exteriores-fibra-rizada-de-lado-fondo-blanco.webp"
    ],
  },
  {//CEPILLO LAVA AUTOS
    id: 116,
    nombre: "CEPILLO LAVA AUTOS",
    categoria: "Cepillos",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-lava-autos-con-etiqueta.webp",
    
    descripcion: "Ideal para lavar vehículos, vidrios, ventanas, estuco, cenefas gracias a su fibra delgada plumada extra suave, ideal para superficies extra delicadas, no raya.",
    codigo:"53220",
    cantidadPorCaja: 12,
    imagenes: [
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-lava-autos-sin-etiqueta-con-muestra.webp",
    "https://servidinamica.com/wp-content/uploads/2024/10/Cepillo-lava-autos-con-etiqueta.webp",
   
    ],
    
  },
  {//CESTO APILABLE
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

