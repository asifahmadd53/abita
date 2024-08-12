import React from 'react';
import { about1, about2, sofachair, sofaset } from '../../assets';

const Divisions = () => {
  return (
    <div className="md:w-[90%] sm:w-[80%] m-auto px-2 max-w-full">
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-20">
        <div className="left md:w-1/2 p-2">
          <h1 className="text-2xl font-bold">WE DESIGN FURNITURE</h1>
          <h1 className="text-xl font-semibold mt-2">Our Core Divisions</h1>
          <p className="mt-4">
            Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id
          </p>
          <div className="mt-6">
            <div>
              <div className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5  border  text-xs font-medium text-[#B18B5E] rounded-lg">25%</div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#B18B5E] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5  border text-xs font-medium text-[#B18B5E] rounded-lg">50%</div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#B18B5E] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-2 ms-[calc(75%-1.25rem)] py-0.5 px-1.5  border text-xs font-medium text-[#B18B5E] rounded-lg">75%</div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#B18B5E] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-2 ms-[calc(100%-1.25rem)] py-0.5  border  text-xs font-medium text-[#B18B5E] rounded-lg relative right-5">100%</div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="flex flex-col justify-center rounded-full overflow-hidden bg-[#B18B5E] text-xs text-white text-center whitespace-nowrap transition duration-500" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img src={about1} alt="Sofa Set" />
          </div>
        </div>

        <div className="right flex items-center justify-center sm:w-[80%] md:w-1/2 p-2">
          <div className="mt-10">
            <img src={about2} alt="Sofa Chair" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divisions;
