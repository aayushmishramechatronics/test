import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopKeeperPageRoutingModule } from './shop-keeper-routing.module';

import { ShopKeeperPage } from './shop-keeper.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ShopKeeperPageRoutingModule
  ],
  declarations: [ShopKeeperPage]
})
export class ShopKeeperPageModule {}
