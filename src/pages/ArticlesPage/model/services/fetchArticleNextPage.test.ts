import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestSyncthunk';
import { fetchArticleNextPage } from './fetchArticleNextPage';
import { fetchArticlesList } from './fetchArticlePage';

jest.mock('./fetchArticlePage');

describe('fetchArticleNextPage.test', () => {
    test('success', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(fetchArticleNextPage, {
            articlePage: {
                page: 2,
                hasMore: true,
                ids: [],
                entities: {},
                limit: 5,

            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
});
