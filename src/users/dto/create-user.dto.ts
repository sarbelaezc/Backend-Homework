export class CreateUserDto {
    readonly username: string;
    readonly name: string;
    readonly notes: [NoteSchema];
}
