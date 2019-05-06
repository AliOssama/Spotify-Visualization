var musicData = d3.csv('top2018.csv');
musicData.then(function(data)
  {
    data.forEach(function(d)
    {
      drawChart(d);
    })

  }
  ,
  function(err){
    console.log(err);
  });

    var drawChart = function(data)
    {
      var danceability=data.danceability;
      var energy=data.energy;
      var speechiness=data.speechiness;
      var liveness=data.liveness;
      var valence=data.valence;



    var screen =
    {
      width: 800,
      height: 2000
    }
    var margins =
    {
      top:100,
      bottom:100,
      left:100,
      right:200
    }
      var width = screen.width-margins.left-margins.right;
      var height = screen.height-margins.top-margins.bottom;
      var sq_width = width/data.length;
      var sq_height = height/data.length;


    var svg = d3.select('svg')
              .attr('width',screen.width)
              .attr('height',screen.height);
    var xScale = d3.scaleOrdinal()
               .domain(["danceability","energy","speechiness","liveness","valence"])
               .range([100,200,300,400,500]);
    var yScale = d3.scaleLinear()
               .domain([0,100])
               .range([screen.height,0]);


    var group = svg.append('g')
                    .attr('width',screen.width-200)
                    .attr('height', screen.height-300)


    var dance= group.selectAll('rect')
                     .data(data.danceability)
                     .enter()
                     .append("g")
                     .attr("x",function(d){
                       return xScale("danceability");
                     })
                     .attr('y',function(d,i){
                       return yScale(parseInt("rank"));
                     })
                     .attr("height",function(d){
                       return yScale(d.rank);
                     })
                     .attr("width",50)
                     .attr("fill",'black')

    var colors=function(d)
    {
      if (d>0.5){
        return("green");}

     if(d> 0.3 & d<0.5){
         return("yellow");}

     if(d> 0.0 & d<0.3){
         return("red");}
    }




    var xA = margins.top+height+20;
    var xAxis = d3.axisBottom(xScale)
    xAxis.ticks([5]);

    svg.append('g').classed('xAxis',true)
        .call(xAxis)
        .attr('transform','translate('+ margins.left + ','+xA+')' );
    var yAxis = d3.axisLeft(yScale)
    yAxis.ticks([100]);
    var yA = margins.left-10;
    svg.append('g').classed('yAxis',true)
        .call(yAxis)
        .attr('transform','translate('+yA+ ','+'-78'+')' );


















    // svg.selectAll("rect")
    //     .data(data)
    //     .append("rect")
    //     .attr("x",function(d,i)
    //       {
    //         return i*10
    //       })
    //     .attr("y", function(d){
    //       return height-d.danceability*10})
    //     .attr ("height", function(d){return d.danceability})
    //     .attr("fill", function(d){
    //       if (d.danceability>0.5){
    //         return("green");}
    //       if(d.danceability> 0.3 & d.danceability<0.5){
    //           return("yellow");}
    //       if(d.danceability> 0.0 & d.danceability<0.3){
    //           return("red");}
    //
    //       if (d.energy>0.5){
    //           return("green");}
    //       if(d.energy> 0.3 & d.energy<0.5){
    //           return("yellow");}
    //       if(d.energy> 0.0 & d.energy<0.3){
    //           return("red");}
    //
    //       if (d.liveness>0.5){
    //           return("green");}
    //       if(d.liveness> 0.3 & d.liveness<0.5){
    //           return("yellow");}
    //       if(d.liveness> 0.0 & d.liveness<0.3){
    //           return("red");}
    //
    //       if (d.speechiness>0.5){
    //           return("green");}
    //       if(d.speechiness> 0.3 & d.speechiness<0.5){
    //           return("yellow");}
    //       if(d.speechiness> 0.0 & d.speechiness<0.3){
    //         return("red");}
    //
    //       if (d.valence>0.5){
    //         return("green");}
    //       if(d.valence> 0.3 & d.valence<0.5){
    //         return("yellow");}
    //       if(d.valence> 0.0 & d.valence<0.3){
    //         return("red");}
    //       })
    //
    //
    //


    //setup scales
    // var xScale=d3.scaleOrdinal()
    //             .domain(["danceability","energy","speechiness","liveness","valence"])
    //             .range([50,100,150,200,250]);
    // var yScale=d3.scaleLinear()
    //             .domain([0,100])
    //             .range([height,0]);


    }
