const svgWidth = 600;
const svgHeight = 500;

const svg = d3
  .select('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .attr('class', 'bar-chart');

let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const barPadding = 5;
const barWidth = svgWidth / dataset.length;

const handleChange = (event) => {
    if (event.value === 'dataset2'){
        dataset = [1, 2, 3, 4, 5]
    } else {
        dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]
    }
}

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset) + 10])
  .range([0, svgHeight]);

const barChart = svg
  .selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d) {
    return svgHeight - yScale(d);
  })
  .attr('height', function(d) {
    return yScale(d);
  })
  .attr('width', barWidth - barPadding)
  .attr('transform', function(d, i) {
    const translate = [barWidth * i, 0];
    return `translate(${translate})`;
  });

