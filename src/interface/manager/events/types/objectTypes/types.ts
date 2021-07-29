import { SubObjectTypeEnum, SubObjectType } from '../subObjectType'
import { StatChangeDel, StatChangeEventArgs } from '@/interface/manager/containerClasses/statChangeEventArgs'
import { SimpleEventDispatcher } from 'ste-simple-events'
import InputComponent from '@/components/InputComponent.vue'
import SubmitButtonComponent from '@/components/SubmitButtonComponent.vue'
import RowComponent from '@/components/RowComponent.vue'
import TextAreaComponent from '@/components/TextAreaComponent.vue'
import ResolveShowComponent from '@/components/ResolveShowComponent.vue'
import { StatTypeEnum } from '../statType'
import { ObjectTemplate } from '@/interface/manager/containerClasses/objectTemplate'

export type LogicDelegate = (subObjectType: SubObjectTypeEnum) => void;

export namespace Manager.Events.Type{

    export abstract class ObjectTypeAbstract {
       private LogicInvoked: SimpleEventDispatcher<SubObjectTypeEnum> = new SimpleEventDispatcher<SubObjectTypeEnum>();

      // protected abstract SubscribeCondition(sender: () => void) : void;
      public abstract Subscribe(subObjectType:SubObjectTypeEnum, statChangeDel:StatChangeDel) : void;

      public abstract GetVueComponent(): any;

      public InvokeStatChange (_statType: StatTypeEnum, _amount: any): void {
        throw new Error('Method not implemented.')
      }

      public ChooseSubType (_object : ObjectTemplate, _data : any = null) : boolean {
        return SubObjectType.SubObjectTypes[_object.SubObjectEnum].ChooseAction(_object, _data, this.InvokeLogic.bind(this))
      }

      protected InvokeLogic (_subObjectType: SubObjectTypeEnum) : void {
        this.LogicInvoked.dispatch(_subObjectType)
      }

      public SubscribeLogic (logicDel: LogicDelegate) : void {
        this.LogicInvoked.subscribe(logicDel)
      }

      public UnSubscribeLogic (logicDel : LogicDelegate) : void {
        this.LogicInvoked.unsubscribe(logicDel)
      }

      public NullifyLogic () : void {
        this.LogicInvoked.clear()
      }
    }

   export abstract class IChangeStat extends ObjectTypeAbstract {
    private StatChangeEvent:SimpleEventDispatcher<StatChangeEventArgs> = new SimpleEventDispatcher<StatChangeEventArgs>();

    public InvokeStatChange (_statType: StatTypeEnum, _amount: any) : void{
      this.StatChangeEvent.dispatch(new StatChangeEventArgs(_statType, _amount))
    }

    public Subscribe (_subObjectType:SubObjectTypeEnum, _statChangeDel:StatChangeDel) :void{
      /* if(statChangeDel == null)
          subObjectType.SubObjectTypes[subObjectType].Subscribe(statChangeDel);
      else */
      this.StatChangeEvent.subscribe(SubObjectType.SubObjectTypes[_subObjectType].Subscribe(_statChangeDel))
    }
   }

   export class Field extends IChangeStat {
     public GetVueComponent () {
       return InputComponent
     }
   }

   export class Button extends IChangeStat {
     public GetVueComponent () {
       return SubmitButtonComponent
     }
   }

   export class Row extends IChangeStat {
     public GetVueComponent () {
       return RowComponent
     }
   }

   export class Text extends IChangeStat {
     public GetVueComponent () {
       return TextAreaComponent
     }
   }

   export class ShowResolve extends IChangeStat {
     public GetVueComponent () {
       return ResolveShowComponent
     }
   }
}
