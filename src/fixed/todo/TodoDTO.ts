export enum TodoUrgency {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export class TodoDTO {
  public id: string;
  public name: string;
  public folder: string;
  public completed?: boolean;
  public urgency: string;
}
