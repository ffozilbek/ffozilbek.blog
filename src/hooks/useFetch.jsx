import axios from "../API/index";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { posts, error, loading };
};

export default useFetch;
