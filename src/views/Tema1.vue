<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Flora silvestre
    
    .BGIMG02.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema1/img01.svg")
        .col-lg-7
          p.text-white.mb-0 Las plantas han interactuado con el hombre durante toda su existencia y representan gran valor para la humanidad al proveer servicios ecosistémicos como alimentación, refugio, medicina, material de construcción, combustible, obtención de energía y gran variedad de beneficios que los humanos han aprovechado desde el inicio de las civilizaciones. Del mismo modo, las comunidades campesinas se han beneficiado de la flora por medio del cultivo y venta de productos provenientes de las plantas, actividad con la que sostienen la economía de muchas familias de varios países de Suramérica. 
          
    .row.justify-content-center.mb-4
      .col-lg-10.cajon-b.color-primario.p-3(data-aos="fade-right")
        p.mb-0 La flora silvestre corresponde a la disponibilidad de material vegetal en un ecosistema donde se combinan factores bióticos y abióticos que dan lugar a la diversidad. La flora hace parte de los ecosistemas terrestres, es generada por distintos procesos de evolución como resultado de la interacción, principalmente con los animales y elementos del ambiente como la luz, la temperatura, la humedad y el suelo; de esta manera genera todas las condiciones favorables para aumentar la diversidad de las especies, sobre todo las vegetales. En este punto resulta importante anotar que la diversidad se expresa en número de especies por área; la flora silvestre puede ser cuantificada y ser un factor determinante en el estado de conservación de un ecosistema.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Taxonomía vegetal y niveles de organización
    
    p Para la determinación de aspectos relevantes como la diversidad de las plantas es necesario usar estrategias que posibiliten el conocimiento y agrupen las plantas según sus características. Esta estrategia se llama taxonomía, la cual se ha encargado de dividir las plantas en dos grandes grupos: briofitas y cormofitas.

    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/tema1/img02.svg")
    
    .h4 Taxonomía vegetal

    .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
      p.mb-0 Existen diferentes relaciones de parentesco entre las plantas; estas relaciones permiten agrupar y clasificar cada una de las especies según las similitudes o diferencias que suelen ser de tipo morfológico, cariológico, fitogeográfico, genético, entre otros aspectos que se tienen en cuenta en este proceso.
    
    .BGIMG03.p-md-5.p-4.mb-4
      .row.mb-5(data-aos="fade-right")
        SlyderB(:datos="datosSlyder")

      .BGIMG04.p-4.mb-4
        .row.justify-content-center.align-items-end
          .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img05.svg")
          .col-lg-7(data-aos="fade-left")
            p.mb-0 Es importante anotar que las plantas briofitas están representadas por tres líneas evolutivas en las que se encuentran los musgos, las hepáticas y los antoceros. Están divididas en 9 000 especies de musgos, 7 500 de hepáticas y 250 de antoceros (Morales et al, 2017). Su importancia ecológica radica en ser recolectoras de agua e indicadoras de pH, y su abundancia en los bosques es imprescindible para prevenir la erosión y generar estabilidad de terrenos inclinados. Se encuentran disponibles en todo el planeta, pero de manera particular se hallan en los trópicos formando tapetes en el suelo. Están asociadas a zonas húmedas por lo que es común encontrarlas en cascadas, zonas de salpicadura, árboles y bordes de los arroyos.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img06.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Por otro lado, las plantas cormofitas se dividen en dos grandes grupos. En primer lugar están los pteridofitos (pteris: una especie de helecho) o plantas vasculares sin semilla caracterizadas por un mayor contenido de nutrientes y porque ―a diferencia de los musgos, hepáticas y antoceros― se elevaron del suelo por tener un sistema vascular desarrollado; de esta clasificación se destacan los helechos y las colas de caballo. El segundo gran grupo es el de los espermatofitos (esperma: semilla, fito: planta) o plantas vasculares con semilla, el cual se subdivide en gimnospermas ―con tejidos vasculares y semillas que no dan frutos―; y angiospermas que, además de tener semillas, producen frutos y flores. La mayoría de plantas se agrupa en esta categoría, a la postre la más importante para los humanos dado que de aquí se derivan los alimentos.

    .h4 Plantas cormofitas
    p De manera general, se pueden señalar las siguientes características en las diferentes especies de plantas que se clasifican dentro de la categoría de cormofitas.

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-contenido
          .BGR01.p-4(titulo="Organismos vivos")
            .h4 Organismos vivos
            p.mb-0 Son aquellos adaptados a la vida sobre la tierra con todo lo que esta implica; con una raíz que les permite absorber el agua del suelo y sustentar sus procesos de vida.
          .BGR01.p-4(titulo="Procesos fotosintéticos")
            .h4 Procesos fotosintéticos
            p.mb-0 Toman la energía necesaria de la luz solar y la transforman en energía química; para ello se diferencian en hojas que captan y transforman la luz solar y tallos que sostienen y distribuyen las hojas.
          .BGR01.p-4(titulo="Reproducción")
            .h4 Reproducción
            p.mb-0 Se reproducen por medio de las semillas o de manera asexual (poco común) como alternativa.
          .BGR01.p-4(titulo="Hábitat")
            .h4 Hábitat
            p.mb-0 Viven en un ambiente que no pueden modificar ya que son sésiles (unidas a una estructura) y con estructuras que las hacen inmóviles.
          .BGR01.p-4(titulo="Ciclo de vida")
            .h4 Ciclo de vida
            p.mb-0 Las hojas tienen un crecimiento continuo y vida limitada; a diferencia de otras estructuras de la planta como las raíces o el tallo que crecen de manera ilimitada durante toda su vida.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img07.png")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Oferta y biodiversidad florística
    
    p Por contar con una gran riqueza de flora, Colombia es una de las pocas partes del mundo en donde la vegetación selvática cubre aún la mayor parte de su territorio. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img08.svg")
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR02")
          div(titulo="Riqueza natural")
            p.mb-0 De oeste a este, de norte a sur, y desde los lugares más fríos hasta los más cálidos, se encuentra material vegetal que no solo protege, sino que embellece el territorio nacional.
          div(titulo="Biodiversidad")
            p.mb-0 Otro de los aspectos fascinantes sobre la vegetación de Colombia es que, aunque sea tomada como una capa “uniforme”, contiene gran variedad de especies y de ecosistemas asociados a ellas; ello se debe a aspectos como su localización en zona tropical donde se presentan fuertes lluvias, altas temperaturas, terrenos corrugados y montañosos, lo que propicia medios ecológicos llenos de diversidad que dan lugar a distintas formaciones vegetales como: 
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Selva neotropical, dividida en: selva neotropical inferior, selva neotropical subandina o bosque subandino y selva andina o bosque andino.
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Formaciones de páramo, dividido en: subpáramo, páramo propiamente dicho y superpáramos. 
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | La sabana, compuesta por la sabana casmófita.
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Formaciones de especies arbustivas o suculentas (xerófitas o subxerófitas). 
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Manglares
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Formaciones de playas y márgenes
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Prados
              li
                <i class="fas fa-circle" style="color:#12263F; font-size: x-small"></i>
                | Formaciones acuáticas

    separador
    .BGIMG03.px-md-5.px-4.mb-4
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Ecosistemas y valoración del recurso estético
      
      p Los ecosistemas en los que se encuentra gran cantidad de árboles son comúnmente denominados como bosques. Veamos algunas características:

      .BGIMG05.p-4.mb-4(data-aos="zoom-in")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-4.order-lg-1.order-2
              .h4 Características
              p.mb-0 Los bosques son un sistema de bloques (árboles) con características y tamaños diferentes. En ellos se reflejan las consecuencias de perturbaciones naturales o aquellas generadas por el hombre en tiempos determinados.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img09.png")
          .row.justify-content-center.align-items-center
            .col-lg-4.order-lg-1.order-2
              .h4 Flora y fauna
              p.mb-0 Estos bosques cuentan con diferentes especies de flora y fauna asociadas con el medio que las rodea y que conforman un sistema interdependiente con características propias y múltiples funciones como la generación de oxígeno y la protección del suelo.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img10.png")
          .row.justify-content-center.align-items-center
            .col-lg-4.order-lg-1.order-2
              .h4 Función
              p.mb-0 Protegen todas las formas de vida funcionando como reservas genéticas por la gran variedad que allí se puede encontrar, también facilitan procesos productivos como la polinización; además de que funcionan como control biológico para algunas plagas. Son fuente de materia prima, allí se llevan a cabo importantes procesos de degradación y aprovechamiento de desechos orgánicos.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img11.png")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Briofitas',
        texto:
          'Son plantas sin tejidos, de coloraciones verdes o rojizas y especializadas en el transporte de nutrientes y agua. Se encuentran en hábitats muy variados, desde el nivel del mar hasta los 4 500 m s.n.m. También, se usan como base para germinar semillas, fijan compuestos como dióxido de carbono, óxido de hierro, cobre, plomo y cadmio; y funcionan como bioindicadores para el monitoreo ambiental de metales pesados y lluvia ácida. Algunas plantas trepadoras crecen sobre estas, contienen pesticidas naturales y sustancias que evitan la herbivoría de algunos animales.',
        imagen: require('@/assets/curso/tema1/img03.jpg'),
      },
      {
        titulo: 'Cormofitas',
        texto:
          'Poseen cormo con raíz, tallo y hojas verdaderas, además de tejidos especializados para el transporte de agua, minerales y nutrientes que le permitirán el almacenamiento de energía y servirán de soporte. Estos tejidos reciben el nombre de xilema, el cual lleva agua y nutrientes desde las raíces al resto de la planta; y floema, que se encarga de transportar los nutrientes obtenidos en la fotosíntesis desde las hojas al resto de la planta.',
        imagen: require('@/assets/curso/tema1/img04.jpg'),
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
