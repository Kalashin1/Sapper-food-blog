<script>
  export let services
</script>

<section id="services" class="services-mf pt-5 route">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 class="title-a">
            Services
          </h3>
          <p class="subtitle-a">
            These are some of the services that enables me to add value to your business.
          </p>
          <div class="line-mf"></div>
        </div>
      </div>
    </div>
    <div class="row">
      {#each services as service}
        <div class="col-md-4">
        <div class="service-box">
          <div class="service-ico">
            <span class="ico-circle"><i class={`bi ${service.class}`}></i></span>
          </div>
          <div class="service-content">
            <h2 class="s-title">{service.title}</h2>
            <p class="s-description text-center">
              {service.text}
            </p>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
</section><!-- End Services Section -->