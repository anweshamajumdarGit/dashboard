import { Component, OnInit } from '@angular/core';
import { PrometheusService } from '../../services/prometheus.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

metricsMap: any = {};

constructor(private prometheusService: PrometheusService) {}

ngOnInit(){
  this.loadMetrics();

  setInterval(() => {
    this.loadMetrics();
  }, 5000);
}

loadMetrics(){

 this.prometheusService.getMetrics()
   .subscribe((data: string) => {

     this.metricsMap = this.parseMetrics(data);

   });

}


// 🔥 CORE LOGIC
parseMetrics(data: string){

 const lines = data.split('\n');
 const map: any = {};

 for(let line of lines){

   if(line.startsWith('#') || line.trim() === '') continue;

   const [metricPart, value] = line.split(' ');

   const metricName = metricPart.split('{')[0];

   if(!map[metricName]){
     map[metricName] = [];
   }

   map[metricName].push({
     full: metricPart,
     value: value
   });

 }

 return map;
}

}