import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';


@Component({
  selector: 'app-doughnut-charts',
  templateUrl: './doughnut-charts.component.html',
  styleUrls: ['./doughnut-charts.component.scss']
})
export class DoughnutChartsComponent implements OnInit {

  ngOnInit() {
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

const doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
  labels: ['Basic', 'YAML Credentials', 'JWT Token', 'Python Credentials', 'Generic API key'],
  datasets: [{
    label: 'My Dataset',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
     
    ],
    borderWidth: 1
  }]}
});


}}
