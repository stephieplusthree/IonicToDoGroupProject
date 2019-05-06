import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { UserProvider } from '../providers/user/user';
@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule,
			   IonicModule,
				],
	providers: [
		UserProvider
	],
	exports: [NavbarComponent]
})
export class ComponentsModule {}
