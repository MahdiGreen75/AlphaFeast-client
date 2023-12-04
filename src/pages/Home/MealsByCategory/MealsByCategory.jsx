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

                <TabPanel className='border shadow-xl'>
                    <Breakfast />
                </TabPanel>
                <TabPanel className='border shadow-xl'>
                    <Lunch />
                </TabPanel>
                <TabPanel className='border shadow-xl'>
                    <Dinner></Dinner>
                </TabPanel>
                <TabPanel className='border shadow-xl'>
                    <AllMeals></AllMeals>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsByCategory;