import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      className="flex gap-2 text-black block mx-auto mt-10"
      onClick={() => router.push("/")}
    >
      <ArrowBackIosIcon />
      Volver
    </Button>
  );
};

export default BackButton;
