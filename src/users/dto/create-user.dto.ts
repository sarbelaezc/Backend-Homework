import { ApiModelProperty } from '@nestjs/swagger';
import { CreateNoteDto } from '../../notes/dto/create-note.dto';

export class CreateUserDto {
    @ApiModelProperty()
    readonly username: string;
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly notes: [CreateNoteDto];
}
