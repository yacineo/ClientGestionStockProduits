import { Injectable } from '@angular/core';
import { CrudService } from 'app/shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/config/api.url.config';


@Injectable()
export class UserService implements CrudService{

    constructor(private http: HttpClient) {


    }

    getAll() :Observable<any>{
        return this.http.get(API_URLS.USER_URLS);
    }

    add(user): Observable<any>{
        return this.http.post(API_URLS.USER_URLS, user);
    }

    update(user): Observable<any>{
        return this.http.put(API_URLS.USER_URLS, user);
    }

    delete(id ): Observable<any>{
        return this.http.delete(API_URLS.USER_URLS+  `/${id}`);
    }

}