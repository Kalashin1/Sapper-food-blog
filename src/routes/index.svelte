<script>
  import Header from '../components/Header.svelte'
  import Service from '../components/Services.svelte'
  import Dishes from '../components/Dishes.svelte'
  import Feature from '../components/Feature.svelte'
  import Info from '../components/Info.svelte'
  import Chefs from '../components/Chefs.svelte'
  import Squared from '../components/Squared.svelte'


  let imgPosition = 'left'
  let imgUrl = '/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
  let title = 'new blog posts'
  let imgPositionII = 'right'
  let imgUrlII = '/images/mexican-tacos-with-meat-vegetables-red-onion.jpg'
  let bg = '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg'

  let chefs = [
    {
      chefImg: '/images/brooke-lark-oaz0raysASk-unsplash.jpg',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    },
    {
      chefImg: '/images/joseph-gonzalez-fdlZBWIP0aM-unsplash-(1).jpg',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    },
    {
      chefImg : '/images/ronan-kruithof-llcX9pTjhXM-unsplash-removebg-preview-(1).png',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    }
  ]
</script>

<style>
    *{
      font-family: 'andika';
    }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<section>
  <Header />
  <Service />
  <Dishes />
  <Feature  {imgPosition} {imgUrl} />
  <Feature imgPosition={imgPositionII} imgUrl={imgUrlII} />
  <Info {bg} />
  <Chefs {chefs} {title} />
  <Squared />
</section>