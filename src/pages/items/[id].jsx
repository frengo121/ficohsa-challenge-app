import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setItemDetails } from "@/reducers/searchReducer";
import ItemDetail from "@/components/ItemDetail";
import data from "@/data.json";

const ItemDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    const item = data.find((item) => item.id === Number(id));
    dispatch(setItemDetails(item));
  }, [id, dispatch]);

  return <ItemDetail />;
};

export default ItemDetailPage;
