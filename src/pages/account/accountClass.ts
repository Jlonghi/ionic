//account class without getters and setters yet
export class Account {
   private _UserID: number;
   private _Username: string;
   private _Email: string;
   private _Password: string;
   private _TypeID: number;
   private _Status: number;
   private _SettingsID: number;


  constructor(UserID: number, Username: string, Email: string, Password: string, TypeID: number, Status: number, SettingsID: number) {
    this._UserID = UserID;
    this._Username = Username;
    this._Email = Email;
    this._Password = Password;
    this._TypeID = TypeID;
    this._Status = Status;
    this._SettingsID = SettingsID;
  }


  get UserID(): number {
    return this._UserID;
  }

  set UserID(value: number) {
    this._UserID = value;
  }

  get Username(): string {
    return this._Username;
  }

  set Username(value: string) {
    this._Username = value;
  }

  get Email(): string {
    return this._Email;
  }

  set Email(value: string) {
    this._Email = value;
  }

  get Password(): string {
    return this._Password;
  }

  set Password(value: string) {
    this._Password = value;
  }

  get TypeID(): number {
    return this._TypeID;
  }

  set TypeID(value: number) {
    this._TypeID = value;
  }

  get Status(): number {
    return this._Status;
  }

  set Status(value: number) {
    this._Status = value;
  }

  get SettingsID(): number {
    return this._SettingsID;
  }

  set SettingsID(value: number) {
    this._SettingsID = value;
  }
}
