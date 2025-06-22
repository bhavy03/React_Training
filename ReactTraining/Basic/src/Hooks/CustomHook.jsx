import { useState, useEffect, useCallback } from "react";

function useDataFetcher(url, callback) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedCallback = useCallback(callback, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        memoizedCallback(json); // Execute the callback with the fetched data
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, memoizedCallback]);

  return { data, loading, error };
}

function MyComponent() {
  const handleData = (data) => {
    console.log("Data fetched successfully:", data);
    // Perform additional actions with the data
  };

  const { data, loading, error } = useDataFetcher(
    "https://api.example.com/data",
    handleData
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


// It is the example of using a custom hook to fetch data from an API and execute a callback function with the fetched data.
// now we put the callback function in the useCallback hook to avoid unnecessary re-renders and ensure that the callback function is stable across renders.