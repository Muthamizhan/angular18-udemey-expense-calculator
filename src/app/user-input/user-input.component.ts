import { Component, output, signal } from '@angular/core';
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
  entredInitialInvestment = signal('0');
  entredAnnualInvestment = signal('0');
  entredDuration = signal(5);
  entredExpectedReturn = signal(10);

  calculate = output<InvestmentInput>();

  onSubmit() {
    console.log('Form submitted!');
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment(), // Convert string to number
      annualInvestment: +this.entredAnnualInvestment(), // Convert string to number
      expectedReturn: +this.entredExpectedReturn(), // Convert string to number 
      duration: +this.entredDuration(), // Convert string to number
    });

    this.entredInitialInvestment.set('0'); // Reset the input field after submission
    this.entredAnnualInvestment.set('0'); // Reset the input field after submission
    this.entredDuration.set(5); // Reset the input field after submission
    this.entredExpectedReturn.set(10); // Reset the input field after submission
  }
}
