import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../Services/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Client } from 'src/app/Models/Client';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent implements OnInit {
 
  User: Client = {
  
    name: '',
    email: '',
    password: '',
    status:'',
  }
  loginForm = true;
  data: any;
  isadmin: boolean = false;
  messageError: any;

  static login_name: string
  status!: any;
  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.User).subscribe((reponse: any) => {
      this.authService.loggedIn = true;
      this.data = reponse;
      this.authService.user_id = this.data.user.id;
      if (this.data.status == 1)
        this.authService.name = this.data.user.name;
      this.reset();

      
      this.status = this.data.status;
      this.authService.status = this.status;

      if (this.data.status == 1)
        this.User = this.data.user;

      if (this.User.status == 1)
        this.router.navigate(['/admin']);
      else if (this.data.status == 1) {
        this.router.navigate(['/cart']);
      }

    })
  }

  reset() {
    this.User = {
     
      name: '',
      email: '',
      password: '',
      status:''
    }
  }
 
}
