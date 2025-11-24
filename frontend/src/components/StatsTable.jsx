import { timeAgoFromLocaleString } from "../utils/humanTime";

const StatsTable = ({data}) => {
  return (
    <div className="bg-white rounded-lg mt-5 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Original URL
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Clicks
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Last Clicked At
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created At{" "}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Updated At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y-8 divide-gray-200 overflow-x-auto">
                    {data ? (
                      <tr key={data.url._id}>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 truncate w-16">
                            {data.url._id}
                          </div>
                        </td>
    
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <a
                              href={`${import.meta.env.VITE_BASE_URL}/${data.url.code}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-900 hover:underline"
                            >
                              {`${import.meta.env.VITE_BASE_URL}/${data.url.code}`}
                            </a>
                          </div>
                        </td>
    
                        <td className="px-6 py-4">{data.url.code}</td>
    
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {data.url.clicks}{" "}
                              {data.url.clicks === 1 ? "click" : "clicks"}
                            </span>
                          </div>
                        </td>
    
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {data.url.lastClickedAt
                              ? timeAgoFromLocaleString(
                                  new Date(data.url.lastClickedAt).toLocaleString()
                                )
                              : "Never"}
                          </div>
                        </td>
    
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {data.url.createdAt
                              ? timeAgoFromLocaleString(
                                  new Date(data.url.createdAt).toLocaleString()
                                )
                              : "Never"}
                          </div>
                        </td>
    
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {data.url.updatedAt
                              ? timeAgoFromLocaleString(
                                  new Date(data.url.updatedAt).toLocaleString()
                                )
                              : "Never"}
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan={7} style={{ textAlign: "center" }}>
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
  );
}

export default StatsTable;