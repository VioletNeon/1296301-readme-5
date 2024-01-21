import { Subscriber, Entity } from '@project/shared/app/types';

export class EmailSubscriberEntity implements Subscriber, Entity<string, Subscriber> {
  public id?: string;
  public email: string;
  public userName: string;

  public toPOJO(): Subscriber {
    return {
      id: this.id,
      email: this.email,
      userName: this.userName,
    };
  }

  public populate(data: Subscriber): EmailSubscriberEntity {
    this.id = data.id ?? undefined;
    this.email = data.email;
    this.userName = data.userName;

    return this;
  }

  static fromObject(data: Subscriber): EmailSubscriberEntity {
    return new EmailSubscriberEntity()
      .populate(data);
  }
}
