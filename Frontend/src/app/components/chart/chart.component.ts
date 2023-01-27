import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Store } from '@ngrx/store';
import {configDoughnut,configBar} from '../../util/chart/config'
import { Product } from 'src/app/util/types/Producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})



export class ChartComponent {
  bar: any
  doughnut: any
  product: Product[] = [];

  constructor(private store: Store<{ product: Product[] }>) {
    this.store.select('product').subscribe((res: any) => {
      this.product = res;
    });
  }

  ngOnInit(): void {
    this.createChart(configDoughnut(this.product));
    this.createChart(configBar(this.product));
  }

  createChart(config: any) {
    if (config.type === 'bar') {
      this.bar = new Chart(config.type, config);
      return;
    }

    this.doughnut = new Chart(config.type, config);

  }

}
