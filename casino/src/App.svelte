<script lang="ts">


let array:Array<Array<string>> = [["1.png","2.png","3.jpg","4.png"],["1.png","2.png","3.jpg","4.png"],["1.png","2.png","3.jpg","4.png"],["1.png","2.png","3.jpg","4.png"],["1.png","2.png","3.jpg","4.png"],]

console.log(array)

function getrandom( array:Array<Array<string>>) {
	let e:Array<Array<string>> = [[]]
	let t:Array<string> = []

	for (let i = 0; i < array.length; i++) {
		
		
		let number1 = Math.floor(Math.random() * array[i].length);
	for (let j = 0; j < 3; j++) {

		
		
	
		if (number1 + j === array[i].length  ) {
			
			number1 -= array[i].length  
			

		}
		t = [...t,array[i][number1 + j]]
	}


		
			
	
		e = [...e,t]
		t = []
		
	
		
		
	}


		
		
	
		
	
	return e	
	
		
		
	}
	function checkPoints(array:Array<Array<string>>) {
		
	
	let j:number = 0
	let highScore:number = 0
	let cache:string

	for (let i = 1; i < array.length; i++) {
		
	if (i === 1) {
		cache = array[i][0]
		j++
	}  else if (cache === array[i][0]) {

		j++
		
	} else if(cache !== array[i][0]){

		j = 1
		cache = array[i][0]
	}
	if (j > highScore) {
	
	highScore = j
}


	}

return highScore

}
	

let finsishedArray:Array<Array<string>> = getrandom(array)
	

console.log(finsishedArray)

let p:number = 0

</script>

<main>

	<button  on:click={ () => { let i = 0; let myInterval = setInterval( () => {; finsishedArray = getrandom(array); i++; if (i > 10){clearInterval(myInterval);  p = checkPoints(finsishedArray)}}, 50);}}></button>
	<p>{p}</p>

	<div class="two">

		{#each finsishedArray as item}
		<div class="number">
		{#each item as item1}
			 
	
			 <img src="./img/{item1} "alt="">
	
	
		{/each}
	</div>
		{/each}
	</div>

	

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
	}
	.number{
		display: flex;
		flex-direction: column;
		

	}


	img{
		width: 200px;
		height: 200px;


	}
	.two{
		display: flex;
		flex-direction: row;
		

	}
	div{
		margin: 5px;
		flex-direction: row;

	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		margin: 0px;
		font-weight: 100;
		flex-direction:column;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>