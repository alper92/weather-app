import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";
import { useEffect, useState } from "react";

function App() {
  // ----------------- use state weather object from the api -----------------
  const [weather, setWeather] = useState({});

  // ----------------- state for acivities list -----------------

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  // ----------------- add Activity to body -----------------
  function handleAddActivity(newActivity) {
    const activitiesWithNewActivity = [newActivity, ...activities];
    setActivities(activitiesWithNewActivity);
  }

  // ----------------- delet Activity -----------------
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

  const weatherActivity = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // ----------------- return App - visisble on website -----------------
  return (
    <div className="App">
      <h1>
        {condition} {temperature}
      </h1>
      <List
        activities={weatherActivity}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
