import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() type: 'warning' | 'success' = 'warning';
  @Input() message: string = '';
  @Input() isVisible: boolean = true;
}
