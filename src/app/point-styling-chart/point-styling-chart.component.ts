import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-point-styling-chart',
  templateUrl: './point-styling-chart.component.html',
  styleUrls: ['./point-styling-chart.component.scss']
})



export class PointStylingChartComponent implements OnInit {  
  myChart: Chart;
  series = [
    { label: 'Serie 1', checked: true, seriesIndex: parseInt("00", 10) }, // Esto devolverá 0
    { label: 'Serie 2', checked: true, seriesIndex: parseInt("01", 10) }, // Esto devolverá 1
    { label: 'Serie 3', checked: true, seriesIndex: parseInt("02", 10) },  // Esto devolverá 2
    { label: 'Serie 4', checked: true, seriesIndex: parseInt("03", 10) }, // Esto devolverá 3
    { label: 'Serie 5', checked: true, seriesIndex: parseInt("04", 10) }, // Esto devolverá 4
    { label: 'Serie 6', checked: true, seriesIndex: parseInt("05", 10) }, // Esto devolverá 5
    { label: 'Serie 7', checked: true, seriesIndex: parseInt("06", 10) }, // Esto devolverá 6
    { label: 'Serie 8', checked: true, seriesIndex: parseInt("07", 10) }, // Esto devolverá 7
    { label: 'Serie 9', checked: true, seriesIndex: parseInt("08", 10) },  // Esto devolverá 8
    { label: 'Serie 10', checked: true, seriesIndex: parseInt("09", 10) },  // Esto dev 9
  ];
  

   mostrarDropdown = false;

   toggleDropdown() {
     this.mostrarDropdown = !this.mostrarDropdown;
    
   }

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
              data: [20, 10, 25, 30, 35, 40],
              borderColor: 'red',
              borderWidth: 1,
          },
          {
              label: 'Serie 2',
              data: [30, 40, 50, 60, 70, 80],
              borderColor: 'blue',
              borderWidth: 1,
          },
          {
              label: 'Serie 3',
              data: [10, 20, 30, 40, 50, 60],
              borderColor: 'green',
              borderWidth: 1,
          },
          {
              label: 'Serie 4',
              data: [15, 25, 35, 45, 55, 65],
              borderColor: 'purple',
              borderWidth: 1,
          },
          {
              label: 'Serie 5',
              data: [5, 15, 25, 35, 45, 55],
              borderColor: 'orange',
              borderWidth: 1,
          },
          {
              label: 'Serie 6',
              data: [12, 24, 36, 48, 60, 72],
              borderColor: 'cyan',
              borderWidth: 1,
          },
          {
              label: 'Serie 7',
              data: [8, 16, 24, 32, 40, 48],
              borderColor: 'magenta',
              borderWidth: 1,
          },
          {
              label: 'Serie 8',
              data: [18, 28, 38, 48, 58, 68],
              borderColor: 'brown',
              borderWidth: 1,
          },
          {
              label: 'Serie 9',
              data: [22, 33, 44, 55, 66, 77],
              borderColor: 'gray',
              borderWidth: 1,
          },
          {
              label: 'Serie 10',
              data: [7, 14, 21, 28, 35, 42],
              borderColor: 'pink',
              borderWidth: 1,
          },
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
    
    
// Después de inicializar el gráfico...
const checkboxContainer = document.getElementById('checkboxContainer');
const checkAllCheckbox = document.getElementById('checkAll') as HTMLInputElement;

checkAllCheckbox.addEventListener('change', function() {
  const checkboxes = checkboxContainer.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.checked = checkAllCheckbox.checked;
    const seriesIndex = checkbox.dataset.series;
    const dataset = myChart.data.datasets[seriesIndex];
    
    if (checkbox.checked) {
      dataset.hidden = false;
    } else {
      dataset.hidden = 'hidden';
    }
  });
  
  myChart.update();
});

checkboxContainer.addEventListener('change', function(event) {
  const target = event.target as HTMLInputElement;
  if (target.classList.contains('checkbox')) {
    const seriesIndex = target.dataset.series;
    const dataset = myChart.data.datasets[seriesIndex];    
    if (target.checked) {
      dataset.hidden = false;
    } else {
      dataset.hidden = 'hidden';
    }
    
    myChart.update();
  }
});

} 
  }

  


