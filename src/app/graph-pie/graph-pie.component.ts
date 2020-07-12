import { Component, OnInit, Input } from '@angular/core';
import { graph } from 'src/shared/graph';

@Component({
  selector: 'app-graph-pie',
  templateUrl: './graph-pie.component.html',
  styleUrls: ['./graph-pie.component.scss']
})
export class GraphPieComponent implements OnInit {
  @Input() graph: graph[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
