<script context="module">
  export async function preload(page, session){
    let res = await this.fetch('/foods.json');
    let foods = await res.json()
    return { foods }
  }
</script>

<script>
  export let foods
  import Banner from '../../components/Banner.svelte'
  let bannerText = 'foods'
</script>


<style>
  *{
    font-family: 'andika';
  }

  .title{
    margin: 2rem 0;
    font-weight: bold;
    color: maroon;
    text-align: center;
  }

  .food{
    display: grid;
    padding: 1rem 8rem;
    grid-template-columns: 1fr;
    grid-gap: 2%
  }

  .main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2%;
    justify-items: center;
    align-content: center
  }

  .image{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @media screen and (max-width: 670px){
    .main{
      grid-template-columns: 1fr !important;
    }
    .food{
      grid-template-columns: 1fr !important;
      padding: 1rem 2rem !important
    }
  }


  @media screen and (min-width: 670px)and (max-width: 1000px){
    .food{
      grid-template-columns: 1fr !important;
      padding: 1rem 2rem !important
    }
  } 

  .more{
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: maroon;
    font-weight: bold;
    margin: 1rem 0;
    flex-direction: column;
  }

  .more h4{
    font-size: 1.6rem;
  }

  .more h5{
    font-size: 1.4rem;
  }

  .more .buy{
    background: maroon;
    color: #fff;
    border-radius: 7px;
    padding: 10px 14px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main a{ 
    text-decoration: none;
  }
</style>

<section>
  <Banner {bannerText} />
  <h1 class="title">Foods</h1>
  <div class="food">
    <div class="sidebar"></div>
    <div class="main">
      {#each foods as food}
        <a href={`foods/${food.id}`}>
          <div class="food-container">
            <div class="food-image">
              <img src={food.img} class="image" alt={food.name} />
            </div>
            <div class="more">
              <h4>{food.name}</h4>
              <h5>${food.price}</h5>
              <a href={`foods/${food.id}`} class="buy">
                <span>Order</span>
                <i class="fas fa-shopping-cart" style="margin-left: 10px"></i>
              </a>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>