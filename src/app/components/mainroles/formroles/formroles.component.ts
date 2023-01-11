import { Component } from '@angular/core';
import { RolesService } from '../../../services/roles.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formroles',
  templateUrl: './formroles.component.html',
  styleUrls: ['./formroles.component.css']
})
export class FormrolesComponent {
  data: any = {
    id: 0,
    name: '',
    description: ''
  }

  constructor(private _rolesService:RolesService, private _router:Router){}

  ngOnInit() {
    const id:any = localStorage.getItem('roleId');
    if(id !== 0){
      this._rolesService.getRole(id).then(result => {
        this.data = {
          id: result.id,
          name: result.name,
          description: result.description
        }   
      }).catch(error => {
        console.log(error);
      })
    }
  }
  // localStorage.clear();

  sendValues(data:any){

    if(this.data.name == "" || this.data.description == ""){
        this.errorAlert('Error','Empty field!');
    }else{
          this._rolesService.postRole(this.data).then(result => {
            if(result === 1){
              this.okAlert();
              this._router.navigateByUrl('/roles');
            }else if (result === 0){
              this.errorAlert('Error','There is a record with the same name!');
            }
          }).catch(error => {
            console.log(error);
          })
    }
  }

  okAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Record successfully saved!'
    })
  }
  
  // errorAlert(){
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'There is a record with the same name!'
  //   })
  // }
  
  errorAlert(title:any, text:any){
    Swal.fire({
      icon: 'error',
      title: title,
      text: text
    })
  }
}
