<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Afectaciones y riesgos de la flora 
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-primario.img-inv.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
          )(data-aos="fade-left")
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 Las acciones dirigidas a causar algún daño a los componentes bióticos del ecosistema (fauna y flora) tienen un impacto evidenciable en el ambiente. Estos impactos pueden derivar de prácticas ilícitas, productos ilícitos y lugares inapropiados; además, los delitos en contra de la fauna y la flora pueden ocurrir en el país de origen, en sitios de tránsito y en los países de destino. Los riesgos que corre la flora son clasificados en: tala y cosecha ilegal, posesión ilícita, procesamiento ilícito de material vegetal, exportación ilícita, suministro y venta de ilícitos, procesamiento ilícito y consumo ilícito.
    
    .BGIMG04.p-4.mb-4
      .row.justify-content-center.align-items-end
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img02.svg")
        .col-lg-7(data-aos="fade-left")
          p.mb-0 La expresión “tala ilegal” ha sido utilizada durante mucho tiempo para hacer referencia al corte de árboles. No ha sido definida técnicamente ni se tiene evidencia de una descripción en el derecho internacional; no obstante, la tala ilegal por lo general se refiere a actividades como la tala de especies de árboles protegidas o amenazadas; tala de árboles en áreas protegidas como parques naturales o áreas de conservación; tala excesiva; tala sin permisos o con permisos falsos; obtención ilegal de permisos de tala; no pago de tasas y aranceles forestales; tala que afecta ecosistemas forestales con daño a los árboles por actividades como el descortezamiento y la quema. Esto último porque la mayoría de los países permiten la remoción de árboles dañados con el fin de evitar incendios y otros peligros asociados a los cambios observables en las cortezas de los árboles que terminarían perjudicando a comunidades indígenas y personas cuyas labores se encuentran condicionadas por la prevalencia de la flora en una zona determinada.

    .BGIMG06.px-md-5.px-4
      separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Cambio climático

      p Las afectaciones drásticas generadas por el calentamiento global han sido evidenciables en casi todas las actividades humanas con el aumento de desastres naturales, sequías, subidas del nivel del mar y pérdida de la biodiversidad. En lo que se refiere a la vegetación, esta se ha visto afectada en especial por la frecuencia de lluvias e inundaciones que causan efectos de escorrentía y por ende un barrido de nutrientes importantes para el suelo, lo que a su vez genera la disminución de hábitats, de biodiversidad y termina favoreciendo la reproducción de plagas que afectan sobre todo los cultivos.
    
      separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Tráfico ilegal
    
      p El tráfico ilegal es un término asociado a cualquier acción que atente contra la naturaleza y su equilibrio. 

    .row.mb-5(data-aos="zoom-in")
      SlyderC(:datos="datosSlyder")

    .BGIMG06.px-md-5.px-4
      separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Marco normativo
      
      p.mb-5 En Colombia la expedición de leyes y decretos en pro de preservar el medio ambiente, y en especial la flora, se han venido dando desde el año 1977. En dichas leyes se contemplan todas aquellas acciones pertinentes a la protección de la flora y los productos forestales en el país, el decomiso de productos de la flora silvestre, supervisión de entrada y salida de material vegetal al país, funciones de control y vigilancia para la defensa de la flora, reglamentación de centros de apoyo técnico como los jardines botánicos, obligaciones, prohibiciones y deberes con la flora silvestre del país.
      .h4 Marco normativo
      p Las leyes, decretos y resoluciones (incluidos planes de acción y documentos CONPES) que tienen que ver con la flora y los aspectos relacionados con su protección y conservación son los siguientes:

    .row.justify-content-center.mb-4
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 213 de 1977
              p.mb-0 Se establece la veda para algunas especies y productos de la flora silvestre.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img05.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img06.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Ley 17 del 22 de enero de 1981
              p.mb-0 Supervisión de la entrada y salida del país de material vegetal no autorizado y exigencia de la documentación que soporte la importación y exportación de especímenes o productos provenientes de la flora silvestre que se encuentren listados en el CITES.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Ley 61 de 1985
              p.mb-0 Prohibición de la tala de palma de cera y verificación de la prohibición de su aprovechamiento.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img07.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img08.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Ley 99 de 1993
              p.mb-0 Se establece el ejercicio de las funciones de control y vigilancia para la defensa de la flora silvestre.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Ley 299 de 1996
              p.mb-0 Las hojas tienen un crecimiento continuo y vida limitada, a diferencia de otras estructuras de la planta como las raíces o el tallo, que crecen de manera ilimitada durante toda su vida.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img09.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img05.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Decreto 1909 del 26 de septiembre del 2000
              p.mb-0 Control al tráfico internacional de flora silvestre por los puertos terrestres y áreas marítimas y fluviales autorizadas en el país.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 13677 del 2000
              p.mb-0 Procedimiento para autorizaciones de importación y exportación de especímenes de la diversidad biológica que no se encuentren listados en los apéndices de la convención CITES.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img06.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img07.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Ley 599 del 2000
              p.mb-0 Control del aprovechamiento, movilización y comercialización de los productos forestales de la flora silvestre.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 438 de 2001
              p.mb-0 Salvoconducto único nacional para la movilización de especímenes de la diversidad biológica.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img08.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img09.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Resolución 4541 junio de 2001
              p.mb-0 Expedición de certificación de exportación e importación de productos de la flora silvestre y/o terminados.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 619 de 2002
              p.mb-0 Verificación de movilización de productos forestales primarios provenientes de plantaciones forestales.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img05.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img06.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Resolución 1263 del 30 de junio de 2006
              p.mb-0 Trámite para la realización de exportaciones de especímenes de la flora incluidos en la convención CITES.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Decreto 1498 de 2008
              p.mb-0 Indica la obligación de la remisión de movilización para productos de transformación primaria provenientes de cultivos forestales y/o sistemas agroforestales con fines comerciales registrados, la información del contenido y la validez del mismo.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img07.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img08.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Ley 1377 de 2010
              p.mb-0 Contempla la verificación de movilización de productos forestales provenientes de plantaciones forestales.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 2064 de 2010
              p.mb-0 Disposición de especímenes de la flora silvestre decomisada y decomiso de los productos de la flora silvestre.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img09.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img05.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Ley 1453 de 2011
              p.mb-0 Ejercer las funciones de control y vigilancia para la defensa de la flora silvestre.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Decreto 1076 de 2015
              p.mb-0 Decreto único reglamentario del sector ambiente y desarrollo sostenible.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img06.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img07.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Plan de acción 2015
              p.mb-0  “Bosques territorios de vida: Estrategia integral de control a la deforestación y gestión de los bosques”.
          .row.justify-content-between.align-items-center
            .col-lg-7.col-9(data-aos="fade-right")
              .h4 Resolución 1909 de 2017
              p.mb-0 Expedición del salvoconducto único nacional para la movilización de especímenes de la diversidad biológica y control al tráfico de productos de la flora silvestre.
            .col-lg-2.col-3(data-aos="fade-left")
              img(src="@/assets/curso/tema2/img08.svg")
          .row.justify-content-between.align-items-center
            .col-lg-2.col-3(data-aos="fade-right")
              img(src="@/assets/curso/tema2/img09.svg")
            .col-lg-7.col-9(data-aos="fade-left")
              .h4 Conpes 4021 del 21 de diciembre de 2020
              p.mb-0 Política nacional para el control de deforestación y la gestión sostenible de los bosques.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Tráfico de fauna',
        texto:
          'Esta problemática incluye tanto recursos naturales como formas de vida. Se considera la extracción ilegal como una de las principales causales de extinción y alteración de los ecosistemas.',
        imagen: require('@/assets/curso/tema2/img03.png'),
      },
      {
        titulo: 'Tráfico de flora',
        texto:
          'En lo que tiene que ver con la flora, especies de plantas como bromelias, cactus, helechos, venus atrapamoscas, orquídeas, palmas, guayacán y palosanto se reportan como en peligro de extinción en el apéndice I de la CITES (Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres) por ser recolectadas generalmente como accesorios ornamentales o como parte de rituales religiosos.',
        imagen: require('@/assets/curso/tema2/img04.png'),
      },
    ],
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
