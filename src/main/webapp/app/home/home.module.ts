import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterCCiApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterCCiApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class JhipsterCCiApplicationHomeModule {}
