// Base de datos de productos Wilson - Importado desde WooCommerce
// Total de productos: 67

const productos = [
  {
    id: 54,
    nombre: "BROCHA PREMIER 1 PULGADA",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-1-pulgada-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 56,
    nombre: "BROCHA PREMIER 2 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-premiere-2-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 57,
    nombre: "BROCHA PREMIER 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-2.5-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 58,
    nombre: "BROCHA PREMIER 3 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-3-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 60,
    nombre: "BROCHA PREMIER 4 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-4-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 61,
    nombre: "BROCHA PREMIER 5 PULGADAS",
    categoria: "Brochas",
    marca: "Premier",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Premier-5-frente.webp",
    descripcion: "Ideal para todo tipo de uso con un acabado perfecto, rápido y poco esfuerzo, gracias a que retiene una gran cantidad de pintura. Para el pintor resulta ECONÓMICA por su larga vida útil."
  },
  {
    id: 62,
    nombre: "BROCHA PRIMA 1 PULGADA",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-1-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 63,
    nombre: "BROCHA PRIMA 2 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 64,
    nombre: "BROCHA PRIMA 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-2-1.2-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 65,
    nombre: "BROCHA PRIMA 3 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-3-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 66,
    nombre: "BROCHA PRIMA 4 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-4-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 68,
    nombre: "BROCHA PRIMA 5 PULGADAS",
    categoria: "Brochas",
    marca: "Prima",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Prima-5-pulgada-frente.webp",
    descripcion: "Brocha ideal para un acabado delicado, uniforme y fino. Sirve para la aplicación de lacas, tintes y pinturas no muy espesas."
  },
  {
    id: 69,
    nombre: "BROCHA FUTURA 1 PULGADA",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "1 pulgada",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-1-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 70,
    nombre: "BROCHA FUTURA 2 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 71,
    nombre: "BROCHA FUTURA 3 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-3-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 72,
    nombre: "BROCHA FUTURA 4 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "4 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-4-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 73,
    nombre: "BROCHA FUTURA 2,5 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "2.5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-2.5-pulgada-frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 75,
    nombre: "BROCHA FUTURA 5 PULGADAS",
    categoria: "Brochas",
    marca: "Futura",
    tamano: "5 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Brocha-Futura-5-Frente.webp",
    descripcion: "Es perfecta para pintar metales, maderas, paredes y superficies rugosas. Las puntas horquilladas dejan un acabado liso, nivelado. Recoge y mantiene muy bien la pintura."
  },
  {
    id: 121,
    nombre: "BROCHA FUTURA ANGULAR",
    categoria: "Brochas",
    marca: "Futura",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/angular.webp",
    descripcion: "Son hechas con fibras largas de poliéster que retienen una gran cantidad de pintura para trabajo rápido y con poco esfuerzo. Mango ergonómico de polipropileno de primera calidad."
  },
  {
    id: 76,
    nombre: "BALDE 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-16-litros-frente-1.webp",
    descripcion: "Diseño ergonómico con agarradera de metal resistente, ideal para trabajos de limpieza. Cumple con las normas FDA para alimentos."
  },
  {
    id: 77,
    nombre: "BALDE 6 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Balde-flor-de-liz-6-litros-frente.webp",
    descripcion: "Diseño ergonómico, polietileno resistente con hojas de maple y agarradera de metal resistente. Cumple con las normas FDA para alimentos."
  },
  {
    id: 698,
    nombre: "BALDE ESCURRIDOR 16 LITROS",
    categoria: "Baldes",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Balde-escurridor-16-litros-frente.webp",
    descripcion: "Balde ultraresistente con escurridor y agarradera que facilita la tarea del hogar"
  },
  {
    id: 149,
    nombre: "CANECA 5 GALONES",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Caneca-5-galones.webp",
    descripcion: "Súper resistente con asa plástica de gran sujeción para facilidad de movimiento. Ideal para transporte de productos fríos o calientes"
  },
  {
    id: 727,
    nombre: "CANECA 1 GALÓN",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Caneca-1-galon.webp",
    descripcion: "Caneca metálica resistente ideal para almacenar pinturas y líquidos."
  },
  {
    id: 733,
    nombre: "ENVASE AMERICANO 1 LITRO",
    categoria: "Canecas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/11/Envase-americano-1-litro-2.webp",
    descripcion: "Envase práctico y resistente para almacenamiento de líquidos."
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
    categoria: "Espatulas",
    tamano: "2 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Espatula-2-pulgadas.webp",
    descripcion: "Las Espátulas Wilson son hechas con plástico resistente ideal para tapar irregularidades, aplicar pasta o yeso, para tapar huecos o fallas, para pastelería."
  },
  {
    id: 141,
    nombre: "ESPÁTULA 3 PULGADAS",
    categoria: "Espatulas",
    tamano: "3 pulgadas",
    imagen: "https://servidinamica.com/wp-content/uploads/2024/10/Espatula-3-pulgadas.webp",
    descripcion: "Las Espátulas Wilson son hechas con plástico resistente ideal para tapar irregularidades, aplicar pasta o yeso, para tapar huecos o fallas, para pastelería."
  },
  {
    id: 142,
    nombre: "ESPÁTULA 4 PULGADAS",
    categoria: "Espatulas",
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
    categoria: "Ofertas",
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

let lineaActual = null;

function mostrarDetalles(linea, element = null) {
  lineaActual = lineasData[linea];
  
  // DESKTOP: Actualizar panel principal
  if (window.innerWidth > 768) {
    const panel = document.getElementById('panelDetalles');
    
    // Actualizar título
    document.getElementById('detallesTitulo').textContent = lineaActual.titulo;
    
    // Actualizar imagen principal
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    imagenPrincipal.src = lineaActual.imagenes[0];
    
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
    thumbnails[0].classList.add('active');
    
    // Actualizar botón Ver Más
    document.getElementById('btnVerMasPanel').href = lineaActual.url;
    
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

// Inicializar el panel con la primera línea al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarDetalles('premier');
});

function cerrarDetalles() {
  // Remover clase active de todas las cards
  document.querySelectorAll('.linea-card').forEach(card => {
    card.classList.remove('active');
  });
}

function cambiarImagenPrincipal(index) {
  if (!lineaActual) return;
  
  const imagenPrincipal = document.getElementById('imagenPrincipal');
  imagenPrincipal.src = lineaActual.imagenes[index];
  
  // Actualizar thumbnails activos
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(t => t.classList.remove('active'));
  thumbnails[index].classList.add('active');
}