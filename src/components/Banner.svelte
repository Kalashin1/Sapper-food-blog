<script>
  export let bannerText = 'foods'
</script>

<style>
  .banner{
    background:  url(/images/shallow-focus-photography-of-several-pizzas-1566837.jpg);
    background-size: cover;
    font-family: 'andika';
    background-position: center;
    background-repeat: no-repeat;
    min-height: 350px;
    width: 100%;
    text-transform: capitalize;
    text-align: center;
    color: white;
    /* top: 3.7rem; */
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
  }
</style>

<section class="banner">
  {bannerText}
</section>