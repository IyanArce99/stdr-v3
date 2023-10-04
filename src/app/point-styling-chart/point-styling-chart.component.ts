import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-point-styling-chart',
  templateUrl: './point-styling-chart.component.html',
  styleUrls: ['./point-styling-chart.component.scss']
})
export class PointStylingChartComponent implements OnInit {

  ngOnInit() {
   
    const DATA_COUNT = 6; // 6 meses
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'], // Los meses como etiquetas
        datasets: [
          {
            label: 'Serie 1',
            data: [20, 10, 25, 30, 35, 40], // Cambié los datos a un array de y-values para Serie 1
            borderColor: 'red', // Cambié pointBackgroundColor por borderColor
            borderWidth: 1, // Agregué un ancho de borde
          },
          {
            label: 'Serie 2',
            data: [30, 40, 50, 60, 70, 80], // Datos para Serie 2
            borderColor: 'blue',
            borderWidth: 1,
          },
          {
            label: 'Serie 3',
            data: [10, 20, 30, 40, 50, 60], // Datos para Serie 3
            borderColor: 'green',
            borderWidth: 1,
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'category', // Cambié el tipo de escala a 'category'
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            position: 'bottom'
          },
          y: {
            type: 'linear',
            position: 'left'
          }
        }
      }
    });
    
    
  }

}
