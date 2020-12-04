var count=0;
		function hide()
		{	
			document.querySelector('.box').style.display='none';
			document.querySelector('.box1').style.display='block';
			document.getElementById('time').style.display='block';
			document.getElementById('error').style.display='block';
			
		}
		function check()
		{
			var a=document.querySelector(".p1").value;	
			var c=0;
			var b=document.getElementById("p3").value;
			c1=b.length;
			console.log(c1);
			 for(i=0;i<a.length;i++)
			 {
			 	if(a[i]===b[i])
			 	{
			 		
			 	}
			 	else
			 	{
			 		e=b[i];
			 		document.getElementById('c').innerHTML=e;
			 		console.log(e,i);
			 		c=c+1;
			 	}
			 	document.getElementById('e1').innerHTML=c;
			 	console.log("error="+c);
			 }
			 if(c==0)
			 {
			 	console.log("count",count);
			 	c1=b.length;
				wpm=(c1/5)/(count/60);
				console.log("word",wpm);
				document.getElementById("w").innerHTML=parseInt(wpm);
				document.getElementById('p3').style.backgroundImage = "";
				document.getElementById('p3').style.backgroundColor = "";
			 	end();
			 	document.querySelector('.box1').style.display='none';
				document.querySelector('.box2').style.display='block';
				document.getElementById('time').style.display='none';
				document.getElementById('error').style.display='none';

			 }
			 else 
			 {
			 	// document.getElementById('p3').style.backgroundImage="url('error.png')";	
			 } 

		}
		function start()
		{
			var min1=0; 
			tim=setInterval(function(){ count=count+1
				console.log(count);
			if(count==60)
			 {
			 	
			 	min1=count/60;
			 	document.getElementById('min').innerHTML=parseInt(min1);
			 	
			 }
			 ;document.getElementById('timer').innerHTML=count; }, 1000);
			
		}
		function end()
		{
			clearInterval(tim);
			
		}