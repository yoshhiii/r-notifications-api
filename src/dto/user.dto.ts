export class UserDto {
  constructor(
    public name: string,
    email: number,
    password: string,
    departments: Array<string>,
    notificationPref: string,
  ) {}
}