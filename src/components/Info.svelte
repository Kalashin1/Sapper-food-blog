<script>
  export let bg
</script>

<style>
  .section{
    background-image: var(--url);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-family: 'andika';
    height: 520px;
    position: relative
  }

  @media screen and (max-width: 670px){
    .content{
      width: 100% !important;
      margin: 1rem 0 !important;
      padding :3rem 0 !important
    }
  }

  .content{
    width: 30%;
    display: flex;
    justify-content: center;
    margin: 2rem;
    padding: 1rem 2rem;
    align-items: center;
    flex-direction: column;
  }

  .light-box, .dark-box{
    background: rgba(0,0,0, .4);
    color: #fff;
    padding: 2rem 1rem;
    border: maroon 1px solid
  }

  .dark-box{
    background: maroon;
    color: #fff;
    margin-top: 5px;
    border: 1px solid currentColor
  }

</style>

<section class="section" style={`--url: url(${bg})`}>
  <div class="content">
    <div class="light-box">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia neque odio maxime autem accusamus dolores laboriosam! Dolorum, rerum vel? Recusandae, culpa commodi accusamus ratione cupiditate eos voluptatibus fugiat nam?
      </p>
    </div>
    <div class="dark-box">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia neque odio maxime autem accusamus dolores laboriosam! Dolorum, rerum vel? Recusandae, culpa commodi accusamus ratione cupiditate eos voluptatibus fugiat nam?
      </p>
    </div>
  </div>
</section>