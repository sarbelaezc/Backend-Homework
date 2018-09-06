import { CreateNoteDto } from '../../notes/dto/create-note.dto';
export class CreateUserDto {
    readonly username: string;
    readonly name: string;
    readonly notes: [CreateNoteDto];
}
