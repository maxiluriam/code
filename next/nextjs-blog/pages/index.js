import { useState } from "react";
import { GetServerSideProps } from "next";
import connectMongo from "../util/connectMongo";
import Test from "../models/testModels";

import AddVideo from "./addVideo";
import AddPersonForm from "./Form";
import VideoPlayer from "./videoPlayer";

export default function Home({ tests }) {
  const createTest = async (name) => {
    const randomNum = Math.floor(Math.random() * 10000);

    const res = await fetch("/api/test/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name: `${name}`,
        videoList: ["https://youtu.be/VBlFHuCzPgY"],
      }),
    });

    const data = await res.json();

    console.log(data);
    // return data;
  };

  const removeTest = async (_id) => {
    const randomNum = Math.floor(Math.random() * 10000);

    const res = await fetch("/api/test/delete", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        _id: _id,
      }),
    });

    const data = await res.json();

    console.log(data);
    // return data;
  };

  const editTest = async (_id, newVideoList) => {
    const res = await fetch("/api/test/edit", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        _id: _id,
        name: `${randomNum}`,
        videoList: newVideoList,
      }),
    });

    const data = await res.json();

    console.log(data);
    // return data;
  };

  async function refreshPage() {
    setTimeout(refresh, 500);

    function refresh(params) {
      window.location.reload(true);
    }
  }

  return (
    <div className="container">
      <main>
        <AddPersonForm></AddPersonForm>
        <div>
          {tests.map((test) => (
            <div key={test._id}>
              <h1>{test.name}</h1>

              <VideoPlayer prop={test}></VideoPlayer>
              <AddVideo prop={test}></AddVideo>

              <button
                onClick={() => {
                  removeTest(test._id);
                  refreshPage();
                }}
              >
                REMOVE
              </button>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .container {
          margin: auto;

          display: flex;
          flex-flow: row;
          justify-content: space-around;

          height: 250px;
          width: 800px;

          text-align: center;
          margin-top: 200px;

          font-family: Arial, Helvetica, sans-serif;

          font-variant-caps: all-petite-caps;
        }
        button {
          appearance: none;
          background-color: #2ea44f;
          border: 1px solid rgba(27, 31, 35, 0.15);
          border-radius: 6px;
          box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-block;
          font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          padding: 6px 16px;
          position: relative;
          text-align: center;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: middle;
          white-space: nowrap;

          margin: 5px;
        }

        .minus {
          background-color: red;
        }

        .minus:hover {
          background-color: rgb(176, 1, 1);
        }

        .plus {
          background-color: green;
        }

        .plus:hover {
          background-color: rgb(2, 98, 2);
        }

        .delete {
          background-color: rgb(39, 39, 39);
        }

        .delete:hover {
          background-color: rgb(0, 0, 0);
        }

        .add {
          background-color: rgb(255, 255, 255);
          color: black;
        }

        .add:hover {
          background-color: rgb(234, 234, 234);
        }

        input {
          appearance: none;
          font-weight: 1000;
          font-variant-caps: all-petite-caps;

          border: 1px solid rgba(0, 0, 0, 1);
          border-radius: 6px;
          box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
          box-sizing: border-box;
          color: black;
          cursor: pointer;
          display: inline-block;
          font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-size: 20px;
          font-weight: 600;
          line-height: 20px;
          padding: 3px;
          position: relative;
          text-align: center;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: middle;
          white-space: nowrap;

          margin: 5px;
        }
      `}</style>

      <style jsx global>{``}</style>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    console.log("connecting");
    await connectMongo();

    console.log("connceted");

    const tests = await Test.find();

    console.log("fetched");
    console.log("F_Werner_/_F_Nikola");

    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests)),
      },
    };
  } catch (er) {
    console.log(er);
    return {
      props: {
        notFound: true,
      },
    };
  }
};
