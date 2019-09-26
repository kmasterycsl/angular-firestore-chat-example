import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './user.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    UserService,
    MessageService,
  ]
})
export class AppModule {}
