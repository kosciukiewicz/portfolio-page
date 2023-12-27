import { ConfigProvider } from "antd";

import "./App.css";
import HomeView from "./views/home/HomeView";
import { ThemeProvider } from "styled-components";
import DefaultThemeLight from "./themes/DefaultThemeLight";

function App() {
  return (
    <ThemeProvider theme={DefaultThemeLight}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Inter",
            colorPrimary: DefaultThemeLight.colorPrimary,
            colorLink: DefaultThemeLight.colorPrimary,
          },
          components: {
            Steps: {
              descriptionMaxWidth: 190,
            },
          },
        }}
      >
        <HomeView />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
