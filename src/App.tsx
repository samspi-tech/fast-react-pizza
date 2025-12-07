import { RouterProvider } from 'react-router';
import { router } from './reactRouter/router';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
