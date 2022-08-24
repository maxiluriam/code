<script lang="ts">
 const images:Array<string> = ["thumb-1920-488092.webp","th.webp","th (1).webp"]

	
</script>

<main>
	
	
	<img id="die" height="100%" width="100%" src="/images/die.png" alt="">

<nav> 
	
	<a href="a"> HOME</a> 
	<a href="a">Charachter creator</a> 
	<a href="a">Where to start</a> 

</nav>



<div id="banner"> 
	{#each images as image}
		 <img src=images/{image} alt="">
	{/each}
</div>

<div id="filler"></div>

</main>

<style>



	main {

		display: grid;
		grid-template-columns: repeat(16, 1fr);
		grid-template-rows: repeat(16, 1fr);
		gap: 10px;

		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		height: 100%;
	}
	nav{
		grid-column: 3 / 15;
 		grid-row: 1 /3;

		display: flex;
		justify-content:space-around;

		background-color: #ff3e00;
	}

	nav a{
		margin: auto;

	}


	#die{
		

		grid-column: 1 / 3;
		 grid-row: 1 /4;
	
		margin: auto;
	
		
		height:10em;
		width:10em;
	
	
	}
	
	#banner{
	
	
		grid-column: 4 /14 ;
		 grid-row:  6 / 11;
		
		
		

		overflow: hidden;
		
		background-color: black;

		display: flex;
		justify-content: center;

		
		border: 10px solid rgb(222, 155, 52);
	}

	#banner img{
	
	
	height: 92%;
	width: 33.5%;
	

	padding: 5px;
	margin: auto;
		border: 3px solid black;
}


	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>