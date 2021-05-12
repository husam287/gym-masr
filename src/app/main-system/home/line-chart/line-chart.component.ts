import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild('lineChart', { static: true }) lineChart: ElementRef;

  ctx: any;
  @Input('title') title: string;
  @Input('color') color: string = "#000000";
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  @Input('data') data = [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56];
  constructor() { }

  ngOnInit(): void {
    let windowWidth = window.innerWidth-(window.innerWidth/20);
    this.lineChart.nativeElement.width = windowWidth;
    this.drawChart(this.title, this.color, this.labels, this.data);
  }


  private drawChart(title, color, labels, data) {

    this.ctx = this.lineChart.nativeElement.getContext('2d');

    Chart.register(...registerables);
    let lineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,

        datasets: [{
          label: title,
          data: data,
          fill: true,
          borderColor: color,
          tension: 0.1
        }]
      },
      

    });
  }


}
