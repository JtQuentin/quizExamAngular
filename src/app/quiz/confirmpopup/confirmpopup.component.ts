import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmpopup',
  templateUrl: './confirmpopup.component.html',
  styleUrls: ['./confirmpopup.component.scss']
})
export class ConfirmpopupComponent {
  @Input() text = '';
  @Input() show = false;
  @Output() confirmAction = new EventEmitter();
  @Output() cancelAction = new EventEmitter();

  confirm() {
    this.confirmAction.emit();
  }

  cancel() {
    this.cancelAction.emit();
  }
}
