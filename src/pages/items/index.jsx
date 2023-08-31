import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setResults, setError } from "@/reducers/searchReducer";
import SearchResults from "@/components/SearchResults";
import axios from "axios";

const SearchResultsPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/items?query=${q}`)
      .then((response) => {
        dispatch(setResults(response.data));
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        dispatch(setError(error));
      });
  }, [dispatch, q]);

  return <SearchResults />;
};

export default SearchResultsPage;
