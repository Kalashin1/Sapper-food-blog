<script>
    export let segment
    
</script>
{#if segment !=='foods'}
<footer class="footer">
  <div>
    <p>&copy; 2021 Kalashin</p>
  </div>
</footer>
{/if}

<style>
  .footer{
    background:transparent;
    font-family: 'andika';
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }


@media screen and (max-width: 670px){
  .footer p{
    width: 100% !important
  }
}
  .footer p{
    border-top: 1px solid gray;
    padding-top: 5px;
    width: 200%;
    text-align: center
  }
</style>