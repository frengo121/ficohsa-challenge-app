import React from "react";
import { useSelector } from "react-redux";
import Spinner from "@/components/Spinner";
import BackButton from "@/components/BackButton";

const ItemDetail = () => {
  const item = useSelector((state) => state.search.itemDetails);

  return (
    <div>
      {item ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold pb-2 text-center">{item.name}</h1>
          <p>
            <strong>ID:</strong> {item.id}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
        </div>
      ) : (
        <Spinner />
      )}
      <BackButton />
    </div>
  );
};

export default ItemDetail;
