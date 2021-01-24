<script>
	export let segment;
	let handleClick = ()=> {
		console.log(segment)
  }

  let showLinks = true
  
  let showMobileLinks = ()=> {
    showLinks = !showLinks
  }
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    --box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
  }
  nav{
    display: grid;
    background: transparent;
    color: #fff;
    font-family: 'andika';
    position: absolute;
    top: 0; z-index: 100;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    justify-items: space-between;
    align-content: center;
    box-shadow: var(--box-shadow);
  }

  @media screen and (max-width: 670px){
    nav{
      grid-template-columns: 1fr !important
    }
    ul{
      flex-direction: column !important
    }
    a.menu-btn{
      display: block !important
    }

    .current{
      background: #fff !important;
      color: maroon !important;
      border: 0 !important
    }
  }

  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  ul li a{
    text-decoration: none;
    padding: 18px 28px;
    display: block;
    transition: all .4s ease;
    text-transform: capitalize;
    font-weight: bold
  }

  ul li a:hover{
    background: #f4f4f4;
    color: darkred;
  }

  .logo-and-btn{
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
  }

  .logo-and-btn .logo{
    font-size: 1.5rem
  }

  .logo-and-btn a {
    text-decoration: none;
    font-weight: bold;
  }

  .current{
    border-bottom: 4px solid #f4f4f4
  }

  a.menu-btn{
    font-size: 1.3rem;
    display: none;
    padding: 1rem 0;
  }
</style>

<nav>

  <div class="logo-and-btn">
    <a class="logo" href="/" on:click|preventDefault ={handleClick}>Sapz</a>
    <a href="/" on:click|preventDefault ={showMobileLinks} class="menu-btn"><i class="fas fa-bars"></i></a>
  </div>
	
  {#if showLinks}
    <ul id="nav">
      <li><a class:current={segment === undefined} href=".">home</a></li>
      <li><a class:current={segment === 'about'} href="about">about</a></li>
      <li><a class:current={segment === 'contact'} href="contact">contact</a></li>
      <li><a rel=prefetch class:current={segment === 'foods'} href="foods/">Foods</a></li>
    </ul>
  {/if}
</nav>