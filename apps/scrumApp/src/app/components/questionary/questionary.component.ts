import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestState } from '../../store/state';
import { questFeature } from '../../store/features';
import { questActions } from '../../store/actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questionary',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
