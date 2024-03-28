import { UnknownAction } from 'redux';

// type predicate and intersection
// Narrows down --- from any action to the returned type of the action creator.
// Extract the type of the action creator to match the actions in the reducers.
type Matchable<AC extends () => UnknownAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: UnknownAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => UnknownAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => UnknownAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: UnknownAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
