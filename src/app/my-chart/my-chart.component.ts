import { Component, OnInit, Input, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { ProduitService } from 'app/produit/produit.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {

  constructor(private produitService: ProduitService) { }

  ngAfterViewChecked() {
    this.graphElement.chart.update();
  }

 

  @ViewChild('graphElement')
  private graphElement : any;


  @Input()
  title: string = 'Titre';

  @Input()
  type: string = 'line';

  @Input()
   data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  @Input()
  options = {
    responsive : true,
    maintainAspectRatio : false
  };
 

}
