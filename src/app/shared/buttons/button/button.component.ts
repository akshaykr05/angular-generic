import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType | undefined;
  @Output() clickEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.type = 'button';
  }

  onClickEvent(): void {
    this.clickEvent.emit();
  }
}
