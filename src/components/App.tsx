import React, {FC} from 'react';
import {AppLayout} from "./AppLayout/AppLayout";
import {Route, Routes} from "react-router";
import {Messages} from "./Messages/Messages";

export const App:FC = () => {
  return (
    <div className="App">
      <AppLayout>
        <Routes>
          <Route  path="/messages/:id?" element={<Messages/>} />
        </Routes>
      </AppLayout>
    </div>
  );
}

