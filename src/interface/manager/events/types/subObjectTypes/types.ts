import { StatChangeDel } from '@/interface/manager/containerClasses/statChangeEventArgs'
import { ActionType } from '../actionType'

export namespace Manager.Events.Type{

    export abstract class SubObjectTypeAbstract {
      public ChooseAction (_object: any, _invokeLogic: any) : boolean {
        return ActionType.ActionTypes[1].Act(_object)
      }

      public abstract Subscribe(_statChangeDel:StatChangeDel):StatChangeDel;
    }

    export class ParentObject extends SubObjectTypeAbstract {
      public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
        return _statChangeDel
      }

      protected SubscribeCondition (sender: () => void): void {
        throw new Error('Method not implemented.')
      }
    }
}
