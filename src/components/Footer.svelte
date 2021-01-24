<script>
    export let segment
    let handleClick = ()=> {
		console.log(segment)
	}
</script>

<footer>
    <div on:click={handleClick}>
        &copy; 2020 Kala-Jobs
    </div>
</footer>

<style>
  footer{
    padding: 1rem 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer div{
    text-align: center;
    font-weight: bold;
    width: 20%;
    padding: 1rem;
    color: #333;
    border-top: 2px solid #f2f2f2
  }
</style>