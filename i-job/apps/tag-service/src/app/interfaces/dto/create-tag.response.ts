import { Tag } from '../../models/tag.entity';

export class CreateTagResponse {
  constructor(public tag: Tag) {}
}
