export class UserDto {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public departments: Array<string>,
    public notificationPref: string,
  ) {}
}