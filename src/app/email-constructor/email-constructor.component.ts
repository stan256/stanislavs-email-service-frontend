import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';

import {NotificationsService} from 'src/app/shared/services/notifications.service';
import {APIService} from 'src/app/shared/services/api.service';
import {EmailInterface} from "../shared/email.interface";

@Component({
  selector: 'app-email-constructor',
  templateUrl: './email-constructor.component.html',
  styleUrls: ['./email-constructor.component.scss'],
})
export class EmailConstructorComponent implements OnInit {

  public form: FormGroup;

  public get recipientsControlsArray(): FormArray {
    return this.form.controls.recipients as FormArray;
  }

  public get ccControlsArray(): FormArray {
    return this.form.controls.cc as FormArray;
  }

  constructor(private apiService: APIService,
              private notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = new FormGroup({
        subject: new FormControl(null, [Validators.required]),
        body: new FormControl(null, [Validators.required]),
        recipients: new FormArray([
          new FormControl(null, [Validators.required, Validators.email])
        ]),
        cc: new FormArray([
          new FormControl(null, [Validators.email])
        ])
      }
    )
  }

  public addControl(name: string): void {
    const controlsArray = this.form.controls[name] as FormArray;
    controlsArray.push(new FormControl(null, [Validators.email]));
  }

  public removeControl(controlsArray: FormArray, index: number): void {
    controlsArray.removeAt(index);
  }

  public sendEmail(): void {
    let formData: EmailInterface = this.form.value;
    formData.cc = formData.cc.filter(value => value != null)

    this.apiService.sendEmail(formData)
      .subscribe(
        () => this.notificationService.openSnackBar('Email was sent successfully'),
        error => this.notificationService.openSnackBar(error.message)
      )
  }
}
