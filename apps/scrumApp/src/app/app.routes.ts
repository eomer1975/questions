import { Route } from '@angular/router';
import { QuestionaryComponent } from './components/questionary/questionary.component';
import { QuestEffects } from './store/effects';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { questFeature } from './store/features';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
       loadComponent: () => NxWelcomeComponent,
    },
    {
       path: 'quest',
       loadComponent: () => QuestionaryComponent,
       providers: [
          provideState(questFeature),
          provideEffects(QuestEffects)
       ]
    }];
