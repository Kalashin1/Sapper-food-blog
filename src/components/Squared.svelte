<script>
 export let imgs = [
   '/images/lily-banse--YHSwy6uqvk-unsplash.jpg',
   '/images/johnathan-macedo-4NQEvxW2_4w-unsplash-removebg-preview-(1).png',
   'images/wright-brand-bacon-QE_UTZZGDD8-unsplash.jpg',
   '/images/dan-gold-4_jhDO54BYg-unsplash.jpg'
 ]
</script>

<style>
  .section{
    background: #fff;
    margin: 5rem 0;
    padding: 1rem 4rem;
  }

  .container{
    display: grid;
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3%
  }

  @media screen and (max-width: 670px){
    .container{
      grid-template-columns: 1fr !important;
      padding: .5rem !important;
    }

    .section{
      padding: 1rem !important
    }

    .square-images{
      padding: 0 1rem !important;
      justify-content: center !important;
      align-items: center !important;
    }

    .content{
      margin-top: 3rem !important;
    }
  }

  .square-images{
    display: grid;
    padding: 0 5rem;
    grid-template-columns: repeat(2, 150px);
    grid-gap: 3%
  }

  .square-images img{
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  .content{
    margin: auto 0
  }

  .content h3{
    font-weight: bold;
    text-align: center;
    color: maroon
  }
</style>

<section class="section">
  <div class="container">
    <div class="square-images">
      {#each imgs as img}
        <img src={img} alt={img} />
      {/each}
    </div>
    <div class="content">
      <h3>Lorem Ispum</h3>
      <p>
        Incididunt non nulla amet esse proident culpa qui reprehenderit in exercitation aliquip esse tempor.Qui ut commodo ex amet sint in ad adipisicing aliqua est dolor ullamco cupidatat nisi. Esse Lorem exercitation eiusmod duis.
      </p>
    </div>
  </div>
</section>