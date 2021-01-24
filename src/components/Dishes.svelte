<script>
  export let foods = [
    {name: 'Bangers Mash', url: 'images/a8f8a3085c91a7170d128570d5ec2da4.jpg', price : 52},
    { name : 'English Breakfast', url: 'images/2363aa263116f988fedb0756923f9282.jpg', price : 45},
    {name : 'Scottish Meal', url : 'images/0069685a38008fcc695377c331dc0223.jpg', price : 37}
    ]
</script>

<style>
  *{
    --gridlength: attr(data-food);
  }
  .section{
    overflow: hidden;
  }
  .food{
    display: grid;
    cursor: pointer;
    width: 80%;
    margin-top: 5rem;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    grid-gap: 1%
  }
  img.img{
    width: 100%;
    transition: all .2s ease;
    height: 400px;
    object-fit: cover;
  }
  .food-info{
    position: absolute;
    top: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    left: 50%;
    z-index: 10;
    transform: translate(-50% ,-50%);
    margin: 0 auto
  }

  .food-item{
    position: relative;
    overflow: hidden;
  }

  .food-item:hover::after{
    background: none
  }

  .food-item:hover img.img{
    transform: scale(1.1);
  }


  .food-item::after{
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all .2s ease;
    top: 0;left: 0;
    content: '';
    background:hsla(0, 94%, 51%, 0.336)
  }

  .food-info div{
    width: 80px;
    height: 80px;
    margin: 1rem 0;
    border-radius: 50%;
    border: 2px solid #fff;
    font-weight: bold;
    color: #fff !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .food-info div h5{
    font-size: 1.2rem;
  }
  .food-info h6{
    font-size: 1.2rem;
    color:#ffffff;
    text-align: left;
    font-weight: bold
  }

  .title{
  font-size: 2.5rem;
  border-bottom: 5px solid maroon;
  padding: 1rem 0;
  margin: 2rem auto;
  width: max-content
}
</style>

<section class="section">
  <h2 class="title">Top Foods</h2>
  <div class="food" data-food={`${foods.length}`}>
    {#each foods as food}
      <div class="food-item">
        <img src={food.url} class="img" alt={food.name} />
        <div class="food-info">
          <div>
            <h5>${food.price}</h5>
          </div>
          <h6>{food.name}</h6>
        </div>
      </div>
    {/each}
  </div>
</section>