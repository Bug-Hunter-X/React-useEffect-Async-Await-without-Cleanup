```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to prevent stale updates
    async function fetchData() {
      const controller = new AbortController();
      try {
        const response = await fetch('/api/data', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) { //Check if component is still mounted
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        controller.abort();
      }

      return () => { 
        isMounted = false; // Cleanup function
        controller.abort(); // Abort any pending requests
      };
    }
    fetchData();
  }, []);

  return <div>Count: {count}</div>;
}
```