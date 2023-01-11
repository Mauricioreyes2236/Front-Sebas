import { Component } from '@angular/core';
import { RolesService } from '../../services/roles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainroles',
  templateUrl: './mainroles.component.html',
  styleUrls: ['./mainroles.component.css']
})
export class MainrolesComponent {
  roles: any = [];


  constructor(private _rolesService:RolesService, private _router:Router) { }
  
  ngOnInit() {
    localStorage.setItem('roleId','0');
      this._rolesService.getRoles().then(result => {
      this.roles = result.$values;
    }).catch(error => {
      console.log(error);
    })
  }

  goForm(data:any){
    localStorage.setItem('roleId',data);
    this._router.navigateByUrl('/rolesForm');
  }
}
