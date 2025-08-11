import { ConfigProvider, type ThemeConfig } from 'antd';
import type React from 'react';

const appTheme: ThemeConfig = {
  token: {
    fontFamily: '', // TODO: add font family
  },
  hashed: false,
  components: {},
};

export const AntdProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider
      theme={appTheme}
      button={{
        autoInsertSpace: false,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
