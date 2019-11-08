import { Component } from '@angular/core';
import { ConnectService } from '../app/services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooNotes';

  constructor(private userServices:ConnectService, private http: HttpClient){
    this.userServices.print("Service is Working..");
}
ngOnInit(){
}
}
