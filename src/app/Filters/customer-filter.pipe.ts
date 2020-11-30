/* import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from 'src/app/models/customer';

@Pipe({
    name : 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform
{
    transform(customer:any=[],searchTerm:string) :any[] {

        if(!customer || !searchTerm){
            return customer
        }

        return customer.filter(cust =>cust.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);

    }

} */