form.onsubmit = (event) => {
	event.preventDefault() ;
	( async () => {
		let response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${inputSearch.value}&pageNumber=1&pageSize=10&autoCorrect=true`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "05ff4068d6msh37d17b89a7c6422p12923fjsn75aa5e5a8950",
				"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
			}
		})
		let data = await response.json()
		let value = data.value[0].url
		img.setAttribute('src', value)
		// img.setAttribute('width', inputWidth.value)
		// img.setAttribute('height', inputHeight.value)
		img.classList.remove('remove')
	})()

}