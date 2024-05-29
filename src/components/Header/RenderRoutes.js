import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { paths, pathsUser } from "../../ultis/constant";
import { Home } from "../../containers/public";
import { User } from "../../containers/system/user";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />}>
        {paths.map(({ path, value }) => {
          let Component = null;
          try {
            Component = require(`../../containers/public/${value}`).default;
          } catch (error) {
            console.error(`Error loading component for path ${path}:`, error);
          }
          return (
            <Route
              key={value}
              path={path}
              element={Component ? <Component /> : null}
            />
          );
        })}
        <Route path="user/*" element={<User />}>
          {pathsUser.map(({ path, value }) => {
            let Component = null;
            try {
              Component = require(
                `../../containers/system/user/${value}`,
              ).default;
            } catch (error) {
              console.error(`Error loading component for path ${path}:`, error);
            }
            return (
              <Route
                key={value}
                path={path}
                element={Component ? <Component /> : null}
              />
            );
          })}
        </Route>
      </Route>
    </Routes>
  );
};

export default memo(RenderRoutes);
