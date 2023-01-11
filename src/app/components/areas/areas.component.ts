import { Component } from '@angular/core';
import { AreasService } from 'src/app/services/areas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {

  data: any = {
    name: '',
    description: ''
  }

  constructor(private _areasService:AreasService) { }

  saveValues (data:any) {
    console.log(data);
    this._areasService.postArea(this.data).then(result => {
      if(result === 1){
        this.okAlert();
      }else if (result === 0){
        this.errorAlert();
      }
    }).catch(error => {
      console.log(error);
    })
  }

  okAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Record successfully saved!'
    })
  }
  
  errorAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'There is a record with the same name!'
    })
  }

}
