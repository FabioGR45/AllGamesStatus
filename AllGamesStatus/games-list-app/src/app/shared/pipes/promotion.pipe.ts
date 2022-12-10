import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'promotion'
})

export class PromotionPipe implements PipeTransform {
    
    transform(value: boolean){
        return value ? 'Ativo' : 'Expirado';
    }

}