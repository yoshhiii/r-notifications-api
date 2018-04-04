export class UserDto {
  constructor(
    public name: string,
    email: number,
    departments: Array<string>,
    notificationPref: string,
  ) {}
}