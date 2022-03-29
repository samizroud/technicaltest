export const SUCCESS='success';
export const FAILED='failed';
export const LOADALL='loadall';
export const LOADONE='loadone';

export class LoadAllAction{
  type:string=LOADALL;  
}
export class LoadOneAction{
  type:string=LOADONE
  payload:any;
  constructor(payload){
    this.payload=payload;
  }
}

export class SuccessAction{
  type:string=SUCCESS;
  payload:any;
  constructor(payload:any){
    this.payload=payload;
  }
}
export class FailedActions{
  type:string=FAILED;
  payload:any;
  constructor(payload:any){
    this.payload=payload;
  }
}