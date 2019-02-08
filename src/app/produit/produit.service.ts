import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {API_URLS} from '../config/api.url.config';
import { Produit } from 'app/shared/produit.model';
import { CrudService } from 'app/shared/crud.service';


@Injectable()
export class ProduitService implements CrudService{

    constructor(private http: HttpClient) {


    }

    getAll() :Observable<any>{
        return this.http.get(API_URLS.PRODUIT_URLS);
    }

    add(produit): Observable<any>{
        return this.http.post(API_URLS.PRODUIT_URLS, produit);
    }

    update(produit): Observable<any>{
        return this.http.put(API_URLS.PRODUIT_URLS, produit);
    }

    delete(id ): Observable<any>{
        return this.http.delete(API_URLS.PRODUIT_URLS+  `/${id}`);
    }
}