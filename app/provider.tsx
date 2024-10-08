import { FC } from "react";
import store from "@/app/store";
import { Provider } from "react-redux";

type HomeProviderProps = {
  children: React.ReactNode;
};

const HomeProvider: FC<HomeProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default HomeProvider;
