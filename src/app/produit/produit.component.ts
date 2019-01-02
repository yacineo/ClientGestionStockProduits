import {Component, OnInit} from "@angular/core"
import {ProduitService} from './produit.service'
import { Produit } from '../shared/produit';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component
({
selector: 'app-produit',
templateUrl: './produit.component.html',
styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{

    produits: Produit[];
    produitForm : FormGroup;
    operation : String = "add";
    selectedProduit : Produit;

    constructor(private produitService : ProduitService, private fb : FormBuilder, private route : ActivatedRoute){
        this.createForm();
        
    }



    ngOnInit(){
        //this.produits = this.produitService.getProduits().subscribe();
        this.initProduit();
        console.log("routeffffffffff"+this.route.snapshot.data.produits);
        this.produits = this.route.snapshot.data.produits;
        //this.loadProduits();
    }

    createForm(){
        this.produitForm = this.fb.group({
            ref:['', Validators.required],
            quantite:'',
            prixUnitaire:''
        });

    }
    loadProduits(){
        this.produitService.getProduits().subscribe(
            data =>{this.produits = data},
            error =>{console.log('An error was occured')},
            () => {console.log ('loading produits was done')}
        )
    }

    addProduit(){
        const p = this.produitForm.value;
        this.produitService.addProduit(p).subscribe(
            res =>{
                this.initProduit();
                this.loadProduits();
            } 
        );
    }

    updateProduit(){
        const p = this.produitForm.value;
        this.produitService.updateProduit(this.selectedProduit).subscribe(
            res =>{
                this.initProduit();
                this.loadProduits();
            } 
        );
    }

    deleteProduit(){
        this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
            res =>{
                this.selectedProduit = new Produit();
                this.loadProduits();
            } 
        );
    }

    initProduit(){
        this.selectedProduit = new Produit();
        this.createForm();
    }

}
