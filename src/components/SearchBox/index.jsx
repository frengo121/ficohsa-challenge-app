import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/items?q=${query}`);
  };

  return (
    <form
      className="pt-4 flex items-center justify-center space-x-4"
      onSubmit={handleSubmit}
      role="form"
    >
      <TextField
        className="rounded-lg w-96"
        id="outlined-basic"
        label="Buscar producto..."
        variant="outlined"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outlined" type="submit">
        Buscar
      </Button>
    </form>
  );
};

export default SearchBox;
