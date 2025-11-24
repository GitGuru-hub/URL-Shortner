import { useQuery } from "@tanstack/react-query";
import { healthcheck } from "../api/shortUrl.api";

const HealthCheckPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["healthcheck"],
    queryFn: healthcheck,
  });

  return <div className="flex justify-center items-center h-full">
    {isLoading && <p>Loading health status...</p>}
    {isError && <p>Error fetching health status.</p>}
    {data && <div>{data.status}</div>}
  </div>;
};

export default HealthCheckPage;
