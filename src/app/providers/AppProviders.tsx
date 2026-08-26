import { appQueryClient } from "@core/store/react-query/queryClient";
import { store } from "@core/store/redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeConfig } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

type Props = { children: React.ReactNode };

export default function AppProviders({ children }: Props) {
   return (
      <Provider store={store}>
         <QueryClientProvider client={appQueryClient}>
            <Toaster position="top-right" reverseOrder={false} />
            <ThemeConfig dark={false} />
            {children}
         </QueryClientProvider>
      </Provider>
   );
}