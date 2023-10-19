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
    { label: 'USA', checked: true, seriesIndex: parseInt("00", 10) },
    { label: 'Japan', checked: true, seriesIndex: parseInt("01", 10) },
    { label: 'China', checked: true, seriesIndex: parseInt("02", 10) },
    { label: 'Canada', checked: true, seriesIndex: parseInt("03", 10) },
    { label: 'Spain', checked: true, seriesIndex: parseInt("04", 10) },
    { label: 'France', checked: true, seriesIndex: parseInt("05", 10) },
    { label: 'UK', checked: true, seriesIndex: parseInt("06", 10) },
    { label: 'Germany', checked: true, seriesIndex: parseInt("07", 10) },
    { label: 'South Korea', checked: true, seriesIndex: parseInt("08", 10) },
    { label: 'Malasya', checked: true, seriesIndex: parseInt("09", 10) },
    { label: 'Poland', checked: true, seriesIndex: parseInt("10", 10) },
    { label: 'Finland', checked: true, seriesIndex: parseInt("11", 10) },
    { label: 'Italy', checked: true, seriesIndex: parseInt("12", 10) },
    { label: 'Netherlands', checked: true, seriesIndex: parseInt("13", 10) },
    { label: 'Australia', checked: true, seriesIndex: parseInt("14", 10) },
    { label: 'Mónaco', checked: true, seriesIndex: parseInt("15", 10) },
    { label: 'Belgium', checked: true, seriesIndex: parseInt("16", 10) },
    { label: 'Denmark', checked: true, seriesIndex: parseInt("17", 10) }
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
              label: 'USA',
              data: this.generateRandomData(6),
              borderColor: 'red',
              borderWidth: 1,
          },
          {
              label: 'Japan',
              data: this.generateRandomData(6),
              borderColor: 'blue',
              borderWidth: 1,
          },
          {
              label: 'China',
              data: this.generateRandomData(6),
              borderColor: 'green',
              borderWidth: 1,
          },
          {
              label: 'Canada',
              data: this.generateRandomData(6),
              borderColor: 'purple',
              borderWidth: 1,
          },
          {
              label: 'Spain',
              data: this.generateRandomData(6),
              borderColor: 'orange',
              borderWidth: 1,
          },
          {
              label: 'France',
              data: this.generateRandomData(6),
              borderColor: 'cyan',
              borderWidth: 1,
          },
          {
              label: 'UK',
              data: this.generateRandomData(6),
              borderColor: 'magenta',
              borderWidth: 1,
          },
          {
              label: 'Germany',
              data: this.generateRandomData(6),
              borderColor: 'brown',
              borderWidth: 1,
          },
          {
              label: 'South Korea',
              data: this.generateRandomData(6),
              borderColor: 'gray',
              borderWidth: 1,
          },
          {
              label: 'Malasya',
              data: this.generateRandomData(6),
              borderColor: 'pink',
              borderWidth: 1,
          },
          {
              label: 'Poland',
              data: this.generateRandomData(6),
              borderColor: 'yellow',
              borderWidth: 1,
          },
          {
              label: 'Finland',
              data: this.generateRandomData(6),
              borderColor: 'violet',
              borderWidth: 1,
          },
          {
              label: 'Italy',
              data: this.generateRandomData(6),
              borderColor: 'olive',
              borderWidth: 1,
          },
          {
              label: 'Netherlands',
              data: this.generateRandomData(6),
              borderColor: 'lime',
              borderWidth: 1,
          },
          {
              label: 'Australia',
              data: this.generateRandomData(6),
              borderColor: 'teal',
              borderWidth: 1,
          },
          {
              label: 'Mónaco',
              data: this.generateRandomData(6),
              borderColor: 'navy',
              borderWidth: 1,
          },
          {
              label: 'Belgium',
              data: this.generateRandomData(6),
              borderColor: 'maroon',
              borderWidth: 1,
          },
          {
              label: 'Denmark',
              data: this.generateRandomData(6),
              borderColor: 'silver',
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
  
  generateRandomData(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}
  }

  


