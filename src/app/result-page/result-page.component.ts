import { Component, OnInit } from '@angular/core';
import { UserInfoService, Info } from '../userinfo.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
 userInfo:Info;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit() {
     this.userInfoService.infoSubject.subscribe(val=>{
      this.userInfo = val;
     })
  }

}
