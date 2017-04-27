function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById('app').querySelector('div#nested div div div')
}

function deepestChild() {
	return document.getElementById('app').querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
	var lis = document.querySelectorAll('ul.ranked-list')
	// lis.forEach(element => {(element.innerHTML += n).toString()})
	for (let i = 0; i <lis.length; i++) {
		lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n)
	}
}