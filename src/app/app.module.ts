import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProdComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[ProdComponent],
    bootstrap:[ProdComponent]
})
export class AppModule { }
