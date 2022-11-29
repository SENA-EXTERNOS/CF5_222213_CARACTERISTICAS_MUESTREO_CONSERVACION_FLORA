export default {
  global: {
    componenteFormativo: 'Características, muestreo y conservación de la flora',
    descripcionCurso:
      'La flora silvestre, además de proveer servicios ecosistémicos y paisajísticos, se constituye como indicador de estado y conservación de un ecosistema; dicha información se obtiene a través de los inventarios florísticos que brindan la información necesaria para conocer no solo este aspecto, sino para profundizar en la diversidad vegetal presente y la necesidad de incorporar nuevas especies en un ecosistema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Flora silvestre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Taxonomía vegetal y niveles de organización ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Oferta y biodiversidad florística',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ecosistemas y valoración del recurso estético',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Afectaciones y riesgos de la flora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cambio climático',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tráfico ilegal',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Marco normativo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Muestreo e inventario florísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Muestreos técnicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Muestreos participativos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas y equipos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Normativa',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Bioseguridad',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Registros',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo, conservación y restauración ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Afectaciones y riesgos de la flora',
      referencia:
        'Godoy, M.E y Amen, B.E (2018): Incidencia del calentamiento global en la flora y fauna del Ecuador, Revista Delos (Desarrollo Local Sostenible) n.31 (febrero 2018).',
      tipo: 'Artículo',
      link: 'https://www.eumed.net/rev/delos/31/Maria-Godoy-calentamiento.html',
    },
    {
      tema: 'Diversidad florística',
      referencia:
        'Aguirre M, Z (2013): Guía de métodos para medir la biodiversidad.',
      tipo: 'Guía',
      link:
        'https://corporacionbiologica.info/wp-content/uploads/2021/04/guia-para-medi-de-la-biodi-.pdf',
    },
    {
      tema: 'Métodos de muestreo',
      referencia:
        'Ferro-Díaz, J. (2015). Manual revisado de métodos útiles para el muestreo y análisis de la vegetación. Ecovida Vol.5 No.1',
      tipo: 'Guía',
      link: 'https://revistaecovida.upr.edu.cu',
    },
    {
      tema: 'Manejo, conservación y restauración de la flora',
      referencia:
        'MinAmbiente Colombia et al. (2019). Iniciativas de conservación en Colombia: reconociendo esfuerzos a nivel local, regional y nacional.',
      tipo: 'Proyecto ',
      link:
        'https://www.asocars.org/wp-content/uploads/2020/09/Iniciativas-conservacion-Colombia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aicas',
      significado: 'áreas enfocadas en el cuidado de las aves.',
    },
    {
      termino: 'Bioindicador',
      significado:
        'especie vegetal o agrupación de especies que brindan información sobre el estado de un ecosistema.',
    },
    {
      termino: 'Características morfológicas',
      significado: 'características observables de una planta.',
    },
    {
      termino: 'Determinación taxonómica',
      significado: 'clasificación de una planta por género y especie.',
    },
    {
      termino: 'Efecto de borde',
      significado: 'límites entre un ecosistema natural y uno modificado.',
    },
    {
      termino: 'Humedales Ramsar',
      significado:
        'ecosistemas acuáticos cuyas características los hacen áreas protegidas y sitios de conservación por sus características biológicas y ecológicas.',
    },
    {
      termino: '<em>Key biodiversity are.as</em>',
      significado: 'ecosistemas con altos índices de biodiversidad.',
    },
    {
      termino: 'Exudado',
      significado: 'sustancias secretadas por las plantas.',
    },
    {
      termino: 'Nidificado',
      significado:
        'ubicación de subparcelas una dentro de la otra que forma una especie de “nidos”.',
    },
    {
      termino: 'Zonas amortiguadoras',
      significado:
        'son las encargadas de crear una barrera para proteger de perturbaciones externas las áreas protegidas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ferro-Díaz, J. (2015). <em>Manual revisado de métodos útiles para el muestreo y análisis de la vegetación. Ecovida, 5(1).</em>',
      link: 'https://revistaecovida.upr.edu.cu',
    },
    {
      referencia:
        'Maldonado et al. (2018). <em>Estructura y composición florística de un bosque siempreverde montano bajo en Palanda, Zamora Chinchipe, Ecuador</em>. Arnaldoa 25 (2): 615-630, 2018.',
      link: 'http://www.scielo.org.pe/pdf/arnal/v25n2/a16v25n2.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015. <em>Decreto único reglamentario del sector ambiente y desarrollo sostenible 26 de mayo de 2015.</em>',
    },
    {
      referencia: 'Normatividad flora.',
      link: 'https://www.ambientebogota.gov.co/normatividad-flora',
    },
    {
      referencia:
        'Morales et al. (2017). <em>Briófitos: un mundo en miniatura</em>. Infoflora.',
      link:
        'https://www.unimagdalena.edu.co/Content/Public/Docs/Entrada_Facultad3/adjunto_1029-20181004104040_495.pdf',
    },
    {
      referencia:
        'Cuatrecasas A, J. (2017). <em>Aspectos de la vegetación natural de Colombia</em>. Rev. Acad. Colomb. Cienc. Ex. Fis. Nat. 41(Suplemento):100-181, diciembre de 2017.',
      link: 'https://raccefyn.co/index.php/raccefyn/article/view/570',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
