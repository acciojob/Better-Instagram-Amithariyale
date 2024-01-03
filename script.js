//your code here
const divs=document.querySelectorAll('.image');

document.addEventListener('DOMContentLoaded',()=>{
	let i=1;
	divs.forEach(item=>item.id=`div${i++}`);
});

div.forEach((item)=>{
	item.addEventListener('dragstart', function(event) {
	  this.startX = event.clientX;
	  this.startY = event.clientY;
	});
	
	item.addEventListener('dragend', function(event) {
	  const newX = event.clientX;
	  const newY = event.clientY;
	
	  if (this.startX !== newX || this.startY !== newY) {
		this.style.left = newX + 'px';
		this.style.top = newY + 'px';
	  }
	});
})

