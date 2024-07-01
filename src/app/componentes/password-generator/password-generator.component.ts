import { Component } from '@angular/core';
import { PasswordGeneratorService } from 'src/app/password-generator.service';


@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {

  generatedPassword: string = '';

  constructor(private passwordGeneratorService: PasswordGeneratorService) {}

  generatePassword(length: number) {
    this.generatedPassword = this.passwordGeneratorService.generatePassword(length);
  }

}
