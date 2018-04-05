import { DepartmentDto } from './department.dto';

export class AlertDto {
  constructor(
    public title: string,
    public author: string,
    public body: string,
    public recipients: Array<DepartmentDto>,
    public createdDate: Date,
    public type: string,
  ) {}
}