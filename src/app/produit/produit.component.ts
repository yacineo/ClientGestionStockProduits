import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
import {Produit} from '../shared/produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitService : ProduitMockService;
  constructor(private pms:  ProduitMockService) { 
    this.produitService = pms;
    
  }

  ngOnInit() {
    this.produits = this.produitService.getProduits();
  }

}
