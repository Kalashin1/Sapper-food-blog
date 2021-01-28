<script>
  import Banner from '../components/Banner.svelte'
  import Info from '../components/Info.svelte'
  import Service from '../components/Services.svelte'
  import Chefs from '../components/Chefs.svelte'
  let bannerText = 'about'
  let bg = '/images/woman-chef-cooking-vegetables-pan.jpg'
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<style>
  .content{
    width: 60%;
    font-family: 'andika';
    margin: 1rem auto;
    padding: 2rem 0;
    text-align: center;
  }

  .content h4{
    color: maroon;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.8rem;
  }
</style>

<section>
  <Banner {bannerText} />
  <Service></Service>
  <Info {bg}></Info>
  <div class="content">
    <h4>Some random text</h4>
    <p>
      In nisi aliqua Lorem nisi labore. Ex id nostrud anim cillum in minim enim est mollit sit anim dolor ea. Consequat incididunt eu nulla nostrud excepteur.

      Deserunt et ex reprehenderit fugiat non. Eu magna reprehenderit sit sit. Proident eu cillum quis aliqua incididunt eiusmod adipisicing proident. Exercitation veniam laboris dolor sint exercitation occaecat reprehenderit aliquip aliquip in aliquip. Excepteur culpa adipisicing sint nulla mollit sunt reprehenderit. Sit cupidatat ullamco id commodo enim exercitation.

      Amet cupidatat aliquip fugiat labore elit. Sint ex sit aliqua dolore culpa aliqua. Consequat ea amet ea dolor proident elit. Ullamco eiusmod et quis excepteur tempor ut dolor ullamco excepteur dolore ullamco. Nisi culpa eiusmod fugiat do labore nulla ea id. Lorem dolore incididunt occaecat eiusmod voluptate enim sint do do duis anim irure.

      Veniam ut aliqua voluptate sunt aute sint labore adipisicing ad tempor elit qui deserunt. Excepteur ad proident officia enim tempor mollit irure qui adipisicing in qui. Eiusmod aliqua deserunt nisi velit velit duis pariatur voluptate nostrud excepteur ea sunt dolore. Esse ut pariatur do deserunt nostrud magna commodo fugiat labore velit qui sint. Nostrud labore fugiat ullamco ut id enim. Sint qui laboris et id fugiat culpa veniam laborum dolore. Velit in in velit enim.
    </p>
  </div>
  <Chefs />
</section>