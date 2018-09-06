import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiModelProperty()
  readonly text: string;
  @ApiModelProperty()
  readonly createdDate: date;
  @ApiModelProperty()
  readonly uptatedDate: date;
}
