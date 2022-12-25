import { Component, Input } from '@angular/core';
import { constants } from 'dutch-tax-income-calculator';

@Component({
  selector: 'app-ruling',
  templateUrl: './ruling.component.html',
  styleUrls: ['./ruling.component.css']
})
export class RulingComponent {

  @Input() year!: number;
  ruling = constants.rulingThreshold;

}
