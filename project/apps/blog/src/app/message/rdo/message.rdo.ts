import { Expose } from 'class-transformer';

export class MessageRdo {
  @Expose()
  public id: string;

  @Expose()
  public postId: string;

  @Expose()
  public message: string;

  @Expose()
  public userId: string;

  @Expose()
  public createdAt: Date;
}
