import { Component } from '@angular/core';
import { AreasService } from '../../services/areas.service';

@Component({
  selector: 'app-mainareas',
  templateUrl: './mainareas.component.html',
  styleUrls: ['./mainareas.component.css']
})
export class MainareasComponent {
  
  Areas: any = [];

  constructor(private _areasService:AreasService) { }
  
  ngOnInit() {
    this._areasService.getAreas().then(result => {
      this.Areas = result.$values;      
    }).catch(error => {
      console.log(error);
    })
  }
}
