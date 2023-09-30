import React from "react";

const fetchC = () => {
  const {
    data: cproducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cproducts"],
    queryFn: fetchCProducts,
  });
  if (isLoading) return " Loading...";
  if (isError) return `Error ${error.message}`;
  return cproducts;
};

export default fetchC;
