import { Component, OnInit } from '@angular/core';


import Chart from 'chart.js/auto';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent implements OnInit {

  ngOnInit() {
    const canvas = document.getElementById('polarChart') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const polarChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
  labels: ['Github', 'Confluence', 'Gitlab', 'Jira'],
  datasets: [{
    label: 'Violation Source',
    data: [12, 15, 8, 5],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  }]}
});


}}