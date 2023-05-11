import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCommentText = (state: StateSchema) => state.addCommentsForm?.text || '';
