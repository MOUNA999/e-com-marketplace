import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MustMatch } from '../../Confirm.validator';
import { DataService } from '../../Services/service/data.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'; // Importez HttpClient ici
@Component({
  selector: 'app-create-acount',
  templateUrl: './create-acount.component.html',
  styleUrls: ['./create-acount.component.css']
})
export class CreateAcountComponent {
  passwordError: boolean = false;
  form!: FormGroup;
  submitted=false;
  data:any;

  constructor(
    private formBuilder: FormBuilder, 
    private dataService: DataService, 
    private toastr: ToastrService, 
    private http: HttpClient // Injectez HttpClient ici
  ) {}

createForm(){
  this.form= this.formBuilder.group({
    name:[null, Validators.required],
    email:['', [Validators.required , Validators.email]],
    password:['', [Validators.required , Validators.minLength(6)]],
    confirmPassword:[null, Validators.required]
  },{ 
    validator: MustMatch('password','confirmPassword')
});
}
ngOnInit(): void {
  this.createForm();
}
get f(){
  return this.form.controls ;
}
submit(){
  this.submitted=true ;
  if(this.form.invalid){
    return ;
  }

this.dataService.registerClient(this.form.value).subscribe(res => {
this.data=res;
//console.log(res);
if(this.data.status===1){
  this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
   timeOut:2000,
   progressBar:true
  });
}else {
this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),{
  timeOut:2000,
  progressBar:true
});
  }
this.submitted=false ;
this.form.get('name')?.reset();
this.form.get('email')?.reset();
this.form.get('num_tel')?.reset();
this.form.get('password')?.reset();
this.form.get('confirmPassword')?.reset();

});
}

  password: string = '';

  verify() {
    // Votre logique de vérification ici

    // Exemple : Vérifier si le champ de mot de passe est vide
    const passwordInput = document.getElementById("exampleInputPassword1") as HTMLInputElement;

    if (passwordInput.value === "") {
      this.passwordError = true;
    } else {
      this.passwordError = false;
      // Autre logique de validation ici
    }
  }

  verifier(event: Event): void {
    const emailValue = (document.getElementById('exampleInputEmail1') as HTMLInputElement).value;
    const mdpValue = (document.getElementById('exampleInputPassword1') as HTMLInputElement).value;
    const FirstNameValue = (document.getElementById('exampleInputFirstName1') as HTMLInputElement).value;
    const LastNameValue = (document.getElementById('exampleInputLastName1') as HTMLInputElement).value;

    //alert(emailValue+mdpValue);
    if ( ! mdpValue.toString() && ! emailValue.toString() && ! FirstNameValue.toString() && ! LastNameValue.toString() ) {
      alert('Veuillez saisir votre Nom, prénom, E-mail et mot de passe');


    }
    else if (! FirstNameValue.toString()) {
      alert('Veuillez saisir votre Prénom');
    } 
    else if (! LastNameValue.toString()) {
      alert('Veuillez saisir votre Nom');
    } 
    else if (! emailValue.toString()) {
      alert('Veuillez saisir votre E-mail');
    } 
    else if ( ! mdpValue.toString()) {
      alert('Veuillez saisir votre mot de passe');
      this.passwordError = true;
    }
    else {
      this.passwordError = false;
      var user ={
        email :emailValue,
        password :mdpValue
      }
      this.http.post('https://7d0c-196-187-240-64.ngrok-free.app/api/doctor/sign-in',user).subscribe(data => {
        localStorage.setItem('auth',JSON.stringify(data))
        location.replace("http://localhost:4200/index");
        
      },err =>{
        alert('Veuillez saisir votre e-mail ou mot de passe');

      }) 
}
  }
}
