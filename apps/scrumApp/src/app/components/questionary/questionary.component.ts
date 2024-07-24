import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestState } from '../../store/state';
import { questFeature } from '../../store/features';
import { questActions } from '../../store/actions';

@Component({
  selector: 'app-questionary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionary.component.html',
  styleUrl: './questionary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionaryComponent {

  private readonly store = inject(Store<QuestState>)

  constructor(){
    this.store.dispatch(questActions.init())
  }

  protected askList$ =this.store.select(questFeature.selectAskList)
}
