ng g m auth --routing
ng g c auth/signin --skip-tests
ng g c home
ng g c home --skip-tests
ng g s auth/auth
npm install @angular/animations --save 
"node_modules/ngx-toastr/toastr.css" copy it in angular.json
npm install ngx-toastr --force
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
BrowserAnimationsModule, // required animations module
ToastrModule.forRoot() // ToastrModule added
BrowserAnimationsModule,
ToastrModule.forRoot()
private toastr : ToastrService
import { ToastrModule, ToastrService } from 'ngx-toastr';
@import '~ngx-toastr/toastr';