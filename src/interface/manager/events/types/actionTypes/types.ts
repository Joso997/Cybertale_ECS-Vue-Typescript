
export namespace Manager.Events.Type{

    export abstract class MethodTypeAbstract {
      public abstract Enact():void;
      public abstract Act(_object:any): boolean;
    }

    export class Click extends MethodTypeAbstract {
      public Act (_object: any): boolean {
        throw new Error('Method not implemented.')
      }

      public Enact (): void {
        throw new Error('Method not implemented.')
      }
    }
}
