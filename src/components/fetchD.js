import { useQuery } from "@tanstack/react-query";
import { fetchDProducts } from "../api/api";

const fetchD = () => {
  const {
    data: dproducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["dproducts"],
    queryFn: fetchDProducts,
  });
  if (isLoading) return " Loading...";
  if (isError) return `Error ${error.message}`;
  return dproducts;
};

export default fetchD;
