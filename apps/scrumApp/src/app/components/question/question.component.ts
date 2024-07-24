import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { QuestState } from '../../store/state';
import { questActions } from '../../store/actions';
import { questFeature } from '../../store/features';
import { CommonModule } from '@angular/common';
import { getCurrentRouteState } from '../../store/selectors';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit, OnDestroy {

  private subscriptions: { [key: string]: any } = {};
  private readonly store = inject(Store<QuestState>)
  parseInt = parseInt;
  constructor(){
    //this.store.dispatch(questActions.loadAsk({id: 0}))
  }

  ngOnInit(): void {
    this.subscriptions['routerSelector'] = this.store
      .pipe(select(getCurrentRouteState))
      .subscribe((route: any) => {
        const questId = route.root.children[0] && route.root.children[0].params && route.root.children[0].params.id || 0;
        this.store.dispatch(questActions.loadAsk({id: questId}))
      });
  }

  ngOnDestroy(): void {
    this.subscriptions['routerSelector'].unsubscribe();
  }

  hideAns(){
    this.store.dispatch(questActions.showHideCorrect());
  }

  protected askId$ =this.store.select(questFeature.selectCurrId)
  protected ask$ =this.store.select(questFeature.selectCurrAsk)
  protected hideCorrect$ =this.store.select(questFeature.selectHideCorrect)
}
