import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  entredInitialInvestment = '0';
  entredAnnualInvestment = '0';
  entredDuration = 5;
  entredExpectedReturn = 10;

  @Output() calculate = new EventEmitter<InvestmentInput>();

  onSubmit() {
    console.log('Form submitted!');
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment, // Convert string to number
      annualInvestment: +this.entredAnnualInvestment, // Convert string to number
      expectedReturn: +this.entredExpectedReturn, // Convert string to number 
      duration: +this.entredDuration, // Convert string to number
    });
  }
}
