export class AlertDto {
  constructor(
    public title: string,
    public author: string,
    public body: string,
    public recipients: Array<string>,
    public createdDate: Date,
    public type: string,
  ) {}
}