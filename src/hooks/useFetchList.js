import { useEffect, useReducer, useState } from "react";

export const useFetchList = ({ functionFetch }) => {
  const [errorState, setErrorState] = useState({
    hasError: false,
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setLoading(true);
    functionFetch()
      .then((data) => {
        const apiData = data;
        setEntities(apiData);
        setLoading(false);
      })
      .catch((err) => setErrorState({ hasError: true, message: err.message }));
  }, [reducerValue]);

  return { entities, isLoading, errorState, forceUpdate, setEntities };
};
