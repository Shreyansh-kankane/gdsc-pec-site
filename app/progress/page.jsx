"use client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Fragment } from "react";

async function getData() {
  const res = await fetch('https://gdsc-pec-backend.onrender.com/api/data/',{ next: { revalidate: 1 }})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}


export default function Home() {
  const metadata = {
    title: 'Progress Report',
    description: 'Progress Reports of Students of Google Developer Student Club, GDSC PEC Chandigarh'
  };
  
  const [filterdata, setfilterData] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setfilterData(result);
    }

    fetchData();
  }, []);

  function compareByCourseCompleted(a, b) {
    if (
      a["both_pathways_completed"] === true &&
      b["both_pathways_completed"] === false
    ) {
      return -1;
    }
    if (
      a["both_pathways_completed"] === false &&
      b["both_pathways_completed"] === true
    ) {
      return 1;
    } else {
      if (a["name"] > b["name"]) {
        return 1;
      }
      if (a["name"] < b["name"]) {
        return -1;
      }
      return 0;
    }
  }

  const changeHandler = (e) => {
    const filteredData = data?.filter((jdata) =>
      jdata["name"].toLowerCase().includes(e.target.value.toLowerCase())
    );
    const sortedFilteredData = filteredData.sort(compareByCourseCompleted);
    setfilterData(sortedFilteredData);
  }

  const numOfEligibleStudent = data?.filter(
    (jdata) => jdata["both_pathways_completed"] === true
  );

  return (
    <Fragment>
      <div className="flex flex-col gap-3">
        <div className="mt-6 w-full items-center justify-center flex flex-row gap-4 max-sm:gap-2">
          <h1 className="text-2xl text-blue-600 max-sm:text-xl font-bold">
            Progress Report
          </h1>
        </div>

        <div className="w-full flex flex-row justify-center mt-4 mb-4 gap-10 items-stretch max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="text-center bg-green-100 shadow-md rounded-xl px-10 py-3 shadow-green-200 w-3/12 flex flex-row justify-center items-center gap-5 max-md:w-2/5">
            <h1 className="text-sm text-green-600">
              Number of Eligible Participants for Certification &amp; Rewards
            </h1>
            <h1 className="text-xl text-green-600">
              {numOfEligibleStudent.length}
            </h1>
          </div>
          <div className="text-center bg-blue-100 shadow-md rounded-xl px-10 py-3 shadow-blue-200 w-3/12 flex flex-row justify-center items-center gap-5 max-md:w-2/5">
            <h1 className="text-sm text-blue-600">
              Total Number of Participants
            </h1>

            <h1 className="text-xl text-blue-600">{data?.length}</h1>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center mt-4 mb-4">
          <div className="bg-white flex flex-row justify-start items-center w-3/5 px-5 gap-6 py-1 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full shadow shadow-black max-sm:w-4/5 ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-blue-600 w-4"
            />
            <input
              type="text"
              placeholder="Search Your Name Here"
              className="bg-white-50 p-4 focus:outline-none w-full focus:"
              onChange={(e) => {
                changeHandler(e);
              }}
            />
          </div>
        </div>

        <div className="overflow-y-auto mb-2 mx-auto max-sm:w-11/12 no-scrollbar rounded-lg h-96">
          <table className="w-full">
            <thead className="sticky top-0 bg-blue-500">
              <tr>
                <th className="border px-2 py-2 text-white w-1/3">Name</th>
                <th className="border px-2 py-2 text-white max-lg:hidden">
                  Redemption Status
                </th>
                <th className="border px-2 py-2 text-white max-lg:hidden">
                  Completions of Both Pathways
                </th>
                <th className="border px-2 py-2 text-white">
                  Number of Courses Completed
                </th>
                <th className="border px-2 py-2 text-white max-lg:hidden">
                  Skill Badges Completed
                </th>
                <th className="border px-2 py-2 text-white">GenAI Completed</th>
              </tr>
            </thead>

            <tbody>
              {filterdata && filterdata.length > 0 ? (
                filterdata.map((data, index) => (
                  <tr
                    key={index}
                    className={
                      data["redemption_status"]
                        ? "max-lg:bg-green-200"
                        : `max-lg:bg-yellow-200`
                    }
                  >
                    <td className="border px-4 py-2 text-center">
                      {data["name"].toUpperCase()}
                    </td>
                    {data["redemption_status"] ? (
                      <td className=" border px-4 py-2 text-center max-lg:hidden">
                        <span className="bg-green-300 px-2 py-1 w-10 rounded-full text-green-600">
                          Done
                        </span>
                      </td>
                    ) : (
                      <td className=" border px-4 py-2 text-center max-lg:hidden">
                        <span className="bg-yellow-200 px-2 py-1 w-5 rounded-full text-yellow-600">
                          No
                        </span>
                      </td>
                    )}

                    {data["both_pathways_completed"] ? (
                      <td className=" border px-4 py-2 text-center max-lg:hidden">
                        <span className="bg-green-300 px-2 py-1 rounded-full text-green-600">
                          Done
                        </span>
                      </td>
                    ) : (
                      <td className=" border px-4 py-2 text-center max-lg:hidden">
                        <span className="bg-yellow-200 px-2 py-1 rounded-full text-yellow-600">
                          No
                        </span>
                      </td>
                    )}

                    <td className="border px-4 py-2 text-center">
                      {data["courses_completed"]}
                    </td>
                    <td className="border px-4 py-2 text-center max-lg:hidden">
                      {data["skill_badges_completed"]}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {data["gen_ai_completed"]}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td colSpan={6}>No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-center lg:hidden mx-2 font-bold mb-4">
          *participants having yellow entry have not redeemed access codes
        </div>

        <div className="w-full flex flex-row justify-center items-center mb-4 ">
          <div className="text-center bg-yellow-200 shadow-lg rounded-xl px-10 py-5 w-3/5 shadow-yellow-200 ">
            <h1 className="text-yellow-700">Last Updated !</h1>
            <h1 className="text-yellow-700">
              7:38 pm Tuesday, 24 October 2023 (IST) Time in Chandigarh,
              Chandigarh
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}