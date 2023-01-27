<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .BGIMG01.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          p.text-white Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará la flora como parte importante de la biodiversidad de nuestros ecosistemas; se estudiarán temas relacionados con muestreos y métodos de clasificación, influencia del cambio climático, tráfico ilegal, además de algunos aspectos legales. Se hablará también de la importancia de generar planes de acción orientados a la identificación y recuperación de las especies nativas y se hará énfasis en los aspectos relevantes para su conservación, como los inventarios florísticos y las buenas prácticas de restauración de las comunidades vegetales.
          p.text-white.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src="@/assets/curso/intro/img01.svg")
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
