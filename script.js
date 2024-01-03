//your code here
const divs=document.querySelectorAll('image');

document.addEventListener('DOMContentLoaded',()=>{
	let i=1;
	divs.forEach(item=>item.id=`div${i++}`);
})