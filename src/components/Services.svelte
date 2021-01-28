<script>
  let services = [
    {
      icon: 'fas fa-utensil-spoon',
      title: 'super good food',
      text: 'Qui cillum aliqua anim cillum qui dolore eiusmod consequat do.Velit in voluptate veniam eiusmod et consectetur voluptate labore.Ex laborum consectetur dolore excepteur.'
    },
    {
      icon: 'fas fa-truck',
      title: 'food deliveries',
      text: 'Dolore quis pariatur aute ullamco. Qui cillum aliqua anim cillumId deserunt voluptate pariatur et.Ad incididunt do qui aliquip amet deserunt minim officia nulla est veniam.'
    },
    {
      icon: 'fas fa-location-arrow',
      title: 'anytime anywhere',
      text: 'Cillum labore id eiusmod et dolor consequat magna ex enim anim a.Labore Lorem pariatur nulla adipisicing in velit duis dolore quis.Velit ipsum velit ea id qui eiusmod.'
    }
  ]
</script>

<style>
.container{
  font-family: 'andika';
  margin: 1.5rem;
  padding: 1rem .2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;
}

.service{
  display: flex;
  color: darkslategray;
  border-radius: .7rem;
  padding: 0 .5rem;
  --box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
  transition: all .2s linear;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.service:hover{
 
  background: #fff
}

.service:hover .circle{
  background: maroon;
  color: #fff;
}

.circle{
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 1rem 0;
  transition: all .2s ease;
  border-radius: 50%;
  background: transparent;
  color: maroon;
}

/* .circle:hover{
  border: maroon 1px solid;
} */

@media screen and (max-width: 670px){
  .container{
    grid-template-columns: 1fr !important
  }
}

.service h3,  h2.title, .service h5{
  font-weight: bold;
 
  padding: 0 .4rem;
  text-transform: capitalize;
  text-align: center;
  font-size: 1.4rem;
  margin: 1rem 0;
}

.service h5{
  font-size: 1rem !important;
  text-align: left
}

h2.title{
  font-size: 2.5rem;
  border-bottom: 5px solid maroon;
  padding: 1rem 0;
  margin: 1rem auto;
  width: max-content
}
</style>

<div>
  <h2 class="title">Services</h2>
  <div class="container">
  {#each services as service}
    <div class="service">
      <div class="circle">
        <i class={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <h5>{service.text}</h5>
    </div>
  {/each}
  </div>
</div>