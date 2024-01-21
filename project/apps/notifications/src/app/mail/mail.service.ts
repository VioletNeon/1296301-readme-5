import { Injectable, Inject } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { Subscriber } from '@project/shared/app/types';
import { ConfigType } from '@nestjs/config';
import { notificationsConfig } from '@project/shared/config/notifications';

import { EMAIL_ADD_SUBSCRIBER_SUBJECT } from './mail.constant';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,

    @Inject(notificationsConfig.KEY)
    private readonly serviceConfig: ConfigType<typeof notificationsConfig>,
  ) {}

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      from: this.serviceConfig.mail.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.userName}`,
        email: `${subscriber.email}`,
      }
    })
  }
}