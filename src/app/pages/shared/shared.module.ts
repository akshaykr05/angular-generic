import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from '@src/app/shared';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonModule],
  exports: [],
})
export class SharedModule {}
