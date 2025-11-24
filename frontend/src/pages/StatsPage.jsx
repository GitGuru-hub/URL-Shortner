import UrlForm from "../components/UrlForm";
import { getShortUrl } from "../api/shortUrl.api";
import { statsRoute } from "../routing/stats";
import { useQuery } from "@tanstack/react-query";
import StatsTable from "../components/StatsTable";

const StatsPage = () => {
  const { code } = statsRoute.useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shortUrl", code],
    queryFn: () => getShortUrl(code),
    enabled: !!code,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-gray-500 my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <p className="text-lg font-medium">No URLs found</p>
        <p className="mt-1">You haven't created any shortened URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white -mt-8 p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-6">URL Shortener</h2>
        <UrlForm />
        <h2 className="text-2xl font-bold text-center mt-6">Stats</h2>
        <StatsTable data={data} />
      </div>
    </div>
  );
};

export default StatsPage;
