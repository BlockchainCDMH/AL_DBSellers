import { Component, OnInit, Input } from '@angular/core';
import { graph } from 'src/shared/graph';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-pie',
  templateUrl: './graph-pie.component.html',
  styleUrls: ['./graph-pie.component.scss']
})
export class GraphPieComponent implements OnInit {
  @Input() graph: graph[];
  chartOptions: {};
  Highcharts=Highcharts;
  constructor() { }

  ngOnInit(): void { 


    this.chartOptions ={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits:{
            enabled: false
        },
        title: {
            text: 'sales by seller'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name:"",
                y:0,
                sliced: true,
                selected: true
            }]
        }]
    };
for (let i = 0; i < this.graph.length; i++) {
    if (i==0) {
        this.chartOptions["series"][0]["data"][0]["name"]=this.graph[i]["name"];
        this.chartOptions["series"][0]["data"][i]["y"]=+this.graph[i]["sales"]
    }else{
        this.graph[i]["y"] =+ this.graph[i]["sales"];
        delete this.graph[i]["sales"];
        this.chartOptions["series"][0]["data"].push(this.graph[i]);
    }

}
    
  }

}
