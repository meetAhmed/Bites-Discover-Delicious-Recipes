import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// local
import RootNavigator from './app/ui/navigation/RootNavigator';

// Create a React Query client instance
// This manages caching, fetching, and updating of server state
const queryClient = new QueryClient();

export default function App() {
  return (
    // Wrap the app with QueryClientProvider to provide React Query context
    <QueryClientProvider client={queryClient}>
      {/* Wrap with NavigationContainer to enable navigation throughout the app */}
      <NavigationContainer>
        {/* Render the root stack navigator which defines all screens */}
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
