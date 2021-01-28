<script>
    import Banner from '../components/Banner.svelte';
    let bannerText = 'contact us'
    let contact = {
      name: '',
      email: '',
      message: ''
    }

    async function handleSubmit() {
      const res = await fetch('contact.json', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contact)
      })
      const data = await res.json()
      console.log(data)
    }
</script>

<style>
  *{
    --box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
    font-family: 'andika';
  }

.container{
  display: grid;
  overflow-x: hidden;
  margin: 3rem auto;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: var(--box-shadow);
  border-radius: .7rem;
}

@media screen and (max-width: 670px){
  .container{
    grid-template-columns: 1fr !important;
  }
  .info-text{
    margin-top: 0 !important;
    width: 100% !important;
    padding: 0 1rem;
  }
  .info-text p {
    justify-content: flex-start !important
  }

  .info-text p span{
    display: inline-block;
    margin-left: 2.5rem
  }

  .img{
    display: none !important
  }
}

.img{
  background: url(/images/brooke-lark-wMzx2nBdeng-unsplash.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  position: relative;
  transition: all .2s ease;
  color: darksalmon;
}

.img::after{
  content: '';
  z-index: 18;
  position: absolute;
  top: 0;left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(0,0,0,.4)
}

form{
  padding: 1rem;
}
h2{
  font-weight: bold;
  font-size: 2.4rem;
  color: darkslategray;
}

h5{
  font-size: 1rem;
  color: darkslategray;
  font-weight: lighter;
}

input[type=email], input[type=text], textarea{
  background: #fff;
  border-radius: .7rem;
  padding: 16px 18px;
  border: 0;
  outline: 0;
  margin: .5rem 0;
  width: 85%;
  font-size: 1rem;
}

.submit{
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit input[type=submit]{
  padding: 14px 20px;
  font-weight: bolder;
  text-transform: capitalize;
  font-size: 1.1rem;
  color: #fff;
  background: green;
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
}

.submit input[type=submit]:focus{
  border: 1px solid maroon;
  outline: 0
}

.info-text{
  z-index: 19;
  position: relative;
  margin-top: 30%;
  width: 100%;
}

.info-text p{
  display: flex;
  padding: 1rem 1rem;
  margin-left:10%;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  color:rgb(239, 245, 239);
  font-weight: bold;
}

.info-text p span{
    display: inline-block;
    margin-left: 2.5rem
  }
</style>

<section>
    <Banner {bannerText} />
    <div class="container">
     <div class="img">
      <div class="info-text">
        <p><i class="fas fa-envelope"></i> <span>kalashin@gmail.com</span></p>
        <p><i class="fas fa-phone"></i> <span>+2341234567890</span></p>
        <p><i class="fas fa-home"></i> <span>Lagos, Nigeria</span></p>
      </div>
    </div>
    <div>
      <form on:submit|preventDefault={handleSubmit}>
        <h2>Contact Us</h2>
        <h5>Feel free to drop us a message</h5>
        <div>
          <input type="text" bind:value={contact.name} placeholder="Your name here" />
        </div>
        <div>
          <input type="email" bind:value={contact.email} placeholder="Your email here" />
        </div>
        <div>
          <textarea rows="10" bind:value={contact.message} placeholder="Your mesage here"></textarea>
        </div>
        <div class="submit">
         <input type="submit" value="submit">
       </div>
      </form>
    </div>
  </div>
</section>