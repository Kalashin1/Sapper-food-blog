<script>

  const contact = { name: '', email: '', subject: '', message: ''}


  const handleSubmit = (obj) => {
    console.log(obj)
  }
</script>

<!-- ======= Contact Section ======= -->
<section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" style="background-image: url(assets/img/overlay-bg.jpg)">
  <div class="overlay-mf"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="contact-mf">
          <div id="contact" class="box-shadow-full">
            <div class="row">
              <div class="col-md-6">
                <div class="title-box-2">
                  <h5 class="title-left">
                    Send Us A Message
                  </h5>
                </div>
                <div>
                  <form on:submit={() => {handleSubmit(contact)}} role="form" class="php-email-form">
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div class="form-group">
                          <input type="text" bind:value={contact.name} name="name" class="form-control" id="name" placeholder="Your Name" required>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <div class="form-group">
                          <input type="email" bind:value={contact.email} class="form-control" name="email" id="email" placeholder="Your Email" required>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <div class="form-group">
                          <input type="text" bind:value={contact.subject} class="form-control" name="subject" id="subject" placeholder="Subject" required>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea class="form-control" bind:value={contact.message} name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-center my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div class="col-md-12 text-center">
                        <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <div class="title-box-2 pt-4 pt-md-0">
                  <h5 class="title-left">
                    Get in Touch
                  </h5>
                </div>
                <div class="more-info">
                  <p class="lead">
                    Want to contact Kinanee for a quote or for a collaboration? Feel free to reach me by sending an official mail using the contat form provided above, otherwise you can also call me on the phone provided below, Looking foward to hearing from you.
                  </p>
                  <ul class="list-ico">
                    <li><span class="bi bi-geo-alt"></span> Rukpokwu, Port Harcourt, Rivers State, Nigeria</li>
                    <li><span class="bi bi-phone"></span> +2348149793913</li>
                    <li><span class="bi bi-envelope"></span> kinaneesamsonjohn@gmail.com</li>
                  </ul>
                </div>
                <div class="socials">
                  <ul>
                    <li><a href="!"><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
                    <li><a href="!"><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
                    <li><a href="!"><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
                    <li><a href="!"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!-- End Contact Section -->