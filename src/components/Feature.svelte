<script>
  export let imgPosition = 'left'
  export let title = 'Top Foods'
  export let imgUrl = '/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
</script>

<style>
  .container{
    /* margin-top: 2rem; */
    display: grid;
    font-family: 'andika';
    grid-template-columns: 1fr 1fr 1fr
  }

  @media screen and (max-width: 670px){
    .container{
      grid-template-columns: 1fr 1fr !important;
    }

    .image{
      grid-column: span 1 !important;
    }

    .title{
      font-size: 1.4rem !important;
    }
  }

  .content{
    display: grid;
    grid-column: span 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
  }

  .title{
  font-size: 1.8rem;
  margin: 1rem 0;
  color: maroon;
  font-weight: bold;
  }

  .title::after{
    content: '';
    width: 100px;
    height: 4px;
    margin-top: .5rem;
    background: maroon;
    display: block
  }

  .image{
    display: grid;
    grid-column: span 2;
    background-image: var(--url);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 400px;
  }
</style>

<section>
  <div class="container">
    {#if imgPosition === 'left'}
    <div class="content">
      <div>
        <h6 class="title">{title}</h6>
        <p>Magna amet consequat exercitation ea et dolore velit dolore ut tempor.Laboris veniam mollit sit ullamco sunt nulla duis ea voluptate aute nostrud nulla qui amet.</p>
      </div>
    </div>
    <div class="image" style={`--url: url(${imgUrl})`}></div>
    {:else if imgPosition === 'right'}
    <div class="image" style={`--url: url(${imgUrl})`}></div>
    <div class="content">
      <div>
        <h6 class="title">{title}</h6>
        <p>Magna amet consequat exercitation ea et dolore velit dolore ut tempor.Laboris veniam mollit sit ullamco sunt nulla duis ea voluptate aute nostrud nulla qui amet.</p>
      </div>
    </div>

    {/if}
  </div>
</section>