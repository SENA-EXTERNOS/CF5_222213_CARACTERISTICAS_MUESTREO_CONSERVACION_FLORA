<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Muestreo e inventarios florísticos
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9FK8m7u2jCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h4(data-aos="fade-right") Muestreos técnicos
    
    .BGIMG04.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img01.svg")
        .col-lg-7(data-aos="fade-left")
          p.mb-0 Los inventarios de flora, como ya se ha mencionado antes, son importantes porque permiten detectar cuáles son los elementos claves para la conservación de las especies; por ejemplo, aquellas que están en peligro de extinción, especies importantes para el equilibrio del ecosistema o aquellas que son maderables. Esta acción lleva a entender las dinámicas del ecosistema y aporta a la toma de decisiones que tienen que ver con el manejo y la conservación de la diversidad de flora y de fauna dentro del ecosistema.

    p Un paso fundamental para llevar a cabo muestreos de vegetación es el esclarecimiento de los métodos que se utilizarán ya que estos están relacionados con los objetivos que se espera alcanzar teniendo: 

    .BGIMG03.px-md-5.p-4(data-aos="zoom-in")
      AcordionA(tipo="b" clase-tarjeta="BGR03")
        div(titulo="Conteo total")
          p.mb-0 Consiste en contar cada individuo de una especie o un grupo de especies en el área de estudio. Su uso es frecuente en el conteo de árboles y arbustos para crear listados y analizar la riqueza de las especies.
        div(titulo="Estimación visual")
          p.mb-0 Es hecha para determinar la cobertura de especies en un área de manera cuantitativa y cualitativa. Es común que se utilice para realizar cálculos de todas las formas vegetales que se pueden encontrar en un ecosistema (árboles, arbustos, hierbas, briófitas, musgos y líquenes).
        div(titulo="Parcelas")
          p.mb-0 Son cuadrados que se utilizan para definir el área de muestreo dentro de un sitio mucho más grande, el tamaño del cuadrado va a depender de las características de formación vegetal dentro del ecosistema. Las parcelas usualmente son utilizadas para el muestreo de hierbas, briofitas, musgos y líquenes.
        div(titulo="Transectos")
          p.mb-0 Son utilizados para estudiar los cambios por los que ha pasado la vegetación y poseen un largo variable ―desde unos centímetros hasta kilómetros―. Dependiendo de la pendiente, las formaciones vegetales y los criterios que se tuvieron en cuenta al momento de diseñar la metodología son comúnmente utilizados en el muestreo de árboles, arbustos y hierbas. La vegetación más alta se ve aquí más favorecida.
        div(titulo="Muestreo sin parcelas")
          p.mb-0 Consiste en efectuar los muestreos sin trazar parcelas dentro del área de estudio. Por lo general, se llevan a cabo al menos cincuenta muestreos y teniendo en cuenta la medida del diámetro de los árboles usualmente utilizados para tal muestreo.
        div(titulo="Marcado y mapeo")
          p.mb-0 Consiste en generar marcas en los individuos vistos para el reconocimiento y localización posterior. Se puede realizar cualquier escala, pero generalmente sucede en bosques.
        div(titulo="Cartografía")
          p.mb-0 Consiste en la representación en mapas de acuerdo con la formación vegetal y basándose en el estudio y el reconocimiento de la superficie y el empleo de fotografías aéreas o imágenes satelitales. Se utiliza con regularidad en el muestreo de árboles, arbustos y hierbas.

    .row.justify-content-around.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img02.png")
      .col-lg-4.col-8(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img03.png")
      
    .h4 Métodos para inventarios de diversidad florística
    
    p.mb-5 Para los inventarios de diversidad florística se reconocen varios métodos, pero los que se adaptan a las necesidades de estos son aquellos que utilizan la décima de hectárea (Ferro-Díaz, 2015) para tomar las muestras teniendo:

    .row.mb-4(data-aos="zoom-in")
      AcordionA.mb-5(tipo="a" clase-tarjeta="BGR04")
        .row.align-items-center(titulo="Propuesta metodológica de Gentry")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img04.svg")
          .col-lg-7
            p.mb-0 Es una metodología flexible utilizada para hacer evaluaciones rápidas en las que es posible comparar la información obtenida con una gran base de datos de flora disponibles. Consiste en el establecimiento de diez subparcelas rectangulares de 50 x 2 metros con una ubicación aleatoria; para ellos se toman las mediciones a todas las plantas con un diámetro mayor a 2,5 centímetros.
        .row.align-items-center(titulo="Décima hectárea propuesta por Duivenvoorden")
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img05.svg")
          .col-lg-7
            p.mb-0 Se utiliza con mayor interés en evaluar la estructura y composición florística de un tipo particular de bosque ubicando una parcela de 20 x 5 m, subdividida en 10 subparcelas de 10 x 10 m y muestreando todas aquellas especies con diámetro mayor a 2.5 cm. Este parámetro puede variar de acuerdo con la perturbación que presente el bosque y si se tienen que escoger valores de diámetro inferiores.
    
    p.mb-5 Según lo anterior, en los siguientes gráficos se explica paso a paso el método Whittaker, que es de gran importancia en todo lo relacionado con los inventarios florísticos.
    .h4 Método Whittaker
    p.mb-5 Inicialmente se trataba de un método nidificado en donde era posible realizar mediciones de la diversidad de especies y comparar con otras de distinta ubicación. Consistía en la instalación de subparcelas de 1 m2, 10 m2 y 100 m2 dentro de la parcela de 1 000 m2; este método presentó varias inconsistencias estadísticas y debió ser modificado. Quedó así:

    .BGIMG05.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Paso 1
            p.mb-0 Se debe establecer una parcela de 20 m de ancho x 50 m de largo.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img06.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Paso 2
            p.mb-0 Luego, en el centro de la misma se deberá ubicar una de 5 x 20 m y marcar en el lado A 15 m y 35 m y en el lado B 35 m y 55 m así:
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img07.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Paso 3
            p.mb-0 Posterior a ello, y partiendo desde el punto 0, se deben establecer 10 subparcelas de 0,5 x 2 m rodeando la parcela principal.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img08.svg")
        .row.justify-content-center.align-items-center
          .col-lg-4.order-lg-1.order-2
            .h4 Paso 4
            p.mb-0 Después se establecerán dos subparcelas de 2 x 5 m en los puntos 0 m (a) y 70 m (b).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img09.svg")

    p.mb-5 Al finalizar el proceso de establecimiento de parcelas y subparcelas se iniciará con la búsqueda, medición y registro de las especies presentes en las 10 subparcelas de 0,5 x 2 m comenzando desde la más cercana al punto 0 m. En ellas se registrarán todos los individuos sin tener en cuenta las medidas de sus diámetros. Una vez se haya finalizado este proceso se pasará a la búsqueda y medición de especies en las subparcelas de los puntos 0 y 70 teniendo en cuenta la medida de los diámetros de las especies vegetales de acuerdo con los objetivos del estudio. Luego se pasará a la búsqueda de las especies presentes en la subparcela del centro de 5 x 20 m teniendo en cuenta las mismas consideraciones aplicadas para las subparcelas 0 y 70 m; una vez concluida la búsqueda medición y registro de las subparcelas se hará un barrido a la parcela principal como lo muestra la figura a continuación:  

    figure.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema3/img10.svg")

    .row.justify-content-center
      .col-lg-6.col-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4
          p.mb-0 Se debe tener en cuenta el orden de establecimiento de las parcelas y en ese mismo orden realizar los muestreos para registrarlos en las libretas de campo.
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-10(data-aos="zoom-in")
        img(src="@/assets/curso/tema3/img11.jpg")

    .BGIMG06.px-md-5.px-4
      h4(data-aos="fade-right") Muestreos participativos

      p Los inventarios florísticos, son importantes para conocer el estado de conservación de un ecosistema, las especies que se encuentran en estado de amenaza y para apoyar la reincorporación y aumento de las especies vegetales dentro del mismo, la participación de la comunidad es primordial para su desarrollo, pues es ella quien, inicialmente, provee la información necesaria de la zona de estudio, tal como los nombres comunes de las plantas que serán objeto de estudio. La comunidad también se verá beneficiada por los resultados del estudio y los datos relevantes como el estado de conservación para la toma de acciones sostenibles en dicho ecosistema.

      p Es en este tipo de estudios donde el concepto de etnobotánica toma sentido. Una manera sencilla de definirla es como la disciplina encargada del estudio de la relación recíproca de una comunidad, con el mundo natural:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src="@/assets/curso/tema3/img12.svg")
        .h4 Uso medicinal
        p.mb-0 Esta relación se evidencia en el uso medicinal de extractos vegetales. Los estudios etnobotánicos son interdisciplinarios, de ahí que abarquen muchas áreas del conocimiento como botánica, química, medicina, farmacología, toxicología, nutrición, agronomía, ecología, sociología, antropología, lingüística, historia y arqueología.
      .col-lg-6.col-10(data-aos="fade-left")
        figure.mb-4 
          img(src="@/assets/curso/tema3/img13.svg")
        .h4 Desarrollo de estudios
        p.mb-0 En las últimas décadas la investigación etnobotánica ha mostrado un creciente interés por ampliar los conocimientos de las sociedades nativas y la protección contra la degradación de los hábitats naturales, por ello se realiza teniendo en cuenta aspectos relevantes de la comunidad; estos aspectos son evidenciados en entrevistas semiestructuradas a las comunidades y la aplicación de encuestas previas a la realización del trabajo de campo que busca conocer la importancia que tienen las plantas de ese ecosistema para los pobladores y los usos que estos les dan. La información recogida se consolida como valiosa para el desarrollo de estudios florísticos. 

    h4(data-aos="fade-right") Herramientas y equipos
    
    p.mb-5 Para llevar a cabo un inventario florístico se hace necesaria la utilización de los siguientes materiales: 

    .row.justify-content-around.mb-4
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Metro de modistería o cinta métrica
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img15.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Machetes
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Cortarramas
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img17.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Estacas
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img18.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Brújulas
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Tijeras podadoras
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img20.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Bolsas plásticas transparentes de 30 x 40 cm
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img21.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Cinta de enmascarar
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img22.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Costales de fibra plástica
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img23.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Libretas de campo
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Cabuya o pita plástica
      .col-lg-5.col-md-6.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Marcadores indelebles
      .col-lg-5.col-md-6.col-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
          .tarjeta.color-primario.p-4
            .h4.mb-0.ms-5.mt-2 Etanol al 70 %
      .col-lg-5.col-md-6

    h4(data-aos="fade-right") Normativa
    
    p La recolección de especímenes consiste en la extracción temporal o definitiva del medio natural. Esta extracción se desarrolla, principalmente, con fines de investigación científica no comercial:

    .row.justify-content-center.mb-4
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop')
          .BGR06.p-4
            .h4.text-center.mt-5 Recolección
            p.mb-0 La recolección está regulada en el Decreto 1076 de 2015 en el capítulo 8 que reglamenta la obtención de permisos para actividades de investigación otorgados por las corporaciones autónomas regionales o de desarrollo sostenible.
      .col-lg-4.col-10.mb-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img28.svg' alt='AvatarTop')
          .BGR06.p-4
            .h4.text-center.mt-5 Desarrollo
            p.mb-0 Cuando dichas actividades se desarrollen en su jurisdicción: la Autoridad Nacional de Licencias Ambientales (ANLA), y en caso de que las actividades de recolección se desarrollen en jurisdicción de dos o más autoridades ambientales y Parques Nacionales Naturales de Colombia.
      .col-lg-4.col-10.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img29.svg' alt='AvatarTop')
          .BGR06.p-4
            .h4.text-center.mt-5 Institucional
            p Cuando dichas actividades se realicen dentro de las áreas protegidas del sistema de Parques Nacionales Naturales y sean solicitados por:
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Instituciones de educación superior 
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Colecciones biológicas registradas en el Registro Único Nacional de Colecciones Biológicas (RNC) 
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Institutos o centros de investigación categorizados ante Colciencias y con áreas temáticas asociadas a la recolección. 
 
    .BGIMG02.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema3/img30.svg")
        .col-lg-7
          p.text-white.mb-0 La obtención de los permisos estará sujeta a condiciones como la aprobación del Ministerio de Educación Nacional de programas académicos que se relacionen con actividades de recolección; tales programas deberán contar con diferentes campos de investigación asociados a las actividades de recolección y contar con grupos de investigación categorizados ante Colciencias; además deberán contar con una dependencia encargada de los programas de investigación científica y con un sistema de información de registro y seguimiento de proyectos de investigación.


    h4(data-aos="fade-right") Bioseguridad
    
    p Los investigadores que se encuentren realizando actividades de campo deberán contar con los debidos elementos de protección personal para evitar los accidentes que se puedan presentar durante la realización de inventarios florísticos. Accidentes que puedan ser caídas, torceduras, picaduras de insectos o cualquier otro percance. Entre los elementos de protección se encuentran:


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-10.order-lg-1.order-2
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img31.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido.p-4
            .h4.ms-5.mt-4 Cascos
            p.ms-5 Protectores de la cabeza como cascos contra choques.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img32.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido.p-4
            .h4.ms-5.mt-4 Protectores
            p.ms-5 Protectores para todo el cuerpo como botas, guantes, entre otros.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img33.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido.p-4
            .h4.ms-5.mt-4 Calzado de seguridad
            p.ms-5 Protectores de pies y piernas como calzado de seguridad (este comprende botas plásticas o botas de campo).
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img34.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 Lo anterior en cuanto a equipos de protección individual. En cuanto a vestuario es recomendada la ropa cubierta, cómoda y que además se pueda ensuciar, pues las labores de campo involucran el muestreo de plantas, las cuales pueden manchar la ropa con pigmentos vegetales o con la tierra que se desprende al extraer las muestras del medio.

    .h4 Colección de especies
    p Para la colección de especies vegetales se deben tener en cuenta los siguientes aspectos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img35.png")
      .col-lg-8(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Se deben llevar bolsas plásticas transparentes en las que se depositen las muestras de cada planta que se colecta teniendo precaución de que no se deterioren y evitando que se confundan estructuras desprendidas de las plantas que fueron colectadas; dichas muestras pueden ser depositadas en un costal, así se protegen doblemente. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Una vez organizados los ejemplares colectados, se deberán hacer paquetes con periódicos que sirvan como prensa ubicando el material vegetal con las hojas entrecruzadas y amarrándolos con cabuya para crear el mismo efecto de las prensas. Cada uno de estos paquetes deberá rotularse con marcador indeleble.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Las muestras vegetales deben ser alcoholizadas uno o dos días después de haber sido colectadas y prensadas. Para esto se utiliza alcohol al 70% para evitar que se pierdan hojas o se comience a degradar el material.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Es fundamental contar con una libreta de campo a fin de llevar una secuencia de números de colección y siguiendo las secuencias planteadas con antelación. No se deben crear secuencias nuevas en la descripción detallada del espécimen.

    .BGIMG06.px-md-5.px-4
      h4(data-aos="fade-right") Registros
      
      p Para los inventarios florísticos se hace necesaria la información lo más detallada posible del material vegetal colectado en una zona específica, es por esta razón que debe contener información relevante de la planta y de la zona en la cual fue colectada; así se tendrá un registro completo, también con la información necesaria para la etiqueta de colección de herbario. Para el material vegetal colectado se deberá tener la siguiente información:
      .row.justify-content-center.mb-4
        .col-lg-7(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/img36.svg")

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 1
            p.mb-0 #[b Localidad]: debe contener información geográfica con el mayor nivel de detalle posible como hidrografía, división político-administrativa (país, departamento, municipio, corregimiento, inspección de policía, vereda), relieve (cordillera, macizo, serranía, alto, loma, cerro, cuchilla), de igual manera datos sobre si hace parte de un parque nacional natural, un resguardo indígena, un parque municipal, una reserva forestal, una reserva privada, entre otros.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 2
            p.mb-0 #[b Coordenadas geográficas]: latitud y longitud de la zona de muestreo.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 3
            p.mb-0 #[b Altitud]: descripción en metros sobre el nivel del mar (m s.n.m.) de la zona en donde se colectó la muestra.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 4
            p.mb-0 #[b Fecha]: en formato DD/MM/AAAA.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 5
            p.mb-0 #[b Número de colección]: número asignado para la colección.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 6
            p.mb-0 #[b Determinación taxonómica]: género y familia (de ser posible). 
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 7
            p.mb-0 #[b Hábito]: descripción del porte o aspecto de la planta.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 8
            p.mb-0 #[b Determinador]: nombre de la persona que categorizó taxonómicamente la planta.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 9
            p.mb-0 #[b Notas descriptivas]: incluye todas las características del ejemplar colectado que se puedan perder en el proceso y que no sean detectables después, tales como: formas, colores, olores, sabores, exudados, descripción de la corteza, altura del individuo y medidas de diámetro de tronco.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 10
            p.mb-0 #[b Tipo de procesamiento]: se describe el procedimiento por el cual se herborizó la muestra (proceso de prensado), si fue sometida a alcohol y, de ser posible, el proceso de secado de la misma.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 11
            p.mb-0 #[b Número de duplicados]: número de ejemplares prensados de cada colección.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 12
            p.mb-0 #[b Nombre común]: el nombre de la planta utilizado por los pobladores de la zona en donde se realizó la colecta.
          li 
            .lista-ol--cuadro__vineta(style="background-color:#148D80")
              span 13
            p.mb-0 #[b Otras evidencias]: se debe consignar otro tipo de evidencias del material colectado como frutos, flores o muestras de material genético.

    .row.justify-content-center.mb-4
      .col-lg-10.cajon-b.color-acento-botones.p-3(data-aos="flip-up")
        p.mb-0 Con toda la información registrada, y después de que las muestras de material vegetal son llevadas al herbario, se realizan las etiquetas de colección donde se sintetizan los datos así:

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="zoom-in")
        img(src="@/assets/curso/tema3/img37.svg")


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
