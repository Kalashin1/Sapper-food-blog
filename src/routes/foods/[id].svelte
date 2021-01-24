<script context="module">
  export async function preload(page, session){
    const { id } = page.params
    console.log(page.params)
    const res = await this.fetch(`foods/${id}.json`)
    const food = await res.json()
    return { food }
  }
</script>

<script>
  import Banner from '../../components/Banner.svelte'
  export let food
  let bannerText = food.name
  console.log(food)
</script>

<style>
  .food{
    display: grid;
    font-family: 'andika';
    padding: 3rem
  }

  @media screen and (max-width: 670px){
    .food{
      grid-template-columns: 1fr
    }
  }

  @media screen and (min-width: 670px){
    .food{
      grid-template-columns: 1fr 1fr;
    }
  }

  .image{
    padding: 1rem 2rem
  }

  .image img{
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  .detail{
    padding: 1rem
  }

  .detail h2, .detail h3{
    color: maroon;
    margin: 1.5rem 0;
    font-weight: bold;
    text-transform: capitalize;
  }

  .detail a{
    background: maroon;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 14px;
    display: block;
    text-decoration: none;
    margin: 1.5rem auto;
    padding: 12px 20px
  }
</style>

<section>
  <Banner {bannerText} />
  <div class="food">
    <div class="image">
      <img src={food.img} alt={food.name} />
    </div>
    <div class="detail">
      <h2>name : {food.name}</h2>
      <h3>price : ${food.price}</h3>
      <p>{food.detail}</p>
      <a href="/">add to cart</a>
    </div>
  </div>
</section>