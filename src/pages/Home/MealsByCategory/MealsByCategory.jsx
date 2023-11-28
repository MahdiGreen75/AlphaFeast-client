import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breakfast from './Breakfast';
import Lunch from './lunch';
import Dinner from './Dinner';
import AllMeals from './AllMeals';


const MealsByCategory = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                    <Tab>All meals</Tab>
                </TabList>

                <TabPanel>
                    <Breakfast/>
                </TabPanel>
                <TabPanel>
                    <Lunch/>
                </TabPanel>
                <TabPanel>
                   <Dinner></Dinner>
                </TabPanel>
                <TabPanel>
                    <AllMeals></AllMeals>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsByCategory;