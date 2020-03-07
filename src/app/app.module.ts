import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule,MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';
import { DeletecontactComponent } from './components/deletecontact/deletecontact.component';
import { from } from 'rxjs';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdatecontactComponent,
    DeletecontactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents :[
    UpdatecontactComponent,
    DeletecontactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
