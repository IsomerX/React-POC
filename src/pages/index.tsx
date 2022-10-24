import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Input from "../components/Utils/Input";
import ShadowBox from "../components/Utils/ShadowBox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React - POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav username="dhruv" />
      <div>
        <h3 className="text-xl font-bold">Rules & Locations Setup</h3>
        <div className="flex items-end gap-2">
          <Input label="Allocation Id" type="text" placeholder="ID..." />
          <Input label="Description" type="text" placeholder="Description..." />
          <Input
            label="Allocation level"
            type="text"
            placeholder="Description..."
          />
          <Input label="Release Date" type="date" />
          <Input label="Allocator" type="text" placeholder="Allocator..." />
          <Input label="Status" type="text" placeholder="Status..." />
          <Input label="Context type" type="text" placeholder="Context..." />
          <Input type="text" placeholder="Promotion" />
        </div>
        <div className="mt-5 flex w-full justify-end gap-3 pr-40">
          <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
            SUBMIT
          </button>
          <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
            CANCEL
          </button>
        </div>
      </div>
      <hr className="my-3 h-1 w-full border-none bg-[#7388ae]" />
      <div className="flex gap-5">
        <div className="w-full">
          <h3 className="text-xl font-bold">Rules & History Range</h3>
          <ShadowBox className="flex flex-col gap-3">
            <h4 className="text-md font-bold">Sales history Types:</h4>
            <div className="flex gap-4">
              <label className="flex flex-row-reverse items-center gap-2">
                Regular
                <input type="checkbox" />
              </label>
              <label className="flex flex-row-reverse items-center gap-2">
                Promotional
                <input type="checkbox" />
              </label>
              <label className="flex flex-row-reverse items-center gap-2">
                Clearance
                <input type="checkbox" />
              </label>
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="Rules Template" />
              <Input type="text" placeholder="Template Name" />
              <button className="bg-[#17a2b8] px-5 text-white">Apply</button>
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="History" label="Rule Type" />
              <Input type="text" placeholder="Exact" label="Need" />
              <Input type="text" placeholder="Styles" label="Heirarchy" />
              <Input type="text" placeholder="Net Need" label="Allocated To" />
            </div>
            <div className="flex gap-2">
              <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
                REFRESH
              </button>
              <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
                Save Template
              </button>
            </div>
            <div className="flex w-full gap-5">
              <ShadowBox className="w-full">
                <h4 className="text-md font-bold">Date Range</h4>
              </ShadowBox>
              <ShadowBox className="w-full">
                <h4 className="text-md font-bold">Include Inventory</h4>
              </ShadowBox>
            </div>
          </ShadowBox>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-bold">Rules & History Range</h3>
          <ShadowBox className="flex flex-col gap-3">
            <h4 className="text-md font-bold">Sales history Types:</h4>
            <div className="flex gap-4">
              <label className="flex flex-row-reverse items-center gap-2">
                Regular
                <input type="checkbox" />
              </label>
              <label className="flex flex-row-reverse items-center gap-2">
                Promotional
                <input type="checkbox" />
              </label>
              <label className="flex flex-row-reverse items-center gap-2">
                Clearance
                <input type="checkbox" />
              </label>
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="Rules Template" />
              <Input type="text" placeholder="Template Name" />
              <button className="bg-[#17a2b8] px-5 text-white">Apply</button>
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="History" label="Rule Type" />
              <Input type="text" placeholder="Exact" label="Need" />
              <Input type="text" placeholder="Styles" label="Heirarchy" />
              <Input type="text" placeholder="Net Need" label="Allocated To" />
            </div>
            <div className="flex gap-2">
              <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
                REFRESH
              </button>
              <button className="bg-[#007bff] px-7 py-1 text-lg text-white shadow-xl">
                Save Template
              </button>
            </div>
            <div className="flex w-full gap-5">
              <ShadowBox className="w-full">
                <h4 className="text-md font-bold">Date Range</h4>
              </ShadowBox>
              <ShadowBox className="w-full">
                <h4 className="text-md font-bold">Include Inventory</h4>
              </ShadowBox>
            </div>
          </ShadowBox>
        </div>
      </div>
    </>
  );
};

export default Home;
