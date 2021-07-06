
export namespace Manager.Events.Type{

    export abstract class StatAbstract {
      public Data = '';
      public abstract CheckRequirements(_object:any):void
      public abstract CreateStat ():StatAbstract;
      public InitData (_data:string):StatAbstract {
        this.Data = _data
        return this
      }
    }
    export type CreateStatDel = () => StatAbstract;

    export class Title extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Title()
      }

      public CheckRequirements (_object: any): void {
        alert(this.Data)
      }
    }

    export class Value extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Value()
      }

      public CheckRequirements (_object: any): void {
        alert(this.Data)
      }
    }
}
