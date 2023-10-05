import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent implements OnInit{
  ngOnInit() {
    const canvas = document.getElementById('barChartStacked') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [
        {
          label: 'Serie 1',
          data: [150, 240, 195,-195, -140,-100,10], // Cambiado a 79 y 162

          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Serie 2',
          data: [100, -200, 100, -150, 200, -140, -150],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Serie 3',
          data: [250, 150, 100, 5, 0, -50, -150, -200, -250],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Serie 4',
          data: [-50,-150,-198,50 ,195,-100 ,-140],
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgba(255, 205, 86, 1)',
          borderWidth: 1,
          fill: true
        }
      ]
    };

    const options = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
    }};

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }

}
