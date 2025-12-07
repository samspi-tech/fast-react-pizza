import { RouterProvider } from 'react-router';
import { router } from './reactRouter/routes';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
