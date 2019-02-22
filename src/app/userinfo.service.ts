import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

export class Info {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}

@Injectable()
export class UserInfoService {
    infoSubject = new BehaviorSubject<Info>(new Info());

    setUserInfo(userValue){
        this.infoSubject.next(userValue);
    }
}