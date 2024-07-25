import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api-service/api-service.service';
import { AskList } from '../../models/ask';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly apiHandler = inject(ApiService)

  getAskList$(){
    return this.apiHandler.get<AskList>('./domande.json')
  }

  getAsk$(id: number){
    return this.getAskList$().pipe(
      map(x=> x[id]),
      tap(x=>x.answers.forEach(x=>x.selected = false))
    )
  }
}
