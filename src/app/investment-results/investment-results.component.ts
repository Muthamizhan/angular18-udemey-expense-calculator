import { Component, inject, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentService } from '../investment.service';

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

  investmentService = inject(InvestmentService)


  get investmentResultData() {
    return this.investmentService.investmentResultData;
  }

}
