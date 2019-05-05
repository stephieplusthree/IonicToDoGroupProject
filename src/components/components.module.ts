import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule,
			   IonicModule,
				],
	exports: [NavbarComponent]
})
export class ComponentsModule {}
