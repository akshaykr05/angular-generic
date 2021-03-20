import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from '@src/app/shared';
import { SharedComponent } from './shared.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SharedComponent, LoginComponent],
  imports: [CommonModule, SharedRoutingModule, ButtonModule],
  exports: [],
})
export class SharedModule {}
