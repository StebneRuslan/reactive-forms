import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';
/*
  ReactiveForm structure class
*/
export default class UserForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: UserModel;

  constructor(
    model: UserModel,
  ) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  // Create form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: new FormControl(this.model.firstName, { validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}),
      lastName: new FormControl(this.model.lastName, { validators: [Validators.required, Validators.minLength(5)], updateOn: 'change'}),
      email: new FormControl(this.model.email, { validators: [Validators.required, Validators.email], updateOn: 'change'}),
      password: new FormControl(this.model.password, { validators: [Validators.required, Validators.pattern(/aa/)], updateOn: 'change'})
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      console.log(data);
      this.model.email = data.email;
      this.model.password = data.password;
      this.model.lastName = data.lastName;
      this.model.firstName = data.firstName;
    });
  }
}
