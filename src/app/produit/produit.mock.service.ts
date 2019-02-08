import {Injector, Injectable} from '@angular/core'
import { Produit } from 'app/shared/produit.model';
 
@Injectable()
export class ProduitMockService{

    PRODUITS : Produit[] =[];

    constructor(){
        /*let p1: Produit = new Produit('Livre', 50,20);
        let p2: Produit = new Produit('Cahier',10,30);
        let p3: Produit = new Produit('Stylo', 5,50);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);*/
    }

    public getProsuits() :Produit[]{
        return this.PRODUITS;
    }

}