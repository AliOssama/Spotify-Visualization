var musicData = d3.csv('top2018.csv');
musicData.then(function(data)
  {
      drawChart(data);
  }
  ,
  function(err){
    console.log(err);
  });

    var drawChart = function(data)
    {

    var screen =
    {
      width: 800,
      height: 800
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
               .range([height,0]);

     var colors=function(d)
               {
                 if (d>0.5){
                   return("green");}

                if(d> 0.3 & d<0.5){
                    return("yellow");}

                if(d> 0.0 & d<0.3){
                    return("red");}
               }


var groupd=svg.append("g")
              .attr("id", "danceability")


              groupd.selectAll("rect")
                  .data(data)
                  .enter()
                  .append('rect')
                  .attr("x", xScale("danceability"))
                  .attr('y', function(d){
                    return yScale(d.rank)+7;
                  })
                    .attr('width',50)
                    .attr('height', function(d){return yScale(1)-yScale(2)-1;})
                     .attr("fill", function(d)
                     {return colors(d.danceability)} )

     var groupE=svg.append("g")
                   .attr("id", "Energy")


                   groupE.selectAll("rect")
                       .data(data)
                       .enter()
                       .append('rect')
                       .attr("x", xScale("energy"))
                       .attr('y', function(d){
                         return yScale(d.rank)+7;
                       })
                         .attr('width',50)
                         .attr('height', function(d){return yScale(1)-yScale(2)-1;})
                          .attr("fill", function(d)
                          {return colors(d.energy)} )


        var groupS=svg.append("g")
                      .attr("id", "speechiness")


                      groupS.selectAll("rect")
                          .data(data)
                          .enter()
                          .append('rect')
                          .attr("x", xScale("speechiness"))
                          .attr('y', function(d){
                            return yScale(d.rank)+7;
                          })
                            .attr('width',50)
                            .attr('height', function(d){return yScale(1)-yScale(2)-1;})
                             .attr("fill", function(d)
                             {return colors(d.speechiness)} )


             var groupL=svg.append("g")
                           .attr("id", "liveness")


                           groupL.selectAll("rect")
                               .data(data)
                               .enter()
                               .append('rect')
                               .attr("x", xScale("liveness"))
                               .attr('y', function(d){
                                 return yScale(d.rank)+7;
                               })
                                 .attr('width',50)
                                 .attr('height', function(d){return yScale(1)-yScale(2)-1;})
                                  .attr("fill", function(d)
                                  {return colors(d.liveness)} )


                var groupV=svg.append("g")
                              .attr("id", "valence")


                              groupV.selectAll("rect")
                                  .data(data)
                                  .enter()
                                  .append('rect')
                                  .attr("x", xScale("valence"))
                                  .attr('y', function(d){
                                    return yScale(d.rank)+7;
                                  })
                                    .attr('width',50)
                                    .attr('height', function(d){return yScale(1)-yScale(2)-1;})
                                     .attr("fill", function(d)
                                     {return colors(d.valence)} )




    var xA = margins.top+height-80;
    var xAxis = d3.axisBottom(xScale)
    xAxis.ticks([5]);

    svg.append('g').classed('xAxis',true)
        .call(xAxis)
        .attr('transform','translate('+ (margins.left-80) + ','+xA+')' );
    var yAxis = d3.axisLeft(yScale)
    yAxis.ticks([20]);
    var yA = margins.left-10;
    svg.append('g').classed('yAxis',true)
        .call(yAxis)
        .attr('transform','translate('+yA+ ','+'+5'+')' );


















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
