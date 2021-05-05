$(document).ready(function(){
    $('button').click(function(){
        const name=$('#btn').val();
       // <!-- alert(name); -->
        const url=" https://codeforces.com/api/user.info?handles="+name;
        const urll="https://codeforces.com/api/user.rating?handle="+name;
      //  console.log(url);
        async function getdata() {

            const response= await fetch(url);
           
            const data= await response.json();
            if(data.status=="FAILED")
            {alert("User not exist");}
         //console.log(data);
           
           // <!--alert(rating); -->
           // <!--console.log(rating);-->
           else
         {   const rating =data.result[0].rating;
            let html="";
            html=` 
             
            <table class="content-table">
                <tr class="first">
                <td>First Name </td>
                <td id="frstnme">${data.result[0].firstName}</td>
             </tr>
                <tr class="second">
                <td>Second Name </td>
                <td id="scndnme">${data.result[0].lastName}</td>
             </tr>
            <tr class="third">
                <td>Rating </td>
                <td id="rat">${data.result[0].rating}</td>
             </tr>
            <tr class="fourth">
                <td>Max Rating </td>
                <td id="mxrtng">${data.result[0].maxRating}</td>
             </tr>
                <tr class="fifth">
                <td>Current rank </td>
                <td id="crntrnk">${data.result[0].rank}</td>
             </tr>
             <tr>
                 <td>Best rank</td>
                 <td id="bstrnk"></td>
             </tr>
             <tr>
                <td>Total contest</td>
                <td id="cnt"></td>
            </tr>
                
            
            
            </table>
         
           
            
           
      `
      let htmll=' <canvas id="myChart"></canvas>';
      let html3=`<h2 id="head-container">${name}</h2>`;
      $.getJSON(urll,function(data){
            
        // console.log(data);
         const length=data.result.length;
         var maxi=50000;
         for(i=0;i<length;i++)
         {
             var comp=data.result[i].rank;
             //console.log(comp);
            
             if(comp<maxi)
             {maxi=comp;}
         }
         
         document.getElementById( 'bstrnk').textContent=maxi;
         document.getElementById( 'cnt').textContent=length;
     });
             /*document.getElementById( 'rat').textContent=data.result[0].rating; 
        document.getElementById( 'frstnme').textContent=data.result[0].firstName; 
           document.getElementById( 'scndnme').textContent=data.result[0].lastName;
             document.getElementById( 'mxrtng').textContent=data.result[0].maxRating;
            document.getElementById( 'crntrnk').textContent=data.result[0].rank;
            document.getElementById( 'head-container').textContent=name;}*/
            let dat=document.getElementById("tabl");
            dat.innerHTML=html;
            let chrt=document.getElementById("chrt");
            chrt.innerHTML=htmll;
            let headerr=document.getElementById("headerr");
            headerr.innerHTML=html3;
            
        }}
       
        getdata();
       // getcontest();
       

    });

   


});










$(document).ready(function(){
    $('button').click(function(){
        const name=$('#btn').val();
        var url="https://codeforces.com/api/user.status?handle="+name+"&from=1&count=1000000000";
       // console.log(url);

        $.getJSON(url,function(data){
            
           // console.log(data);
            
       
        const length=data.result.length;
        var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0;
        for(i=0;i<length;i++)
        {
            if(data.result[i].verdict=='OK')
            {

                if(data.result[i].problem.index=="A")a=a+1;
                else if(data.result[i].problem.index=="B")b=b+1;
                else if(data.result[i].problem.index=="C")c=c+1;
                else if(data.result[i].problem.index=="D")d=d+1;
                else if(data.result[i].problem.index=="E")e=e+1;
                else if(data.result[i].problem.index=="F")f=f+1;
                else if(data.result[i].problem.index=="G")g=g+1;
                else if(data.result[i].problem.index=="H")h=h+1;
                else if(data.result[i].problem.index=="I")i=i+1;
                
            }
        }
        console.log(b);
        var myChart=document.getElementById("myChart").getContext('2d')

        var chart =new Chart(myChart,{

            type:'bar',
            data:{
                labels: ['A', 'B', 'C', 'D', 'E', 'F'],
                datasets:[
                    {
                    label: "Category",
                    data:[a,b,c,d,e,f],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    }
                  
                ]
            },
        
        options:{}
        })

    });

    });
   


});