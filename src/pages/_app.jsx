import { Provider } from "react-redux";
import { store } from "@/store";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="p-10">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
