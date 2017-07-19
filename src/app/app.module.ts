import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { CKEditorModule } from "../../node_modules/ng2-ckeditor";

import { AppComponent } from './app.component';
import { FroalaComponent } from './froala/froala.component';
import { CkComponent } from './ck/ck.component';

import { AppRouterModule } from  './app-router/app-router.module';
import { DownloadComponent } from './download/download.component';

import { MockService } from './mock.service';

@NgModule({
  declarations: [
    AppComponent,
    FroalaComponent,
    CkComponent,
    DownloadComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,

    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CKEditorModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
