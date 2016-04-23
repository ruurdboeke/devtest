/// <reference path="../../../typings/main.d.ts" />

export const enum VisibilityFilters {
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
}

interface ActionType<TPayload> extends String {}

export type Action<TPayload> = {
    type: ActionType<TPayload>,
    payload: TPayload
}

interface ActionCreator<P> {
    (payload: P): Action<P>;
}

function actionCreator<TPayload>(type: ActionType<TPayload>): ActionCreator<TPayload> {
    return (payload) => ({
        type,
        payload
    });
}

export function isType<TPayload>(
    action: Action<any>, 
    type: ActionType<TPayload>
): action is Action<TPayload> {
    return action.type === type;
}

export const AddAction: ActionType<{ text: string }> = 'AddAction';
export const createAddAction = actionCreator(AddAction);

export const CompleteAction: ActionType<{ completed: boolean, id : number }> = 'CompleteAction';
export const createCompleteAction = actionCreator(CompleteAction);

export const SetVisibilityAction: ActionType<{ visibility: VisibilityFilters }> = 'SetVisibilityAction';
export const createSetVisibilityAction = actionCreator(SetVisibilityAction);