import { Story } from '@storybook/react';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLodaer';

const defaulyAsyncReducer: ReducerList = {
    loginForm: loginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducer={{ ...defaulyAsyncReducer, ...asyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
