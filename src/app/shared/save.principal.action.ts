import { Action } from "@ngrx/store"
import { from } from 'rxjs';
import { Principal } from 'app/shared/principal.model';

export const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL'

export class SavePrincipalAction implements Action {

    readonly type = 'SAVE_PRINCIPAL';

    constructor(public payload: Principal) {

    }
}