import { Connection } from 'mongoose';

import { NoteSchema } from './notes.schema';
import { NOTE_MODEL_PROVIDER } from '../constants';

export const notesProviders =[
  {
    provide: NOTES_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('Note', NoteSchema),
    inject: [DB_PROVIDER],
  },
];
