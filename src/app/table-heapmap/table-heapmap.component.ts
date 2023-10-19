import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

import * as d3 from 'd3';

@Component({
  selector: 'app-table-heapmap',
  templateUrl: './table-heapmap.component.html',
  styleUrls: ['./table-heapmap.component.scss']
})
export class TableHeapmapComponent  implements OnInit{


  ngOnInit() {



      const data = {
        name: 'Root',
        children: [
          {
              name: 'USA',
              value: '100',
          },
          {
              name: 'Japan',
              value: '65',
          },
          {
              name: 'China',
              value: '57',
          },
          {
              name: 'Canada',
              value: '55',
          },
          {
              name: 'Spain',
              value: '53',
          },
          {
              name: 'France',
              value: '52',
          },
          {
              name: 'UK',
              value: '50',
          },
          {
              name: 'Germany',
              value: '47',
          },
          {
              name: 'South Korea',
              value: '36',
          },
          {
              name: 'Malasya',
              value: '36',
          },
          {
              name: 'Poland',
              value: '36',
          },
          {
              name: 'Finland',
              value: '34',
          },
          {
              name: 'Italy',
              value: '34',
          },
          {
              name: 'Netherlands',
              value: '33',
          },
          {
              name: 'Australia',
              value: '31',
          },
          {
              name: 'Mónaco',
              value: '30',
          },
          {
              name: 'Belgium',
              value: '21',
          },
          {
              name: 'Denmark',
              value: '11',
          },
      ]
      
      };
      

      const width = 600;
      const height = 400;
    
      const treemap = d3.treemap()
        .size([width, height])
        .paddingInner(5)
        .round(true);
    

        


      const svg = d3.select('#treemap-container')
        .append('svg')
        .attr('width', width)
       // .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; background-color:white")
        .attr('height', height);
    

      // Supongamos que 'data' es tu conjunto de datos en formato de jerarquía (como un objeto JSON).
      // Si no tienes un conjunto de datos, puedes crear uno para probar.
    
      const root = d3.hierarchy(data)
        .sum(d => d.value);
    
      const nodes = treemap(root).descendants();
    
      const color = d3.scaleOrdinal(data.children.map(d => d.name), d3.schemeTableau10);

      const cell = svg.selectAll('g')
        .data(nodes)
        .enter().append('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`);
    
      cell.append('rect')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        //.attr("fill-opacity", 0.6)
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
      
    
      cell.append('text')
        .attr('x', 4)
        .attr('y', 14)
        .attr('fill', 'white')
        .text(d => d.data.name)
        .attr('stroke', 'white'); 
    }
    


  
}

