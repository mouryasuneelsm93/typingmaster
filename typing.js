var count=0;
		function hide()
		{	
			document.querySelector('.box').style.display='none';
			document.querySelector('.box1').style.display='block';
			document.getElementById('time').style.display='block';
			document.getElementById('error').style.display='block';
			document.getElementById('wpm').style.display='block';	
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
			 		console.log(e,i);
			 		c=c+1;
			 	}
			 	document.getElementById('c').innerHTML=c;
			 	console.log("error="+c);
			 }
			 if(c==0)
			 {
			 	console.log("count",count);
			 	c1=b.length;
			 	console.log("length",c1);
				wpm=(c1/5)/(count/60);
				console.log("word",wpm);
				document.getElementById("w").innerHTML=parseInt(wpm);
				document.getElementById('p3').style.backgroundImage = "";
			 	end();
			 }
			 else 
			 {
			 	 document.getElementById('p3').style.backgroundImage="url('error.png')";
			 	 // document.getElementById('p3').style.backgroundSize="cover";
			 } 
		}
		function start()
		{
			tim=setInterval(function(){ count=count+1;document.getElementById('timer').innerHTML=count; }, 1000);
		}
		function end()
		{
			clearInterval(tim);
		}