import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiModelProperty()
  readonly text: string;
  @ApiModelProperty()
  createdDate: date;
  @ApiModelProperty()
  uptatedDate: date;
  @ApiModelProperty()
  readonly username: string;
}
