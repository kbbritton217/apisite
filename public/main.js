

$(document).ready(function(){
		$.ajax({
			type: 'GET',
			url: 'http://jikan.me/api/anime/6702/characters_staff'
		}).done(function(character){
			//console.log(character.character)

			let characters = character.character
			let charObj = {
				char : []
			}
			let imgObj = {
				img : []
			}

			characters.forEach(function(i){
				if(i.role === "Main"){
					imgObj.img.push(i.image)
					//console.log(i.image)
				}
			})

			characters.forEach(function(c){
				//console.log(c.name)
				if(c.role === "Main") {
					$("#characters").append('<tr id="tableRow"><td>' + c.name + '</td></tr>')
					charObj.char.push(c.name)
				} //console.log(c.name)
			})

			// charObj.char.addEventListener('click', function(event){
			// 	if (event.target !== this) {
			// 		document.getElementById("Image").src = imgObj.img;
			// 	}
			// })


		//		PSUEDO CODE
		//		if charObj.char[0] is clicked then show imgObj.img[0] in #image
			$("tr").eq(0).attr('id', 'rowZero')
			$("td").eq(0).attr('id', 'zero');
			$("td").eq(1).attr('id', 'one');	
			$("td").eq(2).attr('id', 'two');
			$("td").eq(3).attr('id', 'three');
			$("td").eq(4).attr('id', 'four');
			$("td").eq(5).attr('id', 'five');
			$("td").eq(6).attr('id', 'six');
			$("td").eq(7).attr('id', 'seven');

			// $('#zero').on('click', function(){
			// 	$('#Image').attr('src', imgObj.img[0])
			// })
			$('#rowZero').on('click', function(){
				$('#Image').attr('src', "https://myanimelist.cdn-dena.com/images/anime/7/59441l.jpg")
			})
			$('#zero').on('click', function(){
				$('#Image').attr('src', imgObj.img[0])
			})
			$('#one').on('click', function(){
				$('#Image').attr('src', imgObj.img[1])
			})
			$('#two').on('click', function(){
				$('#Image').attr('src', imgObj.img[2])
			})
			$('#three').on('click', function(){
				$('#Image').attr('src', imgObj.img[3])
			})
			$('#four').on('click', function(){
				$('#Image').attr('src', imgObj.img[4])
			})
			$('#five').on('click', function(){
				$('#Image').attr('src', imgObj.img[5])
			})
			$('#six').on('click', function(){
				$('#Image').attr('src', imgObj.img[6])
			})

	})
});




	