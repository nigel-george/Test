import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { RestaurantPhotoList } from "./restaurantPhoto/RestaurantPhotoList";
import { RestaurantPhotoCreate } from "./restaurantPhoto/RestaurantPhotoCreate";
import { RestaurantPhotoEdit } from "./restaurantPhoto/RestaurantPhotoEdit";
import { RestaurantPhotoShow } from "./restaurantPhoto/RestaurantPhotoShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { UserSearchHistoryList } from "./userSearchHistory/UserSearchHistoryList";
import { UserSearchHistoryCreate } from "./userSearchHistory/UserSearchHistoryCreate";
import { UserSearchHistoryEdit } from "./userSearchHistory/UserSearchHistoryEdit";
import { UserSearchHistoryShow } from "./userSearchHistory/UserSearchHistoryShow";
import { UserFavoriteRestaurantList } from "./userFavoriteRestaurant/UserFavoriteRestaurantList";
import { UserFavoriteRestaurantCreate } from "./userFavoriteRestaurant/UserFavoriteRestaurantCreate";
import { UserFavoriteRestaurantEdit } from "./userFavoriteRestaurant/UserFavoriteRestaurantEdit";
import { UserFavoriteRestaurantShow } from "./userFavoriteRestaurant/UserFavoriteRestaurantShow";
import { UserInteractionList } from "./userInteraction/UserInteractionList";
import { UserInteractionCreate } from "./userInteraction/UserInteractionCreate";
import { UserInteractionEdit } from "./userInteraction/UserInteractionEdit";
import { UserInteractionShow } from "./userInteraction/UserInteractionShow";
import { RestaurantWorkingHourList } from "./restaurantWorkingHour/RestaurantWorkingHourList";
import { RestaurantWorkingHourCreate } from "./restaurantWorkingHour/RestaurantWorkingHourCreate";
import { RestaurantWorkingHourEdit } from "./restaurantWorkingHour/RestaurantWorkingHourEdit";
import { RestaurantWorkingHourShow } from "./restaurantWorkingHour/RestaurantWorkingHourShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"RestaurantService"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Restaurant"
            list={RestaurantList}
            edit={RestaurantEdit}
            create={RestaurantCreate}
            show={RestaurantShow}
          />
          <Resource
            name="RestaurantPhoto"
            list={RestaurantPhotoList}
            edit={RestaurantPhotoEdit}
            create={RestaurantPhotoCreate}
            show={RestaurantPhotoShow}
          />
          <Resource
            name="Tag"
            list={TagList}
            edit={TagEdit}
            create={TagCreate}
            show={TagShow}
          />
          <Resource
            name="UserSearchHistory"
            list={UserSearchHistoryList}
            edit={UserSearchHistoryEdit}
            create={UserSearchHistoryCreate}
            show={UserSearchHistoryShow}
          />
          <Resource
            name="UserFavoriteRestaurant"
            list={UserFavoriteRestaurantList}
            edit={UserFavoriteRestaurantEdit}
            create={UserFavoriteRestaurantCreate}
            show={UserFavoriteRestaurantShow}
          />
          <Resource
            name="UserInteraction"
            list={UserInteractionList}
            edit={UserInteractionEdit}
            create={UserInteractionCreate}
            show={UserInteractionShow}
          />
          <Resource
            name="RestaurantWorkingHour"
            list={RestaurantWorkingHourList}
            edit={RestaurantWorkingHourEdit}
            create={RestaurantWorkingHourCreate}
            show={RestaurantWorkingHourShow}
          />
          <Resource
            name="AppUser"
            list={AppUserList}
            edit={AppUserEdit}
            create={AppUserCreate}
            show={AppUserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
