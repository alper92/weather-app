import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Display from "./components/display/display";
import Form from "./components/form";
import List from "./components/list";
import EditAll from "./components/edit";
import { useEffect, useState } from "react";
import { activityData } from "./components/data/data";

function App() {
  // ----------------- state weather object from the api -----------------
  const [weather, setWeather] = useState({});

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: activityData,
  });

  // ----------------- add Activity -----------------
  function handleAddActivity(newActivity) {
    const activitiesWithNewActivity = [newActivity, ...activities];
    setActivities(activitiesWithNewActivity);
  }

  // ----------------- delete Activity -----------------
  function handleDeleteActivity(id) {
    const activitiesWithoutDeletedActivity = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities(activitiesWithoutDeletedActivity);
  }

  // ----------------- const for the weather values -----------------
  const isGoodWeather = weather.isGoodWeather;
  const condition = weather.condition;
  const temperature = weather.temperature + " °C";

  // ------------- fetch weather api -----------------
  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/europe`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 5000);
    return () => clearInterval(interval);
  }, []);

  // ----------------- filter activities depending on the current weather -----------------
  const weatherActivity = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // ----------------- return App - visisble on website -----------------
  return (
    <>
      <header>
        <h1>Weather-Activity-App</h1>
      </header>
      <main className="App">
        <Display condition={condition} temperature={temperature} />
        <List
          activities={weatherActivity}
          isGoodWeather={isGoodWeather}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
        <EditAll
          activities={activities}
          setActivities={setActivities}
          onHandleDeleteActivity={handleDeleteActivity}
        />
      </main>
    </>
  );
}

export default App;
