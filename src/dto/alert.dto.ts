export class AlertDto {
  constructor(
    title: string,
    author: string,
    body: string,
    recipients: Array<string>,
    createdDate: Date,
  ) {}
}