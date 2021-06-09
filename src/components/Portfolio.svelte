<script>
  export let projects
  projects.sort()
</script>

<!-- ======= Portfolio Section ======= -->
<section id="work" class="portfolio-mf sect-pt4 route">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 class="title-a">
            Portfolio
          </h3>
          <p class="subtitle-a">
            Walkthrough some of my most recent works.
          </p>
          <div class="line-mf"></div>
        </div>
      </div>
    </div>
    <div class="row">
      {#each projects as project}
        <div class="col-md-4">
          <div class="work-box">
            <a href={project.src} data-gallery="portfolioGallery" class="portfolio-lightbox">
              <div class="work-img" style="max-height: 250px;">
                <img src={project.src} alt="" class="img-fluid">
              </div>
            </a>
            <div class="work-content">
              <div class="row">
                <div class="col-sm-8">
                  <h2 class="w-title">{project.title}</h2>
                  <div class="w-more">
                    <span class="w-ctegory">{project.category}</span> / <span class="w-date">{project.date}</span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="w-like">
                    <a href={project.link}> <span class="bi bi-plus-circle"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}

    </div>
  </div>
</section><!-- End Portfolio Section -->