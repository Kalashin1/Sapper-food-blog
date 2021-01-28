<script>
import { each } from "svelte/internal";

  export let title;
  export let chefs = [
    {
      chefImg: '/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    },
    {
      chefImg: '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    },
    {
      chefImg : '/images/whitney-wright-6G98hiCJETA-unsplash.jpg',
      title: 'Plubis legatus',
      text: 'Aute adipisicing proident dolor officia est mollit tempor proident occaecat do laboris quis.'
    }
  ]
</script>

<style>
  .section{
    margin: 5rem .5rem;
  }

  .container{
    font-family: 'andika';
    display: grid;
    margin: 3rem .5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3%
  }

  @media screen and (max-width: 670px){
    .container{
      grid-template-columns: 1fr !important;
    }
  }

  .img img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .content{
    padding: .5rem;
  }

  .title{
  font-size: 1.8rem;
  margin-top: 1rem;
  text-align: center;
  text-transform: capitalize;
  color: maroon;
  font-weight: bold;
  }
</style>

<section class="section">
  {#if title}
    <h3 class="title">{ title }</h3>
  {/if}

  <div class="container">
    {#each chefs as chef}
      <div>
        <div class="img">
          <img src={chef.chefImg} alt={chef.title} />
        </div>
        <div class="content">
          <h3>{ chef.title }</h3>
          <h5>{ chef.text }</h5>
        </div>
      </div>
    {/each}
  </div>
</section>