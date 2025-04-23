function createTable() {
    //Write your code here
  let rows = prompt("Input number of rows")
  let column = prompt("Input number of columns")

	rows = parseInt(rows)
	column = parseInt(column)

	if(isNaN(rows) || isNaN(column)){
		return
	}

	if(rows<=0 || column<=0){
		alert("Please enter a number greater than 0")
		return
}

	
	let mytable = document.getElementById('myTable')
	mytable.innerHTML = ""
	for(let i = 0; i<rows; i++){
		let tr = document.createElement('tr')
		for(let j = 0; j<column; j++){
			let td = document.createElement('td')
			td.textContent = `Row-${i} Column-${j}`
			tr.appendChild(td)
		}
		mytable.appendChild(tr)
	}
	
}
