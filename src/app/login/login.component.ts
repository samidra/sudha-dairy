import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registerForm: any = new FormGroup({
    UserEmail: new FormControl(''),
    UserPassword: new FormControl(''),
  });
  submitted = false;
  alrt = false;
  public postdata: any;

  constructor( private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute) {
     
  }

  ngOnInit(): void {

    //Add User form validations
    this.registerForm = this.formBuilder.group({
      UserEmail: ["", [Validators.email, Validators.required]],
      UserPassword: ["", [Validators.required]]
    });
  }
  get formControl() {
    return this.registerForm.controls;
  }
  //Add user form actions

  onLogin(): void {
    this.submitted = true;
    // alert(this.submitted);
    if (this.registerForm.valid) {
      window.location.href = '/admin';
    } else {
      //  this.alrt = true;
      }
  }

}
