
import React, { Component } from "react";
import axios from 'axios';
import Data from "../components/data-atual";
import { Container } from "reactstrap";


const Resumo = (data) => (
      <div>
        <div className=" py-6 bg-blue-700">
          <Container className="mb-0">
            <h1 className="text-white text-center text-3xl">
              Resumo
            </h1>
            <div className='text-center'>
            <Data />
            </div>
          </Container>
        </div>
        <div className="p-2">
          <div className='my-12 p-4 rounded-3xl shadow-md lg:bg-blue-400 lg:mx-96'>
            <div className="text-center mb-4 lg:mx-80">
              <h2 className="border-b mb-0 pb-3">€ 1000</h2>
              <span className="text-xs text-gray-500 text-center">Total</span>
            </div>
            <div className="flex justify-around border-t">
              <div className="text-center mt-4">
                <h5 className="border-b mb-0">€ 100</h5>
                <span className="text-xs text-gray-500 text-center">€/km</span>
              </div>
              <div className="text-center mt-4">
                <h5 className="border-b mb-0">300</h5>
                <span className="text-xs text-gray-500 text-center">€/km</span>
              </div>
              <div className="text-center mt-4">
                <h5 className="border-b mb-0">400</h5>
                <span className="text-xs text-gray-500 text-center">€/km</span>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 p-0.5 mx-4 rounded'></div>
        <div className="grid grid-cols-3 gap-2 px-4 mt-2">
          <div className="overflow-hidden bg-white rounded-lg shadow-sm">
            <div className="px-4 py-1">
              <dl className=''>
                <dt className="text-xs font-medium text-gray-500 truncate">
                  Uber
                </dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">71,89</dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-sm">
            <div className="px-4 py-1">
              <dl>
                <dt className="text-xs font-medium text-gray-500 truncate">
                  Bolt
                </dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">71,89</dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-sm">
            <div className="px-4 py-1">
              <dl>
                <dt className="text-xs font-medium text-gray-500 truncate">
                  FreeNow
                </dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">71,89</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-20 mt-2">
          <div className="overflow-hidden bg-white rounded-lg shadow-sm">
            <div className="px-4 py-1">
              <dl>
                <dt className="text-xs font-medium text-gray-500 truncate">
                  UberEats
                </dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">71,89</dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-sm">
            <div className="px-4 py-1">
              <dl>
                <dt className="text-xs font-medium text-gray-500 truncate">
                  Cash
                </dt>
                <dd className="mt-1 text-xl font-semibold text-gray-900">71,89</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );

    Resumo.getInitialProps = async () => {
      var response = await axios.get('http://localhost:8080/models/kms');
      //console.log(response.data);
      return { response: response.data }
  }

export default Resumo;
