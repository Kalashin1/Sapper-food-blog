<style>
  .header{
    background: url(/images/shallow-focus-photography-of-several-pizzas-1566837.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 110vh;
    font-family: 'andika';
    color: #fff;
    top: -3.5rem;
    position: relative;
  }

  .header::after{
    content: '';
    position: absolute;
    top: 0;left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0, 0,0.3);
  }

  .header-text{
    position: absolute;
    top: 65%;
    text-align: center;
    transform: translateY(-50%);
    display: flex;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .header-text h2{
    font-weight: bold;
    font-size: 3rem;
  }

  .header-text a{
    background: rgb(3, 121, 19);
    padding: 18px 48px;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: bold;
    outline: 0;
    color: rgb(235, 231, 231);
    font-weight: bold;
    font-size: 1.3rem;
    border: 0;
    cursor: pointer;
    border-radius: .7rem;
  }

  /* .header-text button i, .header-text button span {
    display : inline-block;
    margin: 0 1rem
  } */
</style>

<div class="header">
  <div class="header-text">
    <h2>Welcome to the home of the best foods</h2>
    <a href="/">
      <span>Order A Meal</span>
      <!-- <i class="fas fa-shopping-cart"></i> -->
    </a>
  </div>
</div>