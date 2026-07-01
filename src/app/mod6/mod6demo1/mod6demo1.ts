import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
})
export class Mod6demo1 {

  public form: FormGroup;
  public name : string;

  constructor() {
    this.name = "";
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        //pattern lettre (majuscule et minuscule) et nombre, avec une longueur de minimum 8 caractères
        password: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]{8,}$/i)]),
        date: new FormControl('', [Validators.required, this.dateValidator]),
        city: new FormControl('nantes', Validators.pattern(/(cdb|nantes|quimper)/)),
        newsLetter: new FormControl(true),
        note: new FormControl(5, [Validators.min(0), Validators.max(10)])
      }
    );
  }

  private dateValidator(control : AbstractControl){
    if(control && control.value){
      if(new Date() < new Date(control.value)){
        return {greaterThan : true}
      }
    }
    return null;
  }


  public onSubmit(){
    if(this.form.valid){
      console.log("C'est ok !")
      console.log(this.form.value);
    }else{
      this.form.markAllAsTouched();
      console.log("C'est pas ok !")
    }

  }


  protected checkName(event : Event) {
    console.log(event)
    if(this.name.trim().length == 0){
      console.log("Champ requis !")
    }
  }
}
