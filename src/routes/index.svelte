<script>
  import Header from '../components/Header.svelte'
  import Service from '../components/Services.svelte'
  import Dishes from '../components/Dishes.svelte'
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
</section>