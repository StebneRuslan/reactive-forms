import { Component, OnInit } from '@angular/core';

import { UserModel } from './user.model';
import UserForm from './user.form';

@Component({
  selector: 'app-user',
  templateUrl: './user.template.html',
  styleUrls: ['./user.style.scss']
})

export class UserComponent implements OnInit {
  private model: UserModel;
  public form: UserForm;
  constructor() {
    this.model = new UserModel();
    this.form = new UserForm(this.model);
  }

  ngOnInit() {
  }

  public inputPassword(event: any): void {
    // this.form.formGroup.setValue({
    //   password: event.target.value,
    //   firstName: '',
    //   lastName: '',
    //   email: ''
    // });

    this.form.formGroup.patchValue({
      password: event.target.value
    });
  }
}
