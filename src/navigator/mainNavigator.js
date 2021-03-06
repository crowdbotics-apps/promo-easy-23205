import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen18182224Navigator from '../features/BlankScreen18182224/navigator';
import ArticleList182223Navigator from '../features/ArticleList182223/navigator';
import Maps182210Navigator from '../features/Maps182210/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen18182224: { screen: BlankScreen18182224Navigator },
ArticleList182223: { screen: ArticleList182223Navigator },
Maps182210: { screen: Maps182210Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
