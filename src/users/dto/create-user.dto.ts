import { CreateNoteDto } from '.../notes/dto/create-note.dto.ts';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly username: string;
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly notes: [CreateNoteDto];
}
