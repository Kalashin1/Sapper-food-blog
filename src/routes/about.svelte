<script>
  import Banner from '../components/Banner.svelte'
  let bannerText = 'about'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
  <Banner {bannerText} />
  <h1>About this site</h1>

  <p>This is the 'about' page. There's not much here.</p>
</section>