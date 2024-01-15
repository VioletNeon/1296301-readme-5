import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { MessageModule } from './message/message.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [PostModule, PublicationModule, MessageModule, LikeModule],
  controllers: [],
  providers: [],
  exports: []
})
export class BlogModule {}
