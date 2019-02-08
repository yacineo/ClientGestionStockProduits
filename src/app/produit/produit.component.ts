import {Component, OnInit} from "@angular/core"
import {ProduitService} from './produit.service'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Produit } from 'app/shared/produit.model';
import { CrudComponent } from 'app/shared/crud/crud.component';
import { DataModel } from 'app/shared/data.model';
@Component
({
selector: 'app-produit',
templateUrl: './produit.component.html',
styleUrls: ['./produit.component.css']
})

export class ProduitComponent  implements OnInit{

    produits: Produit[];
    produit : Produit;
    produitForm : FormGroup;
    produitsModel : DataModel[];
    
    constructor(private produitService : ProduitService, private fb : FormBuilder, 
        private route : ActivatedRoute){
        //super(fb,route);
        
    }



    ngOnInit(){
        //this.produits = this.produitService.getProduits().subscribe();
        
        this.produits = this.route.snapshot.data.produits;
        this.produit = new Produit();
        console.log("prosuits", this.produits);
        this.produitForm = this.fb.group({
            ref:['', Validators.required],
            quantite:'',
            prixUnitaire:''
        });
        
        this.produitsModel = [
            new DataModel('id', 'ID', 'number', true, []),
            new DataModel('ref', 'Référence', 'string', false, []),
            new DataModel('quantite', 'Quantité', 'number', false, []),
            new DataModel('prixUnitaire', 'Prix Unitaire', 'number', false, []) 
        ];

    }
    /*
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
        this.produitService.getAll().subscribe(
            data =>{this.produits = data},
            error =>{console.log('An error was occured')},
            () => {console.log ('loading produits was done')}
        )
    }

    addProduit(){
        const p = this.produitForm.value;
        this.produitService.add(p).subscribe(
            res =>{
                this.initProduit();
                this.loadProduits();
            } 
        );
    }

    updateProduit(){
        const p = this.produitForm.value;
        this.produitService.update(this.selectedProduit).subscribe(
            res =>{
                this.initProduit();
                this.loadProduits();
            } 
        );
    }

    deleteProduit(){
        this.produitService.delete(this.selectedProduit.id).subscribe(
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
*/
}
