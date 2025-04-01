import { Component, Input, input } from '@angular/core';
import { InvestmentResult } from '../investment-results.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() investmentResults!: InvestmentResult[]; // Use the InvestmentResult interface for the input data

}
